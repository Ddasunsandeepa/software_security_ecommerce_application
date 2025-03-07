const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const pLimit = require("p-limit");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/", async (req, res) => {
  const products = req.body.products;

  // const countryList=[];

  // req.body.country?.map((item)=>{
  //   countryList.push(item.country);
  // })

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "USD",
      product_data: {
        name: product.productTitle?.substr(0, 30) + "...",
        images: [product.images],
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
      cart: JSON.stringify(lineItems),
    },
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    phone_number_collection: {
      enabled: true,
    },
    customer: customer.id,
    line_items: lineItems,
    mode: "payment",
    shipping_address_collection: {
      allowed_countries: ["US", "LK"],
    },
    success_url: `${process.env.CLIENT_BASE_URL}/payment/complete?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.CLIENT_BASE_URL}/cancel`,
  });

  res.json({ id: session.id });
});

router.get("/payment/complete", async (req, res) => {
  const result = Promise.all([
    stripe.checkout.sessions.retrieve(req.query.session_id, {
      expand: ["payment_intent.payment_method"],
    }),
    stripe.checkout.sessions.listLineItems(req.query.session_id),
  ]);

  //console.log(JSON.stringify(await result))

  res.status(200).send(JSON.stringify(await result));
});

router.get("/cancel", (req, res) => {
  res.redirect("/");
});
module.exports = router;

const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  productTitle: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  subTotal: {
    type: Number,
    required: true,
  },
  productId: {
    type: Number,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
});

cartSchema.virtual("id").get(function () {
  return this._id.toHexString();
});
cartSchema.set("toJSON", {
  virtuals: true,
});

exports.Cart = mongoose.model("Cart", cartSchema);
exports.cartSchema = cartSchema;

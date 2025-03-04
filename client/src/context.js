// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const existingItem = prev.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prev.map((item) =>
//           item.id === product.id
//             ? {
//                 ...item,
//                 quantity: product.quantity,
//                 totalPrice: product.totalPrice,
//               }
//             : item
//         );
//       }
//       return [...prev, product];
//     });
//   };

//   const updateQuantity = (productId, quantity, totalPrice) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === productId ? { ...item, quantity, totalPrice } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

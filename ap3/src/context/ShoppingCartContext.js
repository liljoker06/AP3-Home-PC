// import { Children, createContext, useContext, useState } from "react";
// import React from 'react';
// import produit from "../assets/js/Storeitem";
// import Axios from "axios";

// const ShoppingCartContext =  createContext({}); 


// const ShoppingCartProvider = ({children}) => {
//     const [carItems, setCartItems] = useState([]);
//     useEffect(() => {
//         Axios.get('http://localhost:3001/produit')
//           .then(response => {
//             setCartItems(response.data);
//           })
//           .catch(error => {
//             console.log('Erreur de récupération des produits : ', error);
//           });
//       }, []);
    
//     const getItemsQuantiy = (_id) => {
//         return carItems.find((produit) => produit._id  === _id )?.quantity || 0 
//     };

//     const increaseCardQuantity = (_id) => {
//         setCartItems((currItems) => {
//             if(currItems.find(produit => produit._id === _id) == null){
//                 return [...currItems, {id, quantity : 1 }]
//             }else{
//                 return currItems.map((produit) => {
//                     if(produit.id === id){
//                         return {...carItems,quantity : produit.quantity + 1};
//                     }else {
//                         return produit;
//                     }
//                 })
//             }
//         })
//     }
//     const decreaseCardQuantity = (id) => {
//         setCartItems((currItems) => {
//             if(currItems.find(produit => produit.id === id) == null){
//                 return currItems.filter((produit) => produit.id !== id);
//             }else{
//                 return currItems.map((produit) => {
//                     if(produit.id === id){
//                         return {...carItems,quantity : produit.quantity - 1};
//                     }else {
//                         return produit; 
//                     }
//                 })
//             }
//         })
//     }
//     const removeItemFromCart = (id) =>{
//         setCartItems((currItems) => currItems.filter((produit) => produit.id !== id));
//     }
//   return (
//     <ShoppingCartContext.Provider value = {{carItems, getItemsQuantiy, increaseCardQuantity, decreaseCardQuantity, removeItemFromCart}}> 
//         {children}
//     </ShoppingCartContext.Provider>
//   );
// };


// export default ShoppingCartContext; 

// export const useShoppingCart = () => {
//     return useContext(ShoppingCartContext); 
// };
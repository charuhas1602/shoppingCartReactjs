// import { CloudFog } from 'phosphor-react'
import React, { createContext, useEffect, useState } from 'react'
import { PRODUCTSURL } from '../Products'


export const shopcontext = createContext(null)

const ShopContextProvider = (props) => {
   const [cartItem, setcartItem] = useState({});
   const [products, setProducts] = useState({});



   // GET DEAFULT CART 
   const getDefaultCart = async () => {
      let cart = {}
      const res = await fetch(PRODUCTSURL);
      const data = await res.json();
      setProducts(data)
      for (let i = 0; i < data.length; i++) {
         cart[data[i].id] = 0;
      }
      return setcartItem(cart)

   }

   useEffect(() => {
      getDefaultCart()
   }, [])

   //Add to Cart
   const addToCart = (itemID) => {
      setcartItem((prev) => {
         // console.log("addtoCart", prev)
         return ({ ...prev, [itemID]: prev[itemID] + 1 })
      })
   }

   //Remove from Cart
   const removeFromCart = (itemID) => {
      setcartItem((prev) => {
         // console.log("removeFrom Cart", prev)
         return ({ ...prev, [itemID]: prev[itemID] - 1 })
      })
   }
   // Update cart Item
   const updateCartItem = (newValue, id) => {
      setcartItem((prev) => {
         // console.log("removeFrom Cart", prev)
         return ({ ...prev, [id]: newValue })
      })
   }

   // Get Total cart Amount
   const getTotalCartAmoutnt = () => {
      let total = 0;
      for (let i in cartItem) {
         if (cartItem[i] > 0) {
            let itemInfo = products.find(product => product.id === Number(i))
            total += cartItem[i] * itemInfo.price;
         }
      }
      return total.toFixed(2);
   }
   //Get Number of cart Item 
   const getTotalCartItems = () => {
      let totalItems = 0;
      for (let i in cartItem) {
         if (cartItem[i] > 0) {
            // let itemInfo = products.find(product => product.id === Number(i))
            totalItems += cartItem[i];
         }
      }
      return totalItems;
   }
   const contextValue = {
      cartItem, removeFromCart, addToCart, updateCartItem, getTotalCartAmoutnt, getTotalCartItems
   }

   // console.log("Updated cart", cartItem)

   shopcontext.displayName = "shopcontext"
   return (
      <shopcontext.Provider value={contextValue}>
         {props.children}
      </shopcontext.Provider>
   )
}

export default ShopContextProvider

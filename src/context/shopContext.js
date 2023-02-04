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
   //
   const updateCartItem = (newValue, id) => {
      setcartItem((prev) => {
         // console.log("removeFrom Cart", prev)
         return ({ ...prev, [id]: newValue })
      })
   }


   const getTotalCartAmoutnt = () => {
      let total = 0;
      for (let i in cartItem) {
         if (cartItem[i] > 0) {
            let itemInfo = products.find(product => product.id === Number(i))
            total += cartItem[i] * itemInfo.price
         }
      }
      return total
   }
   const contextValue = {
      cartItem, removeFromCart, addToCart, updateCartItem, getTotalCartAmoutnt
   }

   // console.log("Updated cart", cartItem)

   return (
      <shopcontext.Provider value={contextValue}>
         {props.children}
      </shopcontext.Provider>
   )
}

export default ShopContextProvider

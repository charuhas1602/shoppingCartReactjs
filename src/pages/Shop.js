import React, { useEffect, useState } from 'react'
// import { PRODUCTS } from '../Products'
// import axios from 'axios';
import ProductCard from '../components/Card';
import Shimmer from '../components/Shimmer';


const Shop = () => {
   const [products, setProducts] = useState()

   useEffect(() => {
      getProducts()
   }, [])
   async function getProducts() {
      // let cart = {}
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json()
      setProducts(data)
      // for (let i = 0; i < data.length; i++) {
      //    cart[data[i].id] = 0;
      // }
      // console.log(cart)
   }

   console.log(products)
   if (!products) {
      return <Shimmer></Shimmer>
   }
   return (
      <div>
         <h1 className='title text-center mb-5 text-danger'>My Shop</h1>
         <div className="container">
            <div className="row">
               {products.map((el) => {
                  return (
                     <ProductCard item={el} key={el.id} />
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default Shop

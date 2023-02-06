import React, { useEffect, useState } from 'react'
import { PRODUCTSURL } from '../Products'
// import axios from 'axios';
import ProductCard from '../components/Card';
import Shimmer from '../components/Shimmer';
// import { CloudFog } from 'phosphor-react';

const Shop = () => {
   const [products, setProducts] = useState()
   const [filteredProducts, setFilteredProducts] = useState()
   const [searchText, setSearchText] = useState("")
   // const [productList, setProductList] = useState()

   // Getting all product list
   async function getProducts() {
      const res = await fetch(PRODUCTSURL);
      const data = await res.json();
      setProducts(data)
      setFilteredProducts(data)
   }
   useEffect(() => { getProducts() }, [])

   const filterProductByName = (name) => {
      // console.log(name)
      let productName = name.toLowerCase();
      const filtered = products.filter((product) => {
         return product?.title.toLowerCase().includes(productName)
      })
      setFilteredProducts([...filtered])
   }

   // console.log(products)
   if (!products) {
      return <Shimmer></Shimmer>
   }
   return (
      <div>
         <h1 className='title text-center mb-5 text-danger'>My Shop</h1>
         <div className="container">
            <div className="container">
               <div className="row mb-4 d-flex justify-start ">
                  <div className="flex">
                     <div className="searchBox px-3">
                        <input className='p-2 bg-orange-50 border rounded-lg' type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search By product Name" />

                     </div>
                     <div className="search-box">
                        <button className='btn btn-outline-dark hover:bg-red-100' onClick={() => filterProductByName(searchText)}>Search product</button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               {filteredProducts.map((el) => {
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

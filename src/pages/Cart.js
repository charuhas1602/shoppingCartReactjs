// import { CloudFog } from 'phosphor-react' 
import React, { useContext, useEffect, useState } from 'react'
import CartItem from '../components/CartItem'
import { shopcontext } from '../context/shopContext'
import { PRODUCTSURL } from '../Products'
import { ShimmerTitle } from "react-shimmer-effects";
import { Link } from 'react-router-dom';

const Cart = () => {
   const { cartItem, getTotalCartAmoutnt } = useContext(shopcontext)
   const [products, setProducts] = useState()
   const totolAmount = getTotalCartAmoutnt()
   // Getting all product list
   async function getProducts() {
      const res = await fetch(PRODUCTSURL);
      const data = await res.json();
      setProducts(data)
   }
   useEffect(() => {
      getProducts()
   }, [])

   // console.log(cartItem)
   if (!products) {
      return (
         <>
            <div className="container">
               <ShimmerTitle line={2} gap={10} variant="primary" />
               <ShimmerTitle line={2} gap={10} variant="primary" />
               <ShimmerTitle line={2} gap={10} variant="primary" />
            </div>
         </>
      )
   }
   return (
      <div>
         <div className="container">
            <div className="row py-4">
               {totolAmount > 0 ? (<h3 className='text-left font-mono font-extrabold italic'>Cart</h3>) : (<h3 className='text-left font-mono font-extrabold italic'>Cart is Empty</h3>)}
            </div>
            <div className="row">
               <div className="col-md-10">
                  {products.map((product, index) => {
                     if (cartItem[product.id]) {
                        return (
                           <CartItem prod={product}></CartItem>
                        )
                     }
                  })}
               </div>
               <div className="col-md-2">
                  <div className="container">

                     <div className="row d-flex flex-col justify-between">
                        {totolAmount > 0 ? (
                           <>
                              <h4>Total:-{totolAmount}</h4>
                              <button className='btn btn-secondary btn-sm btn-dark py-lg-2 my-3'>Checkout</button>
                           </>
                        ) : <>
                           <div></div>
                        </>}
                        <Link to="/"><button className='btn btn-secondary btn-sm btn-dark py-2 px-2 my-3'>Continue Shopping</button></Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default Cart

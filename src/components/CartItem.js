import React, { useContext } from 'react'
import { shopcontext } from '../context/shopContext'
const CartItem = (props) => {
   const { addToCart, removeFromCart, cartItem, updateCartItem } = useContext(shopcontext)
   const { id, image, price, title } = props.prod
   console.log(props)



   return (
      <div className='col-12 border p-2 shadow-sm mb-3 rounded-md border-x-2 bg-slate-50'>
         <div className="d-flex flex-column">
            <h6>{title}</h6>
            <div className="row pt-2">
               <div className="d-flex justify-content-between">
                  <div className="col-4">
                     <img src={image} alt="" srcset="" style={{ width: "100px" }} className="p-1 shadow-sm" />
                  </div>
                  <div className="col-8">
                     <div className="row d-flex justify-center">
                        <div className="col-6">
                           <p className='font-semibold'>{price}</p>
                        </div>
                        <div className="col-6">
                           <div className="d-flex justify-center ">
                              <div className="btn btn-danger align-bottom " onClick={() => removeFromCart(id)}>-</div>
                              <input value={cartItem[id]} className="text-center bg-transparent w-16 align-bottom " onChange={(e) => updateCartItem(Number(e.target.value), id)} />
                              <div className="btn btn-primary align-bottom " onClick={() => addToCart(id)}>+</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CartItem

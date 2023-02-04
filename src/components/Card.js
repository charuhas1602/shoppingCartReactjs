import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { shopcontext } from '../context/shopContext'



const ProductCard = (props) => {
   const { addToCart, removeFromCart, cartItem } = useContext(shopcontext)
   // console.log("cart-", cartItem)
   const { price, title, image, id } = props.item;
   // console.log(cartItem)
   return (
      <>
         <div className="col-md-3 mb-5 ">
            <Link to="/">
               <Card style={{ width: '17rem', height: "420px" }} className="border border-3 bg-slate-100">
                  <Card.Img variant="top" src={image} className="img-fluid shadow-md" style={{ height: "220px" }} />
                  <Card.Body className='d-flex flex-column justify-content-end pt-0'>
                     <span className='m-0 fw-bold'><small>{title}</small></span>
                     <Card.Text>
                        Price:-{price}
                     </Card.Text>
                     <div className="d-flex flex-column justify-content-around">
                        <Button ariant="primary" className='mb-2 btn-sm text-sm-center' onClick={() => addToCart(id)}>
                           Add to Cart {cartItem[id] > 0 ? ` (${cartItem[id]}) ` : ""}</Button>
                        {cartItem[id] > 0 ? <Button ariant="danger" className='btn-sm btn-danger text-sm-center' onClick={() => removeFromCart(id)}>
                           RemoveFromCart </Button> : ""}
                     </div>
                  </Card.Body>
               </Card>

            </Link>
         </div>
      </>
   );
}

export default ProductCard
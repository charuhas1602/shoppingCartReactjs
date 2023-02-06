import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { ShoppingCart, Storefront } from 'phosphor-react';
import "./Navbar.scss"
import { shopcontext } from '../context/shopContext'
import { useContext } from 'react';

const Navbar1 = () => {
   const { getTotalCartItems } = useContext(shopcontext)
   let totalCartItemFromContext = getTotalCartItems()
   return (
      <Navbar bg="light" expand="lg">
         <Container>
            <Navbar.Brand href="#home" className='d-flex flex-column '>
               <Link to="/" className='text-secondar'><Storefront size={32} />
                  <h6 className='font-semibold from-neutral-700'>My shopping-App </h6></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='ml-auto' />
            <Navbar.Collapse id="basic-navbar-nav" >
               <Nav className="ml-auto flex justify-end align-items-center">
                  <Nav.Link>
                     <Link to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                     <Link to="/cart" className='flex justify-center align-items-center'><span className='p-1'>Cart
                        {totalCartItemFromContext !== 0 && <small className='pl-1'>({totalCartItemFromContext})</small>}
                     </span><ShoppingCart size={22} /></Link>
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default Navbar1;
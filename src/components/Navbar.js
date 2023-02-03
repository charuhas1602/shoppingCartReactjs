import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import "./Navbar.scss"



const Navbar1 = () => {
   return (
      <Navbar bg="light" expand="lg">
         <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link>
                     <Link to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link>
                     <Link to="/cart">Cart<ShoppingCart size={22} /></Link>
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default Navbar1;
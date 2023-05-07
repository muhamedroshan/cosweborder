import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar,Nav} from 'react-bootstrap'
import ShopContext from '../context/ShopContext'
import { Link,useLocation } from 'react-router-dom'
function NavBar() {
  const {MyRest} = useContext(ShopContext)
  const location = useLocation()
  if(location.pathname === '/success'){
    return null
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark'>
      <Container fluid>
         <Navbar.Brand >
            {MyRest.restName}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='me-auto'>
        </Nav>
        <Nav>
          <Nav.Link><Link to="/" style={{textDecoration:"none",color:"white"}}>Shop</Link></Nav.Link>
          <Nav.Link> <Link to="/cart" style={{textDecoration:"none",color:"white"}}>Cart</Link></Nav.Link>
          
        </Nav>
        </Navbar.Collapse>       
      </Container>
    </Navbar>
  )
}

export default NavBar
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import { useContext } from 'react'
import CartContext from "../../context/CartContext"
import { Navbar, Nav, Container } from 'react-bootstrap'


const NavBar = () => {

    const { getQuantity } = useContext(CartContext)
    const cantidad = getQuantity()
    
    return (

        <Navbar className='navBg' variant='dark' expand="lg">
            <Container>
                <Link to={'/'}>
                    <img src="/logo-solo-deportes.png" width="150" alt= "Logo"/>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='nav-acomodado'>
                    <Nav className="mx-auto">
                        <Nav.Link className='mx-4 text-center links-nav' as={Link} to='/' >Inicio</Nav.Link>
                        <Nav.Link className='mx-4 text-center links-nav' as={Link} to='/productos' >Productos</Nav.Link>
                        <Nav.Link className='mx-4 text-center links-nav' as={Link} to='/visitanos'>Visitanos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {cantidad > 0 && <CartWidget tamaño= "70px" />}
            </Container>
        </Navbar>
        
    )
}

export default NavBar
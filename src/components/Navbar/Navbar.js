import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import { useContext } from 'react'
import CartContext from "../../context/CartContext"


const NavBar = () => {

    const { getQuantity } = useContext(CartContext)
    const cantidad = getQuantity()
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to={'/'}>
                    <img src="/logo-zapas.png" width="90" alt= "Logo"/>
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto fs-5">
                        <NavLink to={'/categoria/zapatillas'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Zapatillas</NavLink>
                        <NavLink to={'/categoria/pantalones'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} style={{margin: '0 100px'}}>Pantalones</NavLink>
                        <NavLink to={'/categoria/remeras'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
                    </ul>
                </div>
                {cantidad > 0 && <CartWidget tamaño= "70px" />}
            </div>
        </nav>
    )
}

export default NavBar
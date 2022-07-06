import './CartWidget.css'
import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom"
import { BsBagDash } from "react-icons/bs";

const CartWidget = (props) => {

    const { getQuantity } = useContext(CartContext)

    const cantidad = getQuantity()

    return (
        <Link to='/carrito' className='cart-widget'>
            <BsBagDash className='mb-1' size='28' color='#f9f9fb'/>
            <span className='cantidad-cart'>{cantidad}</span>
        </Link>
    )
}

export default CartWidget
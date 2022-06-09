import './CartWidget.css'
import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = (props) => {

    const { getQuantity } = useContext(CartContext)

    const cantidad = getQuantity()

    return (
        <Link to='/carrito' className='cart-widget'>
            <img src= "/carrito-compras.png" style={{width: props.tamaño}} alt= "cart-widget"/>
            {cantidad}
        </Link>
    )
}

export default CartWidget
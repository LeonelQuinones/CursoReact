import './Carrito.css'
import { useContext } from "react"
import CartContext from "../../context/CartContext"

const Carrito = () => {

    const { cart, removeItem } = useContext(CartContext)
    
    return(
        <div>
            <h1 className='t-carrito'>Carrito</h1>
            <div className='carrito-container'>
                {cart.map(prod => {
                    return(
                        <div key={prod.id} className='prod-carrito'>
                            <div>{prod.nombre}</div>
                            <div>Cantidad: {prod.cantidad}</div>
                            <div>Precio x Unidad: ${prod.precio}</div>
                            <div>Subtotal: ${prod.precio * prod.cantidad}</div>
                            <button className='boton-eliminar' onClick={() => removeItem(prod.id)}>X</button>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default Carrito
import './Carrito.css'
import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from 'react-router-dom'

const Carrito = () => {

    const { cart, removeItem, totalCompra, removeAll } = useContext(CartContext)
    
    return(
        <div>
            {cart.length === 0 
                ? <div style={{textAlign:'center'}}>
                    <h1 className='carrito-vacio'>Tu carrito esta vacio</h1>
                    <Link to='/' className='ir-catalogo'>Ir al Catalogo</Link>
                </div>
                : <div className='carrito-container'>
                    <h1 className='t-carrito'>Tu carrito</h1>
                    {cart.map(prod => {
                        return(
                            <div key={prod.id} className='prod-carrito'>
                                <div>{prod.nombre}</div>
                                <div>Cantidad: {prod.cantidad}</div>
                                <div>Precio x Unidad: ${prod.precio}</div>
                                <div>Subtotal: ${prod.precio * prod.cantidad}</div>
                                <button className='boton-eliminar-item' onClick={() => removeItem(prod.id)}>X</button>
                            </div>
                        )})
                    }
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className='precio-total'>Precio Total: ${totalCompra()}</div>
                        <button className='boton-eliminar-todo' onClick={() => removeAll()}>Limpiar Carrito</button>
                    </div>
                </div>}
        </div>
    )
}

export default Carrito
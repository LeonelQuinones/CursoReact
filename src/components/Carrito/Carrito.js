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
                    <div className='contenido-carrito'>
                        {cart.map(prod => {
                            return(
                                <div key={prod.id} className='prod-carrito'>
                                    <img src={prod.img} alt={prod.nombre}/>
                                    <div>{prod.nombre}</div>
                                    <div>Cantidad: {prod.cantidad}</div>
                                    <div>Precio unitario: ${prod.precio}</div>
                                    <div>Subtotal: ${prod.precio * prod.cantidad}</div>
                                    <button className='boton-eliminar-item' onClick={() => removeItem(prod.id)}>X</button>
                                </div>
                            )})
                        }
                    </div>
                    <div className='div-botones-carrito'>
                        <button className='boton-eliminar-todo' onClick={() => removeAll()}>Limpiar Carrito</button>
                        <div className='precio-total'>Precio Total: ${totalCompra()}</div>
                        <Link className='boton-orden' to='/orden'>Comprar</Link>
                    </div>
                </div>}
        </div>
    )
}

export default Carrito
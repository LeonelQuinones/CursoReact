import './ItemDetail.css'
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const ItemDetail = ({id, img, nombre, precio, descripcion, stock}) => {
    const [cantidad, setCantidad] = useState(0)

    const { addItem, getProduct } = useContext(CartContext)

    const onAdd = (cantidad) => {
        setCantidad(cantidad)

        addItem({ id, img, nombre, precio, cantidad })
    }

    return (
        <div className='seccion-detail'>
            <div className='img-container'>
                <img style={{width: '100%'}} src={img} alt={nombre}/>
            </div>
            <div className='detalle-productos'>
                <h1>{nombre}</h1>
                <h2>${precio}</h2>
                <p className='stock'>Stock: {stock}</p>
                <p style={{fontSize:'20px', marginBottom: '30px'}}>{descripcion}</p>
                {cantidad > 0 
                ? <Link to='/carrito' className='boton-ir-carrito'>Ir al Carrito</Link>
                : <ItemCount stock={stock} onConfirm={onAdd} inicio={getProduct(id)?.cantidad}/>}
            </div>
        </div>
    )
}

export default ItemDetail
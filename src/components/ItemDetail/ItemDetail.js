import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({img, nombre, precio, descripcion, stock}) => {
    const [cantidad, setCantidad] = useState(0)

    const onAdd = (count) => {
        setCantidad(count)
    }

    return (
        <div className='seccion-detail'>
            <div>
                <img style={{width: '100%'}} src={img} alt={nombre}/>
            </div>
            <div className='detalle-productos'>
                <h1>{nombre}</h1>
                <h2>${precio}</h2>
                <p>Stock: {stock}</p>
                <p style={{fontSize:'20px', marginBottom: '30px'}}>{descripcion}</p>
                {cantidad > 0 ? <Link to='/carrito' className='boton-finalizar-compra'>Finaliza Compra</Link> : <ItemCount stock={stock} onConfirm={onAdd}/>}
            </div>
        </div>
    )
}

export default ItemDetail
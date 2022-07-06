import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
    return (
        <div className='card-producto' key={id}>
            <img src={img} alt={nombre} />
            <h1>{nombre}</h1>
            <p>${precio}</p>
            <Link to={`/detail/${id}`} className='boton-detalle'>Ver Detalle</Link>
        </div>
    )
}

export default Item
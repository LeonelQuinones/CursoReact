import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
    return (
        <div className='card-producto' key={id}>
            <img style={{width:'100%'}} src={img} alt={nombre} />
            <h1 style={{fontSize:'20px'}}>{nombre}</h1>
            <p style={{fontSize:'20px'}}>${precio}</p>
            <Link to={`/detail/${id}`} className='boton-detalle'>Ver Detalle</Link>
        </div>
    )
}

export default Item
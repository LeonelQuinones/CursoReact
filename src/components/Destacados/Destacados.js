import './Destacados.css'
import { Link } from 'react-router-dom'

const Destacados = ({id, nombre, img}) => {
    return (
        <div className='card-destacado' key={id}>
            <div className='img-container'>
                <img src={img} alt={nombre} />
            </div>
            <h1>{nombre}</h1>
            <Link to={'/productos'} className='boton-destacados'>Ir a los Productos</Link>
        </div>
    )
}

export default Destacados
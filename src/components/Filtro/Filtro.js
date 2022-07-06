import './Filtro.css'
import { Link } from "react-router-dom"

const Filtro = () => {
    return (
        <div className="filtro-container">
            <Link className='filtro' to='/productos'>Todos</Link>
            <Link className='filtro' to='/categoria/zapatillas'>Zapatillas</Link>
            <Link className='filtro' to='/categoria/pantalones'>Pantalones</Link>
            <Link className='filtro' to='/categoria/remeras'>Remeras</Link>
            <Link className='filtro' to='/categoria/camperas'>Camperas</Link>
            <Link className='filtro' to='/categoria/buzos'>Buzos</Link>
        </div>
    )
}

export default Filtro
import './ListaDestacados.css'
import Destacados from "../Destacados/Destacados"

const ListaDestacados = ({products}) => {
    return (
        <div className='lista-destacados'>
            {products.map(prod => <Destacados key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ListaDestacados
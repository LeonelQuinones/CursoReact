import './ListaSucursales.css'
import Sucursales from '../Sucursales/Sucursales'

const ListaSucursales = ({sucursales}) => {
    return (
        <div className='lista-sucursales'>
            {sucursales.map(suc => <Sucursales key={suc.id} {...suc}/>)}
        </div>
    )
}

export default ListaSucursales
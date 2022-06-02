import './ItemDetail.css'

const ItemDetail = ({img, nombre, precio, descripcion}) => {
    return (
        <div className='card-detail'>
            <img style={{width: '100%'}} src={img}/>
            <h1>{nombre}</h1>
            <h2>${precio}</h2>
            <p style={{fontSize:'20px'}}>{descripcion}</p>
        </div>
    )
}

export default ItemDetail
import './Sucursales.css'

const Sucursales = ({id, url, img, barrio, direccion, hora}) => {
    return (
        <div className='card-sucursal' key={id}>
            <a href={url} className='img-sucursal'>
                <img src={img} alt={barrio} />
            </a>
            <div className='info-sucursal'>
                <h1>{barrio}</h1>
                <p>Direccion: {direccion}</p>
                <p>{hora}</p>
            </div>
            <hr />
        </div>
        
    )
}

export default Sucursales
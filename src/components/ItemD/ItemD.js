const ItemD = ({id, nombre, img, descripcion}) => {
    return (
        <div key={id}>
            <img style={{width:'300px'}} src={img} alt={nombre} />
            <h1 style={{fontSize:'30px'}}>{nombre}</h1>
            <br></br>
            <p style={{fontSize:'25px'}}>{descripcion}</p>
        </div>
    )
}

export default ItemD
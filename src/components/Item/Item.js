const Item = ({id, nombre, precio, img}) => {
    return (
        <div id={id}>
            <img style={{width:'300px'}} src={img} alt={nombre} />
            <h1 style={{fontSize:'30px'}}>{nombre}</h1>
            <p style={{fontSize:'40px'}}>{precio}</p>
        </div>
    )
}

export default Item
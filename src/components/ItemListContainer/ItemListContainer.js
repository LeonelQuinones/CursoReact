const ItemListContainer = (props) => {
    return (
        <h1 style={{color: props.color, fontSize: props.tamaño}}>{props.greeting}</h1>
    )
}

export default ItemListContainer
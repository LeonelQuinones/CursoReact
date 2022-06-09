import './ItemCount.css'
import { useState } from "react"

const ItemCount = ({onConfirm, stock, inicio = 1}) => {
    const [count, setCount] = useState(inicio)

    const decrement = () => {
        if (count > inicio) {
            setCount((count) => count - 1)
        }
    }
    
    const increment = () => {
        if (count < stock) {
            setCount((count) => count + 1)
        }
    }
    
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <button onClick={decrement} className= 'btn btn-outline-danger px-3'>-</button>
            <h1 className='mx-3'>{count}</h1>
            <button onClick={increment} className= 'btn btn-outline-success px-3'>+</button>
            <button className='boton-agregar-carrito' onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
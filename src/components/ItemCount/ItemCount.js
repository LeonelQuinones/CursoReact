import { useState } from "react"

const ItemCount = ({stock = 0}) => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        if (count > 0) {
            setCount((count) => count - 1)
        }
    }
    
    const increment = () => {
        if (count < stock) {
            setCount((count) => count + 1)
        }
    }
    
    return (
        <div style={{display: 'flex'}}>
            <button onClick={decrement} className= 'btn btn-outline-danger px-5'>-</button>
            <h1 className='mx-5'>{count}</h1>
            <button onClick={increment} className= 'btn btn-outline-success px-5'>+</button>
        </div>
    )
}

export default ItemCount
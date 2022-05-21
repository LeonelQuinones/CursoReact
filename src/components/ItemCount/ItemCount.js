import { useState } from "react"

const ItemCount = () => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount((count) => count - 1)
    }
    
    const increment = () => {
        setCount((count) => count + 1)
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
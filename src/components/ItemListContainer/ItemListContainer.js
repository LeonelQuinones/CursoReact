import { useState, useEffect } from "react"
import { getProducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProductsByCategoria } from "../../asyncmock"
import ClipLoader from "react-spinners/ClipLoader";
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()

    useEffect(() => {
        setLoading(true)

        if (!categoriaId) {
            getProducts().then(response => {
                setProducts(response)
            }).catch (error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductsByCategoria(categoriaId).then(response => {
                setProducts(response)
            }).catch (error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [categoriaId])

    if(loading) {
        return (
            <div className='div-load'>
                <ClipLoader color={'black'} loading={loading} size={80} />
            </div>
        )
    }

    return (
        <div>
            <h1 style={{color: props.color, fontSize: props.tamaño, textAlign:'center'}}>{props.greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
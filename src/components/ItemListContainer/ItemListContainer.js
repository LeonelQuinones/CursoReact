import './ItemListContainer.css'
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from '../../services/firebase';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoriaId
            ? query(collection(db, 'products'), where('categoria', '==', categoriaId))
            : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            
            const products = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

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
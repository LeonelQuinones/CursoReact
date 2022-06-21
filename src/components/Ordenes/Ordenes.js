import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { addDoc, collection, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'
import { db } from '../../services/firebase';
import Formulario from "../Formulario/Formulario";


const Ordenes = () => {

    const { cart, totalCompra, removeAll } = useContext(CartContext)

    const crearOrden = () => {
        console.log('crear orden')

        const objOrden = {
            comprador: '',
            items: cart,
            total: totalCompra()
        }
        console.log(objOrden)

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(db)

        const sinStock = []

        const collectionRef = collection(db, 'products')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const compCantidad = cart.find(prod => prod.id === doc.id)?.cantidad
                    
                    if (dataDoc.stock >= compCantidad) {
                        batch.update(doc.ref, {stock: dataDoc.stock - compCantidad})
                    } else {
                        sinStock.push({id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if (sinStock.length === 0) {
                    const collectionRef = collection(db, 'orders')
                    return addDoc(collectionRef, objOrden)
                } else {
                    return Promise.reject({type: 'sin stock', products: sinStock})
                }
            }).then(({id}) => {
                batch.commit()
                removeAll()
                console.log(`El id de la orden es ${id}`)
            }).catch(error => {
                console.log(error)
                console.log('Algunos productos no tienen stock')
                console.log(sinStock)
            }).finally(() => {
                console.log('fin.')
            })
    }

    return(
        <div>
            <Formulario />
            {/* <button onClick={crearOrden}>Finalizar Compra</button> */}
        </div>
    )
}

export default Ordenes
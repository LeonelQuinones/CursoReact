import './Ordenes.css'
import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import { addDoc, collection, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'
import { db } from '../../services/firebase';
import Formulario from "../Formulario/Formulario";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const Ordenes = () => {

    const { cart, totalCompra, removeAll } = useContext(CartContext)

    const [ datos, setDatos ] = useState({
        nombre: '',
        email: '',
        telefono: '',
        direccion: ''
    })

    const onDatos = (data) => {
        setDatos(data)
    }

    const navigate = useNavigate();

    const crearOrden = () => {
        console.log('crear orden')

        const objOrden = {
            datos,
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
                swal({
                    title: "¡Compra exitosa!",
                    text: "Tu pedido sera entregado en las proximas 48hs.",
                    icon: "success",
                    button: "Listo",
                });
                navigate('/')
                console.log(`El id de la orden es ${id}`)
            }).catch(error => {
                console.log(error)
                swal({
                    title: "¡Error!",
                    text: "Algunos productos no cuentan con stock",
                    icon: "error",
                    button: "Ok",
                });
                console.log(sinStock)
            }).finally(() => {
                console.log('Compra finalizada exitosamente')
            })
    }

    return(
        <div className='orden-container'>
            <Formulario onConfirm={onDatos}/>
            <div className='orden-datos'>
                <h2 className='titulo-compra'>Orden de Compra</h2>
                <p className='datos-compra'>Nombre: <span className='datos-cargados'>{datos.nombre}</span></p>
                <p className='datos-compra'>Email: <span className='datos-cargados'>{datos.email}</span></p>
                <p className='datos-compra'>Telefono: <span className='datos-cargados'>{datos.telefono}</span></p>
                <p className='datos-compra'>Dirección: <span className='datos-cargados'>{datos.direccion}</span></p>
                <button className='boton-orden' onClick={crearOrden}>Finalizar Compra</button>
            </div>
        </div>
    )
}

export default Ordenes
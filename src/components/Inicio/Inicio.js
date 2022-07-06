import './Inicio.css'
import { useState, useEffect } from "react"
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from '../../services/firebase';
import ClipLoader from "react-spinners/ClipLoader";
import ListaDestacados from "../ListaDestacados/ListaDestacados";
import { Link } from 'react-router-dom';

const Inicio = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const collectionRef = query(collection(db, 'products'), where('destacado', '==', true))

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

    }, [])

    if(loading) {
        return (
            <div className='div-load'>
                <ClipLoader color={'black'} loading={loading} size={80} />
            </div>
        )
    }

    return (
        <div className='inicio-container'>
            <div className='div-bienvenidos'>
                <h1>¡Bienvenidos a Solo Deportes!</h1>
                <p>Somos una cadena deportiva con más de 50 años de trayectoria. Contamos con más de 15 sucursales, distribuidas en Capital Federal y Gran Buenos Aires, y llegamos a todo el país a través de la venta online desde nuestro sitio web.</p>               
                <p>Tenemos una amplia variedad de productos de las mejores marcas en indumentaria, calzado y accesorios.<br></br> Observa aqui abajo algunos de nuestros productos mas destacados</p>
            </div>
            <ListaDestacados products={products} />
            <div className='div-inicio-contacto'>
                <p>Tambien puedes venir a visitarnos a nuestros locales fisicos haciendo<Link className='link-visitanos' to={'/visitanos'}>¡Click aqui!</Link></p>
            </div>
        </div>
    )
}

export default Inicio
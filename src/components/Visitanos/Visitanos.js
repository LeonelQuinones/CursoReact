import './Visitanos.css'
import { useState, useEffect } from "react"
import ClipLoader from "react-spinners/ClipLoader";
import { getDocs, collection } from "firebase/firestore";
import { db } from '../../services/firebase';
import ListaSucursales from '../ListaSucursales/ListaSucursales';
import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";

const Visitanos = () => {

    const [ sucursales, setSucursales ] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        getDocs(collection(db, 'sucursales')).then(response => {
            
            const sucursales = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setSucursales(sucursales)
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

    return(
        <div>
            <ListaSucursales sucursales = {sucursales} />
            <div className='contacto-container'>
                <div className='contacto'>
                    <AiOutlineWhatsApp color='#0f2f24' size={55} />
                    <h3>Whatsapp</h3>
                    <p>+54 911 23488680</p>
                </div>

                <div className='contacto'>
                    <AiOutlineInstagram color='#0f2f24' size={55} />
                    <h3>Instagram</h3>
                    <p>@solodeportes</p>
                </div>

                <div className='contacto'>
                    <AiOutlineMail color='#0f2f24' size={55} />
                    <h3>Email</h3>
                    <p>solo.deportes@hotmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Visitanos
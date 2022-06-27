import './Formulario.css'
import { useForm } from "react-hook-form";
import { useState } from "react";

const Formulario = ({ onConfirm }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const [datos, setDatos] = useState([])

    const datosForm = (data) => {
        setDatos(data)
    }

    return (
        <div className='form-container'>
            <form className='formulario' onSubmit={handleSubmit(datosForm)}>
                <h2 className='t-form'>Formulario</h2>

                <div className='input-container'>
                    <label>Nombre</label>
                    <input className='form-input' type='text' {...register('nombre', {
                        required: {
                            value: true,
                            message: 'Campo incompleto'
                        }
                    })} />
                    {errors.nombre && <p>{errors.nombre.message}</p>}
                </div>

                <div className='input-container'>
                    <label>Email</label>
                    <input className='form-input' type='email' {...register('email', {
                        required: {
                            value: true,
                            message: 'Campo incompleto'
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "El formato no es correcto"
                        }
                    })} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <div className='input-container'>
                    <label>Teléfono</label>
                    <input className='form-input' type='number' {...register('telefono', {
                        required: {
                            value: true,
                            message: 'Campo incompleto'
                        },
                        maxLength: {
                            value: 10,
                            message: "El maximo de caracteres es 10"
                        }
                    })} />
                    {errors.telefono && <p>{errors.telefono.message}</p>}
                </div>

                <div className='input-container'>
                    <label>Dirección</label>
                    <input className='form-input' type='text' {...register('direccion', {
                        required: {
                            value: true,
                            message: 'Campo incompleto'
                        }
                    })} />
                    {errors.direccion && <p>{errors.direccion.message}</p>}
                </div>
                
                <button className='boton-form' type="submit" onClick={() => onConfirm(datos)}>Cargar Datos</button>
            </form>
        </div>
    )
}

export default Formulario
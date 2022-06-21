import { useForm } from "react-hook-form";
import { useState } from "react";

const Formulario = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()

    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        telefono: '',
        direccion: ''
    })

    const datosForm = (data) => {
        console.log(data)
    }

    return(
        <div>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit(datosForm)}>
                <div>
                    <label>Nombre</label>
                    <input type='text' {...register('nombre', {
                        required: {
                            value: true,
                            message: 'Campo incompleto'
                        }})} />
                    {errors.nombre && <p>{errors.nombre.message}</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' {...register('email', {
                        required: {
                            value: true,
                            message: 'Campo incompleto'
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "El formato no es correcto"
                        }})} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label>Teléfono</label>
                    <input type='number' {...register('telefono', {
                        required: {
                            value: true,
                            message: 'Campo incompleto'
                        },
                        maxLength: {
                            value: 10,
                            message: "El maximo de caracteres es 10"
                        }})} />
                    {errors.telefono && <p>{errors.telefono.message}</p>}
                </div>
                <div>
                    <label>Dirección</label>
                    <input type='text' {...register('direccion', {
                        required: {
                            value: true,
                            message: 'Campo incompleto'
                        }})} />
                    {errors.direccion && <p>{errors.direccion.message}</p>}
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Formulario
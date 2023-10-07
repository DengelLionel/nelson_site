import React from 'react'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'

const FormularioContactanos = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [telefono, setTelefono] = useState('')
    const [errorserv, setErrorserv] = useState(null)
    const [enviando, setEnviando] = useState(false)
    const [enviado, setEnviado] = useState(false)
    const [errorNombre, setErrorNombre] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorMensaje, setErrorMensaje] = useState('')
    const [errorTelefono, setErrorTelefono] = useState('')
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const handleEnviarContacto = async event => {
        event.preventDefault()
        setEnviando(true)
        if (!nombre.trim()) {
            setErrorNombre('Por favor, ingrese su nombre.')
            setEnviando(false)
            return
        } else setErrorNombre('')

        if (!email.trim()) {
            setErrorEmail('Por favor, ingrese su correo electrónico.')
            setEnviando(false)
            return
        } else setErrorEmail('')

        if (!telefono.trim()) {
            setErrorTelefono('Por favor, ingrese su número de teléfono.')
            setEnviando(false)
            return
        } else setErrorTelefono('')

        if (!mensaje.trim()) {
            setErrorMensaje('Por favor, ingrese su mensaje.')
            setEnviando(false)
            return
        } else setErrorMensaje('')
        try {
            await csrf()
            const contactame = {
                nombre: nombre,
                email: email,
                mensaje: mensaje,
                telefono: telefono,
            }
            await axios.post('/api/cliente_contactanos', contactame)
            setEnviado(true)
            setNombre('')
            setEmail('')
            setMensaje('')
            setTelefono('')
        } catch (error) {
            setErrorserv(error)
        } finally {
            setEnviando(false)
        }
    }

    useEffect(() => {}, [errorserv])

    return (
        <div className="p-[16px] lg:p-[30px]">
            <form
                onSubmit={handleEnviarContacto}
                className="w-full w-full md:w-[400px] bg-blueOne p-8 rounded-md lg:rounded-xl shadow-md">
                <div className="mb-4">
                    <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="name">
                        Nombre Completo
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        type="text"
                        id="name"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        placeholder="John Doe"
                    />
                    {errorNombre && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorNombre}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="email">
                        Correo electrónico
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="john@example.com"
                    />
                    {errorEmail && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorEmail}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="telefono">
                        Telefono
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        type="text"
                        id="telefono"
                        value={telefono}
                        onChange={e => setTelefono(e.target.value)}
                        placeholder="999999999"
                    />
                    {errorTelefono && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorTelefono}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="mensaje">
                        Mensaje
                    </label>
                    <textarea
                        value={mensaje}
                        onChange={e => setMensaje(e.target.value)}
                        className="w-full h-[150px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                    {errorMensaje && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorMensaje}
                        </p>
                    )}
                </div>
                <button
                    disabled={enviando}
                    className="w-full bg-white text-blueOne text-sm font-bold py-2 px-4 rounded-md hover:bg-blueTwo transition duration-300"
                    type="submit">
                    {enviando ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
            {enviado && (
                <p className="text-blueOne font-medium mt-4">
                    ¡Gracias por tu mensaje! Nos pondremos en contacto contigo
                    pronto.
                </p>
            )}
        </div>
    )
}

export default FormularioContactanos

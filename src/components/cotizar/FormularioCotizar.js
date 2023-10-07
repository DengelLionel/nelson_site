import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
const FormularioCotizar = () => {
    const [razonsocial, setRazonsocial] = useState('')
    const [ruc, setRuc] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [personacontacto, setPersonacontacto] = useState('')
    const [equiposcotizar, setEquiposcotizar] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [errorserv, setErrorserv] = useState(null)
    const [enviando, setEnviando] = useState(false)
    const [enviado, setEnviado] = useState(false)
    const [errorRazonsocial, setErrorRazonsocial] = useState('')
    const [errorRuc, setErrorRuc] = useState('')
    const [errorCorreo, setErrorCorreo] = useState('')
    const [errorTelefono, setErrorTelefono] = useState('')
    const [errorPersonacontacto, setErrorPersonacontacto] = useState('')
    const [errorEquiposcotizar, setErrorEquiposcotizar] = useState('')
    const [errorMensaje, setErrorMensaje] = useState('')
    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const handleEnviarCotizar = async event => {
        event.preventDefault()
        setEnviando(true)
        if (!razonsocial.trim()) {
            setErrorRazonsocial('Por favor, ingrese su razon social.')
            setEnviando(false)
            return
        } else setErrorRazonsocial('')
        if (!correo.trim()) {
            setErrorCorreo('Por favor, ingrese su correo.')
            setEnviando(false)
            return
        } else setErrorCorreo('')
        if (!ruc.trim()) {
            setErrorRuc('Por favor, ingrese su RUC.')
            setEnviando(false)
            return
        } else setErrorRuc('')
        if (!telefono.trim()) {
            setErrorTelefono('Por favor, ingrese su telefono.')
            setEnviando(false)
            return
        } else setErrorTelefono('')
        if (!razonsocial.trim()) {
            setErrorRazonsocial('Por favor, ingrese su razon social.')
            setEnviando(false)
            return
        } else setErrorRazonsocial('')
        if (!personacontacto.trim()) {
            setErrorPersonacontacto(
                'Por favor, ingrese su persona de contacto.',
            )
            setEnviando(false)
            return
        } else setErrorPersonacontacto('')
        if (!equiposcotizar.trim()) {
            setErrorEquiposcotizar('Por favor, ingrese su equipo a cotizar.')
            setEnviando(false)
            return
        } else setErrorEquiposcotizar('')
        if (!mensaje.trim()) {
            setErrorMensaje('Por favor, ingrese su mensaje.')
            setEnviando(false)
            return
        } else setErrorMensaje('')
        try {
            await csrf()
            const cotizar = {
                razonsocial: razonsocial,
                ruc: ruc,
                correo: correo,
                telefono: telefono,
                personacontacto: personacontacto,
                equiposcotizar: equiposcotizar,
                mensaje: mensaje,
            }
            await axios.post('/api/cotizar', cotizar)
            setEnviado(true)
            setCorreo('')
            setRazonsocial('')
            setRuc('')
            setTelefono('')
            setPersonacontacto('')
            setEquiposcotizar('')
            setMensaje('')
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
                onSubmit={handleEnviarCotizar}
                className="w-full w-full md:w-[400px] bg-gray-300 p-8 rounded-md lg:rounded-xl shadow-md">
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="razonsocial"
                        value={razonsocial}
                        onChange={e => setRazonsocial(e.target.value)}
                        placeholder="Razon social"
                    />
                    {errorRazonsocial && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorRazonsocial}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="ruc"
                        value={ruc}
                        onChange={e => setRuc(e.target.value)}
                        placeholder="Ruc"
                    />
                    {errorRuc && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorRuc}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="email"
                        id="correo"
                        value={correo}
                        onChange={e => setCorreo(e.target.value)}
                        placeholder="Correo electrónico"
                    />
                    {errorCorreo && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorCorreo}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="telefono"
                        value={telefono}
                        onChange={e => setTelefono(e.target.value)}
                        placeholder="Telefono"
                    />
                    {errorTelefono && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorTelefono}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="personacontacto"
                        value={personacontacto}
                        onChange={e => setPersonacontacto(e.target.value)}
                        placeholder="Persona del contacto"
                    />
                    {errorPersonacontacto && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorPersonacontacto}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="equipo"
                        value={equiposcotizar}
                        onChange={e => setEquiposcotizar(e.target.value)}
                        placeholder="Equipo a cotizar"
                    />
                    {errorEquiposcotizar && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorEquiposcotizar}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <textarea
                        value={mensaje}
                        onChange={e => setMensaje(e.target.value)}
                        placeholder="Escriba el mensaje"
                        className="w-full h-[150px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100  text-sm"
                    />
                    {errorMensaje && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorMensaje}
                        </p>
                    )}
                </div>
                <button
                    className="w-full bg-white text-gray-500 text-sm font-bold py-2 px-4 rounded-md hover:bg-blueTwo transition duration-300 mb-[20px]"
                    type="submit">
                    {enviando ? 'Enviando...' : 'Enviar'}
                </button>
                <p className="text-[12px]">Todos los campos son obligatorios</p>
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

export default FormularioCotizar

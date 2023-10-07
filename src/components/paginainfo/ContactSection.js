import { useState, useEffect } from 'react'
import {
    faLocationDot,
    faEnvelope,
    faMobile,
} from '@fortawesome/free-solid-svg-icons'
import IconsContacto from './IconsContacto'
import axios from '@/lib/axios'
const ContactSection = () => {
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [errorName, setErrorName] = useState('')
    const [erroremail, setErrorEmail] = useState('')
    const [errorsubject, setErrorSubject] = useState('')
    const [errormessage, setErrorMessage] = useState('')
    const [errorserv, setErrorserv] = useState(null)
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const handleSubmit = async e => {
        e.preventDefault()

        setLoading(true)

        if (!name.trim()) {
            setErrorName('Por favor, ingrese su nombre.')
            setSent(false)
            return
        } else setErrorName('')
        if (!email.trim()) {
            setErrorEmail('Por favor, ingrese su email.')
            setSent(false)
            return
        } else setErrorEmail('')
        if (!subject.trim()) {
            setErrorSubject('Por favor, ingrese su tema.')
            setSent(false)
            return
        } else setErrorSubject('')
        if (!message.trim()) {
            setErrorMessage('Por favor, ingrese su mensaje.')
            setSent(false)
            return
        } else setErrorMessage('')

        try {
            await csrf()
            const contactame = {
                name: name,
                email: email,
                subject: subject,
                message: message,
            }
            await axios.post('/api/contactame', contactame)
            setSent(true)
            setLoading(false)
            setName('')
            setEmail('')
            setMessage('')
            setSubject('')
        } catch (error) {
            setErrorserv(error)
        } finally {
            setSent(false)
        }
    }
    useEffect(() => {}, [errorserv])
    return (
        <section id="contacto" className="contact bg-gray-100 py-10 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-10" data-aos="fade-up">
                    <h2 className="font-bold text-3xl mb-4">Contacto</h2>
                </div>

                <div className="flex flex-wrap -mx-3">
                    <div
                        className="w-full lg:w-1/2 p-3 flex flex-col items-start justify-center"
                        data-aos="fade-right">
                        <div className="info p-6 bg-white border-2 border-gray-300 rounded-lg w-full">
                            <div className="flex items-center mb-4">
                                <IconsContacto
                                    icon={faLocationDot}
                                    color="#274C77"
                                    colorhover="blueOne"
                                />
                                <div>
                                    <h4 className="text-lg font-semibold mb-1">
                                        Ubicación:
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Guayaquil - Cdla Alborada IX, Mz. 937 S.
                                        11
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center mb-4">
                                <IconsContacto
                                    icon={faEnvelope}
                                    color="#274C77"
                                    colorhover="blueOne"
                                />

                                <div>
                                    <h4 className="text-lg font-semibold mb-1">
                                        Email:
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        info@invoexpress.com
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        invoexpressec@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center mb-4">
                                <IconsContacto
                                    icon={faMobile}
                                    color="#274C77"
                                    colorhover="blueOne"
                                />
                                <div>
                                    <h4 className="text-lg font-semibold mb-1">
                                        Celular:
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        099 323 9900
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="w-full lg:w-1/2 p-3 flex flex-col items-start justify-center mt-5 lg:mt-0"
                        data-aos="fade-left">
                        <form
                            onSubmit={handleSubmit}
                            className="p-6 bg-white border-2 border-gray-300 rounded-lg w-full">
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full md:w-1/2 p-3">
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-700 mb-2">
                                        Nombres:
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        className="form-input mt-1 block w-full"
                                        id="name"
                                        required
                                    />
                                    {errorName && (
                                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                                            {errorName}
                                        </p>
                                    )}
                                </div>
                                <div className="w-full md:w-1/2 p-3 mt-3 md:mt-0">
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-700 mb-2">
                                        Email:
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        className="form-input mt-1 block w-full"
                                        id="email"
                                        required
                                    />
                                    {erroremail && (
                                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                                            {erroremail}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="mt-3">
                                <label
                                    htmlFor="subject"
                                    className="block text-gray-700 mb-2">
                                    Tema:
                                </label>
                                <input
                                    type="text"
                                    value={subject}
                                    onChange={e => setSubject(e.target.value)}
                                    className="form-input mt-1 block w-full"
                                    id="subject"
                                    required
                                />
                                {errorsubject && (
                                    <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                                        {errorsubject}
                                    </p>
                                )}
                            </div>
                            <div className="mt-3">
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 mb-2">
                                    Mensaje:
                                </label>
                                <textarea
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    className="form-textarea mt-1 block w-full"
                                    rows="10"
                                    required
                                />
                                {errormessage && (
                                    <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                                        {errormessage}
                                    </p>
                                )}
                            </div>
                            <div className="my-3">
                                {loading && (
                                    <div className="text-gray-700">
                                        Enviando...
                                    </div>
                                )}
                                {sent && (
                                    <div className="text-green-500">
                                        Tu mensaje ha sido enviado. ¡Gracias!
                                    </div>
                                )}
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded">
                                    Enviar mensaje
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection

import React from 'react'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
const CreandoInformacion = () => {
    const [nombre, setNombre] = useState('Nexomedic')
    const [telefono, setTelefono] = useState('')
    const [celular, setCelular] = useState('')
    const [email1, setEmail1] = useState('')
    const [email2, setEmail2] = useState('')
    const [email3, setEmail3] = useState('')
    const [direccion, setDireccion] = useState('')
    const [logo, setLogo] = useState('logonexomedic')
    const [facebook, setFacebook] = useState('')
    const [youtube, setYoutube] = useState('')
    const [instagram, setInstagram] = useState('')
    const [twiter, setTwiter] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [errorserv, setErrorserv] = useState(null)
    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const handleCrear = async () => {
        try {
            await csrf()
            const infor = {
                nombre: nombre,
                telefono: telefono,
                celular: celular,
                email1: email1,
                email2: email2,
                email3: email3,
                direccion: direccion,
                logo: logo,
                facebook: facebook,
                youtube: youtube,
                instagram: instagram,
                twiter: twiter,
                whatsapp: whatsapp,
            }
            await axios.post('/api/info', infor)
            window.location.reload()
        } catch (error) {
            setErrorserv(error)
        }
    }

    useEffect(() => {}, [errorserv])
    return (
        <div>
            <div className="flex flex-col h-auto">
                <div className="!z-5 relative flex flex-col rounded-[20px] w-full md:w-[500px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col  !p-6 3xl:p-![18px] bg-white undefined">
                    <div className="relative flex flex-row justify-between">
                        <h4 className="text-xl font-bold text-red-500  mb-3">
                            Creando Información de Nexomedic
                        </h4>
                    </div>

                    <div className="mb-3">
                        <input
                            type="hidden"
                            id="nombre"
                            placeholder="Nombre"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={nombre}
                            onChange={() => setNombre('Nexomedic')}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="telefono"
                            className="text-sm text-gray-500 font-bold">
                            telefono
                        </label>
                        <input
                            type="text"
                            id="telefono"
                            placeholder="Telefono"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={telefono}
                            onChange={e => setTelefono(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="celular"
                            className="text-sm text-gray-500 font-bold">
                            Celular
                        </label>
                        <input
                            type="text"
                            id="celular"
                            placeholder="Celular"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={celular}
                            onChange={e => setCelular(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="email"
                            className="text-sm text-gray-500 font-bold">
                            Email 1
                        </label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Email 1"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={email1}
                            onChange={e => setEmail1(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="email"
                            className="text-sm text-gray-500 font-bold">
                            Email 2
                        </label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Email 2"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={email2}
                            onChange={e => setEmail2(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="email"
                            className="text-sm text-gray-500 font-bold">
                            Email 3
                        </label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Email 3"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={email3}
                            onChange={e => setEmail3(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="direccion"
                            className="text-sm text-gray-500 font-bold">
                            Dirección
                        </label>
                        <input
                            type="text"
                            id="dirección"
                            placeholder="Dirección"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={direccion}
                            onChange={e => setDireccion(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="hidden"
                            id="logo"
                            placeholder="Logo de nexomedic"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={logo}
                            onChange={() => setLogo('logo')}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="facebook"
                            className="text-sm text-gray-500 font-bold">
                            Facebook
                        </label>
                        <input
                            type="text"
                            id="facebook"
                            placeholder="Facebook"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={facebook}
                            onChange={e => setFacebook(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="youtube"
                            className="text-sm text-gray-500 font-bold">
                            Youtube
                        </label>
                        <input
                            type="text"
                            id="youtube"
                            placeholder="youtube"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={youtube}
                            onChange={e => setYoutube(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="instagram"
                            className="text-sm text-gray-500 font-bold">
                            Instagram
                        </label>
                        <input
                            type="text"
                            id="instagram"
                            placeholder="instagram"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={instagram}
                            onChange={e => setInstagram(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="twiter"
                            className="text-sm text-gray-500 font-bold">
                            Twiter
                        </label>
                        <input
                            type="text"
                            id="twiter"
                            placeholder="twiter"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={twiter}
                            onChange={e => setTwiter(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="whatsapp"
                            className="text-sm text-gray-500 font-bold">
                            whatsapp
                        </label>
                        <input
                            type="text"
                            id="whatsapp"
                            placeholder="whatsapp"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <button
                            onClick={handleCrear}
                            className="p-[10px] bg-blue-500 text-white font-bold">
                            CREAR INFORMACIÓN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreandoInformacion

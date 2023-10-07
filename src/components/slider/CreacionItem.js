import React from 'react'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'

const CreacionItem = () => {
    const [enlace, setEnlace] = useState('')
    const [titulo, setTitulo] = useState('')
    const [subtitulo, setSubtitulo] = useState('')
    const [nombreenlace, setNombreenlace] = useState('')
    const [imagen_mobil, setImagen_mobil] = useState('')
    const [imagen_desktop, setImagen_desktop] = useState('')
    const [errorserv, setErrorserv] = useState(null)

    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const handleCrear = async () => {
        try {
            await csrf()
            const slider = {
                titulo: titulo,
                subtitulo: subtitulo,
                imagen_desktop: imagen_desktop,
                imagen_mobil: imagen_mobil,
                enlace: enlace,
                nombreenlace: nombreenlace,
            }
            await axios.post('/api/slider', slider)
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
                            Creando Sliders
                        </h4>
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="titulo"
                            className="text-sm text-gray-500 font-bold">
                            Titulo
                        </label>
                        <input
                            type="text"
                            id="titulo"
                            placeholder="Titulo"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={titulo}
                            onChange={e => setTitulo(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="titulo"
                            className="text-sm text-gray-500 font-bold">
                            SubTitulo
                        </label>
                        <input
                            type="text"
                            id="subtitulo"
                            placeholder="Escriba subTitulo"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={subtitulo}
                            onChange={e => setSubtitulo(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="name"
                            className="text-sm text-gray-500 font-bold">
                            Imagen mobil
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Nombre"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={imagen_mobil}
                            onChange={e => setImagen_mobil(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="name"
                            className="text-sm text-gray-500 font-bold">
                            Imagen desktop
                        </label>
                        <input
                            type="text"
                            id="imagen"
                            placeholder="Imagen"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={imagen_desktop}
                            onChange={e => setImagen_desktop(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="imagen"
                            className="text-sm text-gray-500 font-bold">
                            Enlace
                        </label>
                        <input
                            type="text"
                            id="enlace"
                            placeholder="Enlace"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={enlace}
                            onChange={e => setEnlace(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="enlacee"
                            className="text-sm text-gray-500 font-bold">
                            Nombre del boton
                        </label>
                        <input
                            type="text"
                            id="enlacee"
                            placeholder="Escriba su nombre del boton"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={nombreenlace}
                            onChange={e => setNombreenlace(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <button
                            onClick={handleCrear}
                            className="p-[10px] bg-blue-500 text-white font-bold">
                            CREAR SLIDER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreacionItem

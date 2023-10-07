import React from 'react'
import axios from '@/lib/axios'
import { useContext, useState, useRef, useEffect } from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno'
const EditarItem = () => {
    const modalRef = useRef()
    const [enlace, setEnlace] = useState('')
    const [subtitulo, setSubtitulo] = useState('')
    const [nombreenlace, setNombreenlace] = useState('')
    const [imagen_mobil, setImagen_mobil] = useState('')
    const [imagen_desktop, setImagen_desktop] = useState('')
    const [titulo, setTitulo] = useState('')
    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const { isOpen, setIsOpen, idItem } = useContext(PaginaContextValue)
    const [errorserv, setErrorserv] = useState(null)

    const togglePopup = event => {
        if (modalRef.current === event.target) {
            setIsOpen(!isOpen)
        }
    }

    const handleUpdate = async () => {
        try {
            const slider = {
                titulo: titulo,
                subtitulo: subtitulo,
                imagen_desktop: imagen_desktop,
                imagen_mobil: imagen_mobil,
                enlace: enlace,
                nombreenlace: nombreenlace,
            }
            await csrf()
            await axios.put(`/api/slider/${idItem}`, slider)
            window.location.reload()
            setIsOpen(false)
        } catch (error) {
            setErrorserv(error)
        }
    }

    useEffect(() => {}, [errorserv])
    return (
        isOpen && (
            <div
                ref={modalRef}
                onClick={togglePopup}
                className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-blackTransparente">
                <div className="bg-white relative z-[60] rounded shadow-lg p-8 m-4 w-full max-h-full text-center md:w-[450px] lg:w-[800px] overflow-auto">
                    <div>
                        <div className="flex flex-col h-auto">
                            <div className=" relative flex flex-col rounded-[20px] w-full  bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col  !p-6 3xl:p-![18px] bg-white undefined">
                                <div className="relative flex flex-row justify-between">
                                    <h4 className="text-xl font-bold text-red-500  mb-3">
                                        Editar slider
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
                                        onChange={e =>
                                            setTitulo(e.target.value)
                                        }
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
                                        onChange={e =>
                                            setSubtitulo(e.target.value)
                                        }
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
                                        onChange={e =>
                                            setImagen_mobil(e.target.value)
                                        }
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
                                        onChange={e =>
                                            setImagen_desktop(e.target.value)
                                        }
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
                                        onChange={e =>
                                            setEnlace(e.target.value)
                                        }
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
                                        onChange={e =>
                                            setNombreenlace(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <button
                                        onClick={handleUpdate}
                                        className="p-[10px] bg-blue-500 text-white font-bold">
                                        ACTUALIZAR SLIDER
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Close
                    </button>
                </div>
            </div>
        )
    )
}

export default EditarItem

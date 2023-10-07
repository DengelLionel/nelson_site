import React from 'react'
import axios from '@/lib/axios'
import { useContext, useState, useRef, useEffect } from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno'
import useSWR from 'swr'
import { useToSlug } from '@/hooks/useToSlug'
const EditarItem = () => {
    const modalRef = useRef()
    const [nombre, setNombre] = useState('')
    const [submenu, setSubMenu] = useState(0)
    const [enlace, setEnlace] = useState('')
    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const data = useSWR('/api/submenu', () =>
        axios.get('/api/submenu').then(res => res.data),
    )
    const dato = data.data
    const { isOpen, setIsOpen, idSubsubmenuItem } = useContext(
        PaginaContextValue,
    )
    const [errorserv, setErrorserv] = useState(null)
    const togglePopup = event => {
        if (modalRef.current === event.target) {
            setIsOpen(!isOpen)
        }
    }

    const handleUpdate = async () => {
        try {
            const subsubmenu = {
                submenu_id: submenu,
                nombre: nombre,
                enlace: enlace,
            }
            await csrf()
            await axios.put(`/api/subsubmenu/${idSubsubmenuItem}`, subsubmenu)
            window.location.reload()
            setIsOpen(false)
        } catch (error) {
            setErrorserv(error)
        }
    }
    useEffect(() => {
        setEnlace('/' + useToSlug(nombre))
    }, [errorserv, enlace, nombre])

    return (
        isOpen && (
            <div
                ref={modalRef}
                onClick={togglePopup}
                className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-blackTransparente">
                <div className="bg-white relative z-[60] rounded shadow-lg p-8 m-4 max-w-xs max-h-full text-center md:w-[450px]">
                    <div>
                        <div className="flex flex-col h-auto">
                            <div className=" relative flex flex-col rounded-[20px] w-full  bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col  !p-6 3xl:p-![18px] bg-white undefined">
                                <div className="relative flex flex-row justify-between">
                                    <h4 className="text-xl font-bold text-red-500  mb-3">
                                        Editar Sub-subMenú
                                    </h4>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="text-sm text-gray-500 font-bold">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Nombre"
                                        className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                        value={nombre}
                                        onChange={e =>
                                            setNombre(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="link"
                                        className="text-sm text-gray-500 font-bold">
                                        Menu
                                    </label>

                                    <select
                                        className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                        value={submenu}
                                        onChange={e =>
                                            setSubMenu(e.target.value)
                                        }>
                                        <option value="ningun submenu">
                                            Ningun SubMenu
                                        </option>
                                        {dato?.[0].map((submenu, index) => (
                                            <option
                                                key={index}
                                                value={submenu.id}>
                                                {submenu.nombre}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="link"
                                        className="text-sm text-gray-500 font-bold">
                                        Link
                                    </label>
                                    <span className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200">
                                        {enlace}
                                    </span>
                                </div>
                                <div className="mb-3">
                                    <button
                                        onClick={handleUpdate}
                                        className="p-[10px] bg-blue-500 text-white font-bold">
                                        ACTUALIZAR SUB-SUBMENÚ
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

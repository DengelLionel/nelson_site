import React from 'react'
import axios from '@/lib/axios'
import { useContext, useState, useRef, useEffect } from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno'
import useSWR from 'swr'
import { useToSlug } from '@/hooks/useToSlug'
const EditarItem = () => {
    const modalRef = useRef()
    const [nombre, setNombre] = useState('')
    const [menu, setMenu] = useState(0)
    const [enlace, setEnlace] = useState('')
    const [visible, setVisible] = useState('true')
    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const data = useSWR('/api/menu', () =>
        axios.get('/api/menu').then(res => res.data),
    )
    const dato = data.data
    const { isOpen, setIsOpen, idSubmenuItem } = useContext(PaginaContextValue)
    const [errorserv, setErrorserv] = useState(null)
    const togglePopup = event => {
        if (modalRef.current === event.target) {
            setIsOpen(!isOpen)
        }
    }

    const handleUpdate = async () => {
        try {
            const submenu = {
                menu_id: menu,
                nombre: nombre,
                enlace: enlace,
                visible: visible === 'true' ? true : false,
            }
            await csrf()
            await axios.put(`/api/submenu/${idSubmenuItem}`, submenu)
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
                                        Editar item Menú
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
                                        value={menu}
                                        onChange={e => setMenu(e.target.value)}>
                                        <option value="ningun menu">
                                            Ningun Menu
                                        </option>
                                        {dato?.[0].map((menu, index) => (
                                            <option key={index} value={menu.id}>
                                                {menu.name}
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
                                <div className="mb-3 hidden">
                                    <label
                                        htmlFor="link"
                                        className="text-sm text-gray-500 font-bold">
                                        Visible
                                    </label>

                                    <select
                                        className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                        value={visible}
                                        onChange={e =>
                                            setVisible(e.target.value)
                                        }>
                                        <option value="true">Visible</option>
                                        <option value="false">Invisible</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <button
                                        onClick={handleUpdate}
                                        className="p-[10px] bg-blue-500 text-white font-bold">
                                        ACTUALIZAR ITEM MENÚ
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

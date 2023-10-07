import React from 'react'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import useSWR from 'swr'
import { useToSlug } from '@/hooks/useToSlug'
const CreacionItem = () => {
    const [nombre, setNombre] = useState('')
    const [submenu, setSubMenu] = useState(0)
    const [enlace, setEnlace] = useState('')
    const [errorserv, setErrorserv] = useState(null)
    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const data = useSWR('/api/submenu', () =>
        axios.get('/api/submenu').then(res => res.data),
    )
    const dato = data.data
    const handleCrearSubsubMenu = async () => {
        try {
            await csrf()
            const subsubmenu = {
                submenu_id: submenu,
                nombre: nombre,
                enlace: enlace,
            }
            await axios.post('/api/subsubmenu', subsubmenu)
            window.location.reload()
        } catch (error) {
            setErrorserv(error)
        }
    }
    useEffect(() => {
        setEnlace('/' + useToSlug(nombre))
    }, [errorserv, enlace, nombre])

    return (
        <div>
            <div className="flex flex-col h-auto">
                <div className="!z-5 relative flex flex-col rounded-[20px] w-full md:w-[500px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col  !p-6 3xl:p-![18px] bg-white undefined">
                    <div className="relative flex flex-row justify-between">
                        <h4 className="text-xl font-bold text-red-500  mb-3">
                            Creación del sub-submenu
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
                            onChange={e => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="link"
                            className="text-sm text-gray-500 font-bold">
                            SubMenu
                        </label>

                        <select
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={submenu}
                            onChange={e => setSubMenu(e.target.value)}>
                            <option value="ningun submenu">
                                Ningun SubMenu
                            </option>
                            {dato?.[0].map((submenu, index) => (
                                <option key={index} value={submenu.id}>
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
                            onClick={handleCrearSubsubMenu}
                            className="p-[10px] bg-blue-500 text-white font-bold">
                            CREAR SUB-SUBMENÚ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreacionItem

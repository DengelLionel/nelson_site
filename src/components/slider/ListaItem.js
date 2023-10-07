import React from 'react'
import useSWR from 'swr'
import axios from '@/lib/axios'
import { useContext, useEffect, useState } from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno'
import EditarItem from './EditarItem'
const ListaItem = () => {
    const { isOpen, setIsOpen, setIdItem } = useContext(PaginaContextValue)
    const data = useSWR('/api/slider', () =>
        axios.get('/api/slider').then(res => res.data),
    )
    const dato = data.data

    const [errorserv, setErrorserv] = useState(null)
    const IdProducto = item => {
        setIdItem(item)
    }

    const EliminarItem = async item_eliminado => {
        try {
            await axios.delete(`/api/slider/${item_eliminado}`)
            window.location.reload()
        } catch (error) {
            setErrorserv(error)
        }
    }
    useEffect(() => {}, [errorserv])
    return (
        <div className="overflow-x-auto w-[360px] p-[16px] lg:w-full sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="">
                    <table className="min-w-full">
                        <thead className="bg-gray-200 border-b">
                            <tr>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Imagen
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 w-[150px] lg:w-[400px] px-6 py-4 text-left">
                                    Titulo
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 w-[150px] lg:w-[400px] px-6 py-4 text-left">
                                    Enlace
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dato?.map((item, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    {/*   <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap relative">
                                        <Image
                                            layout="fill"
                                            objectFit="cover"
                                            className="w-[100px] h-[100px]"
                                            alt={item.titulo}
                                            src={item.imagen}
                                        />
                                    </td> */}
                                    <td className="text-sm text-gray-900 font-light  px-6 py-4 ">
                                        {item.titulo}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light  px-6 py-4 ">
                                        {item.enlace}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex flex-col justify-center items-center lg:flex-row">
                                        <button
                                            onClick={() => {
                                                setIsOpen(!isOpen)
                                                IdProducto(item.id ?? item.id)
                                            }}
                                            className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline w-[100px]">
                                            EDITAR
                                        </button>
                                        <button
                                            onClick={() =>
                                                EliminarItem(item.id)
                                            }
                                            className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
                                            ELIMINAR
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <EditarItem />
        </div>
    )
}

export default ListaItem

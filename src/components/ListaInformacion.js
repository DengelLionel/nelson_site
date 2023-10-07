import React from 'react'
import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'

const ListaInformacion = () => {
    const [errorserv, setErrorserv] = useState(null)
    const data = useSWR('/api/info', () =>
        axios.get('/api/info').then(res => res.data),
    )
    const dato = data.data
    const EliminarItem = async item_eliminado => {
        try {
            await axios.delete(`/api/info/${item_eliminado}`)
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
                                    Telefono
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 w-[150px] lg:w-[400px] px-6 py-4 text-left">
                                    Celular
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 w-[150px] lg:w-[400px] px-6 py-4 text-left">
                                    Email 1
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 w-[150px] lg:w-[400px] px-6 py-4 text-left">
                                    Email 2
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 w-[150px] lg:w-[400px] px-6 py-4 text-left">
                                    Email 3
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 w-[150px] lg:w-[400px] px-6 py-4 text-left">
                                    Dirección
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 w-[150px] lg:w-[400px] px-6 py-4 text-left">
                                    Facebook
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 w-[150px] lg:w-[400px] px-6 py-4 text-left">
                                    Youtube
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 w-[150px] lg:w-[400px] px-6 py-4 text-left">
                                    Instagram
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 w-[150px] lg:w-[400px] px-6 py-4 text-left">
                                    Twiter
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 w-[150px] lg:w-[400px] px-6 py-4 text-left">
                                    Whatsapp
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dato?.map((item, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-gray-900 font-light  px-6 py-4 ">
                                        {item.telefono}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light  px-6 py-4 ">
                                        {item.celular}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light  px-6 py-4 ">
                                        {item.email1}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light  px-6 py-4 ">
                                        {item.email2}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light  px-6 py-4 ">
                                        {item.email3}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light  px-6 py-4 ">
                                        {item.direccion}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light  px-6 py-4 ">
                                        {item.facebook}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light  px-6 py-4 ">
                                        {item.youtube}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light  px-6 py-4 ">
                                        {item.instagram}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light  px-6 py-4 ">
                                        {item.twiter}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light  px-6 py-4 ">
                                        {item.whatsapp}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex flex-col justify-center items-center lg:flex-row">
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
        </div>
    )
}

export default ListaInformacion

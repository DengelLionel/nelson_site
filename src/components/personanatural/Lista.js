import React, { useState } from 'react'
import { saveAs } from 'file-saver'
import axios from '@/lib/axios'

const Lista = ({ datos }) => {
    const [dia, setDia] = useState('')
    const [error, setError] = useState(null)
    const handleExport = async () => {
        const response = await axios.get(`/api/descargarexcel?date=${dia}`, {
            responseType: 'blob',
        })
        const blob = new Blob([response.data], {
            type: 'application/vnd.ms-excel',
        })
        saveAs(blob, `${dia}-persona_natural.xlsx`)
    }

    const handleDescargarArchivo = async (carpeta, nombreArchivo) => {
        try {
            const url = `/api/descargararchivopublico/${carpeta}/${nombreArchivo}`
            const response = await axios.get(url, { responseType: 'blob' })
            const blob = new Blob([response.data])
            const urlObject = window.URL.createObjectURL(blob)

            // Crea un enlace temporal y lo simula como un clic para iniciar la descarga
            const a = document.createElement('a')
            a.style.display = 'none'
            a.href = urlObject
            a.download = nombreArchivo
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(urlObject)
        } catch (error) {
            setError(error)
        }
    }
    return (
        <div className="overflow-x-auto">
            <input
                style={{ display: 'none' }}
                type="hidden"
                defaultValue={error}
            />
            <h5 className="mb-4">PERSONA NATURAL</h5>
            <table className="min-w-full leading-normal">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="py-3 px-6 bg-blue-600 text-white font-semibold text-sm">
                            Fecha registro
                        </th>
                        <th className="py-3 px-6 bg-blue-600 text-white font-semibold text-sm">
                            Nombres
                        </th>
                        <th className="py-3 px-6 bg-blue-600 text-white font-semibold text-sm">
                            Apellidos
                        </th>
                        <th className="py-3 px-6 bg-blue-600 text-white font-semibold text-sm">
                            N° D. Identidad
                        </th>
                        <th className="py-3 px-6 bg-blue-600 text-white font-semibold text-sm">
                            Certificado
                        </th>
                        <th className="py-3 px-6 bg-blue-600 text-white font-semibold text-sm">
                            Documento de Identidad
                        </th>
                        <th className="py-3 px-6 bg-blue-600 text-white font-semibold text-sm">
                            Con Ruc
                        </th>
                        <th className="py-3 px-6 bg-blue-600 text-white font-semibold text-sm">
                            Sexo
                        </th>
                        <th className="py-3 px-6 bg-blue-600 text-white font-semibold text-sm">
                            Fecha de Nacimiento
                        </th>
                        <th className="py-3 px-6 bg-blue-600 text-white font-semibold text-sm">
                            Nacionalidad
                        </th>
                        <th className="py-3 px-6 bg-blue-600 text-white font-semibold text-sm">
                            Teléfonos celular
                        </th>
                        <th className="py-3 px-6 bg-blue-600 text-white font-semibold text-sm">
                            Correos
                        </th>
                        <th className="py-3 px-6 bg-blue-600 text-white font-semibold text-sm">
                            Provincia
                        </th>
                        <th className="py-3 px-6 bg-blue-600 text-white font-semibold text-sm">
                            Ciudad
                        </th>
                        <th className="py-3 px-6 bg-blue-600 text-white font-semibold text-sm">
                            Dirección
                        </th>
                        <th className="py-3 px-6 bg-blue-600 text-white font-semibold text-sm">
                            Tiempo de Vigencia
                        </th>
                        <th className="py-3 px-6 bg-blue-600 text-white font-semibold text-sm">
                            Imagenes
                        </th>
                        <th className="py-3 px-6 bg-blue-600 text-white font-semibold text-sm">
                            PDF RUC
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {/* Aquí van las filas de la tabla. Puedes mapear sobre los datos para generar las filas. */}
                    {datos?.map(dato => (
                        <tr
                            key={dato.id}
                            className="bg-white border-b border-gray-200 text-sm">
                            <td className="py-3 px-6 text-center">
                                {dato.dia_creado}
                            </td>
                            <td className="py-3 px-6 text-center">
                                {dato.nombres}
                            </td>
                            <td className="py-3 px-6 text-center">
                                {dato.apellidos}
                            </td>
                            <td className="py-3 px-6 text-center">
                                {dato.numero_documento_identidad}
                            </td>
                            <td className="py-3 px-6 text-center">
                                {dato.tipo_certificado}
                            </td>
                            <td className="py-3 px-6 text-center">
                                {' '}
                                {dato.documento_identidad}
                            </td>
                            <td className="py-3 px-6 text-center">
                                {dato.con_ruc}
                            </td>
                            <td className="py-3 px-6 text-center">
                                {dato.sexo}
                            </td>
                            <td className="py-3 px-6 text-center">
                                {dato.fecha_nacimiento}
                            </td>
                            <td className="py-3 px-6 text-center">
                                {dato.nacionalidad}
                            </td>
                            <td className="py-3 px-6 text-center">
                                <ol>
                                    <li>{dato.telefono_celular}</li>
                                    <li>{dato.telefono_celular2}</li>
                                </ol>
                            </td>
                            <td>
                                <ol>
                                    <li>{dato.correo}</li>
                                    <li>{dato.correo2}</li>
                                </ol>
                            </td>
                            <td>{dato.provincia}</td>
                            <td>{dato.ciudad}</td>
                            <td>{dato.direccion}</td>
                            <td>{dato.vigencia}</td>
                            <td>
                                <div className="flex flex-row mb-3">
                                    <button
                                        className="btn btn-success m-1"
                                        onClick={() =>
                                            handleDescargarArchivo(
                                                'personanatura/imagen_anverso',
                                                dato.imagen_anverso,
                                            )
                                        }>
                                        Imagen Anverso
                                    </button>
                                    <button
                                        className="btn btn-info m-1"
                                        onClick={() =>
                                            handleDescargarArchivo(
                                                'personanatura/imagen_resverso',
                                                dato.imagen_reverso,
                                            )
                                        }>
                                        Imagen Reverso
                                    </button>
                                    <button
                                        className="btn btn-secondary m-1"
                                        onClick={() =>
                                            handleDescargarArchivo(
                                                'personanatura/imagen_selfie',
                                                dato.imagen_selfie,
                                            )
                                        }>
                                        Imagen Selfie
                                    </button>
                                </div>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                        handleDescargarArchivo(
                                            'personanatura/pdf',
                                            dato.pdf,
                                        )
                                    }>
                                    PDF RUC
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-4">
                <label
                    htmlFor="dia"
                    className="block text-sm font-medium text-gray-700">
                    ELIJA EL DIA, PARA DESCARGAR EL EXCEL
                </label>
                <input
                    type="date"
                    id="dia"
                    name="dia"
                    className="mt-1 block w-[300px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={dia}
                    onChange={e => setDia(e.target.value)}
                />
                <button
                    onClick={handleExport}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <svg
                        className="mr-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512">
                        <path d="M224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM272.1 264.4L224 344l48.99 79.61C279.6 434.3 271.9 448 259.4 448h-26.43c-5.557 0-10.71-2.883-13.63-7.617L192 396l-27.31 44.38C161.8 445.1 156.6 448 151.1 448H124.6c-12.52 0-20.19-13.73-13.63-24.39L160 344L111 264.4C104.4 253.7 112.1 240 124.6 240h26.43c5.557 0 10.71 2.883 13.63 7.613L192 292l27.31-44.39C222.2 242.9 227.4 240 232.9 240h26.43C271.9 240 279.6 253.7 272.1 264.4zM256 0v128h128L256 0z" />
                    </svg>
                    DESCARGAR EXCEL
                </button>
            </div>
        </div>
    )
}

export default Lista

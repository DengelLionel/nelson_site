import { useContext, useState, useEffect } from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno'
import AdjuntarDoc from './AdjuntarDoc'
import axios from '@/lib/axios'
import SelectCiudadProvincia from '../SelectCiudadProvincia'
const Informacion = () => {
    const {
        dia_creado,
        setDia_creado,
        numero_documento_identidad,
        setNumero_documento_identidad,
        tipo_certificado,
        setTipo_certificado,
        documento_identidad,
        setDocumento_identidad,
        imagen_anverso,
        setImagen_anverso,
        imagen_reverso,
        setImagen_reverso,
        pdf,
        setPdf,
        imagen_selfie,
        setImagen_selfie,
        nombres,
        setNombres,
        apellidos,
        setApellidos,
        con_ruc,
        setCon_ruc,
        sexo,
        setSexo,
        fecha_nacimiento,
        setFecha_nacimiento,
        nacionalidad,
        setNacionalidad,
        telefono_celular,
        setTelefono_celular,
        telefono_celular2,
        setTelefono_celular2,
        correo,
        setCorreo,
        correo2,
        setCorreo2,
        provincia,

        ciudad,

        direccion,
        setDireccion,
        vigencia,
        setVigencia,
    } = useContext(PaginaContextValue)
    const [anverso_preview, setAnverso_preview] = useState(null)
    const [reverso_preview, setReverso_preview] = useState(null)
    const [selfie_preview, setSelfie_preview] = useState(null)
    const handleAnversoChange = event => {
        const file = event.target.files[0]
        setImagen_anverso(file)
        setAnverso_preview(URL.createObjectURL(file))
    }
    const handleReversoChange = event => {
        const file = event.target.files[0]
        setImagen_reverso(file)
        setReverso_preview(URL.createObjectURL(file))
    }
    const handleSelfieChange = event => {
        const file = event.target.files[0]
        setImagen_selfie(file)
        setSelfie_preview(URL.createObjectURL(file))
    }
    const handleConrucPdfChange = e => {
        const file = e.target.files[0]
        setPdf(file)
        setPdfPreview(URL.createObjectURL(file))
    }

    useEffect(() => {
        const fechaActual = new Date()
        const dia = String(fechaActual.getDate()).padStart(2, '0')
        const mes = String(fechaActual.getMonth() + 1).padStart(2, '0') // Enero es 0!
        const ano = fechaActual.getFullYear()

        setDia_creado(ano + '-' + mes + '-' + dia)
    }, [])

    const handleRucChange = event => {
        setCon_ruc(event.target.value)

        if (event.target.value === 'SI') {
            // Llamada a la función activar()
        } else if (event.target.value === 'NO') {
            // Llamada a la función desactivar()
        }
    }
    const [pdfPreview, setPdfPreview] = useState(null)
    const [errorServer, setErrorServer] = useState(null)
    const handleSubmit = async e => {
        e.preventDefault()

        // Crear una nueva instancia de FormData y llenarla con los valores del estado
        const formData = new FormData()
        formData.append('dia_creado', dia_creado)
        formData.append(
            'numero_documento_identidad',
            numero_documento_identidad,
        )
        formData.append('tipo_certificado', tipo_certificado)
        formData.append('documento_identidad', documento_identidad)
        formData.append('imagen_anverso', imagen_anverso)
        formData.append('imagen_reverso', imagen_reverso)
        formData.append('pdf', pdf)
        formData.append('imagen_selfie', imagen_selfie)
        formData.append('nombres', nombres)
        formData.append('apellidos', apellidos)
        formData.append('con_ruc', con_ruc)
        formData.append('sexo', sexo)
        formData.append('fecha_nacimiento', fecha_nacimiento)
        formData.append('nacionalidad', nacionalidad)
        formData.append('telefono_celular', telefono_celular)
        formData.append('telefono_celular2', telefono_celular2)
        formData.append('correo', correo)
        formData.append('correo2', correo2)
        formData.append('provincia', provincia)
        formData.append('ciudad', ciudad)
        formData.append('direccion', direccion)
        formData.append('vigencia', vigencia)

        const csrf = () => axios.get('/sanctum/csrf-cookie')
        try {
            await csrf()
            await axios.post('/api/personanatural', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        } catch (error) {
            setErrorServer(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
                {/* Aquí empiezan los campos de entrada */}
                {/* Debes seguir este patrón para crear los campos de entrada restantes */}
                {/* Cada div representa un campo de entrada */}

                {/* Campo de entrada: documento_identidad */}
                <input value={pdfPreview} type="hidden" />
                <input value={errorServer} type="hidden" />
                <div>
                    <input value={dia_creado} type="hidden" id="dia_creado" />
                    <label htmlFor="documento_identidad" className="sr-only">
                        Documento de Identidad
                    </label>
                    <select
                        onChange={e => setDocumento_identidad(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        name="documento_identidad"
                        id="documento_identidad">
                        <option>Seleccione Identidad</option>
                        <option value="CEDULA">CEDULA</option>
                        <option value="PASAPORTE">PASAPORTE</option>
                    </select>
                </div>

                {/* Campo de entrada: numero_documento_identidad */}
                <div>
                    <label
                        htmlFor="numero_documento_identidad"
                        className="sr-only">
                        Número de Documento
                    </label>
                    <input
                        value={numero_documento_identidad}
                        onChange={e =>
                            setNumero_documento_identidad(e.target.value)
                        }
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="text"
                        placeholder="Número de Documento"
                        name="numero_documento_identidad"
                        id="numero_documento_identidad"
                    />
                </div>

                {/* Campo de entrada: nacionalidad */}
                <div>
                    <label htmlFor="nacionalidad" className="sr-only">
                        Nacionalidad
                    </label>
                    <input
                        value={nacionalidad}
                        onChange={e => setNacionalidad(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="text"
                        placeholder="Nacionalidad"
                        name="nacionalidad"
                        id="nacionalidad"
                    />
                </div>

                {/* Campo de entrada: nombres */}
                <div>
                    <label htmlFor="nombres" className="sr-only">
                        Nombres
                    </label>
                    <input
                        value={nombres}
                        onChange={e => setNombres(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="text"
                        placeholder="Nombres"
                        name="nombres"
                        id="nombres"
                    />
                </div>

                {/* Campo de entrada: apellidos */}
                <div>
                    <label htmlFor="apellidos" className="sr-only">
                        Apellidos
                    </label>
                    <input
                        value={apellidos}
                        onChange={e => setApellidos(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="text"
                        placeholder="Apellidos"
                        name="apellidos"
                        id="apellidos"
                    />
                </div>

                {/* Campo de entrada: fecha_nacimiento */}

                <div className="flex flex-row items-center pl-[10px]">
                    <label
                        htmlFor="fecha_nacimiento"
                        className="w-[50%] text-sm text-gray-700">
                        Fecha de Nacimiento
                    </label>
                    <input
                        value={fecha_nacimiento}
                        onChange={e => setFecha_nacimiento(e.target.value)}
                        className="appearance-none rounded-none relative block w-[50%] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="date"
                        name="fecha_nacimiento"
                        id="fecha_nacimiento"
                    />
                </div>

                {/* Campo de entrada: telefono_celular 1 */}
                <div>
                    <label htmlFor="telefono_movil" className="sr-only">
                        Teléfono Móvil
                    </label>
                    <input
                        value={telefono_celular}
                        onChange={e => setTelefono_celular(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="tel"
                        placeholder="* Teléfono celular 1"
                        name="telefono_movil"
                        id="telefono_movil"
                    />
                </div>

                {/* Campo de entrada: telefono_celular 2 */}
                <div>
                    <label htmlFor="telefono_celular" className="sr-only">
                        Teléfono Fijo
                    </label>
                    <input
                        value={telefono_celular2}
                        onChange={e => setTelefono_celular2(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="tel"
                        placeholder="Teléfono celular 2 "
                        name="telefono_fijo"
                        id="telefono_fijo"
                    />
                </div>

                {/* Campo de entrada: sexo */}
                <div>
                    <label htmlFor="sexo" className="sr-only">
                        Sexo
                    </label>
                    <select
                        onChange={e => setSexo(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        name="sexo"
                        id="sexo">
                        <option>Seleccione Sexo</option>
                        <option value="MASCULINO">MASCULINO</option>
                        <option value="FEMENINO">FEMENINO</option>
                    </select>
                </div>

                {/* Campo de entrada: correo_principal */}
                <div>
                    <label htmlFor="correo_principal" className="sr-only">
                        Correo{' '}
                    </label>
                    <input
                        value={correo}
                        onChange={e => setCorreo(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="email"
                        placeholder="* Correo "
                        name="correo_principal"
                        id="correo_principal"
                    />
                </div>

                {/* Campo de entrada: correo_secundario */}
                <div>
                    <label htmlFor="correo_secundario" className="sr-only">
                        Correo 2
                    </label>
                    <input
                        value={correo2}
                        onChange={e => setCorreo2(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="email"
                        placeholder="Correo 2"
                        name="correo_secundario"
                        id="correo_secundario"
                    />
                </div>

                <div className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                    <label htmlFor="con_ruc" className="text-sm text-gray-600">
                        Con Ruc
                    </label>
                    <div className="flex items-center space-x-2">
                        <input
                            type="radio"
                            id="ruc"
                            name="con_ruc"
                            value="SI"
                            onChange={handleRucChange}
                            className="form-check-input"
                        />
                        <label htmlFor="ruc" className="text-sm text-gray-600">
                            SI
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="radio"
                            id="sin_ruc"
                            name="con_ruc"
                            value="NO"
                            onChange={handleRucChange}
                            className="form-check-input"
                        />
                        <label
                            htmlFor="sin_ruc"
                            className="text-sm text-gray-600">
                            NO
                        </label>
                    </div>
                </div>
                {/* con RUC */}
                {con_ruc === 'SI' && (
                    <div className="flex items-center justify-center w-full px-6 py-6 bg-white border border-gray-300 border-dashed rounded-md shadow-sm hover:bg-gray-100 transition-all duration-300 ease-in-out">
                        <div className="text-center">
                            <svg
                                className="w-12 h-12 mx-auto mb-4 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 48 48"
                                aria-hidden="true">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 32l6-6m-6 0l6 6m-6-6h36"
                                />
                            </svg>
                            {pdf ? (
                                <p>
                                    Archivo seleccionado: {pdf.name}, tamaño:{' '}
                                    {pdf.size} bytes
                                </p>
                            ) : (
                                <h2 className="mb-2 text-sm font-medium text-gray-600">
                                    RUC (.pdf) - PDF
                                </h2>
                            )}

                            <p className="text-xs text-gray-500">
                                PDF up to 10MB
                            </p>
                            <div className="mt-4">
                                <label className="cursor-pointer bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors duration-200">
                                    <span>Seleccionar un archivo</span>
                                    <input
                                        type="file"
                                        id="pdf"
                                        name="pdf"
                                        onChange={handleConrucPdfChange}
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-xl shadow-lg">
                <div>
                    <h5 className="mt-6">2.- FORMATO Y VIGENCIA DE FIRMA</h5>
                </div>
                <div>
                    <label htmlFor="sexo" className="sr-only">
                        Tipo de Certificado
                    </label>
                    <select
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        name="tipo_certificado"
                        onChange={e => setTipo_certificado(e.target.value)}
                        id="tipo_certificado">
                        <option selected>Seleccione Certificado</option>
                        <option value="ARCHIVO .P12">ARCHIVO P12</option>
                        <option value="TOKEN">FIRMA EN TOKEN</option>
                        <option value="NUBE">FIRMA EN NUBE</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="sexo" className="sr-only">
                        Tiempo de Vigencia
                    </label>
                    <select
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        onChange={e => setVigencia(e.target.value)}
                        name="vigencia"
                        id="vigencia">
                        <option selected>Seleccione Vigencia</option>
                        <option value="1 año">1 año</option>
                        <option value="2 años">2 años</option>
                        <option value="3 años">3 años</option>
                        <option value="4 años">4 años</option>
                        <option value="5 años">5 años</option>
                        <option value="6 años">6 años</option>
                        <option value="7 años">7 días</option>
                    </select>
                </div>
            </div>

            <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-xl shadow-lg">
                <div>
                    <h5 className="mt-6">3.- DIRECCIÓN DE DOMICILIO</h5>
                </div>
                <SelectCiudadProvincia />

                <div>
                    <label htmlFor="apellidos" className="sr-only">
                        Dirección
                    </label>
                    <input
                        value={direccion}
                        onChange={e => setDireccion(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="text"
                        placeholder="Dirección"
                        name="apellidos"
                        id="direccion"
                    />
                </div>
            </div>

            <div className="p-4">
                <h5 className="mb-4 text-lg font-bold">
                    4.- ADJUNTAR DOCUMENTOS
                </h5>
                <AdjuntarDoc
                    imagen_preview={anverso_preview}
                    label="Cédula o pasaporte - anverso (.jpg - .png - foto celular)"
                    handleChange={handleAnversoChange}
                />
                <AdjuntarDoc
                    imagen_preview={reverso_preview}
                    label="Cédula - reverso (.jpg - .png - foto celular)"
                    handleChange={handleReversoChange}
                />
                <AdjuntarDoc
                    imagen_preview={selfie_preview}
                    label="Foto selfie de su cara con su cédula debajo de la barbilla (.jpg - .png - foto celular)"
                    handleChange={handleSelfieChange}
                />
            </div>

            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <i className="fas fa-arrow-right" />
                    </span>
                    Enviar
                </button>
            </div>
        </form>
    )
}

export default Informacion

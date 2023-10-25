import { useContext, useState, useEffect } from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno'
import AdjuntarDoc from '@/components/personanatural/AdjuntarDoc'
import InputDev from './Input'
import SelectCiudadProvincia from '../SelectCiudadProvincia'
import axios from '@/lib/axios'
const Formulario = () => {
    const {
        dia_creado,
        setDia_creado,
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
        numero_ruc,
        setNumero_ruc,
        cargo_representante,
        setCargo_representante,
        razon_social,
        setRazon_social,
        constitucion_compañia,
        setConstitucion_compañia,
        nombramiento,
        setNombramiento,
        cargo_del_miembro,
        setCargo_del_miembro,
        numero_documento_miembro_empresa,
        setNumero_documento_miembro_empresa,
        nombres_miembro,
        setNombres_miembro,
        apellidos_miembro,
        setApellidos_miembro,
        departamento_que_labora,
        setDepartamento_que_labora,
        documento_identidad_representante_legal,
        setDocumento_identidad_representante_legal,
        numero_documento_representante_legal,
        setNumero_documento_representante_legal,
        nombres_representante_legal,
        setNombres_representante_legal,
        apellidos_representante_legal,
        setApellidos_representante_legal,
        motivo_uso_firma,
        setMotivo_uso_firma,
        autorizacion_representante,
        setAutorizacion_representante,
    } = useContext(PaginaContextValue)
    useEffect(() => {
        const fechaActual = new Date()
        const dia = String(fechaActual.getDate()).padStart(2, '0')
        const mes = String(fechaActual.getMonth() + 1).padStart(2, '0') // Enero es 0!
        const ano = fechaActual.getFullYear()

        setDia_creado(ano + '-' + mes + '-' + dia)
    }, [])

    const [anverso_preview, setAnverso_preview] = useState(null)
    const [reverso_preview, setReverso_preview] = useState(null)
    const [selfie_preview, setSelfie_preview] = useState(null)
    const [pdfruc_preview, setPdfruc_preview] = useState(null)
    const [
        pdfConstitucionCompañia_preview,
        setPdfConstitucionCompañia_preview,
    ] = useState(null)
    const [pdfNombramiento_preview, setPdfNombramiento_preview] = useState(null)
    const [errorServer, setErrorServer] = useState(null)
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
    const handlePdfRucChange = e => {
        const file = e.target.files[0]
        setPdf(file)
        setPdfruc_preview(URL.createObjectURL(file))
    }
    const handlePdfConstitucionCompañiaChange = e => {
        const file = e.target.files[0]
        setConstitucion_compañia(file)
        setPdfConstitucionCompañia_preview(URL.createObjectURL(file))
    }
    const handlePdfNombramientoChange = e => {
        const file = e.target.files[0]
        setNombramiento(file)
        setPdfNombramiento_preview(URL.createObjectURL(file))
    }
    const handlePdfAutorizacionChange = e => {
        const file = e.target.files[0]
        setAutorizacion_representante(file)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        // Crear una nueva instancia de FormData y llenarla con los valores del estado
        const formData = new FormData()
        formData.append('dia_creado', dia_creado)
        formData.append(
            'numero_documento_miembro_empresa',
            numero_documento_miembro_empresa,
        )
        formData.append(
            'documento_identidad_miembro_empresa',
            documento_identidad,
        )
        formData.append('numero_ruc', numero_ruc)
        formData.append('razon_social', razon_social)
        formData.append('cargo_representante', cargo_representante)
        formData.append('cargo_del_miembro', cargo_del_miembro)
        formData.append('departamento_que_labora', departamento_que_labora)
        formData.append(
            'numero_documento_representante_legal',
            numero_documento_representante_legal,
        )
        formData.append(
            'documento_identidad_representante_legal',
            documento_identidad_representante_legal,
        )
        formData.append('nombres_miembro', nombres_miembro)
        formData.append('apellidos_miembro', apellidos_miembro)
        formData.append('motivo_uso_firma', motivo_uso_firma)
        formData.append(
            'apellidos_representante_legal',
            apellidos_representante_legal,
        )
        formData.append(
            'nombres_representante_legal',
            nombres_representante_legal,
        )
        formData.append('constitucion_compañia', constitucion_compañia)
        formData.append('nombramiento', nombramiento)
        formData.append(
            'autorizacion_representante',
            autorizacion_representante,
        )
        formData.append('tipo_certificado', tipo_certificado)
        formData.append('imagen_anverso', imagen_anverso)
        formData.append('imagen_reverso', imagen_reverso)
        formData.append('pdf', pdf)
        formData.append('imagen_selfie', imagen_selfie)
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
            await axios.post('/api/miembroempresa', formData, {
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
            <input
                style={{ display: 'none' }}
                type="hidden"
                defaultValue={pdfruc_preview}
            />
            <input
                style={{ display: 'none' }}
                type="hidden"
                defaultValue={pdfConstitucionCompañia_preview}
            />
            <input
                style={{ display: 'none' }}
                type="hidden"
                defaultValue={pdfNombramiento_preview}
            />
            <input
                style={{ display: 'none' }}
                type="hidden"
                defaultValue={errorServer}
            />
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label htmlFor="numero_ruc" className="sr-only">
                        Número de RUC{' '}
                    </label>
                    <input
                        value={numero_ruc}
                        onChange={e => setNumero_ruc(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="text"
                        placeholder="Número de RUC"
                        name="numero_ruc"
                        id="numero_ruc"
                    />
                </div>

                <div>
                    <label htmlFor="razon_social" className="sr-only">
                        Razón Social{' '}
                    </label>
                    <input
                        value={razon_social}
                        onChange={e => setRazon_social(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="text"
                        placeholder="Razón Social"
                        name="razon_social"
                        id="razon_social"
                    />
                </div>

                <div>
                    <label htmlFor="cargo_representante" className="sr-only">
                        Cargo del Miembro Empresa{' '}
                    </label>
                    <input
                        value={cargo_del_miembro}
                        onChange={e => setCargo_del_miembro(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="text"
                        placeholder="Cargo del  miembro empresa"
                        name="cargo_miembro"
                        id="cargo_miembro"
                    />
                </div>

                <h5 className="mt-6">2.- INFORMACIÓN DEL MIEMBRO DE EMPRESA</h5>
                <div>
                    <input value={dia_creado} type="hidden" id="dia_creado" />
                    <label htmlFor="documento_identidad" className="sr-only">
                        Tipo de Documento
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
                        value={numero_documento_miembro_empresa}
                        onChange={e =>
                            setNumero_documento_miembro_empresa(e.target.value)
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
                        value={nombres_miembro}
                        onChange={e => setNombres_miembro(e.target.value)}
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
                        value={apellidos_miembro}
                        onChange={e => setApellidos_miembro(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="text"
                        placeholder="Apellidos"
                        name="apellidos"
                        id="apellidos"
                    />
                </div>
                <div>
                    <label htmlFor="apellidos" className="sr-only">
                        Departamento que labora
                    </label>
                    <input
                        value={departamento_que_labora}
                        onChange={e =>
                            setDepartamento_que_labora(e.target.value)
                        }
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="text"
                        placeholder="Departamento que labora"
                        name="departamento"
                        id="departamento"
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
                        Celular
                    </label>
                    <input
                        value={telefono_celular}
                        onChange={e => setTelefono_celular(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="tel"
                        placeholder="Teléfono celular 1"
                        name="telefono_movil"
                        id="telefono_movil"
                    />
                </div>

                {/* Campo de entrada: telefono_celular 2 */}
                <div>
                    <label htmlFor="telefono_celular" className="sr-only">
                        Celular 2
                    </label>
                    <input
                        value={telefono_celular2}
                        onChange={e => setTelefono_celular2(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="tel"
                        placeholder="Teléfono celular 2"
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
                        placeholder="Correo "
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

                <h5 className="mt-6">3.-INFORMACIÓN DEL REPRESENTANTE LEGAL</h5>
            </div>

            <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-xl shadow-lg">
                <div />
                <div>
                    <label className="sr-only">Tipo de Documento</label>
                    <select
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        name="tipo_certificado"
                        onChange={e =>
                            setDocumento_identidad_representante_legal(
                                e.target.value,
                            )
                        }
                        id="tipo_certificado">
                        <option>Seleccione Identidad</option>
                        <option value="CEDULA">CEDULA</option>
                        <option value="PASAPORTE">PASAPORTE</option>
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="numero_documento_identidad"
                        className="sr-only">
                        Número de Documento
                    </label>
                    <input
                        value={numero_documento_representante_legal}
                        onChange={e =>
                            setNumero_documento_representante_legal(
                                e.target.value,
                            )
                        }
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="text"
                        placeholder="Número de Documento"
                        name="numero_documento_id"
                        id="numero_documento_id"
                    />
                </div>
                <InputDev
                    valor={cargo_representante}
                    nombre="Cargo del Represente Legal"
                    change={e => setCargo_representante(e.target.value)}
                />
                <InputDev
                    valor={nombres_representante_legal}
                    nombre="Nombres"
                    change={e => setNombres_representante_legal(e.target.value)}
                />

                <InputDev
                    valor={apellidos_representante_legal}
                    nombre="Apellidos"
                    change={e =>
                        setApellidos_representante_legal(e.target.value)
                    }
                />

                <InputDev
                    valor={motivo_uso_firma}
                    nombre="Motivo / uso de la firma"
                    change={e => setMotivo_uso_firma(e.target.value)}
                />
            </div>

            <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-xl shadow-lg">
                <div>
                    <h5 className="mt-6">4.- FORMATO Y VIGENCIA DE FIRMA </h5>
                </div>

                <div>
                    <label htmlFor="formato" className="sr-only">
                        Formato
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
                    <label htmlFor="vigencia" className="sr-only">
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
                <div>
                    <h5 className="mt-6">
                        5.- DIRECCIÓN COMO CONSTA EN EL RUC DE CIA{' '}
                    </h5>
                </div>
                <SelectCiudadProvincia />

                <div>
                    <label htmlFor="apellidos" className="sr-only">
                        Dirección /calle/mz./solar
                    </label>
                    <input
                        value={direccion}
                        onChange={e => setDireccion(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="text"
                        placeholder="Dirección /calle/mz./solar"
                        name="direccion"
                        id="direccion"
                    />
                </div>
            </div>

            <div className="p-4">
                <h5 className="mb-4 text-lg font-bold">
                    6.- ADJUNTAR DOCUMENTOS{' '}
                </h5>
                <AdjuntarDoc
                    imagen_preview={anverso_preview}
                    label="1.-Cédula o pasaporte - anverso (.jpg - .png - foto celular (2Mb)) Representante Legal "
                    handleChange={handleAnversoChange}
                />

                <AdjuntarDoc
                    imagen_preview={reverso_preview}
                    label="2.- Cédula - reverso (.jpg - .png - foto celular (2Mb)) Representante Legal"
                    handleChange={handleReversoChange}
                />

                <AdjuntarDoc
                    pdf_preview={pdf}
                    label="3.- RUC (.pdf) Empresa"
                    handleChange={handlePdfRucChange}
                />

                <AdjuntarDoc
                    imagen_preview={selfie_preview}
                    label="4.-  Foto selfie de su cara con su cédula debajo de la barbilla (.jpg - .png - foto celular) "
                    handleChange={handleSelfieChange}
                />

                <AdjuntarDoc
                    pdf_preview={constitucion_compañia}
                    label="5.- constitucion de compañía (.pdf) - Empresa"
                    handleChange={handlePdfConstitucionCompañiaChange}
                />

                <AdjuntarDoc
                    pdf_preview={nombramiento}
                    label="6.- Nombramiento (.pdf) - Representante Legal"
                    handleChange={handlePdfNombramientoChange}
                />

                <AdjuntarDoc
                    pdf_preview={autorizacion_representante}
                    label="7.- Carta de autorización del representante legal al miembro de empresa. (.pdf)"
                    handleChange={handlePdfAutorizacionChange}
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

export default Formulario

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
        setProvincia,
        provincia,
        ciudad,
        setCiudad,
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
    const [erroresValidacion, setErroresValidacion] = useState({})
    const [anverso_preview, setAnverso_preview] = useState(null)
    const [reverso_preview, setReverso_preview] = useState(null)
    const [selfie_preview, setSelfie_preview] = useState(null)
    const [pdfruc_preview, setPdfruc_preview] = useState(null)
    const [enviado, setEnviado] = useState(false)
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

        let errores = {}
        if (!numero_ruc)
            errores.numero_ruc = "El campo 'Número RUC' es obligatorio."
        if (!razon_social)
            errores.razon_social = "El campo 'Razon social' es obligatorio."
        if (!cargo_del_miembro)
            errores.cargo_del_miembro =
                "El campo 'Cargo del miembro empresa' es obligatorio."
        if (!tipo_certificado)
            errores.tipo_certificado =
                "El campo 'Tipo de Certificado' es obligatorio."
        if (!documento_identidad)
            errores.documento_identidad =
                "Debe seleccionar un 'Tipo de Documento'."
        if (!sexo) errores.sexo = "Debe seleccionar el 'Sexo'."
        if (!fecha_nacimiento)
            errores.fecha_nacimiento =
                "El campo 'Fecha de Nacimiento' es obligatorio."
        if (!nacionalidad)
            errores.nacionalidad = "El campo 'Nacionalidad' es obligatorio."
        if (!telefono_celular)
            errores.telefono_celular =
                "El campo 'Teléfono Celular' es obligatorio."
        if (!correo) errores.correo = "El campo 'Correo' es obligatorio."
        if (!provincia) errores.provincia = "Debe seleccionar una 'Provincia'."
        if (!ciudad) errores.ciudad = "Debe seleccionar una 'Ciudad'."
        if (!direccion)
            errores.direccion = "El campo 'Dirección' es obligatorio."
        if (!vigencia)
            errores.vigencia = "Debe seleccionar la 'Vigencia' del certificado."

        // Validaciones para documentos adjuntos
        if (!imagen_anverso)
            errores.imagen_anverso =
                'Debe adjuntar la imagen del anverso del documento.'
        if (!imagen_reverso)
            errores.imagen_reverso =
                'Debe adjuntar la imagen del reverso del documento.'
        if (!pdf) errores.pdf = 'Debe adjuntar el RUC de la empresa.'
        if (!imagen_selfie)
            errores.imagen_selfie = 'Debe adjuntar una selfie con el documento.'
        if (!constitucion_compañia)
            errores.constitucion_compañia =
                'Debe adjuntar el documento de constitución de la compañía.'
        if (!nombramiento)
            errores.nombramiento =
                'Debe adjuntar el documento de nombramiento del representante legal.'
        if (!autorizacion_representante)
            errores.autorizacion_representante =
                'Debe adjuntar la carta de autorización del representante legal.'
        if (!documento_identidad_representante_legal)
            errores.documento_identidad_representante_legal =
                "Debe seleccionar el 'Tipo de Documento' del representante legal."
        if (!numero_documento_representante_legal)
            errores.numero_documento_representante_legal =
                "El 'Número de Documento' del representante legal es obligatorio."
        if (!nombres_representante_legal)
            errores.nombres_representante_legal =
                "El campo 'Nombres del Representante Legal' es obligatorio."
        if (!apellidos_representante_legal)
            errores.apellidos_representante_legal =
                "El campo 'Apellidos del Representante Legal' es obligatorio."
        if (!cargo_representante)
            errores.cargo_representante =
                "El campo 'Cargo del Representante Legal' es obligatorio."
        if (!motivo_uso_firma)
            errores.motivo_uso_firma =
                "El 'Motivo/Uso de la Firma' es obligatorio."
        if (!numero_documento_miembro_empresa)
            errores.numero_documento_miembro_empresa =
                "El 'Número de documento del miembro empresa' es obligatorio."
        if (!nombres_miembro)
            errores.nombres_miembro =
                "El 'Nombres miembro empresa' es obligatorio."
        if (!apellidos_miembro)
            errores.apellidos_miembro =
                "El 'Apellidos miembro empresa' es obligatorio."
        if (!departamento_que_labora)
            errores.departamento_que_labora =
                "El 'Departamento que labora' es obligatorio."
        // Si hay errores, actualiza el estado y no procede con el envío
        if (Object.keys(errores).length > 0) {
            setErroresValidacion(errores)
            return // Detiene la ejecución si hay errores
        }

        setErrorServer({})
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
            setEnviado(true)
            window.location = '/agradecimiento_miembroempresa'
            setAnverso_preview('')
            setReverso_preview('')
            setSelfie_preview('')
            setPdfruc_preview('')
            setPdfNombramiento_preview('')
            setPdfConstitucionCompañia_preview('')
            setDia_creado('')
            setNumero_documento_miembro_empresa('')
            setDocumento_identidad('')
            setNumero_ruc('')
            setRazon_social('')
            setCargo_representante('')
            setCargo_del_miembro('')
            setDepartamento_que_labora('')
            setNumero_documento_representante_legal('')
            setDocumento_identidad_representante_legal('')
            setNombres_miembro('')
            setApellidos_miembro('')
            setMotivo_uso_firma('')
            setApellidos_representante_legal('')
            setNombres_representante_legal('')
            setConstitucion_compañia('')
            setNombramiento('')
            setAutorizacion_representante('')
            setTipo_certificado('')
            setImagen_anverso('')
            setImagen_reverso('')
            setPdf('')
            setImagen_selfie('')
            setSexo('')
            setFecha_nacimiento('')
            setNacionalidad('')
            setTelefono_celular('')
            setTelefono_celular2('')
            setCorreo('')
            setCorreo2('')
            setProvincia('')
            setCiudad('')
            setDireccion('')
            setVigencia('')
        } catch (error) {
            setErrorServer(error)
            setEnviado(false)
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
                {erroresValidacion.numero_ruc && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.numero_ruc}
                    </p>
                )}
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
                {erroresValidacion.razon_social && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.razon_social}
                    </p>
                )}
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
                {erroresValidacion.cargo_del_miembro && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.cargo_del_miembro}
                    </p>
                )}
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
                {erroresValidacion.documento_identidad && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.documento_identidad}
                    </p>
                )}
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
                {erroresValidacion.numero_documento_miembro_empresa && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.numero_documento_miembro_empresa}
                    </p>
                )}
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
                {erroresValidacion.nacionalidad && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.nacionalidad}
                    </p>
                )}
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
                {erroresValidacion.nombres_miembro && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.nombres_miembro}
                    </p>
                )}
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
                {erroresValidacion.apellidos_miembro && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.apellidos_miembro}
                    </p>
                )}
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
                {erroresValidacion.departamento_que_labora && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.departamento_que_labora}
                    </p>
                )}
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
                {erroresValidacion.fecha_nacimiento && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.fecha_nacimiento}
                    </p>
                )}
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
                {erroresValidacion.telefono_celular && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.telefono_celular}
                    </p>
                )}
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
                {erroresValidacion.sexo && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.sexo}
                    </p>
                )}
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
                {erroresValidacion.correo && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.correo}
                    </p>
                )}
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
                {erroresValidacion.documento_identidad_representante_legal && (
                    <p className="text-red-500 text-xs italic">
                        {
                            erroresValidacion.documento_identidad_representante_legal
                        }
                    </p>
                )}
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
                {erroresValidacion.numero_documento_representante_legal && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.numero_documento_representante_legal}
                    </p>
                )}
                <InputDev
                    valor={cargo_representante}
                    nombre="Cargo del Represente Legal"
                    change={e => setCargo_representante(e.target.value)}
                />
                {erroresValidacion.cargo_representante && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.cargo_representante}
                    </p>
                )}
                <InputDev
                    valor={nombres_representante_legal}
                    nombre="Nombres"
                    change={e => setNombres_representante_legal(e.target.value)}
                />
                {erroresValidacion.nombres_representante_legal && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.nombres_representante_legal}
                    </p>
                )}
                <InputDev
                    valor={apellidos_representante_legal}
                    nombre="Apellidos"
                    change={e =>
                        setApellidos_representante_legal(e.target.value)
                    }
                />
                {erroresValidacion.apellidos_representante_legal && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.apellidos_representante_legal}
                    </p>
                )}
                <InputDev
                    valor={motivo_uso_firma}
                    nombre="Motivo / uso de la firma"
                    change={e => setMotivo_uso_firma(e.target.value)}
                />
                {erroresValidacion.motivo_uso_firma && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.motivo_uso_firma}
                    </p>
                )}
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
                {erroresValidacion.tipo_certificado && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.tipo_certificado}
                    </p>
                )}
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
                        <option value="7 días">7 días</option>
                        <option value="30 días">30 días</option>
                    </select>
                </div>
                {erroresValidacion.vigencia && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.vigencia}
                    </p>
                )}
                <div>
                    <h5 className="mt-6">
                        5.- DIRECCIÓN COMO CONSTA EN EL RUC DE CIA{' '}
                    </h5>
                </div>
                <SelectCiudadProvincia
                    errorciudad={
                        erroresValidacion.ciudad && (
                            <p className="text-red-500 text-xs italic">
                                {erroresValidacion.ciudad}
                            </p>
                        )
                    }
                    errorprovincia={
                        erroresValidacion.provincia && (
                            <p className="text-red-500 text-xs italic">
                                {erroresValidacion.provincia}
                            </p>
                        )
                    }
                />

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
                {erroresValidacion.direccion && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.direccion}
                    </p>
                )}
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
                {erroresValidacion.imagen_anverso && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.imagen_anverso}
                    </p>
                )}
                <AdjuntarDoc
                    imagen_preview={reverso_preview}
                    label="2.- Cédula - reverso (.jpg - .png - foto celular (2Mb)) Representante Legal"
                    handleChange={handleReversoChange}
                />
                {erroresValidacion.imagen_reverso && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.imagen_reverso}
                    </p>
                )}
                <AdjuntarDoc
                    pdf_preview={pdf}
                    label="3.- RUC (.pdf) Empresa"
                    handleChange={handlePdfRucChange}
                />
                {erroresValidacion.pdf && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.pdf}
                    </p>
                )}
                <AdjuntarDoc
                    imagen_preview={selfie_preview}
                    label="4.-  Foto selfie de su cara con su cédula debajo de la barbilla (.jpg - .png - foto celular) "
                    handleChange={handleSelfieChange}
                />
                {erroresValidacion.imagen_selfie && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.imagen_selfie}
                    </p>
                )}
                <AdjuntarDoc
                    pdf_preview={constitucion_compañia}
                    label="5.- constitucion de compañía (.pdf) - Empresa"
                    handleChange={handlePdfConstitucionCompañiaChange}
                />
                {erroresValidacion.constitucion_compañia && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.constitucion_compañia}
                    </p>
                )}
                <AdjuntarDoc
                    pdf_preview={nombramiento}
                    label="6.- Nombramiento (.pdf) - Representante Legal"
                    handleChange={handlePdfNombramientoChange}
                />
                {erroresValidacion.nombramiento && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.nombramiento}
                    </p>
                )}
                <AdjuntarDoc
                    pdf_preview={autorizacion_representante}
                    label="7.- Carta de autorización del representante legal al miembro de empresa. (.pdf)"
                    handleChange={handlePdfAutorizacionChange}
                />
                {erroresValidacion.autorizacion_representante && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.autorizacion_representante}
                    </p>
                )}
            </div>

            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <i className="fas fa-arrow-right" />
                    </span>
                    {enviado === false ? 'ENVIAR' : 'FUE ENVIADO CON EXITO'}
                </button>
            </div>
        </form>
    )
}

export default Formulario

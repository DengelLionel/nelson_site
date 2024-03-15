import { useContext, useState, useEffect } from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno'
import AdjuntarDoc from '@/components/personanatural/AdjuntarDoc'
import SelectCiudadProvincia from '../SelectCiudadProvincia'
import axios from '@/lib/axios'
const Formulario = () => {
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
        sexo,
        setSexo,
        fecha_nacimiento,
        setFecha_nacimiento,
        nacionalidad,
        setNacionalidad,
        telefono_celular,
        setTelefono_celular,
        correo,
        setCorreo,
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
        setComprobantepago,
        comprobantepago,
        setCedula,
        cedula,
        setDistribuidor,
        distribuidor,
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
    const [enviando, setEnviando] = useState(false)
    const [
        pdfConstitucionCompañia_preview,
        setPdfConstitucionCompañia_preview,
    ] = useState(null)
    const [pdfNombramiento_preview, setPdfNombramiento_preview] = useState(null)
    const [pdfComprobante_preview, setPdfComprobante_preview] = useState(null)
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
    const handlePdfComprobanteChange = e => {
        const file = e.target.files[0]
        setComprobantepago(file)
        setPdfComprobante_preview(URL.createObjectURL(file))
    }
    const handleSubmit = async e => {
        e.preventDefault()
        let errores = {}

        // Validaciones existentes...
        if (!numero_ruc)
            errores.numero_ruc = "El campo 'Número de RUC' es obligatorio."
        if (!razon_social)
            errores.razon_social = "El campo 'Razón Social' es obligatorio."

        // Continuación de las validaciones
        if (!cargo_representante)
            errores.cargo_representante =
                "El campo 'Cargo del Representante' es obligatorio."
        if (!documento_identidad)
            errores.documento_identidad =
                "Debe seleccionar un 'Tipo de Documento'."
        if (!numero_documento_identidad)
            errores.numero_documento_identidad =
                "El campo 'Número de Documento' es obligatorio."
        if (!nacionalidad)
            errores.nacionalidad = "El campo 'Nacionalidad' es obligatorio."
        if (!nombres) errores.nombres = "El campo 'Nombres' es obligatorio."
        if (!apellidos)
            errores.apellidos = "El campo 'Apellidos' es obligatorio."
        if (!fecha_nacimiento)
            errores.fecha_nacimiento =
                "El campo 'Fecha de Nacimiento' es obligatorio."
        if (!sexo) errores.sexo = "Debe seleccionar el 'Sexo'."
        if (!telefono_celular)
            errores.telefono_celular =
                "El campo 'Teléfono Celular 1' es obligatorio."
        // Correo es obligatorio, correo2 es opcional
        if (!correo) errores.correo = "El campo 'Correo' es obligatorio."
        if (!tipo_certificado)
            errores.tipo_certificado =
                "Debe seleccionar un 'Tipo de Certificado'."
        if (!vigencia)
            errores.vigencia = "Debe seleccionar la 'Vigencia' del certificado."
        if (!provincia) errores.provincia = "Debe seleccionar una 'Provincia'."
        if (!ciudad) errores.ciudad = "Debe seleccionar una 'Ciudad'."
        if (!direccion)
            errores.direccion = "El campo 'Dirección' es obligatorio."

        // Verifica si hay archivos adjuntos obligatorios
        if (!imagen_anverso)
            errores.imagen_anverso =
                'Debe adjuntar la imagen del anverso del documento.'
        if (!imagen_reverso)
            errores.imagen_reverso =
                'Debe adjuntar la imagen del reverso del documento.'
        if (!pdf)
            errores.pdf = 'Debe adjuntar el RUC de la empresa en formato PDF.'
        if (!imagen_selfie)
            errores.imagen_selfie =
                'Debe adjuntar una selfie con el documento de identidad.'
        if (!constitucion_compañia)
            errores.constitucion_compañia =
                'Debe adjuntar el documento de constitución de la compañía.'
        if (!nombramiento)
            errores.nombramiento =
                'Debe adjuntar el documento de nombramiento del representante legal.'

        // Si hay errores, actualiza el estado y no procede con el envío
        if (Object.keys(errores).length > 0) {
            setErroresValidacion(errores)
            return // Detiene la ejecución si hay errores
        }

        setErroresValidacion({})
        // Crear una nueva instancia de FormData y llenarla con los valores del estado
        const formData = new FormData()
        formData.append('dia_creado', dia_creado)
        formData.append('numero_documento', numero_documento_identidad)
        formData.append('numero_ruc', numero_ruc)
        formData.append('razon_social', razon_social)
        formData.append('cargo_representante', cargo_representante)
        formData.append('constitucion_compañia', constitucion_compañia)
        formData.append('nombramiento', nombramiento)
        formData.append('tipo_certificado', tipo_certificado)
        formData.append('documento_identidad', documento_identidad)
        formData.append('imagen_anverso', imagen_anverso)
        formData.append('imagen_reverso', imagen_reverso)
        formData.append('pdf', pdf)
        formData.append('imagen_selfie', imagen_selfie)
        formData.append('comprobantepago', comprobantepago)
        formData.append('nombres', nombres)
        formData.append('apellidos', apellidos)
        formData.append('sexo', sexo)
        formData.append('fecha_nacimiento', fecha_nacimiento)
        formData.append('nacionalidad', nacionalidad)
        formData.append('telefono_celular', telefono_celular)
        formData.append('cedula', cedula)
        formData.append('correo', correo)
        formData.append(
            'distribuidor',
            distribuidor != null ? distribuidor : 'No hay',
        )
        formData.append('provincia', provincia)
        formData.append('ciudad', ciudad)
        formData.append('direccion', direccion)
        formData.append('vigencia', vigencia)

        const csrf = () => axios.get('/sanctum/csrf-cookie')
        try {
            await csrf()
            await axios.post('/api/datoslegal', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            setEnviando(true)
            window.location = '/agradecimiento_representante'
            setAnverso_preview('')
            setReverso_preview('')
            setSelfie_preview('')
            setPdfruc_preview('')
            setPdfNombramiento_preview('')
            setPdfConstitucionCompañia_preview('')
            setDia_creado('')
            setDocumento_identidad('')
            setNumero_ruc('')
            setRazon_social('')
            setCargo_representante('')
            setConstitucion_compañia('')
            setNombramiento('')
            setTipo_certificado('')
            setImagen_anverso('')
            setImagen_reverso('')
            setPdf('')
            setComprobantepago('')
            setImagen_selfie('')
            setSexo('')
            setFecha_nacimiento('')
            setNacionalidad('')
            setTelefono_celular('')
            setCedula('')
            setCorreo('')
            setDistribuidor('')
            setProvincia('')
            setCiudad('')
            setDireccion('')
            setVigencia('')
        } catch (error) {
            setErrorServer(error)
            setEnviando(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
                <input type="hidden" value={pdfConstitucionCompañia_preview} />
                <input type="hidden" value={pdfruc_preview} />
                <input type="hidden" value={pdfNombramiento_preview} />
                <input type="hidden" value={pdfComprobante_preview} />
                <input type="hidden" value={errorServer} />
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
                        Cargo del Represente{' '}
                    </label>
                    <input
                        value={cargo_representante}
                        onChange={e => setCargo_representante(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="text"
                        placeholder="Cargo del Represente"
                        name="cargo_representante"
                        id="cargo_representante"
                    />
                </div>
                {erroresValidacion.cargo_representante && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.cargo_representante}
                    </p>
                )}
                <h5 className="mt-6">2.- INFORMACIÓN DEL REPRESENTATE LEGAL</h5>
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
                {erroresValidacion.numero_documento_identidad && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.numero_documento_identidad}
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
                        value={nombres}
                        onChange={e => setNombres(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="text"
                        placeholder="Nombres"
                        name="nombres"
                        id="nombres"
                    />
                </div>
                {erroresValidacion.nombres && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.nombres}
                    </p>
                )}
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
                {erroresValidacion.apellidos && (
                    <p className="text-red-500 text-xs italic">
                        {erroresValidacion.apellidos}
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
                    <label htmlFor="cedula" className="sr-only">
                        Codigo dactilar cédula *opcional
                    </label>
                    <input
                        value={cedula}
                        onChange={e => setCedula(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Codigo dactilar cédula *opcional"
                        name="cedula"
                        id="cedula"
                        type="text"
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
                    <label htmlFor="distribuidor" className="sr-only">
                        Código Distribuidor - Promoción *Opcional
                    </label>
                    <input
                        value={distribuidor}
                        onChange={e => setDistribuidor(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="text"
                        placeholder="Código Distribuidor - Promoción *Opcional"
                        name="distribuidor"
                        id="distribuidor"
                    />
                </div>

                <h5 className="mt-6">3.- FORMATO Y VIGENCIA DE FIRMA</h5>
            </div>

            <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-xl shadow-lg">
                <div />
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
            </div>

            <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-xl shadow-lg">
                <div>
                    <h5 className="mt-6">
                        4.- DIRECCIÓN COMO CONSTA EN EL RUC DE CIA
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
                    5.- ADJUNTAR DOCUMENTOS
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
                    label="4.-  Foto selfie de su cara con su cédula debajo de la barbilla (.jpg - .png - foto celular)"
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
                    pdf_preview={comprobantepago}
                    label="7.- Comprobante de pago (.pdf) Opcional"
                    handleChange={handlePdfComprobanteChange}
                />
            </div>

            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <i className="fas fa-arrow-right" />
                    </span>
                    {enviando === false ? 'ENVIAR' : 'FUE ENVIADO CON EXITO'}
                </button>
            </div>
        </form>
    )
}

export default Formulario

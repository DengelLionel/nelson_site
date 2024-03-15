import React from 'react'
import { createContext, useState } from 'react'
export const PaginaContextValue = createContext()
const Contextpaginaifno = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [dia_creado, setDia_creado] = useState('')
    const [
        numero_documento_identidad,
        setNumero_documento_identidad,
    ] = useState('')
    const [tipo_certificado, setTipo_certificado] = useState('')
    const [documento_identidad, setDocumento_identidad] = useState('')
    const [imagen_anverso, setImagen_anverso] = useState(null)
    const [imagen_reverso, setImagen_reverso] = useState(null)
    const [pdf, setPdf] = useState(null)
    const [imagen_selfie, setImagen_selfie] = useState(null)
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [con_ruc, setCon_ruc] = useState('')
    const [sexo, setSexo] = useState('')
    const [fecha_nacimiento, setFecha_nacimiento] = useState('')
    const [nacionalidad, setNacionalidad] = useState('ECUATORIANA')
    const [telefono_celular, setTelefono_celular] = useState('')
    const [cedula, setCedula] = useState('')
    const [correo, setCorreo] = useState('')
    const [distribuidor, setDistribuidor] = useState('')
    const [comprobantepago, setComprobantepago] = useState(null)
    const [provincia, setProvincia] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [direccion, setDireccion] = useState('')
    const [vigencia, setVigencia] = useState('')
    const [numero_ruc, setNumero_ruc] = useState('')
    const [razon_social, setRazon_social] = useState('')
    const [cargo_representante, setCargo_representante] = useState('')
    const [constitucion_compañia, setConstitucion_compañia] = useState('')
    const [nombramiento, setNombramiento] = useState('')
    const [cargo_del_miembro, setCargo_del_miembro] = useState('')
    const [
        numero_documento_miembro_empresa,
        setNumero_documento_miembro_empresa,
    ] = useState('')
    const [nombres_miembro, setNombres_miembro] = useState('')
    const [apellidos_miembro, setApellidos_miembro] = useState('')
    const [departamento_que_labora, setDepartamento_que_labora] = useState('')
    const [
        documento_identidad_representante_legal,
        setDocumento_identidad_representante_legal,
    ] = useState('')
    const [
        numero_documento_representante_legal,
        setNumero_documento_representante_legal,
    ] = useState('')
    const [
        nombres_representante_legal,
        setNombres_representante_legal,
    ] = useState('')
    const [
        apellidos_representante_legal,
        setApellidos_representante_legal,
    ] = useState('')
    const [motivo_uso_firma, setMotivo_uso_firma] = useState('')
    const [
        autorizacion_representante,
        setAutorizacion_representante,
    ] = useState('')
    const data = {
        isOpen,
        setIsOpen,
        dia_creado,
        setDia_creado,
        numero_documento_identidad,
        setNumero_documento_identidad,
        tipo_certificado,
        setTipo_certificado,
        documento_identidad,
        comprobantepago,
        setComprobantepago,
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
        cedula,
        setCedula,
        correo,
        setCorreo,
        distribuidor,
        setDistribuidor,
        provincia,
        setProvincia,
        ciudad,
        setCiudad,
        direccion,
        setDireccion,
        vigencia,
        setVigencia,
        numero_ruc,
        setNumero_ruc,
        razon_social,
        setRazon_social,
        cargo_representante,
        setCargo_representante,
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
    }
    return (
        <PaginaContextValue.Provider value={data}>
            {children}
        </PaginaContextValue.Provider>
    )
}

export default Contextpaginaifno

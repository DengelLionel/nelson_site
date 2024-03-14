import axios from '@/lib/axios'
export const handleDescargarArchivo = async (carpeta, nombreArchivo) => {
    try {
        const url = `/api/descargararchivopublico/${carpeta}/${nombreArchivo}`
        const response = await axios.get(url, { responseType: 'blob' })
        const blob = new Blob([response.data], {
            type: response.headers['content-type'],
        })
        const urlObject = window.URL.createObjectURL(blob)

        const a = document.createElement('a')
        a.href = urlObject
        a.download = nombreArchivo
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(urlObject)
    } catch (error) {
        // Aquí puedes manejar el error más detalladamente, por ejemplo, actualizando el estado para mostrar un mensaje de error en la UI.
    }
}

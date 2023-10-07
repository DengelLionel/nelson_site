import useSWR from 'swr'
import axios from '@/lib/axios'

export const useDatosProducto = () => {
    const data = useSWR('/api/productos_todo', () =>
        axios.get('/api/productos_todo').then(res => res.data),
    )
    const datos = data.data
    return { datos }
}

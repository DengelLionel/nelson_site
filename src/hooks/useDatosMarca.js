import useSWR from 'swr'
import axios from '@/lib/axios'
export const useDatosMarca = () => {
    const data = useSWR('/api/clientes_marcas', () =>
        axios.get('/api/clientes_marcas').then(res => res.data),
    )
    const datos = data.data
    return { datos }
}
export const useDatosClientes = () => {
    const data = useSWR('/api/soloclientes', () =>
        axios.get('/api/soloclientes').then(res => res.data),
    )
    const datos = data.data
    return { datos }
}

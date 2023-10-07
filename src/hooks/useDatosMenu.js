import useSWR from 'swr'
import axios from '@/lib/axios'
export const useDatosMenu = () => {
    const data = useSWR('/api/todomenulevel', () =>
        axios.get('/api/todomenulevel').then(res => res.data),
    )
    const datos = data.data
    return { datos }
}

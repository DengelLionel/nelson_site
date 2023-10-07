import useSWR from 'swr'
import axios from '@/lib/axios'
export const useDatosSlider = () => {
    const { data, error } = useSWR('/api/slider', () =>
        axios.get('/api/slider').then(res => res.data),
    )

    return {
        datos: data,
        isLoading: !error && !data,
        isError: error,
    }
}

import useSWR from 'swr'
import axios from '@/lib/axios'

export const useRedesSociales = () => {
    const { data } = useSWR('/api/info', () =>
        axios.get('/api/info').then(res => res.data),
    )

    // Verifica si data está definida antes de intentar desestructurarla.
    const { facebook, youtube, twiter, instagram } = data?.[0] || {}

    return { facebook, youtube, twiter, instagram }
}
export const useWhatsapp = () => {
    const { data } = useSWR('/api/info', () =>
        axios.get('/api/info').then(res => res.data),
    )

    const { whatsapp } = data?.[0] || {}
    return { whatsapp }
}

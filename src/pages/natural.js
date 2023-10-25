import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Lista from '@/components/personanatural/Lista'
import useSWR from 'swr'
import axios from '@/lib/axios'
const natural = () => {
    const data = useSWR('/api/personanatural', () =>
        axios.get('/api/personanatural').then(res => res.data),
    )
    const datos = data.data

    return (
        <AppLayout header={<div />}>
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="py-12">
                <Lista datos={datos} />
            </div>
        </AppLayout>
    )
}

export default natural

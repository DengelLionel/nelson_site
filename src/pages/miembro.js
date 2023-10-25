import React from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Lista from '@/components/miembroemp/Lista'
import axios from '@/lib/axios'
import useSWR from 'swr'
const miembro = () => {
    const data = useSWR('/api/miembroempresa', () =>
        axios.get('/api/miembroempresa').then(res => res.data),
    )
    const datos = data.data
    return (
        <AppLayout>
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="py-12">
                <Lista datos={datos} />
            </div>
        </AppLayout>
    )
}

export default miembro

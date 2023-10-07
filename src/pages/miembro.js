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
        <AppLayout
            header={
                <div>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight" />
                </div>
            }>
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8" />
                <Lista datos={datos} />
            </div>
        </AppLayout>
    )
}

export default miembro

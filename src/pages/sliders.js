import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import CreacionItem from '@/components/slider/CreacionItem'
import ListaItem from '@/components/slider/ListaItem'
const ItemProduct = () => {
    return (
        <AppLayout
            header={
                <div>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight" />
                </div>
            }>
            <Head>
                <title>Item Sliders</title>
            </Head>

            <div className="py-12">
                <div className="flex justify-center items-center flex-col sm:px-6  lg:justify-start lg:px-8">
                    <CreacionItem />
                    <ListaItem />
                </div>
            </div>
        </AppLayout>
    )
}

export default ItemProduct

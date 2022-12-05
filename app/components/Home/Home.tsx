import { FC } from 'react'
import { useGetProductsQuery } from '../../store/product/product.api'
import { ProductPage } from '../ProductPage/ProductPage'
import { Cart } from '../Cart/Cart'

export const Home: FC = () => {
    const {data, isLoading, error} = useGetProductsQuery(14)

    return <div>
        <div className="text-center">
            <h1 className="text-2xl text-green-900 font-medium text-center mb-6">
                Let&apos;s find your products!
            </h1>
            <Cart/>
            { isLoading && <div>Loading...</div> }
            { error && <div>Error!</div> }
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-5 gap-x-20 gap-y-10 mb-10">
            { data?.map((product: any) => (
                <ProductPage key={ product.id } product={ product }/>
            )) }
        </div>
    </div>
}
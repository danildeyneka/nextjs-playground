import { FC } from 'react'
import { useGetProductsQuery } from '../../store/product/product.api'

export const Home: FC = () => {
    const {data, isLoading, error} = useGetProductsQuery(6)


    return <>
        <div className="flex justify-between items-center mb-10">
            <h1 className="text-2xl">
                lets find some products
            </h1>
        </div>
        <div className="flex flex-wrap justify-between">
            {/*{ data.map((product: any) => <ProductItem key={ product.id } product={ product }/>) }*/}
        </div>
    </>
}
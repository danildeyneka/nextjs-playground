import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { productT } from './product.types'

export const productApi = createApi({
    reducerPath: 'api/products',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com'}),
    endpoints: build => ({
        getProducts: build.query<Array<productT>, number>({query: (limit = 5) => `products?limit=${ limit }`})
    })
})


export const {useGetProductsQuery} = productApi
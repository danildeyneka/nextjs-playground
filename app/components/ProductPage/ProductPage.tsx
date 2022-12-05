import { FC } from 'react'
import { productT } from '../../store/product/product.types'
import Image from 'next/image'
import { useActions } from '../../hooks/useActions'
import { useAppSelector } from '../../hooks/useAppSelector'

type propsT = {
    product: productT
}
export const ProductPage: FC<propsT> = ({product}) => {
    const {addItem} = useActions()
    const {cart} = useAppSelector(state => state.cart)

    const existsInCart = cart.some(p => p.id === product.id)

    return <div className="text-center w-48 shadow-lg rounded px-3 py-1">
        <Image src={ product.image }
               alt={ product.title }
               width={ 200 }
               height={ 200 }
               className="h-56 w-56 object-contain "/>
        <h1 className="h-12 overflow-hidden">{ product.title }</h1>
        <p>${ product.price }</p>
        <button className="bg-amber-200 px-4 py-2 rounded-2xl my-3"
                onClick={ () => !existsInCart && addItem(product) }> { existsInCart ? 'Already in cart' : 'Add to cart' }</button>
    </div>
}
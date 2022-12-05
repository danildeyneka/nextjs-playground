import { FC } from 'react'
import { useDropdown } from '../../hooks/useDropdown'
import { useAppSelector } from '../../hooks/useAppSelector'
import { BsCart, BsX } from 'react-icons/bs'
import Image from 'next/image'
import { useActions } from '../../hooks/useActions'
import Link from 'next/link'

export const Cart: FC = () => {

    const {ref, visible, setVisible} = useDropdown(false)
    const {cart} = useAppSelector(state => state.cart)
    const {removeItem} = useActions()

    return <>
        <button className="bg-amber-800 rounded-full text-red-50 p-2 mb-5" onClick={ () => setVisible(!visible) }>
            { visible ? <BsX/> : <BsCart/> }
        </button>
        { visible && (
            <div className="fixed bottom-0 w-full h-1/2 bg-white z-10 shadow-2xl overflow-y-scroll" ref={ ref }>
                { cart?.length
                    ? (<>
                        <h1 className="text-2xl mt-6">In cart:</h1>
                        <div className="max-w-7xl flex justify-center mt-11 mx-auto flex-wrap">
                            { cart.map(p => <div key={ p.id } className="">
                                <Image src={ p.image }
                                       alt={ p.title }
                                       width={ 200 }
                                       height={ 200 }
                                       className="h-56 w-56 object-contain "/>
                                <h1 className="h-12 w-40 overflow-hidden mx-auto">{ p.title }</h1>
                                <p>${ p.price }</p>
                                <button className="bg-amber-200 p-3 rounded-full" onClick={ () => removeItem(p.id) }>
                                    <BsX/></button>
                            </div>) }
                        </div>
                        <div className='my-5'>Total: ${ cart.reduce((acc, i) => acc + i.price, 0) }</div>
                        <Link href='checkout' className='mb-6 block text-2xl bg-amber-200 w-fit mx-auto rounded-3xl py-2 px-4'>Place order</Link>
                    </>)
                    : <div className="mt-10 text-2xl">No items in cart</div> }
            </div>
        ) }
    </>
}
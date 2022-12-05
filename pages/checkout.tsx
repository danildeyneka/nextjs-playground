import { FC } from 'react'
import Link from 'next/link'

const Checkout: FC = () => {

    return <div className="text-center mt-20">
        Your order has been placed.
        <div>
            <Link href="/" className='text-2xl'>Back to store</Link>
        </div>

    </div>
}

export default Checkout
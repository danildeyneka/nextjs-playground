import { FC } from 'react'
import { useRouter } from 'next/router'

const SingleProduct: FC = () => {

    const router = useRouter()
    const {id} = router.query

    // state.filter(i => i.id === id)

    return <>
        <div>product: {id}</div>
    </>
}

export default SingleProduct
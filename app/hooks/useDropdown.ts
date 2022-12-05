import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react'

type TypeOut = {
    ref: any
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
}

export const useDropdown = (initialVisible: boolean): TypeOut => {
    const [visible, setVisible] = useState(initialVisible)
    const ref = useRef<HTMLElement>(null)

    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setVisible(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    })
    return { ref, visible, setVisible }
}
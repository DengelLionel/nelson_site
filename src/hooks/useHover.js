import { useEffect, useRef, useState } from 'react'
export const useHover = () => {
    const ref = useRef()
    const [value, setValue] = useState(false)

    const handleMouseOver = () => setValue(true)
    const handleMouseOut = () => setValue(false)

    useEffect(() => {
        const node = ref.current
        if (node) {
            node.addEventListener('mouseover', handleMouseOver)
            node.addEventListener('mouseout', handleMouseOut)

            return () => {
                node.removeEventListener('mouseover', handleMouseOver)
                node.removeEventListener('mouseout', handleMouseOut)
            }
        }
    }, []) // Empty array ensures that effect is only run on mount and unmount

    return [ref, value]
}

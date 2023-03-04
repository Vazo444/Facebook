import { useCallback, useState } from "react"

export const openComment = (Component) => {
    return (props) => {
        const [open, isOpen] = useState(false)

        const show = useCallback(() => {
            isOpen(true)
        }, [])

        return <Component {...props} {...{open, show}}/>
    }
    
}
import { useCallback, useState } from "react"

export const userOpen = (Component) => {
    return (props) => {
        const [showUser, isShowUser] = useState(false)

        const open = useCallback(() => {
            isShowUser(true)
        }, [])
        
        return <Component {...props} {...{showUser, open}}/>
    }
}
import { useEffect, useState } from "react"
import useEcomStore from "../store/ecom-store"
import { currentUser } from "../api/auth"
import LoadingToRedirect from "./LoadingToRedirect"

const ProtectRouteUser = ({ element }) => {

    const [ok, setOk] = useState(false)
    const { user, token } = useEcomStore()

    useEffect(() => {
        if (user && token) {
            //send to backend
            currentUser(token)
                .then(() => setOk(true))
                .catch((err) => {
                    setOk(false)
                    console.log(err)
                })
        }
    }, [token, user])

    return ok ? element : <LoadingToRedirect />
}

export default ProtectRouteUser
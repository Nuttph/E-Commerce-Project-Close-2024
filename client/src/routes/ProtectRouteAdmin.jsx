import { useEffect, useState } from "react"
import useEcomStore from "../store/ecom-store"
import LoadingToRedirect from "./LoadingToRedirect"
import { currentAdmin } from "../api/auth"

const ProtectRouteAdmin = ({ element }) => {

    const [ok, setOk] = useState(false)
    const { user, token } = useEcomStore()

    useEffect(() => {
        if (user && token) {
            //send to backend
            currentAdmin(token)
                .then(() => setOk(true))
                .catch((err) => {
                    setOk(false)
                    console.log(err)
                })
        }
    }, [token, user])

    return ok ? element : <LoadingToRedirect />
}

export default ProtectRouteAdmin
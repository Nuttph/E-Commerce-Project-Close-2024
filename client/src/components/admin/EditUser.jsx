import { useEffect, useState } from "react"
import useEcomStore from "../../store/ecom-store"
import axios from "axios"

const EditUser = () => {
    const [acount, setAccount] = useState(null)
    const { token } = useEcomStore()
    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get('http://localhost:5000/api/users', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setAccount(res.data)
        }
        fetch()
    }, [])
    const changeEnabled = async (index) => {
        const res = await axios.post('http://localhost:5000/api/change-status', {
            id: acount[index].id,
            enabled: !acount[index].enabled
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        window.location.reload()
        console.log(res)
    }
    return (
        <div>
            <div className="w-full flex flex-col items-center justify-center mt-10 text-[24px]">
                <div className={`flex w-[90%] items-center px-10 py-2 bg-yellow-500`}>
                    <div className="w-[500px]">id</div>
                    <div className="w-[500px]">name</div>
                    <div className="w-[500px]">role</div>
                    <button className={`w-fit px-4 rounded-xl`}>status</button>
                </div>
                {acount && acount.map((item, index) => (
                    <div key={index} className={`flex w-[90%] items-center px-10 py-2 ${index % 2 == 0 ? "bg-red-100" : "bg-green-100"}`}>
                        <div className="w-[500px]">{item.id}</div>
                        <div className="w-[500px]">{item.email}</div>
                        <div className="w-[500px]">{item.role}</div>
                        <button onClick={() => { changeEnabled(index) }} className={`w-fit px-4 rounded-xl ${item.enabled ? "bg-green-400" : "bg-red-400"}`}>{item.enabled ? "active" : "ปิดใช้งาน"}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EditUser
import axios from "axios";


export const currentUser = (token) => axios.post(`http://localhost:5000/api/current-user`, {}, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
export const currentAdmin = (token) => axios.post(`http://localhost:5000/api/current-admin`, {}, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
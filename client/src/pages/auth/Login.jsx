import { useState } from "react";
import { toast } from 'react-toastify';
import useEcomStore from "../../store/ecom-store";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  const { actionLogin } = useEcomStore()
  const [form, setFrom] = useState({
    email: "",
    password: "",
  })
  const handleOnChange = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    //send to backend
    try {
      const res = await actionLogin(form)
      const role = res.data.payload.role
      roleRedirect(role)
      toast.success('Welcome ' + res?.data?.payload?.email)
    } catch (err) {
      const errMsg = err.response?.data?.message
      toast.error(errMsg)
      console.log(err)
    }
  }

  const roleRedirect = (role) => {
    if (role == 'admin') {
      navigate('/admin')
    } else {
      navigate('/user')
    }
  }

  return (
    <div>
      login
      <form>
        Email:
        <input className="border" onChange={handleOnChange} type="email" name="email" />
        Password
        <input className="border" onChange={handleOnChange} type="text" name="password" />
        <button className="bg-blue-500 rounded-md" onClick={handleSubmit}>login</button>
      </form>
    </div>
  );
};

export default Login;

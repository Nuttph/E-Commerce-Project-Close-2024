import { useState } from "react";
import { toast } from 'react-toastify';
import useEcomStore from "../../store/ecom-store";
useEcomStore
const Login = () => {
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
      console.log(res)
      toast.success('Welcome ' + res?.data?.payload?.email)
    } catch (err) {
      const errMsg = err.response?.data?.message
      toast.error(errMsg)
      console.log(err)
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

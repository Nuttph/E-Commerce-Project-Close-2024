import { useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify';
const Login = () => {

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
      const res = await axios.post('http://localhost:5000/api/login', form)
      console.log(res.data)
      toast.success(res.data)
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

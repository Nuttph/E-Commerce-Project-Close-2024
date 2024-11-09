import { useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify';
const Register = () => {

  const [form, setFrom] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })
  const handleOnChange = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      return alert('Confirm Password is not match')
    }
    // console.log(form)
    //send to backend
    try {
      const res = await axios.post('http://localhost:5000/api/register', form)
      toast.success(res.data)
    } catch (err) {
      const errMsg = err.response?.data?.message
      toast.error(errMsg)
      console.log(err)
    }
  }
  return (
    <div>
      Register
      <form>
        Email:
        <input className="border" onChange={handleOnChange} type="email" name="email" />
        Password
        <input className="border" onChange={handleOnChange} type="text" name="password" />
        Confirm Password
        <input className="border" onChange={handleOnChange} type="text" name="confirmPassword" />
        <button className="bg-blue-500 rounded-md" onClick={handleSubmit}>Register</button>

      </form>
    </div>
  );
};

export default Register;

const Register = () => {
  return (
    <div>
      Register
      <form>
        Email:
        <input className="border" type="email" name="email" />
        Password
        <input className="border" type="text" name="email" />
        <button className="bg-blue-500 rounded-md">Register</button>
      </form>
    </div>
  )
}

export default Register
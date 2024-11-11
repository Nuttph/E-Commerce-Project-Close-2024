import EditUser from "../components/admin/EditUser"

const LayoutAdmin = () => {
  return (
    <div>
      <nav className="bg-blue-300 text-[40px] py-5 px-5 font-bold text-white">ADMIN</nav>
      <EditUser />
    </div>
  )
}

export default LayoutAdmin
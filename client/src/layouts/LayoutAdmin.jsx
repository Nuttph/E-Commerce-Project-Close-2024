import { Outlet } from 'react-router-dom'
import SidarbarAdmin from '../components/admin/SidarbarAdmin'
import HeaderAdmin from '../components/admin/HeaderAdmin'

const LayoutAdmin = () => {
  return (
    <div className='flex h-screen'>
      <SidarbarAdmin />
      <div className='flex flex-1 flex-col'>
        <HeaderAdmin />
        <hr />
        <main className='flex-1 p-6 bg-gray-100 overflow-y-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default LayoutAdmin
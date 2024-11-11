import { NavLink } from "react-router-dom"
import { LayoutDashboard, PackageSearch, Rows3, Contact } from 'lucide-react'
const SidarbarAdmin = () => {
    const dataOfNavLink = [
        { to: '/admin', title: 'Dashboard', icon: <LayoutDashboard /> },
        { to: 'manage', title: 'Manage', icon: <Contact /> },
        { to: 'category', title: 'Category', icon: <Rows3 /> },
        { to: 'product', title: 'Product', icon: <PackageSearch /> },
    ]
    return (
        <div className="bg-gray-800 w-64 text-gray-100 flex flex-col h-screen">
            <div className="h-24 bg-gray-900 flex items-center justify-center text-2xl font-bold">
                Admin Panel
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {dataOfNavLink.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.to}
                        end
                        className={({ isActive }) =>
                            isActive ?
                                'bg-gray-900 px-4 py-2 rounded-md text-white flex items-center' :
                                'text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center'
                        }>
                        <div className="mr-2.5">{item.icon}</div>
                        {item.title}
                    </NavLink>
                ))}

            </nav>
            <div>
                Footer
            </div>
        </div>
    )
}

export default SidarbarAdmin
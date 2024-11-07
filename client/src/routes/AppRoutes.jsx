import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import History from '../pages/History'
import Checkout from '../pages/Checkout'


const router = createBrowserRouter([
    { path: '/',element:<Home/>},
    { path: '/shop',element:<Shop/>},
    { path: '/cart',element:<Cart/>},
    { path: '/history',element:<History />},
    { path: '/checkout',element:<Checkout />},
])

const AppRoutes = () => {
  return (
      <>
        <RouterProvider router={router}/>
      </>
  )
}

export default AppRoutes
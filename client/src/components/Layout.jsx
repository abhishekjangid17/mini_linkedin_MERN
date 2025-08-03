// components/Layout.jsx
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="main-content" style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '1rem' }}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout

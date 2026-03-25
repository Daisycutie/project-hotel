import Navbar from '@/components/navbar/Navbar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      <Navbar />

      <main className='container'>
        <hr />
        <Outlet />
      </main>
    </>
  )
}

export default Layout
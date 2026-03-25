import Navbar from '@/components/navbar/Navbar'
import { Outlet } from 'react-router'

const LayoutAdmin = () => {
  return (
    <>
      <Navbar />
      <main className='container'>
        <Outlet />
      </main>
    </>
  )
}

export default LayoutAdmin
import { BrowserRouter, Routes, Route, Outlet } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Dashboard from '../pages/admin/Dashboard'
import Manage from '../pages/admin/Manage'
import NotFound from   '../pages/NotFound'

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route element={
          <>
            <h1>Navbar</h1>
            <Outlet />
          </>
        }>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Private */}
        <Route path='admin' element={
          <>
            <h1>Navbar</h1>
            <Outlet />
          </>
        }>
          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute
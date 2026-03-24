import { BrowserRouter, Routes, Route, Outlet } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Dashboard from '../pages/admin/Dashboard'
import Manage from '../pages/admin/Manage'
import NotFound from   '../pages/NotFound'
import Layout from '../layouts/Layout'
import LayoutAdmin from '../layouts/LayoutAdmin'

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Private */}
        <Route path='admin' element={<LayoutAdmin /> }>
          <Route index element={<Dashboard />} />
          <Route path="manage/:id" element={<Manage />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute
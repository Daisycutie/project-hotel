
import {BrowserRouter, Routes, Route} from 'react-router'

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public*/}
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="about" element={<h1>About page</h1>} />
        
        {/* Private */}
        <Route path='admin'>
          <Route index element={<p>Admin page</p>} />
          <Route path="dashboard" element={<p>Dashboard page</p>} />
          <Route path="manager" element={<p>Manager page</p>} />
        </Route>

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute

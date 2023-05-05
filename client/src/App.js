import React from 'react'
import { Link, Routes,Route } from 'react-router-dom'
import { About, Contact, HomePage, PageNoteFound, Policy } from './pages'
import { ForgotPassword, Login, Register } from './pages/Auth'
import CreateCategory from './pages/Admin/CreateCategory'
import Dashboard from './pages/user/dashboard.js'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/Routes/Private';
import AdminDashboard from './pages/Admin/AdminDashboard'
import CreateProduct from './pages/Admin/CreateProduct'
const App = () => {
  return (
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<PrivateRoute />} ></Route>
          <Route path='dashboard/user' element={<Dashboard />} />
          <Route path='/dashboard/admin' element={<AdminDashboard />} />
          <Route path='/create-category' element={<CreateCategory />} />
          <Route path='/create-product' element={<CreateProduct />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          
          <Route path='/*' element={<PageNoteFound />} />
        </Routes>
      </div>
  )
}

export default App
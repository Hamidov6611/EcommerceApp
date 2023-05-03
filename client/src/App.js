import React from 'react'
import { Link, Routes,Route } from 'react-router-dom'
import { About, Contact, HomePage, PageNoteFound, Policy } from './pages'
import { Login, Register } from './pages/Auth'
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/*' element={<PageNoteFound />} />
        </Routes>
      </div>
  )
}

export default App
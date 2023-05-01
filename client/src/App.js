import React from 'react'
import { Link, Routes,Route } from 'react-router-dom'
import { styles } from './utils/style'
import { Layout } from './components'
import { About, Contact, HomePage } from './pages'
const App = () => {
  return (
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
  )
}

export default App
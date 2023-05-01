import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({children}) => {
  return (
    <div>
        <Header />
        <main className='min-h-[80vh]'>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout
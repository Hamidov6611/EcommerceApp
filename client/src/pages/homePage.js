import React, { useState } from 'react'
import { Layout } from '../components'
import { useAuth } from '../context/auth.js'

const HomePage = () => {
  const [auth, setAuth] = useAuth()
  return (
    <Layout title={'Best offers'}>{JSON.stringify(auth)}</Layout>
  )
}

export default HomePage
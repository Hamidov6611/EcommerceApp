import React from 'react'
import { Layout } from '../../components'
import { useAuth } from '../../context/auth'
import AdminMenu from '../../components/AdminMenu'

const CreateProduct = () => {
  const [auth, setAuth] = useAuth()
  return auth?.user?.role == 1 && (
    <Layout>
      <AdminMenu bg2={'bg-pink-700'}/>
    </Layout>
  )
}

export default CreateProduct
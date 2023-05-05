import React from 'react'
import { Layout } from '../../components'
import { useAuth } from '../../context/auth'
import AdminMenu from '../../components/AdminMenu'

const CreateCategory = () => {
  const [auth, setAuth] = useAuth()
  return auth?.user?.role == 1 &&
    (<Layout>
      <AdminMenu bg={'bg-pink-700'} />
    </Layout>)
  
}

export default CreateCategory
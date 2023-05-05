import React, { useEffect } from 'react'
import { Layout } from '../../components'
import { useAuth } from '../../context/auth'
import axios from 'axios'

const Dashboard = () => {
  const [auth, setAuth] = useAuth()

  useEffect(() => {
    const userCheck = async () => {
      const res = await axios.get('http://localhost:8080/api/v1/auth/user')
    }
  },[auth.token])
  return (
    <Layout>User</Layout>
  )
}

export default Dashboard
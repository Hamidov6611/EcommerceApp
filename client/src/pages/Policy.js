import React from 'react'
import { Layout } from '../components'
import { styles } from '../utils/style'

const Policy = () => {
  return (
    <Layout title={'Privacy Policy'}>
      <div className={`${styles.flexCenter} sm:flex-row flex-col sm:p-16`}>
        <div className='sm:w-[60%] w-full p-4'>
          <img src='https://www.privacypolicies.com/public/uploads/2018/12/short-privacy-policy-update.jpg' alt='Privacy Policy' />
        </div>
        <div className='sm:w-[40%] w-full p-4'>
          <p className='font-montserrat my-4'>Add privacy policy</p>
          <p className='font-montserrat my-4'>Add privacy policy</p>
          <p className='font-montserrat my-4'>Add privacy policy</p>
          <p className='font-montserrat my-4'>Add privacy policy</p>
          <p className='font-montserrat my-4'>Add privacy policy</p>
          <p className='font-montserrat my-4'>Add privacy policy</p>
          <p className='font-montserrat my-4'>Add privacy policy</p>
        </div>
      </div>
    </Layout>
  )
}

export default Policy
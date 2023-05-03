import React from 'react'
import { Layout } from '../components'
import { styles } from '../utils/style'

const About = () => {
  return (
    <Layout title={'About us - Ecommer App'}>
      <div className={`${styles.flexCenter} sm:flex-row flex-col sm:p-16 p-3 `}>
        <div className='sm:w-[60%] sm:mr-6 w-full mb-6'>
          <img src='https://wallpaperaccess.com/full/2484157.jpg' alt='about us' />
        </div>
        <div className='sm:w-[40%] w-full'>
          <p className='font-montserrat'><strong className='font-montserrat'>Lorem</strong> ipsum dolor sit amet consectetur adipisicing elit. Aut eligendi vel provident. Magni optio quo amet alias commodi, illum quaerat officiis nesciunt officia veniam labore nam. Eius, dolor amet quod iste asperiores tenetur alias minima. Quidem laboriosam sequi nam voluptatum tenetur a voluptatibus maiores illo modi vero! Veritatis optio, ex molestiae alias eius quidem voluptates eveniet ipsam non architecto vero qui quos, facere laudantium, deleniti illum minus totam ducimus.</p>
        </div>
      </div>
    </Layout>
  )
}

export default About
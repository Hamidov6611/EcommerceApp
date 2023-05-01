import React from 'react'
import { styles } from '../utils/style'

const Footer = () => {
  return (
    <div className={`${styles.paragraph} text-center ${styles.flexCenter}  bg-primary h-[20vh]`}>
        <h4>All Right Reserved &copy; DIMAWEB</h4>
    </div>
  )
}

export default Footer
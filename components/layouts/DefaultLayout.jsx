import React from 'react'
import { motion } from 'framer-motion';
import Controls from '../Controls'

function DefaultLayout({ children }) {
  return (
    <section className='w-11/12 h-[85vh] sm:h-[90vh] bg-my-blue-primary/10 mx-auto flex flex-col-reverse justify-between lg:flex-row'>
    <Controls />
    <div className='bg-my-yellow-secondary/20 w-full h-[100px]'>{children}</div>
</section>
  )
}

export default DefaultLayout
import React from 'react'
import Header from '../Header'

function MainLayout({ children }) {
  return (
    <div className='overflow-hidden'>
        <Header />
        <div>{children}</div>
    </div>
  )
}

export default MainLayout
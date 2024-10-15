import React from 'react'
import Navbar from '../navbar/Navbar'

const HeroSection = () => {
  return (
    <div className='w-full h-[100vh] bg-cover bg-center' 
      style={{ 
        backgroundImage: "url('/MainBackground.jpg')", 
      }}>
      <Navbar />
      
    </div>
  )
}

export default HeroSection

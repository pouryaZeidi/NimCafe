import React from 'react'
import NavbarItems from './NavbarItems'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
  return (
    <div className='w-full h-20  fixed '>
      <div className='p-12 md:p-16 w-[100%] sm:flex justify-between items-center h-20 hidden  '>
      <NavbarItems text={'About'} href={'/about'}/>
      <NavbarItems text={'SpecialDrinks'} href={'/specialDrinks'}/>
      <img src="/NimLogo.png" alt="Logo" className='w-[150px] h-[150px] mt-2  rounded-full' />
      <NavbarItems text={'Coffee News'} href={'/news'}/>
      <NavbarItems text={'Cooperation'} href={'/cooperation'}/>
      </div>
      <div className='p-12 w-[100%] flex justify-between items-center h-20 sm:hidden mt-2  '>
      <img src="/NimLogo.png" alt="Logo" className='sm:w-[150px] bg-white rounded-full  sm:h-[150px] w-[100px] h-[100px] ' />
      <HamburgerMenu/>

      </div>

    </div>
  )
}

export default Navbar
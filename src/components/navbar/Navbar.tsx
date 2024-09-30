import React from 'react'
import NavbarItems from './NavbarItems'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
  return (
    <div className='w-full h-20 p-2 fixed '>
      <div className='m-auto mt-1 w-[80%] sm:flex justify-between items-center h-20 hidden   '>
      <NavbarItems text={'About'} href={'/about'}/>
      <NavbarItems text={'SpecialDrinks'} href={'/specialDrinks'}/>
      <img src="/NimLogo.png" alt="Logo" className='w-[150px] h-[150px]' />
      <NavbarItems text={'Coffee News'} href={'/news'}/>
      <NavbarItems text={'Cooperation'} href={'/cooperation'}/>
      </div>
      <div className='m-auto mt-1 w-[80%] flex justify-between items-center h-20 sm:hidden '>
      <img src="/NimLogo.png" alt="Logo" className='sm:w-[150px] sm:h-[150px] w-[100px] h-[100px] ' />
      <HamburgerMenu/>

      </div>

    </div>
  )
}

export default Navbar
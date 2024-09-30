import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import NavbarItems from './NavbarItems';

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* منوی همبرگر */}
      <Hamburger toggled={isOpen} toggle={setOpen} color="#e0ac69" /> 
      
      {/* Overlay (با انیمیشن باز و بسته شدن) */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-80 h-[85%] top-24 flex justify-center items-center z-50 transition-all duration-700 ease-in-out transform ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}
        onClick={() => setOpen(false)} // کلیک روی Overlay باعث بسته شدن منو می‌شود
      >
        {/* لینک‌های ناوبار */}
        <nav className="text-white text-2xl space-y-4 flex flex-col h-[80%] items-center justify-between">
          <NavbarItems text={'About'} href={'/about'} />
          <NavbarItems text={'SpecialDrinks'} href={'/specialDrinks'} />
          <NavbarItems text={'Coffee News'} href={'/news'} />
          <NavbarItems text={'Cooperation'} href={'/cooperation'} />
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;

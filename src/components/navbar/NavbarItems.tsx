import React from 'react';
import Link from 'next/link';
import { NavbarItemProps } from '@/types/type';

const NavbarItems: React.FC<NavbarItemProps> = ({ text, href }: NavbarItemProps) => {
  return (
    <div className="navbar-item bg-white p-4 rounded-3xl">
      <Link href={href}>
        <span className="relative group">
          {text}
          <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] rounded-2xl bg-Primary transition-all duration-700 group-hover:w-full"/>
        </span>
      </Link>
    </div>
  );
}

export default NavbarItems;

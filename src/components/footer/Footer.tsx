import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 w-full text-gray-300 p-2">
      <div className="container flex m-auto   flex-col md:flex-row justify-between items-start md:items-center max-w-[90%]">
        
        <div className="w-full md:w-auto">
          <h3 className="text-xl font-semibold text-white">Nim Café</h3>
          <p className="mt-2">1234 Coffee St., City, Country</p>
          <p className="mt-1">Phone: +123 456 789</p>
          <p className="mt-1">Email: info@nimcafe.com</p>
        </div>

        
        <div className="w-full md:w-auto">
          <h3 className="text-xl font-semibold text-white">Working Hours</h3>
          <ul className="mt-2">
            <li>Monday - Friday: 8:00 AM - 10:00 PM</li>
            <li>Saturday: 9:00 AM - 11:00 PM</li>
            <li>Sunday: 9:00 AM - 8:00 PM</li>
          </ul>
        </div>

        
        <div className="w-full md:w-auto">
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <ul className="mt-2 flex space-x-4">
            <li>
              <Link href="https://facebook.com" target="_blank" className="hover:text-white">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com" target="_blank" className="hover:text-white">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com" target="_blank" className="hover:text-white">
                Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-4">
        © {new Date().getFullYear()} Nim Café. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

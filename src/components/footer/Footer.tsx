import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* بخش اول: اطلاعات کافه */}
        <div>
          <h3 className="text-xl font-semibold text-white">Café Name</h3>
          <p className="mt-2">1234 Coffee St., City, Country</p>
          <p className="mt-1">Phone: +123 456 789</p>
          <p className="mt-1">Email: info@cafe.com</p>
        </div>
        {/* بخش دوم: ساعات کاری */}
        <div>
          <h3 className="text-xl font-semibold text-white">Working Hours</h3>
          <ul className="mt-2">
            <li>Monday - Friday: 8:00 AM - 10:00 PM</li>
            <li>Saturday: 9:00 AM - 11:00 PM</li>
            <li>Sunday: 9:00 AM - 8:00 PM</li>
          </ul>
        </div>
        {/* بخش سوم: شبکه‌های اجتماعی */}
        <div>
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <ul className="mt-2 flex space-x-4">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-4">
        © {new Date().getFullYear()} Café Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

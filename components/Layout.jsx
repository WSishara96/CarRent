import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="dark:bg-cr-black bg-cr-white min-h-screen max-w-[100vw]">
    <Navbar />
    <div className="container mx-auto">
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;

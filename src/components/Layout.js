import React from 'react';
import Navbar from './Navbar'; // Navbar component
import { Outlet } from 'react-router-dom'; // Outlet for nested routes

const Layout = () => {
  return (
    <div>
      <Navbar /> {/* Always visible */}
      <div className="p-4">
        <Outlet /> {/* Render child routes */}
      </div>
    </div>
  );
};

export default Layout;

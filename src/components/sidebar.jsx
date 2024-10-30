import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.png';
import home from '../assets/Home.png';

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-8 w-full sm:w-64 h-screen bg-[#01014B] text-[#DFAD23] p-4 shadow-lg shadow-white">
      {[
        { to: "/home", icon: home, label: "Home" },
        { to: "/Profile", icon: profile, label: "Profile" },
      ].map(({ to, icon, label }) => (
        <Link
          key={to}
          to={to} 
          className="flex items-center hover:text-[#DFAD23] hover:bg-[#01ECB812] hover:rounded-2xl text-center p-4 text-xl sm:text-2xl font-bold"
        >
          <img src={icon} className="w-6 sm:w-8 h-6 sm:h-8 mr-2" alt={label} />
          {label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
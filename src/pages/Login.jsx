
import React, { useState } from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm.jsx';
import MobileVerification from '../pages/MobileVerification.jsx'; 
import Sidebar from '../components/sidebar';

const Login = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = () => {
    setIsVerified(true);
  };

  return (
    <div className="flex flex-col h-screen header-shadow">
      <Header />
      <div className="flex flex-grow h-full">
        <div className="flex flex-grow bg-[#01014B] justify-center p-8 relative"> 
        {isVerified ? (
              <MobileVerification />
            ) : (
              <LoginForm handleVerification={handleVerification} />
            )}
        </div>
      </div>
    </div>
  );
};

export default Login;
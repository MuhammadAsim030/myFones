import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './sidebar';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${isLogin ? 'Login' : 'Sign Up'} Successful`);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header/>

      <div className="flex flex-1">
        <div className='shadow-lg shadow-white z-[20]'>
        <Sidebar />
        </div>
        <main className="flex-1 p-4 flex items-center bg-[#01014B] justify-center">
          <div className="w-full max-w-md bg-[#01014B] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <label className="block mb-4 ml-2 text-sm text-white">Email</label>
                  <input
                    type="email"
                    className="border bg-transparent text-white rounded-full p-2 w-full mb-4"
                    required
                  />
                </>
              )}
              <label className="block mb-4 ml-2 text-sm text-white">Password</label>
              <input
                type="password"
                className="border bg-transparent text-white rounded-full p-2 w-full mb-4"
                required
              />
              <button type="submit" className="bg-[#DFAD23] text-white rounded-full p-2 w-full">
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>
            <p className="mt-4 text-center text-white">
              {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
              <button onClick={toggleForm} className="text-[#DFAD23] ml-1">
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AuthPage;
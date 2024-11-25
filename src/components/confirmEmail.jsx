
import React from 'react';
import Header from './Header.jsx';
import Sidebar from '../components/sidebar.jsx';
import Buttons from './buttons';


const ConfirmEmail = () => {
    return (

    <div className="flex flex-col h-screen relative">
      <Header />

      <div className="flex flex-1">
        <div className='shadow-lg shadow-white z-[20]'>
        <Sidebar />
        </div>
        <main className="flex-1 p-4 flex items-center  bg-[#01014B] justify-center">
          <div className="w-full max-w-md bg-[#01014B] p-6 rounded-lg shadow-md shadow-white">
            <h2 className="text-2xl font-semibold text-white mb-4">Email Confirmation </h2>
            <p className='text-poppins text-[#9D9693]'>Ensure the Email Verification! </p>
            <hr />

            <p className='text-poppins text-[#9D9693] mt-5 '>Email Verification code ...</p>
            <div className='flex justify-evenly'>
            {[...Array(6)].map((_, index) => (
                                <input 
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    className='bg-transparent text-white rounded-full w-10 h-10 mt-5 border-2 border-white text-center' 
                                />
                            ))};
            </div>
            <div className='flex justify-center mt-6'>
                <Buttons 
                continueText='Verify'
                continueLink='/exampleimage'
                backText='Cancel'
                backLink='/profile'
                showBackButton
        
                />
            </div>
          </div>
        </main>
      </div>
    </div>
        
    );
};

export default ConfirmEmail;
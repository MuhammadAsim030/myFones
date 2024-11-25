import React, { useState } from 'react'; 
import Header from '../components/Header.jsx'; 
import Sidebar from '../components/sidebar.jsx'; 
import Buttons from '../components/buttons.jsx'; 

function DeviceVerification() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col h-screen relative">
      <Header />

      <div className="flex flex-1">
        <div className='shadow-lg shadow-white z-[20]'>
          <Sidebar />
        </div>
        <main className="flex-1 p-4 flex items-center bg-[#01014B] justify-center">
          <div className="w-full max-w-md bg-[#01014B] p-6 rounded-lg shadow-md justify-center shadow-white">
            <h2 className="text-2xl font-semibold text-white mb-4">PTA Device Verification </h2>
            <p className='text-poppins text-[#9D9693]'>Ensure the Authenticity of Your Devices with PTA Device Verification!  </p>
            <hr />

            <p className='text-poppins text-[#9D9693] mt-5 '>Is your phone PTA approved?</p>

            <div className=" w-full  items-center mt-4 mb-4 ">
              
              <label
                htmlFor="yes"
                className={`cursor-pointer text-white focus:text-black flex items-center justify-center w-full h-10 rounded-full border-2 ${selectedOption === 'yes' ? 'bg-yellow-500 border-yellow-500' : 'border-white'}`}
              >
                <input
                type="radio"
                id="yes"
                name="ptaApproval"
                value="yes"
                checked={selectedOption === 'yes'}
                onChange={handleOptionChange}
                className="hidden"
              />
                Yes
              </label>

              <label
                htmlFor="no"
                className={`cursor-pointer flex items-center justify-center w-full h-10 rounded-full border-2 ${selectedOption === 'no' ? 'bg-yellow-500 border-yellow-500' : 'border-white'}`}
              >
                <input
                type="radio"
                id="no"
                name="ptaApproval"
                value="no"
                checked={selectedOption === 'no'}
                onChange={handleOptionChange}
                className="hidden"
                
              />
              No
              </label> 
            </div>
            <div className="flex justify-center mt-4">
              <Buttons 
                continueText='Next'
                continueLink='/exampleimage'
                backText='Back'
                backLink='/profile'
                showBackButton={true}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DeviceVerification;
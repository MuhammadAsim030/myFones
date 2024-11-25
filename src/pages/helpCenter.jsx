import Header from '../components/Header';
import Sidebar from '../components/sidebar';
import Buttons from '../components/buttons';
import { Link } from 'react-router-dom'; 

import React from 'react';

const HelpCenter = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 ">
        <Sidebar className="shadow-lg shadow-white" />
        <main className='z-[-1] flex-1 p-4 bg-[#01014B] flex flex-col justify-between'> 
          <div className='m-auto'>
            <h2 className="text-2xl cursor-pointer font-semibold text-white mb-4">
              <Link to="/" className='cursor-pointer'>Help & Support Center</Link>
            </h2>
            <p className="text-white mb-4">
              Welcome to the Help and Support Center. Here you can find answers to common questions,
              submit a request, or contact our support team.
            </p>
            <h3 className="text-xl font-semibold text-white mb-2">Frequently Asked Questions</h3>
            <ul className="text-white mb-4">
              <li><Link to="/example1Image">1. How do I reset my password?</Link></li>
              <li><Link to="/confirmEmail">2. How can I contact customer support?</Link></li>
              <li><Link to="/order-history">3. Where can I find my order history?</Link></li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-2">Contact Support</h3>
            <p className="text-white mb-4">
              If you need further assistance, please reach out to our support team at <a href="mailto:support@myfones.com" className='hover:underline'>support@myfones.com.</a>
            </p>
          </div>
          <div className='absolute bottom-0 right-0'>
            <Buttons 
                continueText='Next'
                continueLink='/exampleimage'
                backText='Back'
                backLink='/profile'
                showBackButton={true}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HelpCenter;
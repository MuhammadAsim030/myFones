import React from 'react';
import Card from '../components/Card.jsx';
import exampleImage from '../assets/IMEI.png';
import exampleImage2 from '../assets/Frame.png';

const Cards = () => {

  return (
    <div className="flex flex-col justify-center items-center text-white bg-[#01014B] h-screen">
      <div className="flex flex-1 w-full justify-center items-start mt-20">
        <main className="flex flex-col items-center w-1/2 p-8 shadow-sm shadow-white">
          <div className="flex flex-col gap-4 space-y-4 mt-4 justify-center w-full">
            <h2 className=' text-xl leading-none h-0 items-center font-[Poppins] m-auto'>Welcome to my Fones</h2>
            <hr className="border-t border-white w-full mt-2 mb-4"/>
            <div className="flex-1"> 
              <Card
                imageSrc={exampleImage}
                to="/exampleImage"
                title="IMEI Checker"
                description="Check Phone Details, no account"
                description1=" required"
              />
            </div>
            <div className="flex-1"> 
              <Card
                imageSrc={exampleImage2}
                to="/example1image"
                title="Login or Register"
                description="Create account and secure your device."
                description1=" Earn Upto 500PKR"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Cards;
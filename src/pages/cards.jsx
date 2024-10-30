import React from 'react';
import Card from '../components/Card.jsx';
import exampleImage from '../assets/IMEI.png';
import exampleImage2 from '../assets/Frame.png';
import { Link } from 'react-router-dom';

const Cards = () => {
  const handleButtonClick = () => alert("Continue to Login");

  return (
    <div className="flex flex-col justify-center items-center text-white bg-[#01014B] h-screen">
      <div className="flex flex-1 w-full justify-center items-center">
        <main className="flex flex-col items-center p-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 justify-center">
            <Card
              imageSrc={exampleImage}
              to="/exampleImage"
              title="IMEI Checker"
              description="Check Phone Details, no account"
              description1=" required"
            />
            <Card
              imageSrc={exampleImage2}
              to="/example1image"
              title="Login or Register"
              description="Create account and secure your device."
              description1=" Earn Upto 500PKR"
            />
          </div>
          <div className="flex mt-6 md:mt-10 ml-auto">
            <Link to="/example1image"> 
              <button
                type="button"
                onClick={handleButtonClick}
                className="bg-[#DFAD23] text-white rounded-full text-md md:text-2xl px-6 md:py-2 md:px-8 "
              >
                Continue
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Cards;
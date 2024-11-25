import React from 'react';
import navImg from '../assets/webFones1.png';
import bell from '../assets/28.png';
import Sidebar from '../components/sidebar.jsx';
import Cards from '../pages/cards.jsx';
import Buttons from '../components/buttons.jsx';

function Home() {
    const handleImg1Click = () => {
        alert("Notifications here");
    };
    const handleImgClick = () => {
        alert("Click to main menu");
    };

    return (
        <div className="relative h-screen">
            <header className="flex justify-between items-center bg-[#01014B] header-shadow">
                <div className="flex flex-col items-center">
                    <img src={navImg} className="h-15 w-[100px]" onClick={handleImgClick} />
                    <span className='text-[#DFAD23] text-sm leading-3 mb-2 ml-2'>Welcome to myFones</span>
                </div>
                <div className="flex items-center mr-20 p-2 bg-[#DFAD23] rounded-full">
                    <img src={bell} className='h-6 w-6 rounded-2xl' onClick={handleImg1Click} />
                </div>
            </header>
            <div className="flex header-shadow shadow-lg h-full z-10">
                <div className='flex-grow header-shadow'>
                    <Cards />
                </div>
            </div>
        </div>
    );
}

export default Home;
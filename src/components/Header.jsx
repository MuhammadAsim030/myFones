import React, {useState} from 'react';
import navImg from '../assets/webFones1.png';
import bell from '../assets/28.png';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

    return (
        <header className="flex justify-between items-center bg-[#01014B] header-shadow">
            <div className="flex flex-col items-center">
                <img 
                    src={navImg} 
                    className="h-15 w-[100px]" 
                    onClick={() => navigate('/home')} 
                    alt="Logo" 
                />
                <span className='text-[#DFAD23] text-sm leading-3 mb-2 ml-2'>Welcome to myFones</span>
            </div>
            <div className="flex items-center mr-20 p-2 bg-[#DFAD23] rounded-full">
                <img 
                    src={bell} 
                    className='h-6 w-6 rounded-2xl' 
                    onClick={toggleDropdown} 
                    alt="Notifications" 
                />
                {isOpen && (
                    <div className="absolute right-0 mt-10 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    <div className="p-4">
                    <p className="text-gray-700">You have a new message!</p>
                        <p className="text-white bg-[#01014B] p-2  rounded-md">Congratulation Login is Completed</p>
                    </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
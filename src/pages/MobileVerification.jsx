import React, { useState } from 'react';
import Sidebar from '../components/sidebar.jsx';
import iphone from '../assets/iphonemyFones.png';
import MobileCard from '../components/MobileCard.jsx';
import Header from '../components/Header.jsx';
import { useNavigate } from 'react-router-dom';
import Buttons from '../components/buttons.jsx';

const MobileVerification = () => {
    const mobileInfo = {
        Image : {
           " src": "IMEINUmber"
        },
        basic: {
            "IMEI Number": "123456789",
            "IMEI2 Number": "987654321",
            "Manufacture": "Apple",
            "Phone Model": "iPhone Pro Max"
        },
        extra: {
            "Color": "Silver",
            "PTA Approved": "Yes",
            "Condition": "Like New"
        },
        owner: {
            "Owner Name": "Usama Saeed",
            "Identity Number": "28965-5689754-5"
        }
    };

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const renderTable = (data) => (
        <table className="w-full text-[#7a7ace]">
            <tbody>
                {Object.entries(data).map(([key, value]) => (
                    <tr key={key}>
                        <th className="text-left">{key}:</th>
                        <td>{value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            const imeiNumber = mobileInfo.basic["IMEI Number"];
            if (searchTerm === imeiNumber) {
                navigate(`/mobile-verification/${searchTerm}`);
            } else {
                alert('IMEI number not found');
            }
        }
    };

    const handleContinue = () => {
        alert('you will redirected to Login Page');
    }


    return (
        <>
            <Header />
            <div className="flex h-screen bg-[#01014B]">
                <div className='z-10 h-full w-1/4'>
                    <Sidebar />
                </div>
                <div className="flex flex-col h-full w-full"> 
                    <div className="flex flex-col flex-grow overflow-y-auto p-4"> 
                        <div className="flex flex-col mt-10 mb-20 w-full items-center">
                            
                            <input
                                type="search"
                                placeholder="Enter IMEI Number..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={handleSearch} 
                                className="w-full max-w-md p-2 shadow-md shadow-gray-600 rounded-lg bg-[#F2F2F21A] text-white placeholder-[#7a7ace] focus:outline-none focus:ring-2 focus:ring-[#DFAD23] transition duration-200 mb-4"
                            />
                            {searchTerm === mobileInfo.basic["IMEI Number"] && (
                                <div className='shadow-md shadow-white mb-20 p-8'>
                                    <div className="flex flex-col items-center">
                                        <h2 className='text-white text-xl'>IMEI Registration</h2>
                                        <hr className="border-t border-white w-full mt-2 mb-4" />
                                    </div>
                                    <MobileCard className="w-80"> 
                                        <div className="flex items-center gap-6 w-full mb-4">
                                            <img src={iphone} alt="iPhone" className="w-16 mr-4" />
                                            <div>
                                                <h2 className="text-white text-xl font-semibold">Apple-iPhone-15 Pro Max</h2>
                                                <p className="text-[#7a7ace]">IMEI: {mobileInfo.basic["IMEI Number"]}</p>
                                            </div>
                                            <div>
                                                <h2 className="text-white text-xl font-semibold">USA based</h2>
                                                <p className="text-[#7a7ace]">IMEI 2: {mobileInfo.basic["IMEI2 Number"]}</p>
                                            </div>
                                        </div>
                                    </MobileCard>
                                    <div className='flex flex-col gap-4'> 
                                        <MobileCard title="Basic Information" className="w-80">{renderTable(mobileInfo.basic)}</MobileCard>
                                        <MobileCard title="Extra Information" className="w-80">{renderTable(mobileInfo.extra)}</MobileCard>
                                        <MobileCard title="Owner Information" className="w-80">{renderTable(mobileInfo.owner)}</MobileCard>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="fixed bottom-4 left-4 right-4 flex justify-end gap-4">
                        <Buttons 
                            fullWidth={false} 
                            continueText="Continue" 
                            continueLink='/Profile' 
                            onClick={handleContinue}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileVerification;
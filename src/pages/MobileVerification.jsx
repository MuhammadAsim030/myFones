import React, { useState } from 'react';
import Sidebar from '../components/sidebar.jsx';
import iphone from '../assets/iphonemyFones.png';
import MobileCard from '../components/MobileCard.jsx';
import Header from '../components/Header.jsx';
import { Link, useNavigate } from 'react-router-dom';

const MobileVerification = () => {
    const mobileInfo = {
        basic: {
            "IMEI Number": "2348765409876543",
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

    return (
        <>
            <Header />
            <div className="flex flex-col lg:flex-row bg-[#01014B] h-full">
                <div className='shadow-lg z-10'>
                    <Sidebar />
                </div>
                <div className="flex flex-col justify-center items-center p-4 w-full">
                    <h1 className='bg-transparent mb-4 text-white rounded-full'>2348765409876543</h1>
                    <input
                        type="search"
                        placeholder="Enter IMEI Number..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={handleSearch}
                        className="w-full max-w-md p-2 rounded-lg bg-[#F2F2F21A] text-white placeholder-[#7a7ace] focus:outline-none focus:ring-2 focus:ring-[#DFAD23] transition duration-200 mb-4"
                    />
                    {searchTerm === mobileInfo.basic["IMEI Number"] && (
                        <div>
                            <MobileCard>
                                <div className="flex items-center w-full mb-4">
                                    <img src={iphone} alt="iPhone" className="w-16 mr-4" />
                                    <div>
                                        <h2 className="text-white text-xl font-semibold">Apple-iPhone-15 Pro Max</h2>
                                        <p className="text-[#7a7ace]">IMEI: {mobileInfo.basic["IMEI Number"]}</p>
                                    </div>
                                </div>
                            </MobileCard>
                            <div className='flex flex-col lg:flex-row gap-4'>
                                <MobileCard title="Basic Information">{renderTable(mobileInfo.basic)}</MobileCard>
                                <MobileCard title="Extra Information">{renderTable(mobileInfo.extra)}</MobileCard>
                                <MobileCard title="Owner Information">{renderTable(mobileInfo.owner)}</MobileCard>
                            </div>
                        </div>
                    )}
                    <div className="flex flex-col lg:flex-row justify-center mt-4">
                        <Link to="/home">
                            <button className="ring-2 ring-[#DFAD23] text-white ml-5 p-2 px-8 rounded-full mr-4 mb-2 lg:mb-0">Back</button>
                        </Link>
                        <Link to="/home">
                            <button className="bg-[#DFAD23] text-white p-2 px-8 rounded-full mr-10 mb-2 lg:mb-0">Continue</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileVerification;
import React, { useState } from 'react';
import { FaArrowDown } from "react-icons/fa";
import { Us, Ca, Gb, Au, Pk } from "react-flags-select";
import { Link } from 'react-router-dom';

const countries = [
  { name: 'United States', flag: <Us />, code: '' },
  { name: 'Canada', flag: <Ca />, code: '' },
  { name: 'United Kingdom', flag: <Gb />, code: '' },
  { name: 'Australia', flag: <Au />, code: '' },
  { name: 'Pakistan', flag: <Pk />, code: '' },
];

const LoginForm = ({ handleVerification }) => {
  const [countryName, setCountryName] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [showCountries, setShowCountries] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleVerification();
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setCountryName(country.name);
    setShowCountries(false);
  };

  const toggleCountryList = () => setShowCountries((prev) => !prev);

  const handleCheckContinue = () => {
    alert("Continue to Login form");
  };

  return (
    <div className="bg-[#01014B] text-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Passport Details</h2>
      <p className="text-sm font-semibold text-[#9D9693] text-center">Please enter your Passport details</p>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 ml-2 mt-4 text-sm sm:text-base">Country Name</label>
        <div className="relative">
          <input
            type="text"
            value={countryName}
            onFocus={() => setShowCountries(true)}
            onChange={(event) => {
              setCountryName(event.target.value);
              setShowCountries(false);
            }}
            className="border border-[#9D9693] bg-[#01ECB812] rounded-full p-2 w-full mb-4 pr-10 text-sm sm:text-base"
            required
          />
          <button
            type="button"
            onClick={toggleCountryList}
            className="absolute right-2 top-1/3 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
          >
            <FaArrowDown />
          </button>
          {showCountries && (
            <div className="absolute bg-[#01014B] text-white hover:bg-[#01014B] rounded shadow-lg w-full mt-1 z-10">
              {countries.map((country) => (
                <label key={country.name} className="flex items-center p-2 hover:bg-gray-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedCountry?.name === country.name}
                    onChange={() => handleCountrySelect(country)}
                    className="mr-2 bg-[#01ECB812]"
                  />
                  {country.flag} {country.name}
                </label>
              ))}
            </div>
          )}
        </div>

        <label className="block mb-2 ml-2 text-sm sm:text-base">Passport Number</label>
        <input
          type="tel"
          value={passportNumber}
          onChange={(event) => setPassportNumber(event.target.value)}
          className="border border-[#9D9693] bg-[#01ECB812] rounded-full p-2 px-4 w-full mb-4 text-sm sm:text-base"
          placeholder="258956-265-9"
          required
        />
        <div className="flex flex-col gap-2 sm:flex-row justify-between">
          <Link to="/home">
            <button
              type="button"
              className="bg-transparent text-white border-2 border-[#DFAD23] rounded-full cursor-pointer p-2 px-6 sm:px-10 flex-1 transition"
            >
              Back
            </button>
          </Link>
          <Link to="/home">
            <button
              type="submit"
              onClick={handleCheckContinue}
              className="bg-[#DFAD23] text-white rounded-full p-2 px-6 sm:px-10 text-sm sm:text-lg transition"
            >
              Continue
            </button>
          </Link>
        </div>
      </form>
 </div>
  );
};

export default LoginForm;
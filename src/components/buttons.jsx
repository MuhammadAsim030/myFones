import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = ({ 
  backText = "Back", 
  continueText = "Continue", 
  backLink = "/home", 
  continueLink = "/home", 
  fullWidth = false,
  showBackButton = false
}) => {
  return (
    <div className={`bg-[#01014B] flex flex-col sm:flex-row justify-end gap-4 sm:gap-6 p-4 sm:p-8 ${fullWidth ? 'w-full' : 'w-auto'}`}>
      {showBackButton && backText && (
        <Link to={backLink} className="w-full sm:w-auto">
        <button className="ring-2 ring-[#DFAD23] text-white p-2 px-4 sm:px-8 rounded-full w-full">{backText}</button>
      </Link>
      )}
      <Link to={continueLink} className="w-full sm:w-auto">
        <button className="bg-[#DFAD23] text-white p-2 px-4 sm:px-8 rounded-full w-full">{continueText}</button>
      </Link>
    </div>
  );
}

export default Buttons;
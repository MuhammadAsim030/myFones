

import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ imageSrc, title, description, description1, to }) => {
  
    return (
      <Link to={to} className='block'>
        <div className="flex items-center w-full rounded-xl bg-[#01ECB812] shadow-lg overflow-hidden">
          <img src={imageSrc} alt={title} className="w-10 h-10 bg-[#9535A11A] p-2 rounded-full ml-6 my-auto" />
      <div className="p-3 flex flex-col justify-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-white">{description}</p>
        <p className="text-white ">{description1}</p>
      </div>
    </div>
      </Link> 
    );
  };

export default Card  



import React from 'react';

const MobileCard = ({ title, children }) => {
    return (
        <div className="bg-[#151554] rounded-lg shadow-lg p-4 m-2 flex flex-col">
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <div className="text-[#7a7ace]">{children}</div>
        </div>
    );
};

export default MobileCard;
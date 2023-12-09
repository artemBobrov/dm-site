import Link from 'next/link';
import React, { useState } from 'react';

interface DropDownProps {
    label: string;
    showIcon: boolean;
  }

const DropDown: React.FC<DropDownProps> = ({ label, showIcon }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {setIsOpen(!isOpen);};
    

    return (
        <div className="relative">
            <button onClick={toggleDropdown} className="px-1 py-2 hover:text-cta-blue flex flex-row items-center">
                {label}
                {showIcon && <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    {/* Example SVG path */}
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>}
            </button>
            {showIcon && isOpen && (
                <div className="absolute right-0 w-40 mt-2 bg-white rounded-md shadow-lg">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Link 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Link 2</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Link 3</a>
                </div>
            )}
        </div>
    );
};

export default DropDown;
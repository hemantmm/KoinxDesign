import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo at left side */}
                    <div className="flex items-center">
                        <img src="/path/to/your/logo.png" alt="Logo" className="h-8" />
                    </div>
                    {/* Hamburger menu for small screens */}
                    <div className="block lg:hidden">
                        <button onClick={toggleNavbar} className="text-white focus:outline-none">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    {/* Menu items */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-4">
                        <a href="#" className="text-white hover:text-gray-300">Crypto Taxes</a>
                        <a href="#" className="text-white hover:text-gray-300">Free Tools</a>
                        <a href="#" className="text-white hover:text-gray-300">Resource Center</a>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            {/* Responsive menu */}
            {isOpen && (
                <div className="lg:hidden mt-4">
                    <a className="block text-white py-2 px-4">Crypto Taxes</a>
                    <a className="block text-white py-2 px-4">Free Tools</a>
                    <a className="block text-white py-2 px-4">Resource Center</a>
                    <button className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mt-4 mx-auto">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const regions = ['Punjab', 'Sindh', 'KhyberPakhtunkhwa', 'Balochistan', 'GilgitBaltistan', 'AzadKashmir'];



    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLinkClick = () => {
        setIsDropdownOpen(false); // Close dropdown when a link is clicked
        if (isMenuOpen) {
            setIsMenuOpen(false); // Close menu on small screens
        }
    };

    return (
        <>
            <div className="text-white">
                <div className="max-w-7xl mx-auto h-16 flex justify-between items-center">
                    <Link to="/" onClick={handleLinkClick}>
                        <div className="flex gap-2 md:ml-0 ml-2">
                            <img src={logo} alt="PakPride Logo" />
                            <h1 className="text-[#990011] font-bold text-2xl">PakPride</h1>
                        </div>
                    </Link>

                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-[#990011] focus:outline-none mr-2 "
                        >
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>

                    <div
                        className={`${isMenuOpen ? 'block' : 'hidden'
                            } md:flex md:items-center md:gap-14 font-medium absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent text-black md:text-white p-4 md:p-0 z-50`}
                    >
                        <ul className="list-none md:flex gap-14 items-center">
                            <li className="group relative cursor-pointer transform transition-transform duration-200 hover:scale-105">
                                <div
                                    className="flex text-[#990011] items-center justify-between"
                                    onClick={toggleDropdown}
                                >
                                    Regions
                                    <FaChevronDown
                                        className={`ml-2 mt-1 transform ${isDropdownOpen ? 'rotate-180' : ''
                                            } transition-transform duration-200`}
                                    />
                                </div>
                                <ul
                                    className={`${isDropdownOpen ? 'block' : 'hidden'
                                        }  absolute right-0 text-sm p-5 w-full md:w-[44rem] rounded-xl text-black bg-white border border-gray-200 shadow-lg grid grid-cols-1 md:grid-cols-3 gap-2`}
                                >
                                    {regions.map((region) => (
                                        <Link key={region} to={`/regions/${region}`} onClick={handleLinkClick}>
                                            <li className="text-center text-lg text-[#990011] px-1 py-6 hover:bg-gray-100">
                                                {region.replace('-', ' ')}
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </li>
                            <li className="md:mt-0 mt-4">
                                <Link onClick={handleLinkClick}
                                    to="/register"
                                    className="py-2 px-4 border-2 border-[#990011] text-[#990011] rounded-lg transition duration-300 ease-in-out 
                                    hover:bg-[#990011] hover:text-white hover:border-transparent block text-center"
                                >
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

import React from 'react'
import logo from "../assets/logo.png"
import { FaChevronDown } from 'react-icons/fa';

import { Link } from 'react-router-dom'

const Navbar = () => {

    const regions = ["Punjab", "Sindh", "KhyberPakhtunkhwa", "Balochistan", "GilgitBaltistan", "AzadKashmir"];

    return (
        <>
            <div className=' text-white'>
                <div className='max-w-7xl mx-auto h-16 flex justify-between items-center '>
                    <div className=''>
                        {/* <Link to="/"><img src={logo} alt="" /></Link> */}
                        <h1 className='text-[#990011] font-bold text-2xl'>PakPride</h1>
                    </div>

                    <div className="relative">
                        <ul className="list-none flex gap-14 font-medium items-center">
                            <li className="group relative cursor-pointer transform transition-transform duration-200 hover:scale-105">
                                <div className='flex text-[#990011]'>
                                    Regions
                                    <FaChevronDown className="ml-2 mt-1 transform group-hover:rotate-180 transition-transform duration-200" />
                                </div>
                                <ul className="absolute right-0 hidden text-sm p-5 w-[44rem] rounded-xl text-black bg-white border border-gray-200 shadow-lg group-hover:grid group-hover:grid-cols-3 group-hover:gap-2">
                                    {regions.map((region) => (
                                        <Link key={region} to={`/regions/${region}`}>
                                            <li className="text-center text-lg  px-1 py-6 hover:bg-gray-100 ">{region.replace('-', ' ')}</li>
                                        </Link>
                                    ))}

                                </ul>

                            </li>
                            <li>
                                <Link
                                    to="/register"
                                    className='py-2 px-4 border-2 border-[#990011] text-[#990011] rounded-lg transition duration-300 ease-in-out 
               hover:bg-[#990011] hover:text-white hover:border-transparent'>
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
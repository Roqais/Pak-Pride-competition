import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {

    const regions = ["Punjab", "Sindh", "KhyberPakhtunkhwa", "Balochistan", "GilgitBaltistan", "AzadKashmir"];

    return (
        <>
            <div style={{ backgroundColor: "#00712D" }} className=' text-white'>
                <div className='max-w-7xl mx-auto h-16 flex justify-between items-center'>
                    <div className=''>
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>

                    <div className="relative">
                        <ul className="list-none flex gap-14 font-medium items-center">
                            <li className="group relative cursor-pointer transform transition-transform duration-200 hover:scale-105">
                                Regions
                                <ul className="absolute right-0 hidden text-sm w-[44rem] rounded-xl text-black bg-white border border-gray-200 shadow-lg group-hover:grid group-hover:grid-cols-3 group-hover:gap-2">
                                    {regions.map((region) => (
                                        <Link key={region} to={`/regions/${region}`}>
                                            <li className="text-center px-1 py-6 hover:bg-gray-100">{region.replace('-', ' ')}</li>
                                        </Link>
                                    ))}

                                </ul>

                            </li>
                            <li><button className='py-2 px-4 bg-red-800 rounded-lg'>Register</button></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import dual from "../assets/dual.png";
import roqais from "../assets/profiles/p1.jpg";
import farah from "../assets/profiles/farah.jpg";
import ind1 from '../assets/bg-ind.jpg';
import pak from '../assets/pak-flag.jpg';

const Home = () => {
    // State to control the visibility of the fullscreen image
    const [isImageVisible, setIsImageVisible] = useState(true);

    // Function to hide the fullscreen image
    const handleButtonClick = () => {
        setIsImageVisible(false);
    };

    return (
        <div className="bg-gray-100">

            {/* Fullscreen Overlay */}
            {isImageVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
                    <div className="relative md:w-[50%] md:h-[55%] w-[85%] h-[50%] max-w-full max-h-full border p-2 rounded-lg bg-gray-300 border-gray-300">
                        <img src={ind1} alt="Independence Day" className="w-full rounded-lg h-full object-cover" />

                        {/* Close Button */}
                        <button
                            onClick={handleButtonClick}
                            className="absolute top-4 right-4 text-red-700 text-3xl h-12 w-12 rounded-full flex items-center justify-center bg-white   hover:bg-[#155a15] hover:text-white transition"
                        >
                            &times;
                        </button>

                    </div>
                    <button
                        onClick={handleButtonClick}
                        className="md:text-lg text-xs absolute bottom-40 md:bottom-24 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#1f6821] to-[#155a15] text-white py-3 px-6 rounded-full shadow-lg hover:shadow-2xl hover:opacity-90 transition ease-in-out duration-300"
                    >
                        Pakistan Zindabad
                    </button>


                </div>
            )}



            <section className='md:py-28'>
                <div className='flex flex-col md:flex-row  justify-between md:max-w-7xl md:mx-auto gap-8 items-center'>
                    <div className='md:order-1 order-2 md:mx-10 mb-12 md:mt-0 mt-2'>
                        <h1 className='md:text-4xl leading-18 text-2xl font-bold tracking-wider md:text-left text-center'>
                            <span className='text-[#1f6821]'>Celebrating</span> <br />
                            <span className='md:text-6xl text-3xl text-[#2C8C30]'> 77 Years of Freedom </span>
                        </h1>
                        <p className='mt-6 font-light leading-7 md:pr-10 md:px-0 px-4'>
                            As we mark Pakistan's 77th Independence Day, we honor the spirit of resilience and <br />
                            unity that has shaped our nation's journey. Let's come together to reflect on our <br />
                            past, celebrate our present, and envision a brighter future for generations to come. <br />
                            As Pakistan celebrates its 77th Independence Day, we pause to honor the remarkable journey that began on August 14, 1947. This day marks the realization of a dream born <br />
                            from the tireless efforts and sacrifices of countless individuals who envisioned a free <br />
                            and sovereign nation. From the vision of our founding fathers to the struggles of ordinary citizens, Pakistan's independence was hard-won, and its significance continues to resonate across generations.
                        </p>
                    </div>

                    <img src={pak} className='md:order-2 order-1 w-[25rem] h-[25rem] md:w-[28rem] md:h-[28rem] md:rounded-full bg-cover bg-center bg-no-repeat' alt="" />
                </div>
            </section>

            <div className='border border-slate-400'></div>

            {/* DualForce Section */}
            <section className='relative py-20'>
                <div className='bg-[#111827] absolute -left-10 md:top-32 top-10 rounded-xl md:h-80 h-[39rem] w-1/2'></div>

                <div className='bg-[#1F2937] relative max-w-3xl mx-auto flex flex-col gap-8 items-center justify-center md:h-[27rem] h-[33rem] md:rounded-xl px-4'>
                    <img src={dual} alt="DualForce" className='h-auto' />
                    <p className='text-center text-white md:px-4'>
                        <i>“DualForce combines the creative power of design with the technical strength of development. Together, we craft seamless and impactful landing pages that stand out in any competition.”</i>
                    </p>

                    <div className='flex flex-row items-center justify-between text-white md:gap-44 gap-14 md:mt-1'>
                        <div className='flex flex-col items-center'>
                            <div className='w-24 h-24 bg-cover bg-center rounded-full hover:cursor-pointer' style={{ backgroundImage: `url(${roqais})` }}></div>
                            <h2 className='mt-4 text-xl'>Roqais Mahmood</h2>
                            <h3>(Developer)</h3>
                            <div className='flex gap-4 mt-3'>
                                <a href='https://www.linkedin.com/in/roqais-mahmood-225a33251/' target='_blank' rel="noopener noreferrer">
                                    <FaLinkedin className="w-7 h-7" />
                                </a>
                                <FaEnvelope className='w-7 h-7' />
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='w-24 h-24 bg-cover bg-top rounded-full hover:cursor-pointer' style={{ backgroundImage: `url(${farah})` }}></div>
                            <h2 className='mt-4 text-xl'>Farah Siddique</h2>
                            <h3>(Designer)</h3>
                            <div className='flex gap-4 mt-3'>
                                <a href='https://www.linkedin.com/in/farah-siddique-ba12892a7/' target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="w-7 h-7" />
                                </a>
                                <FaEnvelope className='w-7 h-7' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#1F2937] flex flex-col items-center py-8 text-white">
                <div className="flex gap-6 mb-4">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-2xl" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl" />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-2xl" />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl" />
                    </a>
                </div>
                <p className="text-center text-sm">© All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;

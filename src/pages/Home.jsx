import React, { useEffect } from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/P3.png';
import p4 from '../assets/P4.png';
import dual from "../assets/dual.png";
import quaid from "../assets/quaid.png";
import main from '../assets/main.jpg';
import { Link } from 'react-router-dom';

import roqais from "../assets/profiles/p1.jpg"
import farah from "../assets/profiles/farah.jpg"

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <section className='bg-main flex flex-col items-center pt-14 mb-20 px-4'>
                <h1 className='text-4xl sm:text-5xl font-playfair font-extrabold text-center'>
                    Celebrate Pakistan's Diversity with PakPride
                </h1>
                <p className='text-lg sm:text-xl text-center my-4 px-4 md:px-96 font-light'>
                    Discover the beauty of Pakistan's diverse cultures, regions, languages,
                    and traditions with PakPride. Embrace the richness of diversity.
                </p>
                <img src={main} className='w-full sm:w-7/12 h-auto object-cover rounded-lg mt-8' alt="Main" />
            </section>

            <div className='border border-slate-400'></div>

            {/* Explore Section */}
            <section className='text-center md:py-20 py-14 px-4'>
                <h2 className='text-2xl sm:text-3xl font-playfair font-extrabold'>
                    Explore Pakistan's Diversity
                </h2>
                <p className='text-base sm:text-lg font-light mt-4 mx-auto max-w-4xl'>
                    Pakistan's diversity is a rich tapestry of cultures, languages, and traditions. From the
                    vibrant festivals of Punjab to the serene valleys of Gilgit-Baltistan, each region offers a
                    unique blend of history, art, and cuisine, reflecting the nation's deep cultural heritage.
                </p>
            </section>

            {/* Embrace Cultural Richness Section */}
            <section className='grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-8 mx-4 md:mx-32 pt-4 md:pb-20 pb-10'>
                <div data-aos="fade-right">
                    <img src={p2} alt="Cultural Richness" className='w-full h-auto' />
                </div>
                <div data-aos="fade-left" className='md:flex md:flex-col item-center justify-center md:text-left text-center'>
                    <h3 className='text-2xl font-playfair font-extrabold md:mb-2 mb-4'>Embrace Cultural Richness</h3>
                    <p className='text-base font-light'>
                        Embrace the cultural richness of Pakistan, where centuries-old
                        traditions meet modern vibrancy. Each region's distinct heritage
                        contributes to a unified mosaic, celebrating the beauty of
                        diversity through art, music, and shared experiences.
                    </p>
                </div>
            </section>

            {/* Learn About Different Regions Section */}
            <section className='grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-8 mx-4 md:mx-32 pt-4 md:pb-20 pb-10'>
                <div data-aos="fade-right" className='md:order-1 order-2 md:flex md:flex-col item-center justify-center md:text-left text-center'>
                    <h3 className='text-2xl font-playfair font-extrabold md:mb-2 mb-4'>Learn About Different Regions</h3>
                    <p className='text-base font-light'>
                        Discover the distinct charm of Pakistan's diverse regions, each offering unique
                        landscapes, traditions, and lifestyles. From the bustling cities to the tranquil
                        countryside, learning about these areas reveals the nation's multifaceted
                        identity.
                    </p>
                </div>
                <div data-aos="fade-left" className='md:order-2 order-1'>
                    <img src={p3} alt="Different Regions" className=' w-full h-auto' />
                </div>
            </section>

            {/* Connect Through Languages Section */}
            <section className='grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-8 mx-4 md:mx-32 pt-4 md:pb-20 pb-14'>
                <div data-aos="fade-right">
                    <img src={p4} alt="Languages" className='w-full h-auto' />
                </div>
                <div data-aos="fade-left" className='md:flex md:flex-col item-center justify-center md:text-left text-center'>
                    <h3 className='text-2xl font-playfair font-extrabold md:mb-2 mb-4'>Connect Through Languages</h3>
                    <p className='text-base font-light'>
                        Connect through the myriad of languages spoken across
                        Pakistan, each carrying the essence of its community. From Urdu
                        to Punjabi, Sindhi to Pashto, these languages unite people while
                        preserving the rich cultural diversity of the nation.
                    </p>
                </div>
            </section>

            <div className='border border-slate-400'></div>

            {/* Inspirational Quote Section */}
            <section className='bg-[#894838] md:py-14 py-8 flex flex-col text-white items-center md:gap-4'>
                <h2 className='md:text-xl text-lg md:px-0 px-12 font-playfair font-semibold text-center mb-4'>
                    "With faith, discipline, and selfless devotion to duty, <br />
                    there is nothing worthwhile that you cannot achieve."
                </h2>
                <div className='flex flex-col sm:flex-row items-center md:gap-4 md:mt-0 mt-2'>
                    <img src={quaid} alt="Quaid-e-Azam" className='md:w-10 w-10 h-auto' />
                    <div className='text-center sm:text-left'>
                        <h3 className=' text-sm font-medium'>Quaid-e-Azam Muhammad Ali Jinnah</h3>
                        <p className=' text-sm font-light'>(Pakistan's founder)</p>
                    </div>
                </div>
            </section>

            {/* DualForce Section */}
            <section className='relative py-20'>
                <div className='bg-[#111827] absolute -left-10 top-32 rounded-xl h-80 w-1/2'></div>

                <div className='bg-[#1F2937] relative max-w-3xl mx-auto flex flex-col gap-8 items-center justify-center h-[27rem] md:rounded-xl px-4'>
                    <img src={dual} alt="DualForce" className='h-auto' />
                    <p className='text-center text-white px-4'>
                        <i>“DualForce combines the creative power of design with the technical strength of development. Together, we craft seamless and impactful landing pages that stand out in any competition.”</i>
                    </p>

                    <div className='flex flex-col md:flex-row items-center justify-between text-white md:gap-44 md:mt-1'>
                        <div className='flex flex-col items-center'>
                            <div className='w-24 h-24 bg-cover bg-center rounded-full' style={{ backgroundImage: `url(${roqais})` }}></div>
                            <h2 className='mt-4 text-xl'>Roqais Mahmood</h2>
                            <h3>(Developer)</h3>
                            <div className='flex gap-4 mt-3'>
                                <a href='https://www.linkedin.com/in/roqais-mahmood-225a33251/' target='_blank'>
                                    <FaLinkedin className=" w-7 h-7" />
                                </a>
                                <FaEnvelope className=' w-7 h-7' />
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='w-24 h-24 bg-cover bg-top rounded-full' style={{ backgroundImage: `url(${farah})` }}></div>
                            <h2 className='mt-4 text-xl'>Farah Siddique</h2>
                            <h3>(Designer)</h3>
                            <div className='flex gap-4 mt-3'>
                                <a href='https://www.linkedin.com/in/farah-siddique-ba12892a7/' target="_blank">
                                    <FaLinkedin className=" w-7 h-7" />
                                </a>
                                <FaEnvelope className=' w-7 h-7' />
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

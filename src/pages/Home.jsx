import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/P3.png'
import p4 from '../assets/P4.png'

import main from '../assets/main.jpg'

const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div style={{ backgroundColor: "#E2E8F0" }}>

                <section className='max-w-7xl mx-auto flex flex-col items-center pt-14 mb-20'>
                    <h1 style={{ fontWeight: "900" }} className='text-5xl font-playfair'>Celebrate Pakistan's Diversity with PakPride</h1>

                    <p style={{ fontSize: "20px", fontWeight: "300" }} className='px-72 text-center my-4'>Discover the beauty of Pakistan's diverse cultures, regions, languages,
                        and traditions with PakPride. Embrace the richness of diversity.</p>

                    <img src={main} className='w-7/12 h-auto object-cover rounded-lg mt-8' alt="" />
                </section>

                <div className='border border-slate-400 '></div>


                <section >
                    <div className='text-center py-20'>
                        <h2 style={{ fontWeight: "900" }} className='text-3xl font-playfair  font-extrabold'>Explore Pakistan's Diversity</h2>
                        <p style={{ fontWeight: "300" }} className='px-96 my-4'>Pakistan's diversity is a rich tapestry of cultures, languages, and traditions. From the
                            vibrant festivals of Punjab to the serene valleys of Gilgit-Baltistan, each region offers a
                            unique blend of history, art, and cuisine, reflecting the nation's deep cultural heritage.</p>
                    </div>

                </section>


                <section className='grid grid-cols-2 justify-center items-center gap-20 mx-32 pt-4 pb-20'>
                    <div data-aos="fade-right">
                        <img src={p2} alt="" />
                    </div>

                    <div data-aos="fade-left">
                        <h3 style={{ fontWeight: "900" }} className='text-2xl pb-2 font-playfair'>Embrace Cultural Richness</h3>
                        <p style={{ fontWeight: "300" }} className='text-left pr-6 font-light'>Embrace the cultural richness of Pakistan, where centuries-old
                            traditions meet modern vibrancy. Each region's distinct heritage
                            contributes to a unified mosaic, celebrating the beauty of
                            diversity through art, music, and shared experiences.</p>

                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800
                             focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2
                              mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
                               dark:focus:ring-blue-800 mt-3">Explore</button>
                            </div>
                </section>

                <section className='grid grid-cols-2 justify-center items-center gap-20 mx-32 pt-4 pb-20'>

                    <div data-aos="fade-right">
                        <h3 style={{ fontWeight: "900" }} className='text-2xl  pb-2 font-playfair'>Learn About Different Regions</h3>
                        <p style={{ fontWeight: "300" }} className='text-left pr-6'>Discover the distinct charm of Pakistan's diverse regions, each offering unique
                            landscapes, traditions, and lifestyles. From the bustling cities to the tranquil
                            countryside, learning about these areas reveals the nation's multifaceted
                            identity.</p>
                    </div>
                    <div data-aos="fade-left">
                        <img src={p3} alt="" />
                    </div>
                </section>


                <section className='grid grid-cols-2 justify-center items-center gap-20 mx-32 pt-4 pb-20'>
                    <div data-aos="fade-right">
                        <img src={p4} alt="" />
                    </div>

                    <div data-aos="fade-left">
                        <h3 style={{ fontWeight: "900" }} className='text-2xl pb-2 font-playfair'>Connect Through Languages</h3>
                        <p style={{ fontWeight: "300" }} className='text-left pr-6 font-light'>Connect through the myriad of languages spoken across
                            Pakistan, each carrying the essence of its community. From Urdu
                            to Punjabi, Sindhi to Pashto, these languages unite people while
                            preserving the rich cultural diversity of the nation.</p>
                    </div>
                </section>

                <div className='border border-slate-400 py-20'></div>


            </div>
        </>
    )
}

export default Home
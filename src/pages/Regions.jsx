import React from 'react';
import { useParams } from 'react-router-dom';

// Punjab
import p1Main from "../assets/punjab/p1Main.jpg";
import pun1 from "../assets/punjab/pMain.jpg";
import pun2 from "../assets/punjab/p2Main.jpg";

// Sindh
import sMain from '../assets/sindh/sMain.jpg';

// KP
import kpMain from '../assets/kp/kpMain.jpg';

// Balochistan
import bMain from '../assets/baloch/bMain.jpg'

//Gilgit
import gMain from '../assets/gMain.jpg'

//Kashmir
import kMain from '../assets/kMain.jpg'


// Sample data for each region
const regionData = {
    Punjab: {
        title: "Discover Punjab: Culture, History, and Festivals",
        description: 'Punjab, the most populous province of Pakistan, is known for its rich culture, history, and vibrant festivals. It is the land of five rivers, offering fertile plains and a blend of urban and rural life. Lahore, the capital, is a cultural hub with historic landmarks like the Badshahi Mosque, Lahore Fort, and Shalimar Gardens. The region is also famous for its cuisine, traditional music, and dance.',
        languages: 'In Punjab, Pakistan, Punjabi is the most widely spoken and culturally significant language. It is the mother tongue of the majority of the population in the region. Punjabi is an Indo-Aryan language and is spoken by about 80% of the population in Punjab. The language is rich in history and culture, with a vibrant tradition of poetry, music, and folklore. Punjabi is predominantly written in the Shahmukhi script, which is a variant of the Urdu script used in Pakistan. ',
        main: p1Main,
        culture: [
            {
                title: "Festivals",
                description: "Punjab is celebrated for its vibrant festivals such as Baisakhi, Lohri, and Diwali, each marked by lively rituals, traditional music, and community gatherings."
            },
            {
                title: "Cuisine",
                description: "Punjabi cuisine is renowned for its rich and flavorful dishes, including butter chicken, sarson da saag, makki di roti, and a variety of parathas and dals."
            },
            {
                title: "Music",
                description: "The region boasts a rich musical heritage with folk genres like Bhangra and Gidda, performed during festivals and cultural events to showcase traditional rhythms and melodies."
            },
            {
                title: "Dance",
                description: "Traditional dances such as Bhangra and Gidda are integral to Punjabi culture, known for their energetic and lively performances that celebrate joy and festivity."
            },
            {
                title: "Language",
                description: "Punjabi is the primary language spoken in Punjab, known for its rich tradition of poetry and literature, and is written in the Shahmukhi script in Pakistan."
            },
            {
                title: "Art and Craft",
                description: "Punjab has a vibrant tradition of arts and crafts, including phulkari embroidery, intricate woodwork, and pottery, reflecting the region's artistic heritage."
            }
        ]

    },
    Sindh: {
        title: "Discover Sindh: A Land of Rivers and Rich Heritage",
        description: "Sindh, a province in Pakistan, is renowned for its historical significance, diverse culture, and stunning landscapes. Bordering the Arabian Sea, it's known for its coastal cities and the mighty Indus River. With a blend of ancient civilizations and modern influences, Sindh offers a unique experience for visitors.",
        languages: "Sindhi, the soul of Sindh, is the primary language spoken by its people. Rich in history and culture, it's a language that weaves through the fabric of the province. While Urdu, Pakistan's national language, enjoys widespread use, especially in urban areas, Sindhi remains the linguistic heart of Sindh. English, as a global language, has its place in modern society, but it's Sindhi that truly defines the region's identity.",
        main: sMain, // Replace with your Sindh main image path
        culture: [
            {
                title: "Sufi Shrines",
                description: "Sindh is a spiritual heartland, home to revered Sufi saints. The shrines of Lal Shahbaz Qalandar and Shah Abdul Latif Bhitai are pilgrimage sites attracting devotees from around the world. Their teachings of love, tolerance, and harmony continue to inspire people.",
            },
            {
                title: "Mohenjo-daro and Harappa",
                description: "Discover the ancient cities of Mohenjo-daro and Harappa in Sindh, remnants of one of the world’s oldest civilizations. These sites showcase a sophisticated urban life with impressive planning, advanced sanitation systems, and remarkable architecture.",
            },
            {
                title: "Sindhi Ajrak",
                description: "Experience the artistry of Sindh through its iconic Ajrak, a block-printed textile renowned for its intricate patterns and vibrant colors. This cultural symbol represents the region's rich heritage and craftsmanship.",
            },
            {
                title: "Folklore and Music",
                description: "Immerse yourself in the enchanting world of Sindhi folklore, filled with legends and tales passed down through generations. The soulful melodies of Sindhi music, accompanied by traditional instruments like the algoze and the saz, create a mesmerizing experience.",
            },
            {
                title: "Cuisine",
                description: "Savor the flavors of Sindh with its diverse cuisine, influenced by its coastal location and rich agricultural heritage. Enjoy the delectable taste of biryani, fish curry, and the sweet delicacy, seyalan.",
            },
            {
                title: "Festivals",
                description: "Celebrate the vibrant spirit of Sindh through its colorful festivals. Cheti Chand, marking the Sindhi New Year, and Eid are major celebrations featuring traditional attire, music, dance, and delicious food.",
            }
        ]
    },
    KhyberPakhtunkhwa: {
        title: "Explore Khyber Pakhtunkhwa: Culture, History, and Traditions",
        description: 'Khyber Pakhtunkhwa, a province in northwestern Pakistan, is known for its stunning natural landscapes, rich cultural heritage, and historical significance. The region is characterized by its mountainous terrain, including the majestic Hindu Kush range, and its diverse cultural traditions. Peshawar, the provincial capital, is a historical city with landmarks like the Peshawar Museum and Qissa Khwani Bazaar.',
        languages: 'In Khyber Pakhtunkhwa, Pashto is the most widely spoken language and holds significant cultural importance. It is the mother tongue of the majority in the region and is known for its rich oral traditions, including poetry and storytelling. Pashto is an Indo-Iranian language with its own script. Urdu and English are also widely used, particularly in education and government.',
        main: kpMain,
        culture: [
            {
                title: "Festivals",
                description: "Khyber Pakhtunkhwa celebrates various festivals such as Eid-ul-Fitr, Eid-ul-Adha, and Pashto cultural festivals, each marked by traditional rituals, music, and community gatherings."
            },
            {
                title: "Cuisine",
                description: "The cuisine of Khyber Pakhtunkhwa includes flavorful dishes like Chapli Kebab, Peshawari Naan, and Kabuli Pulao, known for their rich and aromatic flavors."
            },
            {
                title: "Music",
                description: "Traditional music of Khyber Pakhtunkhwa features Pashto folk music, including instruments like the Rubab and Dhol, often performed during cultural events and celebrations."
            },
            {
                title: "Dance",
                description: "Pashto traditional dances, such as the Atan, are integral to Khyber Pakhtunkhwa's cultural heritage, showcasing energetic performances during festivals and gatherings."
            },
            {
                title: "Language",
                description: "Pashto is the primary language spoken in Khyber Pakhtunkhwa, with a rich tradition of oral literature and poetry. It is written in the Pashto script, and Urdu and English are also commonly used."
            },
            {
                title: "Art and Craft",
                description: "The region has a rich tradition of art and crafts, including intricate woodwork, traditional carpets, and embroidery, reflecting the cultural diversity of Khyber Pakhtunkhwa."
            }
        ]
    },

    Balochistan: {
        title: "Discover Balochistan: Culture, History, and Heritage",
        description: 'Balochistan, the largest province of Pakistan by area, is known for its diverse landscapes, rich cultural heritage, and historical significance. The region features arid deserts, rugged mountains, and a long coastline along the Arabian Sea. Quetta, the provincial capital, is a major center for trade and culture. Balochistan is known for its unique traditions, traditional music, and distinct cuisine.',
        languages: 'In Balochistan, Balochi is the most widely spoken language, reflecting the rich cultural identity of the region. It is an Indo-Iranian language with several dialects. Pashto and Brahui are also spoken by various communities in the province. Urdu and English are used in official contexts and education.',
        main: bMain,
        culture: [
            {
                title: "Festivals",
                description: "Balochistan celebrates various cultural festivals such as the Baloch Cultural Festival and religious events, featuring traditional music, dance, and communal activities."
            },
            {
                title: "Cuisine",
                description: "Balochi cuisine is known for its hearty and flavorful dishes like Sajji, Kaak, and Balochi Pilaf, often prepared with traditional spices and slow-cooking methods."
            },
            {
                title: "Music",
                description: "The traditional music of Balochistan includes genres like Balochi folk music and songs performed with instruments such as the Rubab and Dhol, reflecting the region's cultural heritage."
            },
            {
                title: "Dance",
                description: "Balochistan's traditional dances, such as the Balochi Leva, are integral to cultural celebrations, known for their energetic and rhythmic movements."
            },
            {
                title: "Language",
                description: "Balochi is the primary language spoken in Balochistan, with a rich tradition of poetry and oral literature. Pashto and Brahui are also spoken, with Urdu and English used for official purposes."
            },
            {
                title: "Art and Craft",
                description: "The province has a rich tradition of arts and crafts, including intricate Balochi embroidery, traditional weaving, and pottery, showcasing its artistic heritage."
            }
        ]
    },

    GilgitBaltistan: {
        title: "Explore Gilgit-Baltistan: Natural Beauty and Cultural Riches",
        description: 'Gilgit-Baltistan, located in the northernmost region of Pakistan, is renowned for its breathtaking landscapes, including towering mountains, deep valleys, and pristine lakes. The region is a gateway to some of the world’s highest peaks, including K2. Gilgit-Baltistan is known for its unique cultural heritage, traditional festivals, and the rich history of its diverse ethnic communities. The capital, Gilgit, serves as a central hub for tourism and cultural activities.',
        languages: 'In Gilgit-Baltistan, multiple languages are spoken, including Shina, Balti, and Khowar, reflecting the region’s ethnic diversity. Urdu and English are also used for official communication and education. Shina is the most widely spoken language in the Gilgit region, while Balti is prominent in the Baltistan region.',
        main: gMain,
        culture: [
            {
                title: "Festivals",
                description: "Gilgit-Baltistan celebrates various local festivals such as the Chilim Jusht Festival and the Shandoor Polo Festival, featuring traditional music, dance, and cultural events."
            },
            {
                title: "Cuisine",
                description: "The cuisine of Gilgit-Baltistan includes unique dishes like Chapshuro, Kabuli Pulao, and traditional Tibetan-inspired foods, known for their rich flavors and hearty ingredients."
            },
            {
                title: "Music",
                description: "The region's music includes traditional folk songs and instrumental performances, often featuring local instruments such as the Damani and Surna, reflecting the cultural diversity of Gilgit-Baltistan."
            },
            {
                title: "Dance",
                description: "Traditional dances of Gilgit-Baltistan, such as the Attan and the Khowar dance, are performed during festivals and celebrations, showcasing the vibrant cultural expressions of the region."
            },
            {
                title: "Language",
                description: "Shina, Balti, and Khowar are the primary languages spoken in Gilgit-Baltistan, with rich oral traditions and literature. Urdu and English are also prevalent for administrative and educational purposes."
            },
            {
                title: "Art and Craft",
                description: "Gilgit-Baltistan is known for its traditional arts and crafts, including intricate woodwork, handmade jewelry, and beautiful woven rugs, reflecting the region's rich artistic heritage."
            }
        ]
    },

    AzadKashmir: {
        title: "Discover Azad Kashmir: Natural Beauty and Cultural Heritage",
        description: 'Azad Kashmir, located in the northern part of Pakistan, is known for its stunning natural landscapes, including lush green valleys, serene lakes, and majestic mountains. The region is renowned for its breathtaking scenery and pleasant climate, making it a popular destination for tourists. Muzaffarabad, the capital, is a key cultural and administrative center. Azad Kashmir is rich in traditional culture, vibrant festivals, and unique cuisine.',
        languages: 'In Azad Kashmir, Urdu is the predominant language and serves as the primary mode of communication across the region. Kashmiri, also widely spoken, holds significant cultural importance and is used in various traditional and cultural contexts. English is commonly used in educational institutions and for official purposes, reflecting its role in administration and higher education.',
        main: kMain,
        culture: [
            {
                title: "Festivals",
                description: "Azad Kashmir celebrates various festivals such as Eid-ul-Fitr, Eid-ul-Adha, and local Kashmiri festivals, characterized by traditional rituals, music, and communal festivities."
            },
            {
                title: "Cuisine",
                description: "Kashmiri cuisine is known for its rich and flavorful dishes such as Rogan Josh, Yakhni, and Pulao, often prepared with a blend of aromatic spices and traditional cooking techniques."
            },
            {
                title: "Music",
                description: "Traditional Kashmiri music includes genres like Sufiyana Kalam and local folk music, performed with instruments such as the Santoor and Rabab, reflecting the region’s rich musical heritage."
            },
            {
                title: "Dance",
                description: "Traditional dances of Azad Kashmir include the Rouf and Hafiz Nagma, performed during cultural events and festivals, showcasing the region’s vibrant cultural expressions."
            },
            {
                title: "Language",
                description: "Urdu is the primary language spoken in Azad Kashmir, with Kashmiri also widely used and culturally significant. Both languages have a rich tradition of poetry and literature, while English is used for official and educational purposes."
            },
            {
                title: "Art and Craft",
                description: "Azad Kashmir is known for its traditional arts and crafts, including intricate Kashmiri shawls, carpets, and embroidery, reflecting the region’s artistic and cultural heritage."
            }
        ]
    }
    

};

const Regions = () => {
    const { name } = useParams();

    const regionInfo = regionData[name];

    if (!regionInfo) {
        return <div>Region not found</div>;
    }

    return (
        <>
            <div style={{ backgroundImage: `url(${regionInfo.main})`, zIndex: '-1', position: 'relative' }} className='min-h-screen bg-top bg-cover'>
                <div className="container mx-auto text-left text-white">
                    <h1 className="text-8xl font-bold tracking-wider text-white pl-32 pt-32 drop-shadow-[4px_4px_4px_rgba(0,0,0,1)] uppercase">{name}</h1>

                </div>
            </div>

            <div className='grid grid-cols-2 justify-center items center gap-20 my-32   px-20'>
                <div style={{ backgroundColor: "#E2E2B6" }} className='col-span-1 border-2 px-10 py-14 tracking-wider rounded-xl shadow-xl'>
                    <h2 style={{ color: "#03346E" }} className='text-3xl font-bold text-center'>{regionInfo.title}</h2>
                    <p style={{ color: "#021526" }} className='mt-5'>{regionInfo.description}</p>
                </div>

                <div style={{ backgroundColor: "#E2E2B6" }} className=' col-span-1 border-2 px-10 py-14  tracking-wider rounded-xl shadow-xl'>
                    <h1 style={{ color: "#03346E" }} className='text-center text-3xl font-bold tracking-wider'>Languages</h1>

                    <p style={{ color: "#021526" }} className='mt-5'>
                        {regionInfo.languages}
                    </p>
                </div>
            </div>


            <div className='text-center mb-20'>
                <h2 style={{ color: "#800000" }} className='text-5xl font-bold mb-20'>Culture</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10'>
                    {regionInfo.culture.map((item, index) => (
                        <div key={index} className='bg-white p-6 rounded-lg shadow-md border-2 border-green-600 mx-3 py-10 transform transition-transform duration-300 hover:scale-105 hover:cursor-default'>
                            <h3 className='text-2xl font-semibold mb-4'>{item.title}</h3>
                            <p className='text-gray-700'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default Regions;

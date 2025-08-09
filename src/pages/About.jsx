import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";
import MeetTheExperts from '../components/MeetTheExperts';
import { useState } from 'react';

function About() {
    const philosophies = [
        {
            img: 'img/ritual1.avif',
            title: 'Mindful Touch',
            desc: 'Each gesture in our rituals is designed to bring awareness to the present moment.',
        },
        {
            img: '/img/ritual2.avif',
            title: 'Rooted in Nature',
            desc: 'We use elements inspired by earth, water, and botanicals to ground your senses.',
        },
        {
            img: '/img/ritual3.avif',
            title: 'Sacred Stillness',
            desc: 'A pause is sacred. Our rituals create pockets of stillness for inner calm.',
        },
        {
            img: '/img/ritual4.avif',
            title: 'Flow of Energy',
            desc: 'Movements align with the body’s natural rhythms to restore balance.',
        },
    ];
    const [hoverIndex, setHoverIndex] = useState(null);
    return (
        <>
            {/* Intro Section with Title and Stars */}
            <section className="w-full px-4 md:px-20 py-12">
                <div className=" mx-auto">
                    <h5 className="sofia-regular text-xl text-gray-500 mb-4">About Vistiq</h5>
                    <div className="flex space-x-1">
                        <TiStarFullOutline className="text-gray-500" />
                        <TiStarFullOutline className="text-gray-500" />
                        <TiStarFullOutline className="text-gray-500" />
                        <TiStarFullOutline className="text-gray-500" />
                        <TiStarFullOutline className="text-gray-500" />
                    </div>
                </div>
            </section>

            {/* Dual Column Section - 64% and 36% */}
            <section className="w-full px-4 md:px-10 py-12">
                <div className=" mx-auto flex flex-col md:flex-row justify-between gap-12">
                    {/* Left: 64% */}
                    <div className="w-full">
                        <h2 className="sofia-regular text-4xl md:text-6xl text-gray-800 leading-tight">
                            More Than a Spa, <br /> A State of Being
                        </h2>
                    </div>

                    {/* Right: 36% */}
                    <div className="w-full flex items-start justify-end">
                        <p className=" sofia-regular text-lg md:text-2xl text-gray-500">
                            We’re here to offer stillness, <br />
                            softness, and space to reconnect.
                        </p>
                    </div>
                </div>
            </section>

            <section className="h-[80vh] w-full relative overflow-hidden rounded-xl">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('/img/abouts.jpeg')" }}
                />
                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.15) 0%, transparent 60%)',
                    }}
                />


                {/* Content Section Partitioned */}
                <div className="relative z-20 h-full w-full flex items-center px-6 md:px-20">
                    {/* Left Content with Blur Overlay */}
                    <div className="w-full md:w-1/2 relative text-white space-y-6 pr-4">
                        {/* Radial Blur Behind Text Only */}


                        <h6 className="sofia-regular text-xl text-[#F6EEE5]">Brand Story</h6>
                        <h2 className="sofia-regular text-4xl md:text-6xl text-[#FAF6E9] font-bold leading-tight">
                            Let the Nature <br /> Lead the Way
                        </h2>
                        <p className="sofia-regular text-xl text-[#FAF6E9]">
                            In a world that moves fast and demands more, we felt the need for something different.
                            A softer rhythm. A slower beauty. A deeper kind of care.
                        </p>
                        <p className="sofia-regular text-xl text-[#FAF6E9]">
                            Vistiq was born from that space — a place where presence is prioritized over performance,
                            and where every detail is designed to help you come home to yourself.
                        </p>
                        <p className="sofia-regular text-xl text-[#FAF6E9]">
                            We don't believe in rushing results. We believe in meaningful rituals. Whether it's a deep
                            facial massage, the warmth of a hot stone, or a drop of oil pressed gently into the skin —
                            we treat each moment as sacred.
                        </p>
                        <p className="sofia-regular text-xl text-[#FAF6E9]">
                            Our name, our space, and our treatments are all crafted with one purpose: to remind you
                            that peace is not something you find — it's something you return to.
                        </p>
                    </div>

                    {/* Right Empty Side */}
                    <div className="hidden md:block md:w-1/2" />
                </div>
            </section>

            {/* meet experties */}

            <MeetTheExperts />

            {/* the  Philosophy */}
            <section className="w-full px-4 md:px-10 py-12">
                <div className="heading w-full">
                     <h5 className="sofia-regular text-center text-xl text-gray-500 mb-4">What Grounds Us</h5>
                    <h2 className="sofia-regular text-6xl md:text-4xl text-gray-800 leading-tight text-center">
                        The Philosophy <br />Behind Every Ritual
                    </h2>
                    <p className="sofia-regular text-xl text-gray-500 mt-4 mb-4 text-center">
                        Explore the deeper intentions behind the calming rituals we craft with care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {philosophies.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative h-[300px] bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 group "
                            onMouseEnter={() => setHoverIndex(idx)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            {/* Image */}
                            <div
                                className={`transition-transform duration-500 ease-in-out ${hoverIndex === idx ? 'translate-x-[-40%]' : 'group-hover:translate-x-[-10px]'
                                    }`}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full w-full h-[300px]  object-cover rounded-2xl"
                                />
                            </div>

                            {/* Info Panel */}
                            <div
                                className={`absolute top-0 right-0 h-full w-[60%] bg-white p-6 transition-all duration-500 ease-in-out ${hoverIndex === idx
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 translate-x-full pointer-events-none'
                                    }`}
                            >
                                <h3 className="text-2xl font-semibold text-[#4B352A] mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-base">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

        </>

    )
}

export default About;
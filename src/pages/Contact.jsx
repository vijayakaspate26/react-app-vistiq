import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";

function Contact() {
    return (
        <>
            {/* HEADING */}
            <section className="w-full px-4 md:px-20 py-12">
                <div className=" mx-auto">
                    <h5 className="sofia-regular text-xl text-gray-500 mb-4">Contact Vistiq</h5>
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
                            We're Here for, <br /> Your Wellness
                        </h2>
                    </div>

                    {/* Right: 36% */}
                    <div className="w-full flex items-start justify-end">
                        <p className=" sofia-regular text-lg md:text-2xl text-gray-500">

                            Reach out with questions, <br /> bookings, or anything you need.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full px-4 md:px-10 py-16 bg-[#FDFAF6]">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-6">

                    {/* Left Section: Contact Info */}
                    <div className="w-full md:w-1/3 space-y-4">
                        <h3 className="sofia-regular text-4xl md:text-3xl text-gray-800">Contact Us</h3>
                        <p className="sofia-regular text-lg md:text-xl text-gray-600">hello@vistiq.spa</p>
                        <p className="sofia-regular text-lg md:text-xl text-gray-600">+91 25525 25252</p>
                    </div>

                    {/* Right Section: Message */}
                    <div className="w-full md:w-2/3">
                        <h3 className="sofia-regular text-4xl md:text-3xl text-gray-800">Write Us a Message</h3>
                        <form className="space-y-6 w-full max-w-xl">
                            {/* First Name */}
                            <div>
                                <label className="sofia-regular text-lg text-gray-600 block mb-1">First Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your first name"
                                    className="w-full p-3 border-b border-gray-300 rounded-md sofia-regular text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#DCCECF]"
                                />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="sofia-regular text-lg text-gray-600 block mb-1">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your last name"
                                    className="w-full p-3 border-b border-gray-300 rounded-md sofia-regular text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#DCCECF]"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="sofia-regular text-lg text-gray-600 block mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 border-b border-gray-300 rounded-md sofia-regular text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#DCCECF]"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="sofia-regular text-lg text-gray-600 block mb-1">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Write your message here..."
                                    className="w-full p-3 border-b border-gray-300 rounded-md sofia-regular text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#DCCECF]"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="bg-[#4B352A] text-white px-6 py-3 rounded-md text-lg sofia-regular hover:bg-[#3a271e] transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
            </section>



        </>
    );
}

export default Contact;
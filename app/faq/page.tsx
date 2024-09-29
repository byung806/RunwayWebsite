'use client';

import React, { useState } from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

export default function FAQ() {
    const faqData = [
        {
            question: "What is Runway's mission?",
            answer: "We want to make learning fun and easy for anyone with a busy schedule. Our daily lessons cover a broad range of topics and can be completed in 2 minutes!",
        },
        {
            question: "What platforms can I download Runway on?",
            answer: "Runway is available on the App Store and coming soon to Google Play!",
        },
        {
            question: "Where do you get your content from?",
            answer: "We have a team of content creators who each specialize in a certain area, many of whom are passionate former Ivy League students. None of our content makes it to the app without first being reviewed rigorously.",
        },
        {
            question: "Who can use Runway?",
            answer: "As long as you have a compatible device, you can use Runway! Our content is versatile and easy to understand. The goal is to expose you to new subjects so you can explore them deeper on your own.",
        },
        {
            question: "How can I join the Runway team?",
            answer: "There are two main roles as part of the Runway team: a content creator and a marketing expert. Shoot us an email telling us which role you would like to apply for and we'll send you the corresponding form!",
        },
    ];

    return (
        <div className="flex flex-col gap-4 justify-center items-center pt-10 max-w-[70rem] px-10 mx-auto min-h-screen py-20">
            {/* Header height */}
            <div className='h-20'></div>

            <p className="text-black text-4xl md:text-6xl text-center leading-tight font-bold">Frequently Asked Questions</p>

            <div className="flex flex-col items-center gap-2 pb-10">
                <p className="text-black text-lg">
                    Contact us at <a href="mailto:runwaystem@gmail.com" className="text-blue-500 underline">runwaystem@gmail.com</a>
                    {' '}
                    or DM us on social media!
                </p>
                <div className="flex space-x-4 mt-2">
                    <a href="https://www.instagram.com/runwaymobileapp" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-3xl">
                        <FaInstagram />
                    </a>
                    <a href="https://www.tiktok.com/@runway1694" target="_blank" rel="noopener noreferrer" className="text-black text-3xl">
                        <FaTiktok />
                    </a>
                </div>
            </div>

            {faqData.map((faq, index) => {
                const [open, setOpen] = useState(false);
                return (
                    <div key={index} className="w-full">
                        <button
                            className="w-full text-left text-xl p-5 bg-[#3b0051] text-[#f3e1fc] rounded-xl focus:outline-none"
                            onClick={() => { setOpen(!open); }}
                        >
                            {faq.question}
                            {open && (
                                <div className="mt-2 text-base text-[#9d6cb0] rounded-lg">
                                    {faq.answer}
                                </div>
                            )}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

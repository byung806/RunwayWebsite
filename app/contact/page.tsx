'use client';

import React, { useState } from 'react';
import axios from 'axios';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.post('/api/send-email', formData);
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            alert('Failed to send message, please try again later.');
        }
    };

    return (
        <div className="flex flex-col gap-4 w-screen h-screen justify-center items-center">
            <p className="text-4xl">Get in touch</p>
            <p className="text-2xl">Anytime, anywhere.</p>

            <form className="flex flex-col gap-4 max-w-md w-full" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#8b45a4]"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#8b45a4]"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#8b45a4]"
                    required
                />
                <button
                    type="submit"
                    className="px-10 bg-[#8b45a4] py-4 w-fit rounded-2xl transition duration-300 hover:scale-105 text-white font-bold"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

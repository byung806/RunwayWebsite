import React, { useState } from 'react';
import axios from 'axios';

export default function ContactUs() {


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
            <p className="text-white text-4xl">Get in touch</p>
            <p className="text-white text-2xl">Anytime, anywhere.</p>

            <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
                    required
                />
                <button
                    type="submit"
                    className="py-3 px-6 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

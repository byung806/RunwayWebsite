'use client'

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function NewsletterSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // add to email list
    };

    return (
        <section className="relative flex flex-row items-center justify-center p-20">
            <Image
                className="-z-10"
                src="/footer.png"
                alt="Newsletter"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <div className="flex flex-row items-center justify-center p-10 space-x-4 bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg">
                <div className="flex flex-col space-y-4 w-1/2">
                    <div className="text-center text-5xl font-extrabold">
                        Join the newsletter
                    </div>
                    <div className="text-center text-2xl">
                        We'll send an email no more than once every two weeks with updates.
                    </div>
                </div>
                <form className="flex flex-col text-center space-y-4 w-1/2" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={handleNameChange}
                        className="text-center border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={handleEmailChange}
                        className="text-center border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    />
                    <button type="submit" className="py-2 font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        SUBSCRIBE
                    </button>
                </form>
            </div>
        </section>
    );
}
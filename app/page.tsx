'use client'

import Header from '@/ui/components/header';
import '@/ui/components/header.css';
import { useState } from 'react';

export default function Page() {
    const [name, setName] = useState("");

    return (
        <div className="flex flex-col space-y-8 w-screen h-screen items-center justify-center">
            <div className="flex space-x-8 items-center">
                <img src='phoneSS.png' alt="PhoneSS" />
                <div className='space-y-8'>
                    <h1 className="bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 text-6xl font-bold text-transparent">
                        Learn a new topic
                        <br />
                        in 2 minutes today.
                    </h1>
                    <p className="text-lg font-bold">Coming soon to iOS and Android!</p>
                    <form className='flex space-x-4'>
                        <input
                            type="text"
                            placeholder="Your Email"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="text-2xl bg-neutral-100 rounded-xl p-4 outline-none min-w-0 w-60"
                        />
                        <div className="flex-col flex w-full text-2xl text-black font-bold">
                            <a className="bg-gradient-to-r from-purple-400 to-purple-400 py-4 px-5 w-fit rounded-3xl" href="https://www.loomletter.app/#waitlist">
                                <p className="cursor-pointer text-center text-black">Join</p>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            {/* TODO: list of cards going up and down that goes out of the iphone image */}
            {/* <Marquee className="no-scrollbar h-10" pauseOnHover={true} gradient={true} gradientColor='black' speed={30}>
                <div className="flex flex-grow space-x-6">
                    <Badge color="purple">Biology</Badge>
                    <Badge color="purple">Chemistry</Badge>
                    <Badge color="purple">Physics</Badge>
                    <Badge color="purple">Astronomy</Badge>
                    <Badge color="purple">Biomimicry</Badge>
                    <Badge color="purple">Genetics</Badge>
                    <Badge color="purple">Neuroscience</Badge>
                    <Badge color="purple">Astrobiology</Badge>
                    <Badge color="purple">Bioluminescence</Badge>
                </div>
            </Marquee> */}
        </div>
    );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaApple, FaRegPauseCircle, FaRegPlayCircle } from 'react-icons/fa';
import TextTransition, { presets } from 'react-text-transition';
import { basePath } from '../next.config';

const TEXTS = [
    {
        name: 'atomic reactions',
        color: '#a60586'
    },
    {
        name: 'photosynthesis',
        color: '#c9c104'
    },
    {
        name: 'kinematics',
        color: '#723687'
    },
    {
        name: 'bioluminescence',
        color: '#12a192'
    },
    {
        name: 'mitosis',
        color: '#298226'
    },
    {
        name: 'ocean creatures',
        color: '#1e7d5c'
    }
];

export default function Page() {
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(
            () => {
                if (isPlaying) {
                    setIndex((index) => index + 1);
                }
            },
            1800 // interval
        );
        return () => clearTimeout(intervalId);
    }, [isPlaying]);

    return (
        <section className="flex flex-col items-center">
            {/* Header height */}
            <div className="h-16"></div>

            <section className="flex flex-col items-center justify-center space-x-8 space-y-8 py-10 md:grid-cols-1 md:flex-row md:py-40">
                <Image
                    className="md:w-80 lg:w-[30rem]"
                    src={`${basePath}/ss-1-square.png`}
                    alt="phone screenshot"
                    width={300}
                    height={300}
                />
                <div className="flex flex-col items-center space-y-6 md:items-start">
                    <h1 className="relative text-center text-3xl font-bold leading-[2.5rem] sm:w-[360px] sm:leading-[2.5rem] md:w-[420px] md:text-left md:text-4xl md:leading-[3rem] lg:w-[540px] lg:text-4xl lg:leading-[3.5rem] xl:text-6xl xl:leading-[4.5rem]">
                        Learn about{' '}
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="z-10 text-lg text-[#d1d0d2] sm:text-xl lg:text-2xl xl:text-3xl"
                        >
                            {isPlaying ? (
                                <FaRegPauseCircle />
                            ) : (
                                <FaRegPlayCircle />
                            )}
                        </button>{' '}
                        <br />
                        <TextTransition
                            inline={true}
                            className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl"
                            springConfig={presets.wobbly}
                            style={{
                                color: TEXTS[index % TEXTS.length].color
                            }}
                        >
                            {TEXTS[index % TEXTS.length].name}
                        </TextTransition>{' '}
                        <br />
                        in 2 minutes
                    </h1>
                    <p className="text-center text-lg font-bold text-[#6b6b78] md:text-left">
                        The ultimate daily learning app, for iOS and Android.
                    </p>
                    <form className="flex space-x-4">
                        <div className="flex w-full flex-col text-lg font-bold text-black">
                            {/* <Link href="/" className="px-10 bg-[#8b45a4] py-4 w-fit rounded-2xl transition duration-300 hover:scale-105">
                                    <p className="text-center text-white">Download, it's free</p>
                                </Link> */}
                            <Link
                                href="https://testflight.apple.com/join/ZSrzVEeb"
                                className="flex w-fit flex-row items-center justify-center space-x-2 rounded-2xl bg-[#8b45a4] px-10 py-4 transition duration-300 hover:scale-105"
                            >
                                <FaApple className="text-2xl text-white" />
                                <p className="text-center text-white">
                                    Download the free beta
                                </p>
                            </Link>
                        </div>
                    </form>
                    <p className="text-lg font-bold text-[#6b6b78] text-center md:text-left">
                        Coming soon to the App Store and Google Play!
                    </p>
                </div>
            </section>

            <div className="flex flex-col gap-8 mx-8 md:flex-row text-white max-w-7xl border border-purple-500">
                <div className="flex flex-col space-y-4 items-center text-center w-full h-full p-10 bg-[#252525] rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-600 transition duration-300 hover:scale-105">
                    <h1 className="text-4xl font-bold">Habit-building.</h1>
                    <p className="text-2xl text-[#dac8da]">Runway uses proven techniques to help you learn something new every day.</p>
                </div>
                <div className="flex flex-col space-y-4 items-center text-center w-full h-full p-10 bg-[#252525] rounded-2xl bg-gradient-to-br from-pink-600 to-purple-600 transition duration-300 hover:scale-105">
                    <h1 className="text-4xl font-bold">Convenient.</h1>
                    <p className="text-2xl text-[#dac8da]">Runway&apos;s unique 2 minutes per day lessons easily fit into your busy schedule.</p>
                </div>
                <div className="flex flex-col space-y-4 items-center text-center w-full h-full p-10 bg-[#252525] rounded-2xl bg-gradient-to-b from-orange-600 to-red-600 transition duration-300 hover:scale-105">
                    <h1 className="text-4xl font-bold">Competitive.</h1>
                    <p className="text-2xl text-[#dac8da]">Runway gamifies learning - add friends and compete with them, or test your skills against the world.</p>
                </div>
            </div>

            <div className="flex flex-col space-y-8 h-screen items-center justify-center">
                <div className="flex space-x-8 items-center">
                    <div className='space-y-8 w-[540px] sm:w-full md:w-[540px]'>
                        <h1 className="py-2 text-6xl font-bold">
                            Make learning actually cool.
                        </h1>
                        <p className="text-2xl font-bold text-[#6b6b78]">
                            Fun, bite-sized lessons that hack
                            your brain to enjoy learning. Earn a
                            streak and up your points.
                        </p>
                    </div>
                    <Image
                        src={`${basePath}/ss-2.png`}
                        alt="phone screenshot"
                        width={300}
                        height={500}
                    />
                </div>
            </div>
        </section>
    );
}

'use client';

import FeatureCard from '@/ui/components/featurecard';
import { RevealWrapper } from 'next-reveal';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaApple, FaRegPauseCircle, FaRegPlayCircle } from 'react-icons/fa';
import TextTransition, { presets } from 'react-text-transition';
import { basePath } from '../next.config';

export const DOWNLOAD_LINK =
    'https://apps.apple.com/app/runway-gamify-learning/id6639588047';

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
        <section className="flex flex-col items-center pb-14">
            {/* Header height */}
            <div className="h-20"></div>

            <RevealWrapper
                origin="bottom"
                delay={0}
                duration={600}
                distance="80px"
            >
                <section className="flex flex-col items-center space-y-8 px-4 py-10 md:flex-row md:space-x-8 md:space-y-0 md:px-10 md:pb-32 md:pt-24">
                    <Image
                        className="flex md:w-80 lg:w-[30rem]"
                        src={`${basePath}/ss-1-square.png`}
                        alt="phone screenshot"
                        width={300}
                        height={300}
                    />
                    <div className="flex flex-col items-center space-y-6 md:items-start">
                        <h1 className="relative text-center text-3xl font-bold leading-[2.5rem] sm:leading-[2.5rem] md:w-full md:text-left md:text-4xl md:leading-[3rem] lg:text-4xl lg:leading-[3.5rem] xl:text-6xl xl:leading-[4.5rem]">
                            Learn about{' '}
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="z-10 text-lg text-[#d1d0d2] sm:text-xl md:text-xl lg:text-2xl xl:text-3xl"
                            >
                                {isPlaying ? (
                                    <FaRegPauseCircle />
                                ) : (
                                    <FaRegPlayCircle />
                                )}
                            </button>{' '}
                            <br />
                            <div className="absolute left-1/2 -translate-x-1/2 transform items-center justify-center md:left-0 md:transform-none">
                                <TextTransition
                                    inline={true}
                                    className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl"
                                    springConfig={presets.wobbly}
                                    style={{
                                        color: TEXTS[index % TEXTS.length].color
                                    }}
                                >
                                    {TEXTS[index % TEXTS.length].name}
                                </TextTransition>
                            </div>{' '}
                            <br />
                            in 2 minutes
                        </h1>
                        <p className="text-center text-lg font-bold text-[#6b6b78] md:text-left">
                            The ultimate daily learning app, for iOS and
                            Android.
                        </p>
                        <form className="flex flex-col space-x-4">
                            {/* <Link href="/" className="px-10 bg-[#8b45a4] py-4 w-fit rounded-2xl transition duration-300 hover:scale-105">
                                    <p className="text-center text-white">Download, it's free</p>
                                </Link> */}
                            <Link
                                href={DOWNLOAD_LINK}
                                className="flex w-fit font-bold flex-row items-center justify-center space-x-2 rounded-2xl bg-[#8b45a4] px-10 py-4 transition duration-300 hover:scale-105"
                            >
                                <FaApple className="text-2xl text-white" />
                                <p className="text-center text-lg text-white">
                                    Download, it's free
                                </p>
                            </Link>
                        </form>
                        {/* <p className="text-center text-lg font-bold text-[#6b6b78] md:text-left">
                        Now out on the App Store! (Google Play coming soon)
                    </p> */}
                    </div>
                </section>
            </RevealWrapper>

            <div id='features' className="flex flex-col space-y-20 pt-14 md:pt-28">
                <FeatureCard
                    side="left"
                    tag="Great for your schedule"
                    tagColor="#fdded6"
                    title="2 min a day ⏰"
                    body="Runway is tailored to your schedule. 2 min every day. Simple."
                    image="ss-2min"
                />

                <FeatureCard
                    side="right"
                    tag="Great for your brain"
                    tagColor="#ddf4e4"
                    title="Build strong habits 💪"
                    body="Hack your brain to enjoy learning."
                    image="ss-2"
                />

                <FeatureCard
                    side="left"
                    tag="Great for your friends"
                    tagColor="#cceafd"
                    title="Beat your friends 🥇"
                    body="or they'll leave you in the dust!"
                    image="ss-4"
                />

                <FeatureCard
                    side="right"
                    tag="Great for your wallet"
                    tagColor="#fde9cb"
                    title="100% free"
                    body="Learning should be completely free, to everyone."
                    image="ss-8"
                />
            </div>

            <section className="flex flex-col items-center space-y-4 md:space-y-8 py-14 md:py-28">
                <h1 className="text-4xl md:text-6xl font-bold text-center">
                    Ready to take off?
                </h1>
                <p className="text-lg md:text-2xl font-bold text-[#6b6b78] text-center">
                    You won't regret it. We promise.
                </p>
                <form className="flex flex-col space-x-4">
                    <Link
                        href={DOWNLOAD_LINK}
                        className="flex w-fit font-bold flex-row items-center justify-center space-x-2 rounded-2xl bg-[#8b45a4] px-10 py-4 transition duration-300 hover:scale-105"
                    >
                        <FaApple className="text-2xl text-white" />
                        <p className="text-center text-lg text-white">
                            Download
                        </p>
                    </Link>
                </form>
            </section>
            {/* but don't take our word for it. see for yourself! then add reviews */}
        </section>
    );
}

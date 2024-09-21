'use client';

import FeatureCard from '@/ui/components/featurecard';
import { RevealWrapper } from 'next-reveal';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
    FaApple,
    FaRegPauseCircle,
    FaRegPlayCircle,
    FaDiscord
} from 'react-icons/fa';
import TextTransition, { presets } from 'react-text-transition';
import { basePath } from '../next.config';

export const DOWNLOAD_LINK =
    'https://apps.apple.com/app/runway-gamify-learning/id6639588047';
export const DISCORD_LINK = 'https://discord.gg/udXRnGF2Qn';

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
                <section className="flex flex-col items-center justify-center space-y-8 px-4 py-10 md:flex-row md:space-x-8 md:space-y-0 md:px-10 md:pb-32 md:pt-24">
                    <Image
                        className="flex md:w-80 lg:w-[30rem]"
                        src={`${basePath}/new-ss-square.png`}
                        alt="phone screenshot"
                        width={300}
                        height={300}
                    />
                    <div className="flex flex-col items-center space-y-6 md:items-start max-w-[40%]">
                        {/* <div className="flex items-center space-x-4">
                            <Image
                                className="flex rounded-3xl"
                                src={`${basePath}/icon.png`}
                                alt="runway icon"
                                width={80}
                                height={80}
                            />
                            <p className='text-5xl'>
                                Runway
                            </p>
                        </div> */}
                        <h1 className="relative text-center text-5xl leading-[2.5rem] sm:leading-[2.5rem] md:w-full md:text-left md:text-5xl md:leading-[3rem] lg:text-5xl lg:leading-[3.5rem] xl:text-6xl xl:leading-[4.5rem]">
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
                                    // className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl"
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
                        <p className="text-center text-xl md:text-2xl text-[#755486] md:text-left">
                            The ultimate daily learning app, for iOS and Android.
                        </p>
                        {/* <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                            <Link
                                href={DOWNLOAD_LINK}
                                className="flex w-fit flex-row items-center justify-center space-x-2 rounded-2xl bg-[#8b45a4] px-10 py-4 transition duration-300 hover:scale-105"
                            >
                                <FaApple className="text-2xl text-white" />
                                <p className="text-center text-xl text-white">
                                    Download, it's free
                                </p>
                            </Link>
                        </div> */}
                        <a
                            href="https://apps.apple.com/us/app/runway-gamify-learning/id6639588047?itsct=apps_box_badge&amp;itscg=30200"
                            className="border-radius-[13px] inline-block h-[83px] w-[250px] overflow-hidden transition duration-300 hover:scale-105"
                        >
                            <img
                                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1724630400"
                                alt="Download on the App Store"
                                className="border-radius-[13px] h-[83px] w-[250px]"
                            />
                        </a>
                    </div>
                </section>
            </RevealWrapper>

            {/* <div className="flex space-x-8 items-center">
                <a
                    href="https://apps.apple.com/us/app/runway-gamify-learning/id6639588047?itsct=apps_box_badge&amp;itscg=30200"
                    className="border-radius-[13px] inline-block h-[83px] w-[250px] overflow-hidden"
                >
                    <img
                        src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1724630400"
                        alt="Download on the App Store"
                        className="border-radius-[13px] h-[83px] w-[250px]"
                    />
                </a>
                <a
                    href="https://www.producthunt.com/posts/runway-10?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-runway&#0045;10"
                    target="_blank"
                >
                    <img
                        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=486339&theme=light"
                        alt="Runway - Another&#0032;learning&#0032;app&#0063;&#0032;Yes&#0044;&#0032;but&#0032;100&#0037;&#0032;free&#0032;and&#0032;with&#0032;a&#0032;twist | Product Hunt"
                        width="250"
                        height="54"
                    />
                </a>
            </div> */}

            <div
                id="features"
                className="flex flex-col space-y-20 pt-14 md:pt-28"
            >
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

            <section className="flex flex-col items-center space-y-4 px-10 py-14 md:px-40 md:py-28 lg:px-96">
                <h1 className="text-center text-2xl md:text-4xl">
                    If you reached this far, you've got time for a Runway
                    lesson.
                </h1>
                <p className="text-center text-lg text-[#6b6b78] md:text-2xl"></p>
                <div className="flex flex-col items-center space-y-4">
                    <Link
                        href={DOWNLOAD_LINK}
                        className="flex w-fit flex-row items-center justify-center space-x-2 rounded-2xl bg-[#8b45a4] px-10 py-4 transition duration-300 hover:scale-105"
                    >
                        <FaApple className="text-2xl text-white" />
                        <p className="text-center text-lg text-white">
                            Download, it's free
                        </p>
                    </Link>
                    <p className="text-lg text-[#6b6b78]">or</p>
                    <Link href={DISCORD_LINK}>
                        <div className="flex w-fit flex-row items-center justify-center space-x-2 rounded-2xl bg-[#7289da] px-6 py-4 transition duration-300 hover:scale-105">
                            <FaDiscord className="text-2xl text-white" />
                            <p className="text-center text-lg text-white">
                                Join our Discord
                            </p>
                        </div>
                    </Link>
                </div>
            </section>
            {/* but don't take our word for it. see for yourself! then add reviews */}
        </section>
    );
}

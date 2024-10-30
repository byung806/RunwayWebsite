'use client';

import FeatureCard from '@/ui/components/featurecard';
import Review from '@/ui/components/review';
import { RevealWrapper } from 'next-reveal';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
    FaApple,
    FaDiscord,
    FaRegPauseCircle,
    FaRegPlayCircle
} from 'react-icons/fa';
import TextTransition, { presets } from 'react-text-transition';
import { basePath } from '../next.config';

const DOWNLOAD_LINK =
    'https://apps.apple.com/app/runway-learning-made-simple/id6639588047';
const DISCORD_LINK = 'https://discord.gg/udXRnGF2Qn';

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
        color: '#8b45a4'
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
            <div className="flex w-screen h-20"></div>

            <RevealWrapper
                origin="bottom"
                delay={0}
                duration={600}
                distance="80px"
            >
                <section className="flex flex-col py-24 items-center justify-center">
                    <div className='absolute top-8 md:top-12 rounded-full p-2 px-6 bg-[#e8dbf2]'>
                        <p className='text-lg text-[#783c8e]'>🥳 Join 700+ learners!</p>
                    </div>
                    <div className='flex flex-col items-center justify-center md:flex-row md:space-x-8 space-y-8 md:space-y-0'>
                        <Image
                            className="flex md:w-80 lg:w-[30rem]"
                            src={`${basePath}/new-ss-square.png`}
                            alt="phone screenshot"
                            width={300}
                            height={300}
                        />
                        <div className="flex flex-col items-center space-y-6 md:items-start md:max-w-[40%]">
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
                            <h1 className="relative text-center text-5xl leading-[3rem] md:w-full md:text-left md:text-5xl md:leading-[3rem] lg:text-5xl lg:leading-[3.5rem] xl:text-6xl xl:leading-[4rem]">
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
                            <div className='flex flex-col space-y-2 items-center md:items-start'>
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
                                {/* <p className='text-xl'>Join 600+ learners</p> */}
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </section>
            </RevealWrapper>

            {/* <a
                href="https://www.producthunt.com/posts/runway-10?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-runway&#0045;10"
                target="_blank"
            >
                <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=486339&theme=light"
                    alt="Runway - Another&#0032;learning&#0032;app&#0063;&#0032;Yes&#0044;&#0032;but&#0032;100&#0037;&#0032;free&#0032;and&#0032;with&#0032;a&#0032;twist | Product Hunt"
                    width="250"
                    height="54"
                />
            </a> */}

            <div className='flex flex-col bg-[#783c8e] w-full justify-center pt-6 pb-8 space-y-8'>
                <p className='text-2xl md:text-3xl text-white text-center'>Lessons by students and alumni from</p>
                <div className='flex justify-center space-x-14 flex-wrap'>
                    <Image
                        src={`${basePath}/harvard.svg`}
                        alt="harvard"
                        width={240}
                        height={80}
                    />
                    <Image
                        src={`${basePath}/mit.svg`}
                        alt="mit"
                        width={80}
                        height={80}
                    />
                    <Image
                        src={`${basePath}/ivy_league.png`}
                        alt="ivy league"
                        width={100}
                        height={80}
                    />
                </div>
            </div>

            <div
                id="features"
                className="flex flex-col space-y-2"
            >
                <FeatureCard
                    side="left"
                    tag="Great for your schedule"
                    tagColor="#fdded6"
                    title="2 min a day ⏰"
                    body="Runway is tailored to your schedule. 2 min every day. Simple."
                    image="IMG_2625-portrait"
                />

                <FeatureCard
                    side="right"
                    tag="Great for your brain"
                    tagColor="#ddf4e4"
                    title="Build strong habits 💪"
                    body="Hack your brain to enjoy learning."
                    image="IMG_2632-portrait"
                />

                <FeatureCard
                    side="left"
                    tag="Great for your friends"
                    tagColor="#cceafd"
                    title="Beat your friends 🥇"
                    body="or they'll leave you in the dust!"
                    image="IMG_2614-portrait"
                />

                <FeatureCard
                    side="right"
                    tag="Great for your wallet"
                    tagColor="#fde9cb"
                    title="100% free"
                    body="Learning should be completely free, to everyone."
                    image="IMG_2620-portrait"
                />
            </div>

            <section className="flex flex-col items-center space-y-12 py-14 md:py-20 bg-[#ebccff] w-screen">
                <h1 className="text-center text-3xl md:text-4xl px-10">
                    See what our 700+ learners are saying
                </h1>
                <div className='flex flex-col md:flex-row max-w-[60rem] md:space-x-6 space-y-6 md:space-y-0 px-10'>
                    <div className='flex flex-col space-y-6'>
                        <Review
                            rating={5}
                            reviewText={[
                                'I stumbled upon this app looking for an educational app for my kids and this app looks perfect!',
                                'The bite-sized lessons satisfy my kids\' short attention spans and the lessons are engaging. I originally only made an account for my son but I made another account just for myself after I realized how fun it was.',
                                'Great app!'
                            ]}
                            reviewer="katherinel43 - App Store"
                        />
                        <Review
                            rating={5}
                            reviewText={[
                                'I just downloaded this app today for my two children and it\'s awesome! They told me they love how easy it is to use and learn! Definitely recommend for others!!'
                            ]}
                            reviewer="PreciousMouse567 - App Store"
                        />
                    </div>
                    <div className='flex flex-col space-y-6'>
                        <Review
                            rating={5}
                            reviewText={[
                                'Beautifully designed UI and simples the learning process as advertised. Would recommend to anyone to give it a try!!'
                            ]}
                            reviewer="TJ Alexander II - App Store"
                        />
                        <Review
                            rating={5}
                            reviewText={[
                                'The content is easy-to-understand and quick!',
                                'I can pick up any topic in less than two minutes, which is a great way to continue learning despite a busy schedule. The points system motivates me to keep completing lessons every day.'
                            ]}
                            reviewer="jasonlmoa - App Store"
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center space-y-8 py-14 md:py-20 bg-[#994cb7] w-screen">
                <div className='flex flex-col space-y-2 items-center px-20 max-w-[60rem]'>
                    <Image
                        className="md:w-80"
                        src={`${basePath}/runway-logo-dark-2.png`}
                        alt="runway icon"
                        width={250}
                        height={100}
                    />
                    {/* <p className="text-2xl text-white md:text-3xl">Daily Learning</p> */}
                    <p className='text-xl md:text-2xl text-center text-white'>Enjoy learning something new every day! Don't worry if you're busy - try it for free in just 2 minutes every day!</p>
                </div>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                    <Link
                        href={DOWNLOAD_LINK}
                        className="flex w-fit flex-row items-center justify-center space-x-2 rounded-2xl bg-white px-10 py-4 transition duration-300 hover:scale-105"
                    >
                        <FaApple className="text-2xl text-[#8b45a4]" />
                        <p className="text-center text-lg text-[#8b45a4]">
                            Download, it's free
                        </p>
                    </Link>
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

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { basePath } from '../next.config';

export default function Page() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col space-y-8 w-screen h-screen items-center justify-center">
                <div className="flex space-x-8 items-center">
                    <Image
                        src={`${basePath}/ss-1.png`}
                        alt="phone screenshot"
                        width={300}
                        height={500}
                    />
                    <div className='space-y-8'>
                        <h1 className="w-[540px] text-6xl font-bold">
                            Learn about
                            <h1 className='bg-clip-text py-2 bg-gradient-to-t from-[#8b49a3] to-[#723687] text-transparent'>
                                thing
                            </h1>
                            in 2 minutes.
                        </h1>
                        <p className="text-lg font-bold text-[#6b6b78]">The ultimate daily learning app. Coming soon to iOS and Android!</p>
                        <form className='flex space-x-4'>
                            {/* <input
                                type="text"
                                placeholder="Your Email"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="text-2xl bg-neutral-100 rounded-xl p-4 outline-none min-w-0 w-60"
                            /> */}
                            <div className="flex-col flex w-full text-lg text-black font-bold">
                                <Link href="/" className="px-10 bg-[#8b45a4] py-4 w-fit rounded-2xl transition duration-300 hover:scale-105">
                                    <p className="text-center text-white">Download, it&apos;s free</p>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <div className="flex space-x-10 p-10 w-screen h-[400px] items-center justify-center text-white">
                <div className="flex flex-col space-y-4 items-center text-center w-full h-full p-10 bg-[#252525] rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-600 transition duration-300 hover:scale-105">
                    <h1 className="text-4xl font-bold">Habit-building.</h1>
                    <p className="text-3xl">Runway uses proven techniques to help you learn something new every day.</p>
                </div>
                <div className="flex flex-col space-y-4 items-center text-center w-full h-full p-10 bg-[#252525] rounded-2xl bg-gradient-to-br from-pink-600 to-purple-600 transition duration-300 hover:scale-105">
                    <h1 className="text-4xl font-bold">Convenient.</h1>
                    <p className="text-3xl">Runway&apos;s unique 2 minutes per day lessons easily fit into your busy schedule.</p>
                </div>
                <div className="flex flex-col space-y-4 items-center text-center w-full h-full p-10 bg-[#252525] rounded-2xl bg-gradient-to-b from-orange-600 to-red-600 transition duration-300 hover:scale-105">
                    <h1 className="text-4xl font-bold">Competitive.</h1>
                    <p className="text-3xl">Runway gamifies learning - add friends and compete with them, or test your skills against the world.</p>
                </div>
            </div>


            <div className="flex flex-col space-y-8 w-screen h-screen items-center justify-center">
                <div className="flex space-x-8 items-center">
                    <div className='space-y-8 w-[540px]'>
                        <h1 className="bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 text-6xl font-bold text-transparent">
                            Make learning actually cool.
                        </h1>
                        <div className="flex space-x-4 p-10 bg-[#252525] rounded-3xl">
                            <p className="text-2xl font-bold text-white">
                                Fun, bite-sized lessons that hack
                                your brain to enjoy learning. Earn a
                                streak and up your points.
                            </p>
                        </div>
                    </div>
                    <Image
                        src={`${basePath}/ss-2.png`}
                        alt="phone screenshot"
                        width={300}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
}

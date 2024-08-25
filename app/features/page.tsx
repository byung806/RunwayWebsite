import { basePath } from '@/next.config';
import Image from 'next/image';

export default function Feature() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center pt-10 max-w-[70rem] mx-auto">
            <div className='h-20'></div>
            <p className="text-black text-6xl mb-8 text-center leading-tight">Explore Our Features!</p>
            <div className="flex space-x-4 items-center">
                <div className="flex space-x-8 items-center">
                    <Image
                        src={`${basePath}/ss-8.png`}
                        alt="phone screenshot"
                        width={300}
                        height={300}
                    />
                </div>
                <p className="text-3xl font-bold text-black text-right">
                    Easy sign-up and auto-login.<br></br>
                    Keep your progress
                    as you work <br></br>your way through our app!
                </p>
            </div>
            <div className="flex space-x-4 items-center">
                <p className="text-3xl font-bold text-black text-left">
                    Complete daily lessons<br></br>
                    to earn points and streaks!<br></br>
                </p>
                <div className="flex space-x-8 items-center">
                    <Image
                        src={`${basePath}/ss-6.png`}
                        alt="phone screenshot"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            <div className="flex space-x-4 items-center">
                <div className="flex space-x-8 items-center">
                    <Image
                        src={`${basePath}/ss-7.png`}
                        alt="phone screenshot"
                        width={300}
                        height={300}
                    />
                </div>
                <p className="text-3xl font-bold text-black text-right">
                    Answering questions in less tries<br></br>
                    will earn more points.
                </p>
            </div>
            <div className="flex space-x-4 items-center">
                <p className="text-3xl font-bold text-black text-left">
                    Work your way up through<br></br>
                    the global leaderboard!<br></br>
                </p>
                <div className="flex space-x-8 items-center">
                    <Image
                        src={`${basePath}/ss-9.png`}
                        alt="phone screenshot"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            <div className="flex space-x-4 items-center">
                <div className="flex space-x-8 items-center">
                    <Image
                        src={`${basePath}/ss-10.png`}
                        alt="phone screenshot"
                        width={300}
                        height={300}
                    />
                </div>
                <p className="text-3xl font-bold text-black text-right">
                    Or add any of your friends and compete<br></br>
                    with each other on the friends leaderboard!
                </p>
            </div>

            <div className='h-40'></div>

        </div>
    );
}

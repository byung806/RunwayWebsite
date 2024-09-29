'use client';

import { basePath } from '@/next.config';
import RevealOnScroll from './reveal-on-scroll';
import Image from 'next/image';
import { RevealList, RevealWrapper } from 'next-reveal';

export default function FeatureCard({
    side,
    tag,
    tagColor,
    title,
    body,
    image
}: {
    side: 'left' | 'right';
    tag: string;
    tagColor: string;
    title: string;
    body: string;
    image: string;
}) {
    return (
        <RevealWrapper
            origin="bottom"
            delay={0}
            duration={600}
            distance="80px"
            viewFactor={0.5}
        >
            <div className="flex flex-col items-center justify-center space-y-8 p-8">
                <div
                    className={`flex items-center justify-center space-y-4 md:flex-row md:space-x-8 md:space-y-0 ${side === 'right' ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'}`}
                >
                    <Image
                        className="md:w-60"
                        src={`${basePath}/${image}.png`}
                        alt="phone screenshot"
                        width={200}
                        height={200}
                    />
                    <div className="flex flex-col items-center space-y-4 md:max-w-[50%] md:items-start">
                        {/* <div
                            className="inline-block rounded-full px-6 py-3 font-bold"
                            style={{
                                backgroundColor: tagColor
                            }}
                        >
                            {tag}
                        </div> */}
                        <h1 className="py-2 text-center text-4xl font-bold md:text-left md:text-6xl">
                            {title}
                        </h1>
                        <p className="text-center text-lg font-bold text-[#755486] md:text-left md:text-2xl">
                            {body}
                        </p>
                    </div>
                </div>
            </div>
        </RevealWrapper>
    );
}

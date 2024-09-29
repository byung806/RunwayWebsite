'use client';
// @ts-expect-error
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Image from 'next/image';
import { basePath } from '../../next.config';


export default function Feature() {


    /* useEffect(() => {
         setIsMounted(true);
     }, []);*/


    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     arrows: true,
    //     adaptiveHeight: true,
    // };
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    /*if (!isMounted) {
        return null;
    }*/


    return (
        <div className="flex flex-col justify-center items-center pt-10 max-w-[70rem] mx-auto">
            <div className='h-20'></div>
            <p className="text-black text-6xl mb-8 text-center leading-tight">Explore Our Features!</p>
            <Slider {...settings}>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex space-x-4 items-center">
                        <p className="text-3xl font-bold text-black text-center">
                            Easy sign-up and auto-login. Keep your progress as you work your way through our app!
                        </p>
                        <div className="flex space-x-8 items-center">
                            <Image
                                src={`${basePath}/ss-8.png`}
                                alt='phone screenshot'
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex space-x-4 items-center">
                        <p className="text-3xl font-bold text-black text-center">
                            Complete daily lessons to earn points and streaks!
                        </p>
                        <div className="flex space-x-8 items-center">
                            <Image
                                src={`${basePath}/ss-6.png`}
                                alt='phone screenshot'
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex space-x-4 items-center">
                        <p className="text-3xl font-bold text-black text-center">
                            Answering questions in less tries will earn more points.
                        </p>
                        <div className="flex space-x-8 items-center">
                            <Image
                                src={`${basePath}/ss-7.png`}
                                alt='phone screenshot'
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex space-x-4 items-center">
                        <p className="text-3xl font-bold text-black text-center">
                            Work your way up through the global leaderboard!
                        </p>
                        <div className="flex space-x-8 items-center">
                            <Image
                                src={`${basePath}/ss-9.png`}
                                alt='phone screenshot'
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex space-x-4 items-center">
                        <p className="text-3xl font-bold text-black text-center">
                            Or add any of your friends and compete with each other on the friends leaderboard!
                        </p>
                        <div className="flex space-x-8 items-center">
                            <Image
                                src={`${basePath}/ss-10.png`}
                                alt='phone screenshot'
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                </div>

            </Slider>
            <div className='h-40'></div>
        </div>
    );
}




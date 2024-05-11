import React, { useState } from 'react';
import Image from "next/image";

export default function BoardingPass() {
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
        <div id="boarding-pass" className="flex flex-row rounded-2xl drop-shadow-[0_15px_20px_rgba(0,0,0,0.25)]">
            <div id="info" className="flex rounded-2xl bg-violet-400">
                {/* barcode */}
                <div id="barcode" className="flex p-4">
                    <div className="relative w-8">
                        <Image
                            src="data:image/webp;base64,UklGRpgLAABXRUJQVlA4WAoAAAAwAAAAfgAAHwMASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZBTFBIDgMAAAEnIBBI4WYXEREDrMi2wzZPUgiIgiiIQvkT23nvyf2K6L8kt5EkSTJ1z+JI95MsHhGcq1l/ml/+HM2M8vFj7139ifbp3zvf2/699Z/4Q1ez4vnJ/+5szXj/dyd/rmbF85Hfu/c75HvrvcsfP67fu60Z3rv6E+3je1u/d0cz+/d2a4Y/5HsTz0/+d8f3pv9DRzO9d/lzNcuv+d74te8X/2743r3fIb8W5bM1I/+heH58b713RzP9ofd7d+pP/972793RzPq98+P+vc1/aGuGP/R+8b3P773/T/2HrmZF+WzN6P/d8Z/U763vbf3e+XG0j+9tfu/i+fC99d7lz9HM+r3zY+9d/Yn26d8739v+vfWf+ENXs+L5yf/ubM3o/5Dvvfcuf/zYrx3N9GvfL1sz/Lvzfof8WqTHe9+/d9E+/Xt3NLN+7/y4f2+jffr3bmtG/94ezfSHrmb1f8j3zr879Sf/J/9/CY7vbQHj5+NqVv29PZpZv3d+7L2rP35ta4Zf+365muV7czSz/0PRPv17tzWjfu+uZtXvnR/X753vnfeu/vhP6vfW97Z+7/y4fu9877x39Sf/Ib/2/XI1y3t/NLP/Q9E+/Xvne+vXrmb5Q98vkZ7+17ZmRPlczarfOz+u3zvfO+9d/fGfRPv43vtDRzP7P+R759+d+tO/t/17dzSzfu/8uH9vo336925rRv/eHs30h65m9X/I986/O/XHf1K/t7739Xvnx/V753vnvas/8Xz43vtDRzPfz7utGd/v3fGH6s/RTL92Ncsf+n7ZmuHX3i9HMyM9V7PqP+TH8Xzk9+79Dvneeu/y52imX/N/+LXvl60Zvjf9r/l3I8rHj/v3Ntqnf++2Zvi1q1n+0PeL9973rv81/0mUz9Ws+r3zY792NNO/G98vWzN8b3xv61/z70a0j+9Nfu/6P+TfjffL0Uzvnf/De/d+ifLp/9DWjPq9u5pVv3d+HM9Hfu/82vu9O/3Hr+X3dmtG/97lP+Tfje+Xq1n5e7M1o4BPno/+342jmfV758f1e3c1i68FVlA4IJQGAACwKQCdASp/ACADPikUiUOhoSEQFAAYAoS0t26t6ioMdfERBuv/r/4mP/+Uf//39f99tjP+h+4Hue/vfoL8//d/963/83r/+v/p/IAtV9/9vfSH/2994L/b33mY9vfeaN47+l8YqQJXvvNG7re80eKvUJzrLUuGgahOeMQLvvvMx8Rx5L69PLxH3yT48o17rtez1Cc8NnWWXuaXRe5nqE8ORERE1CHx5RsCNussvc0l2eoTnWjmyy9zPYWXs9QnPDZ1ll7mkuz1Cc60c2WXuZ69vUJzrLTYFjGaLfITnWWYAC9zPUJ4hOdZZe7KI17meodZZ6hOdaObLL3M9e3qE51lpsGvcz1DrLPUJzrRtEQiKCXs9QnPHY6c6yy/+REREt/UR3s0GUirFQmoQ+PKNgAL3M9QniE51ll7rtez1Cc8NnWWXuaS7PUJzrS+fHlGvddr2eoTnUQA/v37lGhDZh93wHP/WMa6RVjjVuBF5TXW5JMYgs4nS5ySBn74apARSD9r1EytPwQitYHZqAqA+ImvughneZm9cclRXB9GpXEBqo1rfJJIOQZRw8wHHaPfyZhvdCc1/2tdb0VDyGuN+WwU60iFKrTBtspXS0+3JW2smvWA9PqQRFqFQBfDA2QrP9UN1Al6pJ3b4ze1abqV+Nyc05PLrl8lAgK6O4kRxjKy0zjBdnjTUlY4WulbTw0jgAk0mRpBQfo3rsjUGgX0fM5CVuBJVZXh0YyVFSrsSGBPMNbkiRxfEV4XICLvGBna0GPmSnRiooQQ5MamJQ7a1sbdq30nDyKaE4KGR7+GmOPbeA0Veh9LNe/1Ib3REHQZgob0m0Oq9q9AGAJDyJPxtoEjid4/G6cn+Hprb2Yb3iiAya3TfYN5lo45kGxO2Rttc3+cC2m3bFnjHnC7M9Jbmj669cRxwgTz+R9Y/CqINThuFaAAESdewUVlrlZfzd58zpCdbeKjMSplx1Q+n4bo9m/o4qEB5zKKZIDaKiVlX8tt0tIOSxeondypRvxRcTZpecYZZvZdNGg2dnIfhRH8hjy97emtURn6YgFRkqgPANMcIA/lnx47dd9LvBMnKcdctjv97gFO8vZr0fosfg14PCtgqdqo0GdG4Id6/7GPKY6c8l8AKrLXFK2jPka9u84FYPYjwsw8KlKx5r+hVUji4seCEtgVq4y62Fu+jat5kSEQDq4lR8dq5rJSR1FxkGDmBi+c+G7HL7BDugu9ep4rlcTOBa+Q2fWHS7rbGLgtSnmaZjv+x6YjywHGlaR7jIFxu6wuYKmj4Fj9rdvYpkr9HyDj2gu22thYpdfzFrAUnXK9MF1Hql7LWBgAAJgYOYYaLGCwVs4GKIZHAOGKrADAaF1riTiS4x0/myCxKmFRWOYUZu5rI1N5u/fmq1gnuDIOTdgqp/VJ14/6PxLzJwr6xtm4qXgUJvSuZS3dWnsBQvPl2/PfAY3XPwSBbi7lICisR8mfKqx9KuGKni0Y6y/2EFlA6P14z9ngVuxZueKutdaBoLMwdsCXcZJQlWdb5OVJjQIRARTJ9NHLr+Vpz1DC9P3YZCyTFS+9B4kivf41snCQK1vi9b4DlQG7Y0scUTgADyu+iyVysjanMsrhgjiRiG61agElthIy8oUN1cHIE0dEViqVg7b0FMd/7OV6VngO10+wIq8ypbX26/SFCYUAWN0w32a4EGPcnb1ijPkj2gwC9EnrKPzHP9+k9EPMxyBAPEVgU1Czkha2479Z08oFDitLizsx88HXt9HckjhVr7ZpVZB5OJp9XOrAjXR+RF7dO2MQHwZWmP0v66DJ4S0m/6gTd9FhJQURkBBHflyTUlWAmhM9IaBWcxCWbp9n1sWVAvhsXypYdvZKvEBgAku0GTYHxd8nMRzocuycpvfjKiDNO+wUWjW6Z0SPujitygHOkuzlD9u6W7XlpYYVZ8KGkr3qXkVCuuzTqEtjxlO9MiLrBYAiNWDp67eFSGHCsrgpjQ1J481Int3h+UU7YowYQiHWVa3stNJffZnuXniiOpOzzUcIsKsXtaP3Et2cxv1fSqtPTuv4YECQxEyjucadBgwjUR+5IIz82ulX6ABgE6pANt5I5lEfjgeh6R9I40KF/BOmx5DnennldsMWOIrToDsNtQjzbYsE1NK+pjKrR1L84GUEgXqnDACzHWvUwRTLD4XUlA5q4+aEecAHAABGZqcmK20f4CMNRGoHjC7lU1lpI3TXRU0ax7AbgTWGvLk14XI3AAAA"
                            alt="barcode"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>

                {/* content */}
                <div id="content" className="flex-row p-8 space-y-4 bg-white rounded-r-2xl">
                    <div id="title-row" className="flex justify-between">
                        <h2 className="text-6xl leading-none font-semibold w-min min-w-[20rem] h-full">
                            Welcome to Runway
                        </h2>
                        <div className="items-center bg-[radial-gradient(125%_125%_at_-2.54246%_0.702635%,_rgb(42,_208,_202)_0%,_rgb(255,_255,_254)_22.92%,_rgb(255,_211,_255)_46.88%,_rgb(214,_218,_255)_68.23%,_rgb(191,_251,_233)_87.5%,_rgb(154,_223,_255)_100%)] justify-center relative flex w-28 h-28 rounded-lg overflow-hidden min-[1441px]:w-28  min-[1441px]:h-28 min-[1025px]:w-28 min-[1025px]:h-28 min-[501px]:w-40 min-[501px]:h-40" id="div-2">
                            <svg className="w-16 h-auto min-[1441px]:w-20  min-[1025px]:w-20 min-[501px]:w-28" fill="none" id="svg-1" viewBox="0 0 40 31" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.7188 30.2092L25.6611 30.1823L29.01 13.9866L12.2259 29.4822C11.7383 29.9323 11.099 30.1823 10.4353 30.1823H0.350586L24.5691 7.7427L9.97643 7.72816L12.817 1.29864C13.0989 0.660689 13.7309 0.24938 14.4283 0.250001L34.8251 0.268164C37.6565 0.269449 39.7495 2.90594 39.1084 5.66374L34.4507 28.7968C34.2848 29.6208 33.5593 30.2124 32.7188 30.2092Z" fill="rgb(25, 34, 39)" />
                            </svg>
                            <div
                                className="bg-[conic-gradient(from_0.194143deg_at_50%_50%,_rgba(0,_0,_0,_0.35)_-24.66deg,_rgba(255,_255,_255,_0.35)_0.25deg,_rgba(0,_0,_0,_0.35)_50.63deg,_rgba(0,_0,_0,_0.35)_51.97deg,_rgba(255,_255,_255,_0.35)_88.12deg,_rgba(0,_0,_0,_0.35)_142.5deg,_rgba(255,_255,_255,_0.35)_196.87deg,_rgba(0,_0,_0,_0.35)_256.87deg,_rgba(255,_255,_255,_0.35)_300deg,_rgba(0,_0,_0,_0.35)_335.2deg,_rgba(0,_0,_0,_0.35)_335.34deg,_rgba(255,_255,_255,_0.35)_360.25deg)] left-0 opacity-90 absolute top-0 z-[1] w-full h-full"

                            />
                            <div
                                className="bg-[linear-gradient(-45deg,_rgba(0,_0,_0,_0)_0%,_rgba(0,_0,_0,_0)_45%,_rgba(255,_255,_255,_0.7)_50%,_rgba(0,_0,_0,_0)_55%,_rgba(0,_0,_0,_0)_100%)] left-1/2 opacity-60 absolute top-1/2 z-[2] w-[300%] h-[300%]"
                            />
                        </div>
                    </div>
                    <div id="flight-destination" className="flex h-8 items-center space-x-4">
                        <p className="text-lg font-semibold">IDK</p>
                        <svg id="airplane" className="w-auto h-full" fill="none" viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0199581 3.8732C0.0095118 3.81065 0.0577426 3.7537 0.121158 3.7537L0.652631 3.7537C0.6814 3.7537 0.708847 3.76578 0.728281 3.78699L3.08289 6.35694C3.10232 6.37815 3.12977 6.39023 3.15854 6.39023L6.05767 6.39023C6.12533 6.39023 6.17447 6.32588 6.15665 6.26061L4.48321 0.129618C4.46539 0.0643445 4.51452 0 4.58219 0L5.66139 0C5.69351 0 5.72377 0.0150377 5.74317 0.0406346L10.5542 6.38954C10.5545 6.38997 10.555 6.39023 10.5555 6.39023L15.2859 6.39023C15.8988 6.39023 16.3956 6.88709 16.3956 7.5C16.3956 8.11291 15.8988 8.60977 15.2859 8.60977L10.5555 8.60977C10.555 8.60977 10.5545 8.61003 10.5542 8.61046L5.74317 14.9594C5.72377 14.985 5.69351 15 5.66139 15L4.58219 15C4.51452 15 4.46539 14.9357 4.48321 14.8704L6.15665 8.73939C6.17447 8.67412 6.12533 8.60977 6.05767 8.60977L3.15854 8.60977C3.12977 8.60977 3.10232 8.62185 3.08289 8.64306L0.728281 11.213C0.708847 11.2342 0.6814 11.2463 0.652631 11.2463L0.121158 11.2463C0.0577426 11.2463 0.00951179 11.1893 0.0199581 11.1268L0.622844 7.5169C0.624713 7.50571 0.624713 7.49429 0.622844 7.4831L0.0199581 3.8732Z" fill="rgb(25, 34, 39)" />
                        </svg>
                        <p className="text-lg font-semibold">WOW</p>
                    </div>
                    <div id="flight-info" className="flex uppercase space-x-20">
                        <div className="flex-row">
                            <p className="text-sm font-semibold">Status</p>
                            <p className="text-xl font-bold">Now Boarding</p>
                        </div>
                        <div className="flex-row">
                            <p className="text-sm font-semibold">Seat</p>
                            <p className="text-xl font-bold">1A</p>
                        </div>
                        <div className="flex-row">
                            <p className="text-sm font-semibold">Group</p>
                            <p className="text-xl font-bold">First Class</p>
                        </div>

                        {/* <div className="flex-col flex w-full h-24 bg-zinc-50 font-semibold uppercase">
                            <div className="items-center border-b-neutral-400 border-b-2 grid-cols-[auto_1fr_auto] grid-rows-[1.00rem] grid w-full h-5 border-solid text-[0.63rem] text-neutral-400 font-semibold uppercase min-[1441px]:h-6  min-[1025px]:h-6 min-[501px]:h-8 min-[501px]:hidden" id="div-2">
                                <span
                                    className="mr-64 min-[1441px]:mr-72  min-[1025px]:mr-72 min-[501px]:mr-96">
                                    Status
                                </span>
                                <span>
                                    Seat
                                </span>
                                <span>
                                    Group
                                </span>
                            </div>
                            <div className="items-start flex w-full h-20 text-sm font-semibold uppercase min-[1441px]:h-24  min-[1025px]:h-24 min-[501px]:h-full" id="div-3">
                                <div className="items-start border-r-neutral-400 border-r-2 flex-col pt-3.5 flex h-full w-72 border-solid min-[1441px]:pt-4  min-[1441px]:w-80 min-[1025px]:pt-4 min-[1025px]:w-80 min-[501px]:pt-4 min-[501px]:w-72 min-[501px]:justify-between" id="div-4">
                                    <span
                                        className="h-5 overflow-hidden min-[1441px]:h-6  min-[1025px]:h-6 min-[501px]:h-8">
                                        <div
                                            className="h-5 min-[1441px]:h-6  min-[1025px]:h-6 min-[501px]:h-8">
                                            Now Boarding
                                        </div>
                                    </span>
                                </div>
                                <div className="items-start border-r-neutral-400 border-r-2 flex-col pl-6 pt-3.5 flex h-full w-52 border-solid min-[1441px]:pt-4  min-[1441px]:w-60 min-[1441px]:pl-7 min-[1025px]:pt-4 min-[1025px]:w-60 min-[1025px]:pl-7 min-[501px]:pt-4 min-[501px]:w-40 min-[501px]:pl-6" id="div-6">
                                    <span>
                                        1A
                                    </span>
                                </div>
                                <div className="items-end flex-col pt-3.5 flex h-full w-48 min-[1441px]:pt-4  min-[1441px]:w-52 min-[1025px]:pt-4 min-[1025px]:w-52 min-[501px]:pt-4 min-[501px]:w-80" id="div-7">
                                    <span>
                                        FIRST CLASS
                                    </span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="flight-info-row">
                    </div>
                </div>
            </div>
            <form id="form" className="flex-row p-8 space-y-4 bg-white rounded-2xl" onSubmit={handleSubmit}>
                <div className="flex-row space-y-2">
                    <p className="text-sm uppercase font-semibold">Name</p>
                    <input
                        type="text"
                        onChange={handleNameChange}
                        value={name}
                        className="input input-bordered w-full"
                        placeholder="Name"
                    />
                </div>
                <div className="flex-row space-y-2">
                    <p className="text-sm uppercase font-semibold">Email</p>
                    <input
                        type="text"
                        onChange={handleEmailChange}
                        value={name}
                        className="input input-bordered w-full"
                        placeholder="Email"
                    />
                </div>
                <button className="rounded-2xl w-full font-semibold p-4 bg-purple-600 border-purple-600 text-white hover:bg-purple-800 uppercase">
                    Get Started
                </button>
            </form>
        </div >
    );
};

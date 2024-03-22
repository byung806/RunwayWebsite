import Image from "next/image";

export default function WorkshopCard({ imageUrl, title, description }: { imageUrl: string, title: string, description: string }) {
    return (
        <div className="relative px-10 py-10 xl:max-w-4xl max-w-[90%]">
            <Image
                className="-z-10 rounded-2xl"
                src={imageUrl}
                layout="fill"
                objectFit="cover"
                quality={100}
                alt={title}
            />
            <div className="-z-1">
                <h4 className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
                    {title}
                </h4>
                <p className="mb-[40px] max-w-full text-base font-medium text-[#E3DAFF] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
                    {description}
                </p>
                <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
                    <button className="btn linear rounded-md px-4 py-2 text-center text-base font-medium">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    )
}
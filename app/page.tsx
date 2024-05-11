'use client'

import BoardingPass from "@/ui/components/boarding-pass";
import Image from "next/image";

export default function Page() {
    function transforms(x: number, y: number, card: HTMLElement) {
        let constrain = 3000;
        let box = card.getBoundingClientRect();
        console.log(box);
        let calcX = -(y - box.y - (box.height / 2)) / constrain;
        let calcY = (x - box.x - (box.width / 2)) / constrain;

        return "perspective(100px) " + "rotateX(" + calcX + "deg) " + "rotateY(" + calcY + "deg)";
    };

    function onMouseMoveCard(event: React.MouseEvent<HTMLDivElement>) {
        const card = document.getElementById("boarding-pass");

        window.requestAnimationFrame(() => {
            if (card) card.style.transform = transforms(event.clientX, event.clientY, card);
        })
    }

    return (
        <main className="flex w-screen h-screen bg-gray-100 items-center justify-center" onMouseMove={onMouseMoveCard}>
            {/* <Image
                className="absolute bottom-0"
                src="/banner.jpg"
                alt="clouds"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                width={500}
                height={300}
            /> */}
            <BoardingPass />
        </main>
    );
}

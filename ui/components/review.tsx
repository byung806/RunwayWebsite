import React from 'react';
import { FaStar } from 'react-icons/fa';

interface ReviewProps {
    rating: number;
    reviewText: string[];
    reviewer: string;
}

function Review({ rating, reviewText, reviewer }: ReviewProps) {
    return (
        <div className="text-[#3c3c3f] text-lg rounded-3xl p-10 space-y-5 bg-[#f9faff]">
            <div className="flex space-x-2">
                {[...Array(rating)].map((_, index) => (
                    <FaStar key={index} className="text-4xl text-[#ffcb00]" />
                ))}
            </div>

            {reviewText.map((text, index) => (
                <p key={index}>{text}</p>
            ))}

            <p className="font-bold mb-3">{reviewer}</p>
        </div>
    );
}

export default Review;
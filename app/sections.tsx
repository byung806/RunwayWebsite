import Link from 'next/link';

export function WeAreSection() {
    return (
        <section className="flex-col items-center justify-center space-y-6 bg-gradient-to-br from-pink-100 to-violet-100 p-20">
            <div className="text-center text-3xl font-extrabold">
                WELCOME TO WHIZWORKS
            </div>
            <div className="text-center text-5xl font-extrabold">
                <h1>
                    Discover the
                    <span className="hover: bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                        {' '}
                        joy of STEM
                    </span>
                    , together.
                </h1>
            </div>
            <div className="text-center py-5">
                <button className="btn btn-outline">
                    <Link href="/workshops">Upcoming Workshops</Link>
                </button>
            </div>
        </section>
    );
}

export function DescriptionSection() {
    return (
        <section className="flex h-screen flex-col items-center justify-center bg-orange-200">
            <h2>Description</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
    );
}

export function CoursesSection() {
    return (
        <section className="flex h-screen flex-col items-center justify-center bg-orange-200">
            <h2>Description</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
    );
}

// export function DescriptionSection() {
//   return (
//     <section className="flex flex-col items-center justify-center h-screen bg-orange-200">
//       <h2>Description</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </section>
//   );
// }

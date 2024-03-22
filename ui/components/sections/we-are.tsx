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
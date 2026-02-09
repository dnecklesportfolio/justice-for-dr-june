import React from 'react';

export default function Hero() {
    return (
        <section className="relative pt-12 pb-8 px-6 bg-gradient-to-b from-justice-black to-black border-b border-justice-red/30">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight leading-tight uppercase">
                    DA KATZ: <span className="text-justice-red">JUSTICE FOR SOME,</span> <br />
                    OR JUSTICE FOR ALL?
                </h1>

                <p className="text-xl md:text-2xl font-sans font-medium text-gray-300 leading-relaxed border-l-4 border-justice-red pl-6 py-2">
                    On Feb 3rd, Queens DA Melinda Katz returned homes to 23 fraud victims.
                    <span className="text-white font-bold ml-1">Yet she stands silent</span> while Dr. Karen June—a Vietnam Veteran’s widow—fights a "Zombie Bank" that stole her home.
                </p>

                <div className="relative mt-12 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 aspect-[4/3] max-w-lg mx-auto border-4 border-justice-white/10">
                    <img
                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop"
                        alt="Dr. June holding husband's photo"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <p className="absolute bottom-4 left-4 right-4 text-sm font-sans uppercase tracking-widest text-justice-white/60">
                        [Photo: Dr. Karen June & her late husband]
                    </p>
                </div>
            </div>
        </section>
    );
}

import React from 'react';

export default function Evidence() {
    return (
        <section className="py-20 px-6 bg-justice-black">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-serif font-black uppercase mb-16 text-center tracking-tight">
                    The <span className="text-justice-red text-shadow">Evidence</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                    {/* Left Side: DA Katz */}
                    <div className="bg-black p-8 space-y-6">
                        <div className="inline-block px-3 py-1 bg-green-900/30 text-green-500 text-xs font-black uppercase tracking-widest mb-4">
                            The Press Release
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-white uppercase italic">
                            "DA Katz Celebrates Justice"
                        </h3>
                        <p className="font-sans text-gray-400 leading-relaxed border-l-2 border-green-600 pl-4">
                            "My office is committed to protecting homeowners from deed fraud. Today, we celebrate the return of 23 homes to their rightful owners."
                        </p>
                        <div className="aspect-video bg-gray-900 border border-white/5 flex items-center justify-center p-4 grayscale opacity-50">
                            <span className="text-[10px] text-center uppercase tracking-widest">[Image: DA Katz at podium celebrating victims]</span>
                        </div>
                    </div>

                    {/* Right Side: Dr. June */}
                    <div className="bg-black p-8 space-y-6">
                        <div className="inline-block px-3 py-1 bg-justice-red/30 text-justice-red text-xs font-black uppercase tracking-widest mb-4">
                            The Reality
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-white uppercase italic">
                            "Dr. June Denied Justice"
                        </h3>
                        <p className="font-sans text-gray-400 leading-relaxed border-l-2 border-justice-red pl-4">
                            Dr. June remains trapped in legal purgatory, her late husband’s service forgotten, as a predatory financial entity continues to claim her home.
                        </p>
                        <div className="aspect-video bg-gray-900 border border-white/5 flex items-center justify-center p-4 grayscale">
                            <span className="text-[10px] text-center uppercase tracking-widest">[Image: Document showing 'Zombie Bank' foreclosure]</span>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-xl md:text-2xl font-serif italic text-justice-white/80 max-w-2xl mx-auto">
                        "Justice shouldn't be a lottery. It shouldn't depend on which case makes for a better headline."
                    </p>
                </div>
            </div>
        </section>
    );
}

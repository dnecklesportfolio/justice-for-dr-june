import React from 'react';
import { FileText, ArrowDown } from 'lucide-react';

export default function CaseFile() {
    const scrollToAction = (e) => {
        e.preventDefault();
        const element = document.getElementById('action-button');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-black py-20 px-6 border-t border-white/10">
            <div className="max-w-4xl mx-auto">
                <div className="border border-white/10 bg-white/5 p-8 md:p-12 relative overflow-hidden">
                    {/* Decorative "Confidential" style elements */}
                    <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                        <FileText size={100} strokeWidth={1} />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-center mb-12 tracking-tight">
                        The Case File: <br />
                        <span className="text-justice-red">Dr. June vs. The Zombie Bank</span>
                    </h2>

                    <div className="space-y-6 md:space-y-8 font-serif text-lg md:text-xl leading-relaxed text-gray-300">
                        <div className="flex gap-4 items-start">
                            <span className="text-justice-red font-bold text-2xl">•</span>
                            <p><span className="text-white font-bold uppercase tracking-wider">The Fire:</span> After a suspicious 2023 fire, Dr. June was barred from her own home.</p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <span className="text-justice-red font-bold text-2xl">•</span>
                            <p><span className="text-white font-bold uppercase tracking-wider">The Fraud:</span> A fraudulent deed was filed while she was fighting to rebuild.</p>
                        </div>
                        <div className="flex gap-4 items-start">
                            <span className="text-justice-red font-bold text-2xl">•</span>
                            <p><span className="text-white font-bold uppercase tracking-wider">The Double Standard:</span> DA Katz just returned 23 homes to other victims but is leaving Dr. June behind.</p>
                        </div>
                    </div>

                    <div className="mt-16 text-center space-y-8">
                        <a
                            href="https://substack.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-sm md:text-base font-black uppercase tracking-[0.2em] transition-all hover:scale-105"
                        >
                            Read the Full Investigation on Substack →
                        </a>

                        <div>
                            <a
                                href="#action-button"
                                onClick={scrollToAction}
                                className="inline-flex items-center gap-2 text-gray-500 hover:text-justice-red transition-colors text-sm uppercase tracking-widest border-b border-gray-800 hover:border-justice-red pb-1"
                            >
                                Already know the story? Skip to the Demand Justice button <ArrowDown size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

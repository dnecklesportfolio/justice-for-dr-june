import React, { useEffect, useRef } from 'react';
import { X, Share2, BookOpen, UserPlus } from 'lucide-react';
import gsap from 'gsap';

export default function ThankYouOverlay({ isOpen, onClose }) {
    const overlayRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.to(overlayRef.current, { opacity: 1, pointerEvents: 'auto', duration: 0.3 });
            gsap.fromTo(contentRef.current,
                { scale: 0.9, opacity: 0, y: 20 },
                { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)", delay: 0.1 }
            );
        } else {
            gsap.to(overlayRef.current, { opacity: 0, pointerEvents: 'none', duration: 0.3 });
        }
    }, [isOpen]);

    const whatsappUrl = "https://wa.me/?text=I%20just%20demanded%20justice%20for%20Dr.%20June";
    const substackUrl = "https://substack.com/home/post/p-181205332";
    const twitterUrl = "https://twitter.com/UpliftBrooklyn"; // Assuming standard twitter link for Follow Us

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md opacity-0 pointer-events-none p-6"
        >
            <div
                ref={contentRef}
                className="max-w-2xl w-full bg-justice-black border border-justice-red/30 p-8 md:p-12 relative shadow-[0_0_100px_rgba(139,0,0,0.2)]"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="space-y-8 text-center">
                    <div className="inline-block px-4 py-1 bg-justice-red/20 text-justice-red text-xs font-black uppercase tracking-[0.4em] mb-4">
                        Campaign Update
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif font-black uppercase tracking-tight leading-none text-white">
                        ACTION TAKEN.<br />
                        <span className="text-justice-red">JUSTICE DEMANDED.</span>
                    </h2>

                    <p className="text-lg md:text-xl font-sans text-gray-300 leading-relaxed max-w-lg mx-auto italic">
                        "Thank you for standing with Dr. June. Your email has been logged and added to our community tally. We are not just sending messages; we are building a record of accountability that cannot be ignored."
                    </p>

                    <div className="grid gap-4 mt-12">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full py-4 bg-green-600 hover:bg-green-700 text-white font-black uppercase tracking-widest transition-all rounded-none"
                        >
                            <Share2 size={18} />
                            Share on WhatsApp
                        </a>

                        <a
                            href={substackUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full py-4 bg-black border border-white/10 hover:border-white/30 text-white font-black uppercase tracking-widest transition-all rounded-none"
                        >
                            <BookOpen size={18} />
                            Read Full Story
                        </a>

                        <a
                            href={twitterUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full py-4 bg-transparent border-b-2 border-justice-red text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-justice-red/5 transition-all rounded-none"
                        >
                            <UserPlus size={16} />
                            Follow Us: @UpliftBrooklyn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

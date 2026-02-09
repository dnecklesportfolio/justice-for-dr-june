import React, { useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';
import gsap from 'gsap';
import ThankYouOverlay from './ThankYouOverlay';

const CopyBox = ({ label, value, isTextArea = false, onCopy }) => {
    const [copied, setCopied] = useState(false);
    const btnRef = useRef(null);

    const handleCopy = () => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        if (onCopy) onCopy();

        // GSAP Animation for success state
        const tl = gsap.timeline({
            onComplete: () => setTimeout(() => setCopied(false), 2000)
        });

        tl.to(btnRef.current, { scale: 0.9, duration: 0.1 })
            .to(btnRef.current, { scale: 1, duration: 0.1 });
    };

    return (
        <div className="space-y-2 mt-6">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-justice-white/40 block">
                {label}
            </label>
            <div className="relative group">
                {isTextArea ? (
                    <textarea
                        readOnly
                        value={value}
                        className="w-full bg-gray-950 border border-white/5 p-4 pr-12 text-sm font-sans text-gray-300 h-32 focus:outline-none resize-none"
                    />
                ) : (
                    <input
                        type="text"
                        readOnly
                        value={value}
                        className="w-full bg-gray-950 border border-white/5 p-4 pr-12 text-sm font-sans text-gray-300 focus:outline-none"
                    />
                )}
                <button
                    ref={btnRef}
                    onClick={handleCopy}
                    className="absolute top-1/2 -translate-y-1/2 right-2 p-2 rounded-sm bg-justice-red/10 hover:bg-justice-red/20 transition-colors text-justice-red"
                >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied && (
                        <span className="absolute -top-8 right-0 bg-justice-red text-white text-[10px] px-2 py-1 font-black rounded-none uppercase">
                            Copied!
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default function ActionButton() {
    const [showOverlay, setShowOverlay] = useState(false);
    const recipient = "[YOUR_EMAIL_HERE]";
    const cc = "[YOUR_MONITORING_EMAIL_HERE]";
    const subject = "Concerned: Why is Dr. June being denied the justice you gave others?";
    const body = `Dear District Attorney Katz,

I just learned about Dr. June’s case and I am shocked that this can go on under your watch. It is deeply disturbing to see the contrast between your office’s recent victory—returning homes to victims of deed fraud on January 28th—and the ongoing nightmare Dr. June is facing. In your February 3rd press release, you stated: “We will not stand by and let property owners lose their homes to fraudsters.”

If that is true, why is your office standing by while Dr. June remains a victim?

Your office has proven it has the tools, specifically CPL 420.45, to void fraudulent deeds and bypass civil court for victims. You even successfully prosecuted a 'John Doe' defendant in that case. There is no excuse for the lack of 'decisive legal action' for Dr. June.

We are calling on you to:

Apply the same aggressive prosecution to Dr. June’s case as you did for the Kew Gardens Hills and Jamaica Estates properties.

Provide a public explanation as to why the Housing and Worker Protection Bureau has not yet secured a court order for Dr. June.

The community is watching. We expect the same standard of justice for Dr. June that you highlight in your press releases.

Sincerely,
[Your Name]
[Your Zip Code/Neighborhood]`;

    const mailToUrl = `mailto:${recipient}?cc=${cc}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const handleMainAction = () => {
        setShowOverlay(true);
    };

    return (
        <>
            <ThankYouOverlay
                isOpen={showOverlay}
                onClose={() => setShowOverlay(false)}
            />
            <div className="w-full bg-black border-t border-justice-red/20">
                <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
                    <h2 className="text-4xl md:text-6xl font-serif font-black uppercase text-center mb-12 tracking-tight">
                        Take <span className="text-justice-red">Action</span> Now
                    </h2>

                    {/* Primary Action */}
                    <div className="mb-20">
                        <a
                            href={mailToUrl}
                            onClick={handleMainAction}
                            className="block w-full py-6 md:py-10 bg-justice-red hover:bg-red-700 text-white text-center text-2xl md:text-4xl font-serif font-black uppercase tracking-tighter shadow-[0_0_50px_rgba(139,0,0,0.3)] transition-all active:scale-[0.98] ring-4 ring-justice-red ring-offset-4 ring-offset-black relative overflow-hidden group"
                        >
                            <span className="relative z-10 font-black">DEMAND JUSTICE (OPEN EMAIL)</span>
                            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                        </a>
                        <p className="mt-6 text-center text-xs font-sans uppercase tracking-[0.3em] text-justice-white/60 animate-pulse">
                            Recommended: Mobile-First One-Tap Action
                        </p>
                    </div>

                    {/* Manual Option */}
                    <div className="bg-gray-900/30 p-8 md:p-12 border border-white/5 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px flex-1 bg-white/10"></div>
                            <h3 className="text-xl md:text-2xl font-serif italic text-white/50 uppercase tracking-widest px-4">
                                Manual Option
                            </h3>
                            <div className="h-px flex-1 bg-white/10"></div>
                        </div>
                        <p className="text-sm font-sans text-gray-400 text-center mb-10 uppercase tracking-widest max-w-sm mx-auto">
                            If the button above doesn't open your email app, copy and paste the details below manually.
                        </p>

                        <div className="space-y-4 max-w-2xl mx-auto">
                            <CopyBox label="Recipient" value={recipient} onCopy={handleMainAction} />
                            <CopyBox label="Subject" value={subject} onCopy={handleMainAction} />
                            <CopyBox label="Email Body" value={body} isTextArea={true} onCopy={handleMainAction} />
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <p className="text-[10px] text-center uppercase tracking-[0.4em] text-white/20">
                                Your voice matters. Don't stay silent.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

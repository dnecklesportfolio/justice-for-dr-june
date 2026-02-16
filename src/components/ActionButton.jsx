import React, { useState } from 'react';
import ThankYouOverlay from './ThankYouOverlay';

export default function ActionButton() {
    const [showOverlay, setShowOverlay] = useState(false);
    const recipient = "info@queensda.org";
    const cc = "HousingWorkerProtection@queensda.org,QDACommunications@queensda.org,SpeakerAdams@council.nyc.gov,sanders@nysenate.gov,cookv@nyassembly.gov";
    const bcc = "dwayneaneckles@gmail.com";
    const subject = "CONCERNED: Why is Dr. June being denied the justice you gave others?";
    const body = `Dear District Attorney Katz,

I just learned about Dr. June’s case and I am shocked that this can go on under your watch. It is deeply disturbing to see the contrast between your office’s recent victory—returning homes to victims of deed fraud on January 28th—and the ongoing nightmare Dr. June is facing. In your February 3rd press release, you stated: “We will not stand by and let property owners lose their homes to fraudsters.”

If that is true, why is your office standing by while Dr. June remains a victim?

Your office has proven it has the tools, specifically CPL 420.45, to void fraudulent deeds and bypass civil court for victims. You even successfully prosecuted a "John Doe" defendant in that case. There is no excuse for the lack of "decisive legal action" for Dr. June.

We are calling on you to:

Apply the same aggressive prosecution to Dr. June’s case as you did for the Kew Gardens Hills and Jamaica Estates properties.

Provide a public explanation as to why the Housing and Worker Protection Bureau has not yet secured a court order for Dr. June.

Please contact Dr. June immediately at 718.658.5749 to resolve this matter.

The community is watching. We expect the same standard of justice for Dr. June that you highlight in your press releases.

Sincerely,
[Your Name]
[Your Zip Code/Neighborhood]`;

    const mailToUrl = `mailto:${recipient}?cc=${cc}&bcc=${bcc}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

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
                    <h2 id="action-button" className="text-4xl md:text-6xl font-serif font-black uppercase text-center mb-12 tracking-tight">
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
                </div>
            </div>
        </>
    );
}

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function ProgressBar() {
    const [emailsSent, setEmailsSent] = useState(0);
    const [goal] = useState(500);
    const barRef = useRef(null);
    const counterRef = useRef(null);

    // This is your specific Google Sheet CSV link
    const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQsF8ZwC7Q7VIXlKRGcIM8T_1knzl5yJ8X8UI2KAjXSZLTb5iCyp0rqGv6KCWuo4I-0s-3xou0D9Sq3/pub?gid=0&single=true&output=csv";

    useEffect(() => {
        // We define the animation function here to use inside the fetch
        const animateBar = (count) => {
            const percentage = Math.min((count / goal) * 100, 100);

            // 1. Animate the red bar width
            gsap.to(barRef.current, {
                width: `${percentage}%`,
                duration: 1.5,
                ease: "power2.out"
            });

            // 2. Animate the number counting up
            gsap.to(counterRef.current, {
                textContent: count,
                duration: 1.5,
                snap: { textContent: 1 },
                ease: "power2.out"
            });
        };

        const fetchData = async () => {
            console.log("--------------------------------------------------");
            console.log("🔍 CHECKING FOR UPDATES...");

            try {
                // 1. Fetch the data with the cache buster (Date.now())
                // This forces the browser to get a fresh file every time
                const response = await fetch(csvUrl + '&t=' + Date.now());

                if (!response.ok) {
                    console.error("❌ Network response was not ok");
                    return;
                }

                const text = await response.text();
                console.log("📄 Raw Data from Google:", text);

                // 2. THE FIX: Handle "Total Emails,2"
                // We split the text by the comma
                const parts = text.split(',');
                let count = 0;

                if (parts.length >= 2) {
                    // Scenario A: Data looks like "Total Emails,2"
                    // We grab the last part (the "2")
                    console.log("✅ Detected comma format. Parsing number...");
                    count = parseInt(parts[parts.length - 1].trim(), 10);
                } else {
                    // Scenario B: Data looks like just "2"
                    console.log("ℹ️ No comma detected. Parsing whole string...");
                    count = parseInt(text.trim(), 10);
                }

                console.log("🔢 Final Count:", count);

                // 3. Update State & Animate
                if (!isNaN(count)) {
                    setEmailsSent(count);
                    animateBar(count);
                } else {
                    console.error("❌ Could not parse a valid number from data.");
                }

            } catch (error) {
                console.error("❌ Error fetching data:", error);
            }
            console.log("--------------------------------------------------");
        };

        // Run immediately on load
        fetchData();

        // Run again every 30 seconds
        const interval = setInterval(fetchData, 30000);
        return () => clearInterval(interval);
    }, [goal]); // Re-run if goal changes

    return (
        <section className="py-12 px-6 bg-black border-y border-white/5">
            <div className="max-w-4xl mx-auto space-y-4">
                <div className="flex justify-between items-end">
                    <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-justice-white">
                        Live Action <span className="text-justice-red">Tracker</span>
                    </h2>
                    <p className="text-xl md:text-3xl font-serif italic text-justice-white">
                        {/* The counterRef is here for GSAP to animate the number */}
                        <span ref={counterRef}>{emailsSent}</span> <span className="opacity-50">/ {goal}</span>
                    </p>
                </div>

                <div className="h-10 w-full bg-gray-900 rounded-none border border-white/10 relative overflow-hidden">
                    <div
                        ref={barRef}
                        className="h-full bg-justice-red shadow-[0_0_20px_rgba(139,0,0,0.6)]"
                        style={{ width: '0%' }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-xs font-sans font-black uppercase tracking-[0.3em] text-white mix-blend-difference">
                            Emails Sent to DA Katz
                        </span>
                    </div>
                </div>

                <p className="text-sm font-sans text-justice-white/60 text-right uppercase tracking-widest">
                    {Math.round((emailsSent / goal) * 100)}% of goal reached
                </p>
            </div>
        </section>
    );
}
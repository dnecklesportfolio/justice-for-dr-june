import React, { useEffect, useState, useRef } from 'react';
import Papa from 'papaparse';
import gsap from 'gsap';

export default function ProgressBar() {
    const [emailsSent, setEmailsSent] = useState(0);
    const [goal] = useState(500);
    const barRef = useRef(null);
    const counterRef = useRef(null);

    const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQsF8ZwC7Q7VIXlKRGcIM8T_1knzl5yJ8X8UI2KAjXSZLTb5iCyp0rqGv6KCWuo4I-0s-3xou0D9Sq3/pub?gid=0&single=true&output=csv";

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 1. Fetch the data with the cache buster
                const response = await fetch(csvUrl + '&t=' + Date.now());
                const text = await response.text();

                console.log("Raw Data:", text); // Check your console to see "Total Emails,2"

                // 2. The Fix: Split by comma
                // If text is "Total Emails,2", parts becomes ["Total Emails", "2"]
                const parts = text.split(',');

                // 3. Grab the second part (index 1) and turn it into a number
                if (parts.length >= 2) {
                    const count = parseInt(parts[1].trim(), 10);
                    if (!isNaN(count)) {
                        setEmailsSent(count);
                        animateBar(count);
                    }
                } else {
                    // Fallback: If it's just a number like "2" without the text
                    const count = parseInt(text.trim(), 10);
                    if (!isNaN(count)) {
                        setEmailsSent(count);
                        animateBar(count);
                    }
                }

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 30000); // Poll every 30s
        return () => clearInterval(interval);
    }, []);
    const animateBar = (count) => {
        const percentage = Math.min((count / goal) * 100, 100);

        gsap.to(barRef.current, {
            width: `${percentage}%`,
            duration: 1.5,
            ease: "power2.out"
        });

        gsap.from(counterRef.current, {
            textContent: 0,
            duration: 1.5,
            snap: { textContent: 1 },
            ease: "power2.out"
        });
    };

    return (
        <section className="py-12 px-6 bg-black border-y border-white/5">
            <div className="max-w-4xl mx-auto space-y-4">
                <div className="flex justify-between items-end">
                    <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-justice-white">
                        Live Action <span className="text-justice-red">Tracker</span>
                    </h2>
                    <p className="text-xl md:text-3xl font-serif italic text-justice-white">
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

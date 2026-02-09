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
                const response = await fetch(csvUrl + '&t=' + Date.now());
                const reader = response.body.getReader();
                const result = await reader.read();
                const decoder = new TextDecoder('utf-8');
                const csv = decoder.decode(result.value);

                Papa.parse(csv, {
                    complete: (results) => {
                        // Assume the number is in the second column (Cell B1) of the first row
                        const data = results.data;
                        if (data && data[0] && data[0][1]) {
                            const count = parseInt(data[0][1].replace(/,/g, ''));
                            if (!isNaN(count)) {
                                setEmailsSent(count);
                                animateBar(count);
                            }
                        }
                    }
                });
            } catch (error) {
                console.error("Error fetching progress data:", error);
            }
        };

        fetchData();
        // Poll every 60 seconds
        const interval = setInterval(fetchData, 60000);
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

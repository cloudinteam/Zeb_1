import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { Rocket, Sparkles } from 'lucide-react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const TARGET_DATE = new Date('2026-01-08T00:00:00');

export function Countdown() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const unitsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        setMounted(true);

        const calculateTimeLeft = (): TimeLeft => {
            const now = new Date().getTime();
            const target = TARGET_DATE.getTime();
            const difference = target - now;

            if (difference <= 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (mounted && containerRef.current) {
            // Entrance animation
            gsap.fromTo(
                containerRef.current,
                { opacity: 0, scale: 0.95, y: 20 },
                { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' }
            );

            // Stagger animation for each unit
            gsap.fromTo(
                unitsRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power3.out',
                    delay: 0.2
                }
            );
        }
    }, [mounted]);

    const formatNumber = (num: number): string => {
        return num.toString().padStart(2, '0');
    };

    const timeUnits = [
        { label: 'DAYS', value: timeLeft.days, color: 'from-violet-500 to-purple-600' },
        { label: 'HRS', value: timeLeft.hours, color: 'from-cyan-400 to-blue-600' },
        { label: 'MIN', value: timeLeft.minutes, color: 'from-emerald-400 to-teal-600' },
        { label: 'SEC', value: timeLeft.seconds, color: 'from-amber-400 to-orange-600' },
    ];

    if (!mounted) return null;

    return (
        <div ref={containerRef} className="relative w-full">
            {/* Header */}
            <div className="text-center mb-4 sm:mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-full border border-primary/30 backdrop-blur-sm mb-3">
                    <Rocket className="w-3.5 h-3.5 text-primary animate-pulse" />
                    <span className="text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase">Launch Countdown</span>
                    <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold relative overflow-hidden">
                    <span className="inline-block animate-shimmer bg-[length:200%_100%] bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
                        Coming Soon
                    </span>
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Get ready for the future of crypto</p>
            </div>

            {/* Countdown Units - Fully Responsive Grid */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4 w-full">
                {timeUnits.map((unit, index) => (
                    <div
                        key={unit.label}
                        ref={(el) => { if (el) unitsRef.current[index] = el; }}
                        className="group relative"
                    >
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${unit.color} rounded-xl sm:rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />

                        {/* Main card */}
                        <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 text-center overflow-hidden">
                            {/* Shine effect */}
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                            {/* Value */}
                            <div className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-br ${unit.color} bg-clip-text text-transparent leading-none`}>
                                {formatNumber(unit.value)}
                            </div>

                            {/* Label */}
                            <div className={`mt-1 sm:mt-2 text-[9px] xs:text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${unit.color} bg-clip-text text-transparent`}>
                                {unit.label}
                            </div>

                            {/* Bottom gradient */}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Separating colons - visible on larger screens */}
            <div className="hidden md:flex absolute top-1/2 left-0 right-0 justify-around px-[12%] pointer-events-none" style={{ marginTop: '2rem' }}>
                {[0, 1, 2].map((i) => (
                    <div key={i} className="flex flex-col gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

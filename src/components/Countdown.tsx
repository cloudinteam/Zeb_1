import { useEffect, useState, useRef, useCallback } from 'react';
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
    const numberRefs = useRef<(HTMLDivElement | null)[]>([]);
    const prevValuesRef = useRef<number[]>([0, 0, 0, 0]);

    const calculateTimeLeft = useCallback((): TimeLeft => {
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
    }, []);

    // Initial mount
    useEffect(() => {
        setMounted(true);
        const initialTime = calculateTimeLeft();
        setTimeLeft(initialTime);
        prevValuesRef.current = [initialTime.days, initialTime.hours, initialTime.minutes, initialTime.seconds];
    }, [calculateTimeLeft]);

    // Timer interval
    useEffect(() => {
        if (!mounted) return;

        const timer = setInterval(() => {
            const newTime = calculateTimeLeft();
            const newValues = [newTime.days, newTime.hours, newTime.minutes, newTime.seconds];

            // Animate flip for changed values
            newValues.forEach((value, index) => {
                if (value !== prevValuesRef.current[index] && numberRefs.current[index]) {
                    const numberEl = numberRefs.current[index];
                    if (numberEl) {
                        // GSAP flip animation
                        gsap.fromTo(
                            numberEl,
                            {
                                rotateX: 0,
                                scale: 1,
                                opacity: 1
                            },
                            {
                                rotateX: -90,
                                scale: 0.8,
                                opacity: 0,
                                duration: 0.2,
                                ease: 'power2.in',
                                onComplete: () => {
                                    gsap.fromTo(
                                        numberEl,
                                        {
                                            rotateX: 90,
                                            scale: 0.8,
                                            opacity: 0
                                        },
                                        {
                                            rotateX: 0,
                                            scale: 1,
                                            opacity: 1,
                                            duration: 0.3,
                                            ease: 'power2.out'
                                        }
                                    );
                                }
                            }
                        );
                    }
                }
            });

            prevValuesRef.current = newValues;
            setTimeLeft(newTime);
        }, 1000);

        return () => clearInterval(timer);
    }, [mounted, calculateTimeLeft]);

    // Entrance animation
    useEffect(() => {
        if (mounted && containerRef.current) {
            gsap.fromTo(
                containerRef.current,
                { opacity: 0, scale: 0.95, y: 20 },
                { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' }
            );
        }
    }, [mounted]);

    const formatNumber = (num: number): string => {
        return num.toString().padStart(2, '0');
    };

    const timeUnits = [
        { label: 'DAYS', value: timeLeft.days, color: 'from-violet-500 to-purple-600', bgGlow: 'bg-violet-500' },
        { label: 'HRS', value: timeLeft.hours, color: 'from-cyan-400 to-blue-600', bgGlow: 'bg-cyan-500' },
        { label: 'MIN', value: timeLeft.minutes, color: 'from-emerald-400 to-teal-600', bgGlow: 'bg-emerald-500' },
        { label: 'SEC', value: timeLeft.seconds, color: 'from-amber-400 to-orange-600', bgGlow: 'bg-amber-500' },
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

            {/* Countdown Units with Flip Animation and Inline Colons */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 lg:gap-3 w-full max-w-3xl mx-auto">
                {timeUnits.map((unit, index) => (
                    <div key={unit.label} className="flex items-center">
                        {/* Time Box */}
                        <div className="group relative" style={{ perspective: '500px' }}>
                            {/* Glow effect */}
                            <div className={`absolute -inset-1 ${unit.bgGlow} rounded-xl sm:rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`} />

                            {/* Main card */}
                            <div className="relative bg-card/90 backdrop-blur-sm border border-primary/20 rounded-xl sm:rounded-2xl overflow-hidden min-w-[60px] sm:min-w-[80px] md:min-w-[100px] lg:min-w-[120px]">
                                {/* Shine effect */}
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                                {/* Number Display with Flip */}
                                <div className="relative py-3 sm:py-4 md:py-5 px-2" style={{ transformStyle: 'preserve-3d' }}>
                                    <div
                                        ref={(el) => { numberRefs.current[index] = el; }}
                                        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-br ${unit.color} bg-clip-text text-transparent leading-none text-center`}
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        {formatNumber(unit.value)}
                                    </div>
                                </div>

                                {/* Label */}
                                <div className="pb-2 sm:pb-3">
                                    <div className={`text-[8px] sm:text-[10px] md:text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${unit.color} bg-clip-text text-transparent text-center`}>
                                        {unit.label}
                                    </div>
                                </div>

                                {/* Bottom shadow */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* Colon Separator - shown after each box except the last */}
                        {index < 3 && (
                            <div className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 mx-1 sm:mx-2 lg:mx-3">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/70 animate-pulse" />
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/70 animate-pulse" style={{ animationDelay: '0.5s' }} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

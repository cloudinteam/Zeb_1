import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Twitter, Send, TrendingUp, Coins, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    {
        icon: Twitter,
        value: 10000,
        suffix: '+',
        label: 'Twitter Followers',
        color: '#1DA1F2',
        yetToReach: true,
    },
    {
        icon: Send,
        value: 5000,
        suffix: '+',
        label: 'Telegram Members',
        color: '#0088cc',
        yetToReach: true,
    },
    {
        icon: Users,
        value: 2500,
        suffix: '+',
        label: 'Token Holders',
        color: '#FFD700',
    },
    {
        icon: Coins,
        value: 10,
        suffix: 'M',
        label: 'Total Supply',
        color: '#22C55E',
    },
    {
        icon: TrendingUp,
        value: 0.30,
        prefix: '$',
        suffix: '',
        label: 'IDO Price',
        color: '#F97316',
        decimals: 2,
    },
    {
        icon: Activity,
        value: 55,
        suffix: '%',
        label: 'Public Offering',
        color: '#8B5CF6',
    },
];

function AnimatedCounter({
    target,
    prefix = '',
    suffix = '',
    decimals = 0,
    duration = 2
}: {
    target: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    duration?: number;
}) {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = countRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true;

                        const obj = { value: 0 };
                        gsap.to(obj, {
                            value: target,
                            duration: duration,
                            ease: 'power2.out',
                            onUpdate: () => {
                                setCount(obj.value);
                            },
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [target, duration]);

    return (
        <span ref={countRef}>
            {prefix}
            {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}
            {suffix}
        </span>
    );
}

export function CommunityStats() {
    const sectionRef = useRef<HTMLElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const statCards = statsRef.current?.querySelectorAll('.stat-card');
            if (statCards) {
                gsap.fromTo(
                    statCards,
                    { opacity: 0, y: 30, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: statsRef.current,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 lg:py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-card group relative bg-card border border-primary/20 rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm"
                            style={{ '--stat-color': stat.color } as React.CSSProperties}
                        >
                            {/* Glow effect on hover */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                                style={{ backgroundColor: `${stat.color}20` }}
                            />

                            {/* Icon */}
                            <div
                                className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                                style={{
                                    backgroundColor: `${stat.color}20`,
                                }}
                            >
                                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                            </div>

                            {/* Value */}
                            <div className="relative z-10 text-2xl lg:text-3xl font-bold mb-1 group-hover:text-primary transition-colors">
                                <AnimatedCounter
                                    target={stat.value}
                                    prefix={stat.prefix}
                                    suffix={stat.suffix}
                                    decimals={stat.decimals}
                                />
                            </div>

                            {/* Label */}
                            <div className="relative z-10 text-xs lg:text-sm text-muted-foreground">
                                {stat.label}
                            </div>

                            {/* Yet To Reach badge for Twitter and Telegram */}
                            {stat.yetToReach && (
                                <div className="relative z-10 mt-2 group/badge">
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-green-500/10 text-green-500 border border-green-500/30 transition-all duration-300 hover:bg-green-500/20 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 animate-pulse">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                                        Yet To Reach
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Live indicator */}
                <div className="text-center mt-8">
                    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 rounded-full px-4 py-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Community growing daily
                    </span>
                </div>
            </div>
        </section>
    );
}

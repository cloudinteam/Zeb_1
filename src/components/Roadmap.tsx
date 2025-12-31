import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Check, Rocket, TrendingUp, Users, Layers, Brain, Server, CreditCard, Copyright, Globe, Leaf, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const roadmapData = [
    {
        quarter: 'Q1 2026',
        title: 'Foundation',
        items: ['Website Launch', 'Social Media Launch', 'IDO Launch'],
        status: 'current',
        icon: Rocket,
        color: '#FFD700',
    },
    {
        quarter: 'Q2 2026',
        title: 'Exchange Integration',
        items: ['Exchange Launch DEX/CEX', 'USDT/BNB Trading Pair'],
        status: 'upcoming',
        icon: TrendingUp,
        color: '#FFA500',
    },
    {
        quarter: 'Q3 2026',
        title: 'Community Growth',
        items: ['Achieve 100K Followers', 'Twitter/Instagram/Facebook'],
        status: 'upcoming',
        icon: Users,
        color: '#FF8C00',
    },
    {
        quarter: 'Q4 2026',
        title: 'Platform Launch',
        items: ['Launchpad in ZEBCOIN PLATFORM'],
        status: 'upcoming',
        icon: Layers,
        color: '#DAA520',
    },
    {
        quarter: 'Q1 2027',
        title: 'AI Identity Platform',
        items: ['Launch DIVP with AI', 'Decentralized Identity Verification', 'Own ZEB-AI Model'],
        status: 'upcoming',
        icon: Brain,
        color: '#FFD700',
    },
    {
        quarter: 'Q3 2027',
        title: 'Blockchain Infrastructure',
        items: ['Own DEX Launch', 'Explorer Launch'],
        status: 'upcoming',
        icon: Server,
        color: '#FFA500',
    },
    {
        quarter: 'Q1 2028',
        title: 'Payment System',
        items: ['Smart Contract Payment System', 'Integrated API Launch', 'Crypto Pairs Customization'],
        status: 'upcoming',
        icon: CreditCard,
        color: '#FF8C00',
    },
    {
        quarter: 'Q3 2028',
        title: 'IP Marketplace',
        items: ['BBIPM Launch', 'Blockchain IP Marketplace', 'Tokenize Patents/Copyrights', 'Decentralized Arbitration'],
        status: 'upcoming',
        icon: Copyright,
        color: '#DAA520',
    },
    {
        quarter: 'Q1 2029',
        title: 'Global Exchange',
        items: ['ZEB Exchange in 7 Countries', 'Regulatory Licenses', 'AI DeFi Microlending', 'Reputation Scoring'],
        status: 'upcoming',
        icon: Globe,
        color: '#FFD700',
    },
    {
        quarter: 'Q3 2029',
        title: 'Green Energy & Prediction',
        items: ['GET - Green Energy Token', 'Project Investment Monitoring', 'Decentralized Prediction Market'],
        status: 'upcoming',
        icon: Leaf,
        color: '#22C55E',
    },
];

export function Roadmap() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(
                headerRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            // Timeline line animation
            if (lineRef.current) {
                gsap.fromTo(
                    lineRef.current,
                    { scaleY: 0, transformOrigin: 'top' },
                    {
                        scaleY: 1,
                        duration: 1.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: timelineRef.current,
                            start: 'top 80%',
                            end: 'bottom 60%',
                            scrub: 1,
                        },
                    }
                );
            }

            // Timeline items animation
            const items = timelineRef.current?.querySelectorAll('.timeline-item');
            if (items) {
                items.forEach((item, index) => {
                    const isLeft = index % 2 === 0;
                    gsap.fromTo(
                        item,
                        {
                            opacity: 0,
                            x: isLeft ? -50 : 50,
                            scale: 0.95
                        },
                        {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            duration: 0.7,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: item,
                                start: 'top 85%',
                                toggleActions: 'play none none reverse',
                            },
                        }
                    );
                });
            }

            // Timeline dots animation
            const dots = timelineRef.current?.querySelectorAll('.timeline-dot');
            if (dots) {
                dots.forEach((dot) => {
                    gsap.fromTo(
                        dot,
                        { scale: 0 },
                        {
                            scale: 1,
                            duration: 0.4,
                            ease: 'back.out(1.7)',
                            scrollTrigger: {
                                trigger: dot,
                                start: 'top 85%',
                                toggleActions: 'play none none reverse',
                            },
                        }
                    );
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="roadmap" className="py-20 lg:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30 bg-primary/10">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        Our Journey
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-primary">Our Sponsored Roadmap</span>
                        <br />
                        <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                            2026 - 2029
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        A strategic timeline for building the future of decentralized finance and identity
                    </p>
                </div>

                {/* Timeline */}
                <div ref={timelineRef} className="relative">
                    {/* Center Line */}
                    <div
                        ref={lineRef}
                        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-orange-500 to-primary/20 rounded-full"
                    />

                    <div className="space-y-8 lg:space-y-0">
                        {roadmapData.map((milestone, index) => (
                            <div
                                key={index}
                                className={`timeline-item lg:flex lg:items-start ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                {/* Content */}
                                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                                    <Card className={`
                                        group relative overflow-hidden
                                        bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm 
                                        border-primary/10 hover:border-primary/30
                                        ${milestone.status === 'current' ? 'border-primary/50 shadow-lg shadow-primary/10' : ''}
                                        transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5
                                    `}>
                                        {/* Glow effect for current */}
                                        {milestone.status === 'current' && (
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-orange-500/10" />
                                        )}

                                        <CardContent className="p-6 relative z-10">
                                            <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                                                {/* Icon */}
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                                                    style={{
                                                        backgroundColor: `${milestone.color}20`,
                                                        boxShadow: milestone.status === 'current' ? `0 0 20px ${milestone.color}30` : 'none'
                                                    }}
                                                >
                                                    <milestone.icon className="w-6 h-6" style={{ color: milestone.color }} />
                                                </div>
                                                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:items-end' : ''}`}>
                                                    <Badge
                                                        variant={milestone.status === 'current' ? 'default' : 'outline'}
                                                        className={milestone.status === 'current' ? 'bg-primary text-primary-foreground' : 'border-primary/30'}
                                                    >
                                                        {milestone.quarter}
                                                    </Badge>
                                                    {milestone.status === 'current' && (
                                                        <span className="text-xs text-primary mt-1 flex items-center gap-1">
                                                            <Sparkles className="w-3 h-3" />
                                                            Current Phase
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{milestone.title}</h3>
                                            <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:items-end' : ''}`}>
                                                {milestone.items.map((item, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        className={`flex items-center gap-2 text-sm text-muted-foreground ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                                            }`}
                                                    >
                                                        <div
                                                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                                                            style={{ backgroundColor: `${milestone.color}20` }}
                                                        >
                                                            <Check className="w-3 h-3" style={{ color: milestone.color }} />
                                                        </div>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Timeline Dot - Desktop */}
                                <div className="hidden lg:flex items-start justify-center w-12">
                                    <div
                                        className={`
                                            timeline-dot w-6 h-6 rounded-full mt-8 flex items-center justify-center
                                            ${milestone.status === 'current'
                                                ? 'ring-4 ring-primary/30'
                                                : ''
                                            }
                                        `}
                                        style={{
                                            backgroundColor: milestone.color,
                                            boxShadow: milestone.status === 'current' ? `0 0 20px ${milestone.color}50` : 'none'
                                        }}
                                    >
                                        {milestone.status === 'current' && (
                                            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                        )}
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden lg:block lg:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Brain, Shield, Leaf, Zap, Users, TrendingUp, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const differentiators = [
    {
        icon: Brain,
        title: 'AI-First Architecture',
        description: 'Unlike generic DeFi tokens, ZCN integrates AI at the protocol level for smarter lending decisions and identity verification.',
        color: '#8B5CF6',
    },
    {
        icon: Shield,
        title: 'Decentralized Identity',
        description: 'Own your identity. ZebAi provides blockchain-based identity verification without centralized authorities.',
        color: '#3B82F6',
    },
    {
        icon: Leaf,
        title: 'Sustainability Focus',
        description: 'Committed to green energy initiatives and carbon-neutral blockchain operations.',
        color: '#22C55E',
    },
    {
        icon: Zap,
        title: 'Complete Ecosystem',
        description: 'From DEX to NFT marketplace to lending—a full-stack DeFi solution on one platform.',
        color: '#F97316',
    },
];

const comparisons = [
    {
        category: 'Meme Coins',
        zebcoin: ['Real utility & use cases', 'Long-term roadmap', 'Professional team', 'Security audits'],
        others: ['Hype-driven only', 'No development plans', 'Anonymous creators', 'Unaudited contracts'],
    },
    {
        category: 'Other AI Tokens',
        zebcoin: ['Identity + DeFi + AI', 'Sustainability focus', 'Full ecosystem', 'BSC efficiency'],
        others: ['Single-purpose', 'No green initiatives', 'Limited features', 'High gas fees'],
    },
];

export function WhyZebcoin() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const diffRef = useRef<HTMLDivElement>(null);
    const compRef = useRef<HTMLDivElement>(null);

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

            // Differentiators animation
            const diffCards = diffRef.current?.querySelectorAll('.diff-card');
            if (diffCards) {
                gsap.fromTo(
                    diffCards,
                    { opacity: 0, x: -40 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: diffRef.current,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }

            // Comparison animation
            const compCards = compRef.current?.querySelectorAll('.comp-card');
            if (compCards) {
                gsap.fromTo(
                    compCards,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.2,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: compRef.current,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="why" className="py-20 lg:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30 bg-primary/10">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Why ZEBCOIN?
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-primary">AI-Powered Identity</span>
                        <br />
                        <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                            for Sustainable DeFi
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Not just another token. ZEBCOIN Supports AI Projects, decentralized identity, and
                        sustainability for a new paradigm in blockchain technology.
                    </p>
                </div>

                {/* Differentiators */}
                <div ref={diffRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {differentiators.map((diff, index) => (
                        <Card
                            key={index}
                            className="diff-card group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />

                            <CardContent className="relative z-10 p-6 flex gap-4">
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                                    style={{
                                        backgroundColor: `${diff.color}20`,
                                    }}
                                >
                                    <diff.icon className="w-7 h-7" style={{ color: diff.color }} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                                        {diff.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {diff.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Comparison Section */}
                <div ref={compRef} className="bg-gradient-to-br from-card/80 to-secondary/50 backdrop-blur-sm rounded-3xl border border-primary/20 p-8 lg:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-500/10 rounded-full blur-3xl" />

                    <h3 className="text-2xl lg:text-3xl font-bold text-center mb-10 relative z-10">
                        <span className="text-primary">ZEBCOIN</span> vs The Competition
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                        {comparisons.map((comp, index) => (
                            <div key={index} className="comp-card bg-background/50 rounded-2xl p-6 border border-primary/10">
                                <h4 className="font-bold text-lg mb-4 text-center">
                                    vs <span className="text-muted-foreground">{comp.category}</span>
                                </h4>

                                <div className="grid grid-cols-2 gap-4">
                                    {/* ZEBCOIN Column */}
                                    <div>
                                        <div className="text-sm font-bold text-primary mb-3 flex items-center gap-2">
                                            <TrendingUp className="w-4 h-4" />
                                            ZEBCOIN
                                        </div>
                                        <ul className="space-y-2">
                                            {comp.zebcoin.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm">
                                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Others Column */}
                                    <div>
                                        <div className="text-sm font-bold text-muted-foreground mb-3 flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            Others
                                        </div>
                                        <ul className="space-y-2">
                                            {comp.others.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="w-4 h-4 flex items-center justify-center flex-shrink-0">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

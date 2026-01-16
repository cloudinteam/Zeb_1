import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Brain, Leaf, Layers, Cpu, Handshake, Users, Scale, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FloatIcon, PulseIcon, TadaIcon } from '@/components/ui/animated-icons';

gsap.registerPlugin(ScrollTrigger);

const mainFeatures = [
    {
        icon: Shield,
        title: 'Blockchain-Based Identity Verification',
        description: 'Decentralized Identity through ZebAi platform using blockchain for secure, verifiable digital identities. Maintain control over your identity data without relying on central authorities.',
        highlight: 'Intellectual Property Rights protection ensuring creators can verify and enforce their rights transparently.',
        gradient: 'from-amber-500 to-orange-500',
    },
    {
        icon: Brain,
        title: 'AI-Driven DeFi & Micro Lending',
        description: 'Leveraging AI to create smarter lending protocols with micro-lending options through a decentralized system.',
        highlight: 'ZEB Launchpad helps launch new projects integrating AI and blockchain for innovative financial solutions.',
        gradient: 'from-yellow-500 to-amber-500',
    },
    {
        icon: Leaf,
        title: 'Green Energy & Environmental Focus',
        description: 'Prioritizing projects related to sustainability and environmental protection, promoting clean energy initiatives on the blockchain.',
        highlight: 'Supply Chain Transparency tracking products from raw materials to delivery, ensuring ethical practices.',
        gradient: 'from-lime-500 to-green-500',
    },
    {
        icon: Layers,
        title: 'ZEB Chain & Ecosystem Development',
        description: 'Launching a unique blockchain with Explorer for tracking transactions, DEX Transparency, NFT Marketplace, and DeFi Services.',
        highlight: 'Complete ecosystem for lending, borrowing, and staking with decentralized exchange operations.',
        gradient: 'from-orange-500 to-red-500',
    },
];

const strategicAreas = [
    {
        icon: Cpu,
        title: 'Technology Development',
        description: 'AI-powered DeFi and identity verification systems thoroughly developed and tested for platform functionality.',
        color: '#FFD700',
    },
    {
        icon: Handshake,
        title: 'Partnerships',
        description: 'Strategic partnerships to integrate green energy projects creating real-world impact through blockchain.',
        color: '#FFA500',
    },
    {
        icon: Users,
        title: 'Community Engagement',
        description: 'Growing community through education about decentralized identity and blockchain benefits in supply chain.',
        color: '#FF8C00',
    },
    {
        icon: Scale,
        title: 'Regulatory Compliance',
        description: 'Compliance with regulations around IP, lending, and identity verification across various jurisdictions.',
        color: '#DAA520',
    },
];

export function Features() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const strategicRef = useRef<HTMLDivElement>(null);

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

            // Feature cards stagger animation
            const cards = cardsRef.current?.querySelectorAll('.feature-card');
            if (cards) {
                gsap.fromTo(
                    cards,
                    { opacity: 0, y: 60, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.7,
                        stagger: 0.15,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: cardsRef.current,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }

            // Strategic areas animation
            const strategicItems = strategicRef.current?.querySelectorAll('.strategic-item');
            if (strategicItems) {
                gsap.fromTo(
                    strategicItems,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: strategicRef.current,
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
        <section ref={sectionRef} id="features" className="py-20 lg:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30 bg-primary/10">
                        <TadaIcon>
                            <Sparkles className="w-4 h-4 mr-2" />
                        </TadaIcon>
                        Core Features
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                            An Ambitious & Multifaceted
                        </span>
                        <br />
                        <span className="text-primary">Blockchain Project</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        A significant contribution to the blockchain space with innovative solutions across
                        identity, finance, sustainability, and ecosystem development.
                    </p>
                </div>

                {/* Main Features Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
                    {mainFeatures.map((feature, index) => (
                        <Card
                            key={index}
                            className="feature-card group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                            <CardHeader className="relative z-10">
                                {/* Icon with gradient background */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <FloatIcon delay={index * 0.2}>
                                        <feature.icon className="w-7 h-7 text-white" />
                                    </FloatIcon>
                                </div>
                                <CardTitle className="text-xl lg:text-2xl group-hover:text-primary transition-colors">
                                    {feature.title}
                                </CardTitle>
                                <CardDescription className="text-base">
                                    {feature.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="relative z-10">
                                <div className="bg-gradient-to-r from-primary/10 to-orange-500/10 border border-primary/20 rounded-xl p-4 group-hover:border-primary/30 transition-colors">
                                    <p className="text-sm text-muted-foreground">
                                        <span className="text-primary font-medium">✦ </span>
                                        {feature.highlight}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Strategic Areas */}
                <div ref={strategicRef} className="bg-gradient-to-br from-card/80 to-secondary/50 backdrop-blur-sm rounded-3xl border border-primary/20 p-8 lg:p-12 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />

                    <h3 className="text-2xl lg:text-3xl font-bold text-center mb-10 relative z-10">
                        <span className="text-primary">Strategic</span> Focus Areas
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {strategicAreas.map((area, index) => (
                            <div
                                key={index}
                                className="strategic-item text-center p-6 rounded-2xl bg-background/50 border border-primary/10 hover:border-primary/30 hover:bg-background/70 transition-all duration-300 group hover:-translate-y-1"
                            >
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        backgroundColor: `${area.color}20`,
                                        boxShadow: `0 0 30px ${area.color}20`
                                    }}
                                >
                                    <PulseIcon delay={index * 0.15}>
                                        <area.icon className="w-7 h-7" style={{ color: area.color }} />
                                    </PulseIcon>
                                </div>
                                <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">{area.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

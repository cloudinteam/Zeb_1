import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle, Clock, FileCheck, Lock, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const securityBadges = [
    {
        icon: Clock,
        title: 'Smart Contract Audit',
        status: 'In Progress',
        description: 'Comprehensive audit by leading security firm underway',
        color: '#FFA500',
        statusColor: 'text-orange-500',
        bgColor: 'bg-orange-500/10',
        pending: true,
    },
    {
        icon: CheckCircle,
        title: 'BSC Verified',
        status: 'Verified',
        description: 'Contract verified on BscScan for transparency',
        color: '#22C55E',
        statusColor: 'text-green-500',
        bgColor: 'bg-green-500/10',
        pending: false,
    },
    {
        icon: Lock,
        title: 'Liquidity Locked',
        status: 'Coming at Launch',
        description: 'LP tokens will be locked for investor protection',
        color: '#3B82F6',
        statusColor: 'text-blue-500',
        bgColor: 'bg-blue-500/10',
        pending: true,
    },
    {
        icon: FileCheck,
        title: 'KYC Verified',
        status: 'Team KYC Complete',
        description: 'Core team identity verified by third party',
        color: '#8B5CF6',
        statusColor: 'text-purple-500',
        bgColor: 'bg-purple-500/10',
        pending: false,
    },
    {
        icon: Eye,
        title: 'Open Source',
        status: 'Transparent',
        description: 'Smart contract code publicly available for review',
        color: '#06B6D4',
        statusColor: 'text-cyan-500',
        bgColor: 'bg-cyan-500/10',
        pending: false,
    },
];

const securityFeatures = [
    'Multi-signature wallet for treasury',
    'Time-locked admin functions',
    'Anti-whale mechanisms',
    'Gradual token unlock schedule',
];

export function SecurityBadges() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const badgesRef = useRef<HTMLDivElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);

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

            // Badges animation
            const badges = badgesRef.current?.querySelectorAll('.security-badge');
            if (badges) {
                gsap.fromTo(
                    badges,
                    { opacity: 0, y: 40, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: badgesRef.current,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }

            // Features animation
            const features = featuresRef.current?.querySelectorAll('.security-feature');
            if (features) {
                gsap.fromTo(
                    features,
                    { opacity: 0, x: -20 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: featuresRef.current,
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
        <section ref={sectionRef} id="security" className="py-20 lg:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30 bg-primary/10">
                        <Shield className="w-4 h-4 mr-2" />
                        Security & Transparency
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                            Built for
                        </span>{' '}
                        <span className="text-primary">Trust</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We prioritize security and transparency at every level.
                        Your investment protection is our top priority.
                    </p>
                </div>

                {/* Security Badges Grid */}
                <div ref={badgesRef} className="space-y-6 mb-16">
                    {/* Smart Contract Audit - Featured Card */}
                    <div className="security-badge group relative bg-gradient-to-br from-orange-500/10 via-card/80 to-primary/5 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-6 lg:p-8 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                        {/* Status indicator */}
                        <div className="absolute top-4 right-4 flex items-center gap-2">
                            <span className="text-xs font-medium text-orange-500">In Progress</span>
                            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        </div>

                        <div className="flex flex-col lg:flex-row items-center gap-6">
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <Clock className="w-8 h-8" style={{ color: '#FFA500' }} />
                            </div>

                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                                    Smart Contract Audit
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Comprehensive audit by leading security firm underway. Contract details will be available upon completion.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Other Security Badges */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {securityBadges.slice(1).map((badge, index) => (
                            <div
                                key={index}
                                className={`security-badge group relative bg-card border border-primary/20 rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${badge.pending ? 'hover:shadow-orange-500/10' : 'hover:shadow-green-500/10'}`}
                            >
                                {/* Status indicator */}
                                <div
                                    className={`absolute top-3 right-3 w-2 h-2 rounded-full ${badge.pending ? 'bg-orange-500 animate-pulse' : 'bg-green-500'}`}
                                />

                                {/* Icon */}
                                <div
                                    className={`w-14 h-14 rounded-2xl ${badge.bgColor} flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}
                                >
                                    <badge.icon className="w-7 h-7" style={{ color: badge.color }} />
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                                    {badge.title}
                                </h3>

                                {/* Status */}
                                <p className={`text-xs font-medium mb-2 ${badge.statusColor}`}>
                                    {badge.status}
                                </p>

                                {/* Description */}
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    {badge.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Security Features */}
                <div ref={featuresRef} className="bg-card border border-primary/20 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

                    <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 relative z-10">
                        <span className="text-primary">Additional</span> Security Measures
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
                        {securityFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="security-feature flex items-center gap-3 bg-background/50 border border-primary/10 rounded-xl px-4 py-3 hover:border-primary/30 transition-all"
                            >
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Disclaimer */}
                    <p className="text-center text-xs text-muted-foreground mt-8 relative z-10 max-w-2xl mx-auto">
                        <strong className="text-foreground">Disclaimer:</strong> While we implement industry-standard security measures,
                        cryptocurrency investments carry inherent risks. Please do your own research before investing.
                    </p>
                </div>
            </div>
        </section>
    );
}

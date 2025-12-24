import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Linkedin, Twitter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
    {
        name: 'Alex Chen',
        role: 'Founder & CEO',
        bio: 'Former blockchain architect at a leading Web3 company with 10+ years in distributed systems.',
        avatar: null, // Will use initials fallback
        linkedin: '#',
        twitter: '#',
        gradient: 'from-amber-500 to-orange-500',
    },
    {
        name: 'Sarah Williams',
        role: 'CTO',
        bio: 'AI/ML expert with experience at major tech companies. Leading ZebAi development.',
        avatar: null,
        linkedin: '#',
        twitter: '#',
        gradient: 'from-yellow-500 to-amber-500',
    },
    {
        name: 'Michael Park',
        role: 'Head of DeFi',
        bio: 'DeFi protocol designer with extensive experience in lending protocols and tokenomics.',
        avatar: null,
        linkedin: '#',
        twitter: '#',
        gradient: 'from-orange-500 to-red-500',
    },
    {
        name: 'Emma Rodriguez',
        role: 'Community Lead',
        bio: 'Crypto community builder with track record of growing engaged token communities.',
        avatar: null,
        linkedin: '#',
        twitter: '#',
        gradient: 'from-lime-500 to-green-500',
    },
];

const advisors = [
    {
        name: 'Dr. James Lee',
        role: 'Blockchain Advisor',
        company: 'Former Binance',
        gradient: 'from-primary to-orange-500',
    },
    {
        name: 'Lisa Thompson',
        role: 'Legal Advisor',
        company: 'Crypto Law Partners',
        gradient: 'from-primary to-yellow-500',
    },
];

function getInitials(name: string): string {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase();
}

export function Team() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const teamRef = useRef<HTMLDivElement>(null);
    const advisorsRef = useRef<HTMLDivElement>(null);

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

            // Team cards animation
            const teamCards = teamRef.current?.querySelectorAll('.team-card');
            if (teamCards) {
                gsap.fromTo(
                    teamCards,
                    { opacity: 0, y: 60, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.7,
                        stagger: 0.15,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: teamRef.current,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }

            // Advisors animation
            const advisorCards = advisorsRef.current?.querySelectorAll('.advisor-card');
            if (advisorCards) {
                gsap.fromTo(
                    advisorCards,
                    { opacity: 0, x: -30 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: advisorsRef.current,
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
        <section ref={sectionRef} id="team" className="py-20 lg:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30 bg-primary/10">
                        <Users className="w-4 h-4 mr-2" />
                        Our Team
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                            Meet the
                        </span>{' '}
                        <span className="text-primary">Visionaries</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        A dedicated team of blockchain experts, AI specialists, and community builders
                        driving the future of decentralized identity and DeFi.
                    </p>
                </div>

                {/* Team Grid */}
                <div ref={teamRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {teamMembers.map((member, index) => (
                        <Card
                            key={index}
                            className="team-card group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2"
                        >
                            {/* Hover glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                            <CardContent className="relative z-10 p-6 text-center">
                                {/* Avatar */}
                                <div
                                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <span className="text-2xl font-bold text-white">
                                        {getInitials(member.name)}
                                    </span>
                                </div>

                                {/* Info */}
                                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    {member.bio}
                                </p>

                                {/* Social Links */}
                                <div className="flex justify-center gap-2">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-colors"
                                        aria-label={`${member.name} LinkedIn`}
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={member.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-colors"
                                        aria-label={`${member.name} Twitter`}
                                    >
                                        <Twitter className="w-4 h-4" />
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Advisors */}
                <div ref={advisorsRef} className="bg-gradient-to-br from-card/80 to-secondary/50 backdrop-blur-sm rounded-3xl border border-primary/20 p-8 lg:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

                    <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 relative z-10">
                        <span className="text-primary">Strategic</span> Advisors
                    </h3>

                    <div className="flex flex-wrap justify-center gap-6 relative z-10">
                        {advisors.map((advisor, index) => (
                            <div
                                key={index}
                                className="advisor-card flex items-center gap-4 bg-background/50 border border-primary/10 rounded-2xl px-6 py-4 hover:border-primary/30 transition-all hover:-translate-y-1"
                            >
                                <div
                                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${advisor.gradient} flex items-center justify-center shadow-lg`}
                                >
                                    <span className="text-lg font-bold text-white">
                                        {getInitials(advisor.name)}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-bold">{advisor.name}</h4>
                                    <p className="text-sm text-muted-foreground">{advisor.role}</p>
                                    <p className="text-xs text-primary">{advisor.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

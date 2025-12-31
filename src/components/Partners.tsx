import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import { Handshake, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const partners = [
    {
        name: 'Binance Smart Chain',
        logo: 'BSC',
        description: 'Primary blockchain network',
        url: 'https://www.bnbchain.org/',
        color: '#F0B90B',
    },
    {
        name: 'PancakeSwap',
        logo: 'PS',
        description: 'DEX trading partner',
        url: 'https://pancakeswap.finance/',
        color: '#1FC7D4',
    },
    {
        name: 'BscScan',
        logo: 'BS',
        description: 'Blockchain explorer',
        url: 'https://bscscan.com/',
        color: '#21325B',
    },
    {
        name: 'Trust Wallet',
        logo: 'TW',
        description: 'Wallet integration',
        url: 'https://trustwallet.com/',
        color: '#3375BB',
    },
    {
        name: 'MetaMask',
        logo: 'MM',
        description: 'Wallet support',
        url: 'https://metamask.io/',
        color: '#E2761B',
    },
    {
        name: 'CoinGecko',
        logo: 'CG',
        description: 'Price tracking',
        url: 'https://www.coingecko.com/',
        color: '#8DC647',
    },
];

const integrations = [
    { name: 'OpenAI', description: 'AI Infrastructure' },
    { name: 'Chainlink', description: 'Oracle Network' },
    { name: 'IPFS', description: 'Decentralized Storage' },
];

export function Partners() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const partnersRef = useRef<HTMLDivElement>(null);
    const integrationsRef = useRef<HTMLDivElement>(null);

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

            // Partner logos animation
            const partnerLogos = partnersRef.current?.querySelectorAll('.partner-logo');
            if (partnerLogos) {
                gsap.fromTo(
                    partnerLogos,
                    { opacity: 0, scale: 0.8 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: 'back.out(1.7)',
                        scrollTrigger: {
                            trigger: partnersRef.current,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }

            // Integrations animation
            const integrationItems = integrationsRef.current?.querySelectorAll('.integration-item');
            if (integrationItems) {
                gsap.fromTo(
                    integrationItems,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: integrationsRef.current,
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
        <section ref={sectionRef} id="partners" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30 bg-primary/10">
                        <Handshake className="w-4 h-4 mr-2" />
                        Partners & Integrations
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-primary">Trusted</span>{' '}
                        <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                            Ecosystem
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Building on proven infrastructure with industry-leading partners
                        and technology integrations.
                    </p>
                </div>

                {/* Partners Grid */}
                <div ref={partnersRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-16">
                    {partners.map((partner, index) => (
                        <a
                            key={index}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="partner-logo group relative bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 text-center hover:border-primary/40 hover:bg-card/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10"
                        >
                            {/* Logo Circle */}
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                                style={{
                                    backgroundColor: `${partner.color}20`,
                                    boxShadow: `0 0 30px ${partner.color}20`,
                                }}
                            >
                                <span
                                    className="text-xl font-bold"
                                    style={{ color: partner.color }}
                                >
                                    {partner.logo}
                                </span>
                            </div>

                            {/* Name */}
                            <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                                {partner.name}
                            </h3>
                            <p className="text-xs text-muted-foreground">{partner.description}</p>

                            {/* External link indicator */}
                            <ExternalLink className="w-3 h-3 absolute top-3 right-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                        </a>
                    ))}
                </div>

                {/* Technology Integrations */}
                <div ref={integrationsRef} className="bg-gradient-to-r from-primary/10 via-orange-500/10 to-primary/10 border border-primary/20 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />

                    <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 relative z-10">
                        <span className="text-primary">Technology</span> Stack
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4 relative z-10">
                        {integrations.map((integration, index) => (
                            <div
                                key={index}
                                className="integration-item bg-background/50 border border-primary/10 rounded-xl px-6 py-3 hover:border-primary/30 transition-all"
                            >
                                <span className="font-semibold text-primary">{integration.name}</span>
                                <span className="text-muted-foreground mx-2">•</span>
                                <span className="text-sm text-muted-foreground">{integration.description}</span>
                            </div>
                        ))}
                    </div>

                    {/* Coming Soon Badge */}
                    <p className="text-center text-sm text-muted-foreground mt-8 relative z-10">
                        <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            More partnerships coming in 2026
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}

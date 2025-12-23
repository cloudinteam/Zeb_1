import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, FileText, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CoinScene } from '@/components/three/CoinScene';
import { ParticleNetwork } from '@/components/three/ParticleNetwork';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const contractRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial state - hide all elements
            gsap.set([
                badgeRef.current,
                subtitleRef.current,
                statsRef.current,
                contractRef.current,
                ctaRef.current,
                infoRef.current
            ], {
                opacity: 0,
                y: 30
            });

            // Split text animation for heading
            if (headingRef.current) {
                const lines = headingRef.current.querySelectorAll('span');
                gsap.set(lines, { opacity: 0, y: 50 });

                // Create timeline
                const tl = gsap.timeline({ delay: 0.3 });

                // Badge animation
                tl.to(badgeRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out'
                });

                // Heading lines animation with stagger
                tl.to(lines, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out'
                }, '-=0.3');

                // Subtitle
                tl.to(subtitleRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out'
                }, '-=0.4');

                // Stats
                tl.to(statsRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out'
                }, '-=0.3');

                // Contract address
                tl.to(contractRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power3.out'
                }, '-=0.3');

                // CTA buttons
                tl.to(ctaRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out'
                }, '-=0.3');

                // Info section
                tl.to(infoRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power3.out'
                }, '-=0.2');
            }

            // Floating animation for background elements
            const floatingElements = sectionRef.current?.querySelectorAll('.floating-bg');
            floatingElements?.forEach((el, i) => {
                gsap.to(el, {
                    y: -20 + (i * 10),
                    duration: 2 + (i * 0.5),
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
                <ParticleNetwork />
                <div className="floating-bg absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="floating-bg absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
                <div className="floating-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-full blur-3xl" />
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
                    {/* 3D Coin - Left side on desktop, top on mobile */}
                    <div className="order-1 lg:order-1 flex justify-center">
                        <div className="w-full max-w-md lg:max-w-lg aspect-square">
                            <CoinScene />
                        </div>
                    </div>

                    {/* Content - Right side on desktop */}
                    <div className="order-2 lg:order-2 text-center lg:text-left">
                        {/* Badge */}
                        <div ref={badgeRef}>
                            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-primary/30 bg-primary/10">
                                <Sparkles className="w-4 h-4 mr-2 text-primary" />
                                IDO Launching Soon
                            </Badge>
                        </div>

                        {/* Main Heading */}
                        <h1 ref={headingRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                            <span className="block bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                                Be Live In Crypto
                            </span>
                            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                                With AI
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p ref={subtitleRef} className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                            Decentralized identity verification, intellectual property rights, AI-powered lending,
                            environmental sustainability, and transparency in supply chains.
                        </p>

                        {/* Token Stats */}
                        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto lg:mx-0">
                            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl px-4 sm:px-6 py-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <Zap className="w-4 h-4 text-primary" />
                                    <span className="text-sm text-muted-foreground">Total Supply</span>
                                </div>
                                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">100M ZCN</p>
                            </div>
                            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl px-4 sm:px-6 py-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <Sparkles className="w-4 h-4 text-primary" />
                                    <span className="text-sm text-muted-foreground">Initial Price</span>
                                </div>
                                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">$0.30</p>
                            </div>
                        </div>

                        {/* Smart Contract Address */}
                        <div ref={contractRef} className="bg-secondary/30 backdrop-blur-sm border border-primary/20 rounded-xl px-4 py-3 inline-flex items-center gap-3 mb-10">
                            <span className="text-xs sm:text-sm text-muted-foreground">Smart Contract Address</span>
                            <code className="text-xs sm:text-sm font-mono text-primary bg-background/50 px-3 py-1 rounded-md">
                                Coming Soon
                            </code>
                        </div>

                        {/* CTA Buttons */}
                        <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <Button
                                size="lg"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 h-auto group"
                                asChild
                            >
                                <a href="https://pancakeswap.finance/" target="_blank" rel="noopener noreferrer">
                                    Purchase from PancakeSwap
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-base px-8 py-6 h-auto border-primary/30 hover:bg-primary/10"
                                asChild
                            >
                                <a href="https://zebcoin.ai/assets/img/Zebcoin%20-%20Whitepaper.pdf" target="_blank" rel="noopener noreferrer">
                                    <FileText className="mr-2 w-5 h-5" />
                                    Read White Paper
                                </a>
                            </Button>
                        </div>

                        {/* Token Info */}
                        <div ref={infoRef} className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                                Symbol: ZCN
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                                Type: BEP20
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                                Network: BSC
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

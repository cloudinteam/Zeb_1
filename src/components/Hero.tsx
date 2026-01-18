import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, FileText, Sparkles, Zap, Copy, Check, ExternalLink, TrendingUp } from 'lucide-react';

const CONTRACT_ADDRESS = '0x32Aa387310D7410Dbe3FE63b18aeD42065E520a0';
const POOCOIN_URL = 'https://poocoin.app/tokens/0x32aa387310d7410dbe3fe63b18aed42065e520a0';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CoinScene } from '@/components/three/CoinScene';
import { ParticleNetwork } from '@/components/three/ParticleNetwork';
import { FireworksBackground } from '@/components/ui/fireworks-background';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const poocoinRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const contractRef = useRef<HTMLDivElement>(null);

    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(CONTRACT_ADDRESS);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial state - hide all elements
            gsap.set([
                badgeRef.current,
                subtitleRef.current,
                statsRef.current,
                poocoinRef.current,
                ctaRef.current,
                infoRef.current,
                contractRef.current
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

                // Poocoin link animation
                tl.to(poocoinRef.current, {
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

                // Contract section
                tl.to(contractRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out'
                }, '-=0.3');
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
            {/* Fireworks Background */}
            <FireworksBackground
                population={6}
                fireworkSpeed={{ min: 3, max: 6 }}
                particleSpeed={{ min: 2, max: 5 }}
                className="z-0 opacity-70"
            />

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
                    {/* 3D Coin with Logo - Left side on desktop, top on mobile */}
                    <div className="order-1 lg:order-1 flex flex-col items-center justify-center gap-6">
                        {/* Zeb Logo above 3D coin */}
                        <div className="flex items-center gap-4 mb-4">
                            <div className="relative">
                                {/* Glow effect behind logo */}
                                <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl" />
                                {/* Logo */}
                                <img
                                    src="/zebcoin-logo.png"
                                    alt="ZEBCOIN Logo"
                                    className="w-20 h-20 lg:w-24 lg:h-24 object-contain drop-shadow-2xl relative z-10"
                                />
                            </div>
                            <div className="text-left">
                                <h2 className="text-3xl lg:text-4xl font-bold">
                                    <span className="text-primary">ZEB</span>
                                    <span className="text-foreground">COIN</span>
                                </h2>
                                <p className="text-sm text-muted-foreground">AI-Powered Crypto</p>
                            </div>
                        </div>
                        {/* 3D Coin Scene */}
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
                                IDO Launched
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
                                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">10M ZCN</p>
                            </div>
                            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl px-4 sm:px-6 py-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <Sparkles className="w-4 h-4 text-primary" />
                                    <span className="text-sm text-muted-foreground">Initial Price</span>
                                </div>
                                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">$0.30</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
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
                                <a href="/Zebcoin_Whitepaper.pdf" target="_blank" rel="noopener noreferrer">
                                    <FileText className="mr-2 w-5 h-5" />
                                    Read White Paper
                                </a>
                            </Button>
                        </div>

                        {/* Chart Links */}
                        <div ref={poocoinRef} className="max-w-2xl mx-auto lg:mx-0">
                            <div className="flex flex-wrap gap-4">
                                {/* Poocoin Link */}
                                <a
                                    href={POOCOIN_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-green-600/20 via-emerald-500/20 to-green-600/20 border border-green-500/40 rounded-2xl hover:border-green-400/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                                >
                                    {/* Animated glow */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500" />

                                    {/* Icon */}
                                    <div className="relative flex items-center justify-center w-10 h-10 bg-green-500/20 rounded-xl border border-green-500/30">
                                        <TrendingUp className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative flex flex-col">
                                        <span className="text-base font-bold text-green-400">Poocoin</span>
                                        <span className="text-xs text-muted-foreground">Live Chart</span>
                                    </div>

                                    {/* Arrow */}
                                    <ExternalLink className="relative w-4 h-4 text-green-400 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>

                                {/* DexScreener Link */}
                                <a
                                    href="https://dexscreener.com/bsc/0x664827bf7f5b366f7c2755bc13ca7612baf956f8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-cyan-600/20 via-blue-500/20 to-cyan-600/20 border border-cyan-500/40 rounded-2xl hover:border-cyan-400/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                                >
                                    {/* Animated glow */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-400 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500" />

                                    {/* Icon */}
                                    <div className="relative flex items-center justify-center w-10 h-10 bg-cyan-500/20 rounded-xl border border-cyan-500/30">
                                        <TrendingUp className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative flex flex-col">
                                        <span className="text-base font-bold text-cyan-400">DexScreener</span>
                                        <span className="text-xs text-muted-foreground">Live Chart</span>
                                    </div>

                                    {/* Arrow */}
                                    <ExternalLink className="relative w-4 h-4 text-cyan-400 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </div>
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

                        {/* Smart Contract Address */}
                        <div ref={contractRef} className="mt-8 w-full max-w-xl mx-auto lg:mx-0">
                            <div className="relative group">
                                {/* Animated glowing border */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-primary to-green-500 rounded-2xl opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-500 animate-contract-border bg-[length:200%_200%]" />

                                {/* Main container */}
                                <div className="relative bg-card/95 backdrop-blur-xl border border-primary/30 rounded-2xl p-4 sm:p-5 overflow-hidden animate-contract-glow">
                                    {/* Scanning line animation */}
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                        <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-green-500/20 to-transparent animate-scan" />
                                    </div>

                                    {/* Label */}
                                    <div className="relative flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            {/* Double dot animation */}
                                            <div className="relative">
                                                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping absolute opacity-75" />
                                                <div className="w-2.5 h-2.5 bg-green-500 rounded-full relative" />
                                            </div>
                                            <span className="text-sm font-semibold text-primary">Smart Contract</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-[10px] text-green-500 font-medium bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/30 flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                                Verified
                                            </span>
                                            <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-0.5 rounded-full">BSC</span>
                                        </div>
                                    </div>

                                    {/* Address section */}
                                    <div className="relative flex items-center gap-2">
                                        <div className="flex-1 relative bg-background/80 border border-primary/20 rounded-xl px-3 sm:px-4 py-2.5 overflow-hidden group/address hover:border-primary/40 transition-colors">
                                            {/* Shimmer on hover */}
                                            <div className="absolute inset-0 -translate-x-full group-hover/address:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                            <code className="relative text-xs sm:text-sm font-mono text-foreground block truncate tracking-wider">
                                                {CONTRACT_ADDRESS}
                                            </code>
                                        </div>

                                        {/* Copy button */}
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={copyToClipboard}
                                            className={`shrink-0 h-10 w-10 rounded-xl border-2 transition-all duration-300 ${copied
                                                ? 'bg-green-500/20 border-green-500 text-green-500 scale-110 shadow-[0_0_20px_rgba(34,197,94,0.4)]'
                                                : 'border-primary/40 hover:border-primary hover:bg-primary/20 hover:scale-105'
                                                }`}
                                            aria-label="Copy contract address"
                                        >
                                            {copied ? (
                                                <Check className="h-5 w-5 animate-in zoom-in-50 spin-in-180 duration-300" />
                                            ) : (
                                                <Copy className="h-5 w-5" />
                                            )}
                                        </Button>

                                        {/* BscScan link */}
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="shrink-0 h-10 w-10 rounded-xl border-2 border-primary/40 hover:border-primary hover:bg-primary/20 hover:scale-105 transition-all duration-300"
                                            asChild
                                        >
                                            <a
                                                href={`https://bscscan.com/address/${CONTRACT_ADDRESS}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="View on BscScan"
                                            >
                                                <ExternalLink className="h-5 w-5" />
                                            </a>
                                        </Button>
                                    </div>

                                    {/* Copied feedback */}
                                    {copied && (
                                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 animate-in fade-in-0 slide-in-from-top-4 zoom-in-95 duration-300">
                                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                                                <Check className="h-4 w-4" />
                                                Copied to clipboard!
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

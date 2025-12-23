import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { HelpCircle, MessageCircleQuestion } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqData = [
    {
        question: 'What is IDO Launchpad?',
        answer: 'IDO Launchpad (Initial DEX Offering Launchpad) is a platform that facilitates the launch of new cryptocurrency or token projects via decentralized exchanges (DEXs). It is a fundraising mechanism similar to Initial Coin Offerings (ICOs) or Initial Exchange Offerings (IEOs), but with the key difference that IDOs are hosted on decentralized exchanges rather than centralized ones.',
        icon: '🚀',
    },
    {
        question: 'Why are ZEB Coins Popular?',
        answer: 'ZEB Coins are popular due to their community-driven nature and innovative approach to combining AI with blockchain technology. The project gains traction through its comprehensive ecosystem that includes decentralized identity verification, AI-powered DeFi solutions, and environmental sustainability initiatives.',
        icon: '⭐',
    },
    {
        question: 'Are ZEB Coins a Good Investment?',
        answer: 'ZEB Coin can be profitable but like all cryptocurrency investments, they carry inherent risks. The project is backed by a solid roadmap with clear milestones including AI-powered identity verification, DeFi lending, and a full blockchain ecosystem. Always do thorough research and understand the risks before investing. Never invest more than you can afford to lose.',
        icon: '💰',
    },
    {
        question: 'How Do I Buy ZEB Coins?',
        answer: 'You can buy ZEB coins on PancakeSwap, a popular decentralized exchange on the Binance Smart Chain (BSC). Simply connect your wallet (like MetaMask or Trust Wallet) to PancakeSwap, ensure you have BNB for the swap, and exchange for ZCN tokens. Make sure to use the official contract address and follow proper security measures.',
        icon: '🛒',
    },
    {
        question: 'Can ZEB Coins be Used for Transactions?',
        answer: 'Yes, ZEB Coins (ZCN) are designed for multiple use cases within the ZEBCOIN ecosystem. They can be used for transactions on the upcoming ZEB Chain, accessing DeFi lending services, participating in the NFT marketplace, governance voting, and more. As the ecosystem develops through 2025-2028, more utility features will be added.',
        icon: '💳',
    },
];

export function FAQ() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const accordionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(
                headerRef.current,
                { opacity: 0, y: 40 },
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

            // Accordion items animation
            const items = accordionRef.current?.querySelectorAll('.faq-item');
            if (items) {
                gsap.fromTo(
                    items,
                    { opacity: 0, x: -30 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: accordionRef.current,
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
        <section ref={sectionRef} id="faq" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-secondary/20 via-background to-background">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
                {/* Decorative grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30 bg-primary/10">
                        <HelpCircle className="w-4 h-4 mr-2" />
                        FAQ
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-primary">Frequently Asked</span>
                        <br />
                        <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to know about ZEBCOIN and the ZCN token
                    </p>
                </div>

                {/* Accordion */}
                <div ref={accordionRef} className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqData.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="faq-item group bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-md border border-primary/10 rounded-2xl px-6 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 data-[state=open]:border-primary/40 data-[state=open]:bg-gradient-to-br data-[state=open]:from-primary/10 data-[state=open]:to-transparent"
                            >
                                <AccordionTrigger className="text-left text-base lg:text-lg hover:no-underline py-6 gap-4">
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                                            {faq.icon}
                                        </span>
                                        <span className="group-hover:text-primary transition-colors font-medium">
                                            {faq.question}
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6 pl-12 leading-relaxed">
                                    <div className="bg-background/50 rounded-xl p-4 border border-primary/10">
                                        {faq.answer}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {/* Additional help card */}
                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-orange-500/10 border border-primary/20 rounded-2xl px-6 py-4">
                            <MessageCircleQuestion className="w-6 h-6 text-primary" />
                            <span className="text-muted-foreground">
                                Still have questions?
                                <a href="mailto:contact@zebcoin.ai" className="text-primary font-medium ml-1 hover:underline">
                                    Contact us
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

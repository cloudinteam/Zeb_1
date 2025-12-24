import { useState } from 'react';
import { Coins, Mail, Twitter, Send, ExternalLink, ArrowUp, Heart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

const footerLinks = {
    product: [
        { name: 'Features', href: '#features' },
        { name: 'Tokenomics', href: '#token' },
        { name: 'Roadmap', href: '#roadmap' },
        { name: 'FAQ', href: '#faq' },
    ],
    resources: [
        { name: 'White Paper', href: 'https://zebcoin.ai/assets/img/Zebcoin%20-%20Whitepaper.pdf', external: true },
        { name: 'PancakeSwap', href: 'https://pancakeswap.finance/', external: true },
        { name: 'BscScan', href: 'https://bscscan.com/', external: true },
    ],
    social: [
        { name: 'Twitter', icon: Twitter, href: '#', color: '#1DA1F2' },
        { name: 'Telegram', icon: Send, href: '#', color: '#0088cc' },
    ],
};

export function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-gradient-to-b from-background to-secondary/30 border-t border-primary/10">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
            </div>

            {/* Newsletter Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-gradient-to-r from-primary/10 via-orange-500/10 to-primary/10 border border-primary/20 rounded-3xl p-8 lg:p-12 mb-12 relative overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                    <div className="relative z-10 max-w-2xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
                            <Mail className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                            Stay Updated with <span className="text-primary">ZEBCOIN</span>
                        </h3>
                        <p className="text-muted-foreground mb-2">
                            Get the latest news, updates, and exclusive offers delivered to your inbox.
                        </p>
                        <p className="text-sm text-primary font-medium mb-6 flex items-center justify-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Subscribe now for exclusive airdrop eligibility!
                        </p>
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-background/50 border-primary/20 focus:border-primary"
                                required
                            />
                            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap">
                                {subscribed ? '✓ Subscribed!' : 'Subscribe'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <a href="#home" className="flex items-center gap-3 mb-6 group">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-shadow">
                                <Coins className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold">
                                <span className="text-primary">ZEB</span>
                                <span className="text-foreground">COIN</span>
                            </span>
                        </a>
                        <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                            Be Live In Crypto With AI. Pioneering decentralized identity verification,
                            AI-powered lending, environmental sustainability, and transparency in supply chains.
                        </p>
                        <div className="flex items-center gap-3">
                            {footerLinks.social.map((social, index) => (
                                <Button
                                    key={index}
                                    variant="outline"
                                    size="icon"
                                    className="rounded-xl border-primary/20 hover:border-primary hover:bg-primary/10 transition-all group"
                                    asChild
                                >
                                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                        <social.icon className="h-5 w-5 group-hover:text-primary transition-colors" />
                                    </a>
                                </Button>
                            ))}
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-xl border-primary/20 hover:border-primary hover:bg-primary/10 transition-all group"
                                asChild
                            >
                                <a href="https://zebcoin.ai" target="_blank" rel="noopener noreferrer" aria-label="Website">
                                    <Globe className="h-5 w-5 group-hover:text-primary transition-colors" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className="text-center md:text-left">
                        <h3 className="font-bold mb-6 text-lg">Product</h3>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div className="text-center md:text-left">
                        <h3 className="font-bold mb-6 text-lg">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        target={link.external ? '_blank' : undefined}
                                        rel={link.external ? 'noopener noreferrer' : undefined}
                                        className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center justify-center md:justify-start gap-1"
                                    >
                                        {link.name}
                                        {link.external && <ExternalLink className="h-3 w-3 opacity-50" />}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <Separator className="bg-primary/10" />

            {/* Bottom Bar */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                        © 2025 ZEBCOIN. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for the crypto community.
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="mailto:contact@zebcoin.ai"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                        >
                            <Mail className="h-4 w-4" />
                            contact@zebcoin.ai
                        </a>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={scrollToTop}
                            className="rounded-xl border-primary/20 hover:border-primary hover:bg-primary/10"
                            aria-label="Back to top"
                        >
                            <ArrowUp className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

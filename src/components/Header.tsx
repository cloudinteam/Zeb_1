import { useState } from 'react';
import { Menu, X, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ThemeToggle';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Token', href: '#token' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'FAQ', href: '#faq' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 blur-xl group-hover:blur-2xl transition-all duration-300" />
                            <Coins className="h-8 w-8 lg:h-10 lg:w-10 text-primary relative z-10" />
                        </div>
                        <span className="text-xl lg:text-2xl font-bold tracking-tight">
                            <span className="text-primary">ZEB</span>
                            <span className="text-muted-foreground">COIN</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary/50"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle />
                        <Button variant="outline" size="sm" asChild>
                            <a href="https://zebcoin.ai/assets/img/Zebcoin%20-%20Whitepaper.pdf" target="_blank" rel="noopener noreferrer">
                                White Paper
                            </a>
                        </Button>
                        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                            <a href="https://pancakeswap.finance/" target="_blank" rel="noopener noreferrer">
                                Buy ZCN
                            </a>
                        </Button>
                    </div>

                    {/* Mobile Actions - Theme Toggle & Menu */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background/95 backdrop-blur-xl">
                                <div className="flex flex-col gap-6 mt-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Coins className="h-8 w-8 text-primary" />
                                            <span className="text-xl font-bold">
                                                <span className="text-primary">ZEB</span>
                                                <span className="text-muted-foreground">COIN</span>
                                            </span>
                                        </div>
                                        <ThemeToggle />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {navLinks.map((link) => (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50"
                                            >
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="flex flex-col gap-3 pt-4 border-t border-border">
                                        <Button variant="outline" className="w-full" asChild>
                                            <a href="https://zebcoin.ai/assets/img/Zebcoin%20-%20Whitepaper.pdf" target="_blank" rel="noopener noreferrer">
                                                White Paper
                                            </a>
                                        </Button>
                                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                                            <a href="https://pancakeswap.finance/" target="_blank" rel="noopener noreferrer">
                                                Buy ZCN
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </div>
        </header>
    );
}

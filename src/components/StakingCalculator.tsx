import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, TrendingUp, Clock, Coins, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stakingTiers = [
    { days: 30, apy: 12, label: '30 Days' },
    { days: 90, apy: 18, label: '90 Days' },
    { days: 180, apy: 25, label: '180 Days' },
    { days: 365, apy: 35, label: '365 Days' },
];

export function StakingCalculator() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const calculatorRef = useRef<HTMLDivElement>(null);

    const [amount, setAmount] = useState<string>('1000');
    const [selectedTier, setSelectedTier] = useState(1); // 90 days default
    const [showResults, setShowResults] = useState(false);

    const calculateRewards = () => {
        const principal = parseFloat(amount) || 0;
        const tier = stakingTiers[selectedTier];
        const dailyRate = tier.apy / 100 / 365;
        const rewards = principal * dailyRate * tier.days;
        const total = principal + rewards;
        return { rewards, total, apy: tier.apy, days: tier.days };
    };

    const results = calculateRewards();

    useEffect(() => {
        const ctx = gsap.context(() => {
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

            gsap.fromTo(
                calculatorRef.current,
                { opacity: 0, y: 60, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: calculatorRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleCalculate = () => {
        setShowResults(true);
        // Animate the results
        gsap.fromTo(
            '.result-value',
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' }
        );
    };

    return (
        <section ref={sectionRef} id="staking" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30 bg-primary/10">
                        <Calculator className="w-4 h-4 mr-2" />
                        Staking Calculator
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                            Estimate Your
                        </span>{' '}
                        <span className="text-primary">Rewards</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Calculate potential staking rewards with our interactive tool.
                        Higher lock periods earn higher APY.
                    </p>
                </div>

                {/* Calculator Card */}
                <div ref={calculatorRef} className="max-w-4xl mx-auto">
                    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-xl blur-xl opacity-50" />

                        <CardHeader className="relative z-10 border-b border-primary/10">
                            <CardTitle className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-primary" />
                                ZCN Staking Simulator
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="relative z-10 p-6 lg:p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Input Section */}
                                <div className="space-y-6">
                                    {/* Amount Input */}
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Amount to Stake (ZCN)
                                        </label>
                                        <div className="relative">
                                            <Coins className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                                            <input
                                                type="number"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                className="w-full bg-background/50 border border-primary/20 rounded-xl pl-12 pr-4 py-4 text-lg font-bold focus:outline-none focus:border-primary transition-colors"
                                                placeholder="Enter amount"
                                                min="0"
                                            />
                                        </div>
                                    </div>

                                    {/* Staking Period Selection */}
                                    <div>
                                        <label className="block text-sm font-medium mb-3">
                                            <Clock className="inline w-4 h-4 mr-1" />
                                            Lock Period
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {stakingTiers.map((tier, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setSelectedTier(index)}
                                                    className={`p-4 rounded-xl border transition-all ${selectedTier === index
                                                            ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20'
                                                            : 'border-primary/20 bg-background/50 hover:border-primary/40'
                                                        }`}
                                                >
                                                    <div className="font-bold">{tier.label}</div>
                                                    <div className="text-primary text-lg font-bold">{tier.apy}% APY</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Calculate Button */}
                                    <Button
                                        onClick={handleCalculate}
                                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
                                    >
                                        <TrendingUp className="w-5 h-5 mr-2" />
                                        Calculate Rewards
                                    </Button>
                                </div>

                                {/* Results Section */}
                                <div className="bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-2xl p-6 border border-primary/20">
                                    <h3 className="text-lg font-bold mb-6 text-center">
                                        Estimated Returns
                                    </h3>

                                    {showResults ? (
                                        <div className="space-y-4">
                                            <div className="result-value bg-background/50 rounded-xl p-4 border border-primary/10">
                                                <div className="text-sm text-muted-foreground">Staking Period</div>
                                                <div className="text-2xl font-bold text-primary">{results.days} Days</div>
                                            </div>

                                            <div className="result-value bg-background/50 rounded-xl p-4 border border-primary/10">
                                                <div className="text-sm text-muted-foreground">APY Rate</div>
                                                <div className="text-2xl font-bold text-green-500">{results.apy}%</div>
                                            </div>

                                            <div className="result-value bg-background/50 rounded-xl p-4 border border-primary/10">
                                                <div className="text-sm text-muted-foreground">Estimated Rewards</div>
                                                <div className="text-2xl font-bold text-primary">
                                                    +{results.rewards.toLocaleString(undefined, { maximumFractionDigits: 2 })} ZCN
                                                </div>
                                            </div>

                                            <div className="result-value bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-xl p-4 border border-primary/30">
                                                <div className="text-sm text-muted-foreground">Total After Staking</div>
                                                <div className="text-3xl font-bold">
                                                    {results.total.toLocaleString(undefined, { maximumFractionDigits: 2 })} ZCN
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center py-12 text-muted-foreground">
                                            <Calculator className="w-16 h-16 mx-auto mb-4 opacity-30" />
                                            <p>Enter an amount and click calculate to see your potential rewards</p>
                                        </div>
                                    )}

                                    {showResults && (
                                        <p className="text-xs text-muted-foreground mt-4 text-center">
                                            *Estimates only. Actual rewards may vary based on network conditions.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

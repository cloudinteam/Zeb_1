import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coins, ChartPie } from 'lucide-react';

const tokenData = [
    { name: 'Team & Investors', value: 20, color: '#FFA500', description: 'Vested over 24 months' },
    { name: 'IDO Launchpad', value: 80, color: '#FF8C00', description: 'Initial DEX offering' },
];

const tokenInfo = [
    { label: 'Symbol', value: 'ZCN', icon: '🪙' },
    { label: 'Type', value: 'BEP20', icon: '🔗' },
    { label: 'Initial Value', value: '$0.3', icon: '💰' },
    { label: 'Total Supply', value: '10,000,000', icon: '📊' },
];

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: { payload: typeof tokenData[0] }[] }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                    <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: data.color }}
                    />
                    <span className="font-semibold">{data.name}</span>
                </div>
                <p className="text-2xl font-bold text-primary">{data.value}%</p>
                <p className="text-sm text-muted-foreground">{data.description}</p>
            </div>
        );
    }
    return null;
};

export function TokenDistribution() {
    const totalValue = tokenData.reduce((sum, item) => sum + item.value, 0);

    return (
        <section id="token" className="py-20 lg:py-32 relative overflow-hidden bg-secondary/20">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30 bg-primary/10">
                        <ChartPie className="w-4 h-4 mr-2" />
                        Tokenomics
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-primary">ZEBCOIN (ZCN)</span>
                        <br />
                        <span className="text-muted-foreground">Token Distribution</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Crypto With AI - A transparent and strategic allocation for sustainable growth
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Chart */}
                    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden">
                        <CardHeader className="pb-0">
                            <CardTitle className="text-center text-lg text-muted-foreground">
                                Total Supply Distribution
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 lg:p-6">
                            <div className="relative w-full">
                                <ResponsiveContainer width="100%" aspect={1}>
                                    <PieChart>
                                        <Pie
                                            data={tokenData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius="45%"
                                            outerRadius="75%"
                                            paddingAngle={3}
                                            dataKey="value"
                                            stroke="none"
                                            labelLine={false}
                                            label={false}
                                        >
                                            {tokenData.map((entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={entry.color}
                                                    style={{
                                                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                                                        cursor: 'pointer'
                                                    }}
                                                />
                                            ))}
                                        </Pie>
                                        <Tooltip content={<CustomTooltip />} />
                                    </PieChart>
                                </ResponsiveContainer>

                                {/* Center label */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="text-center">
                                        <p className="text-3xl lg:text-4xl font-bold text-primary">{totalValue}%</p>
                                        <p className="text-sm text-muted-foreground">Total</p>
                                    </div>
                                </div>
                            </div>

                            {/* Legend */}
                            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mt-6">
                                {tokenData.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div
                                            className="w-3 h-3 rounded-full flex-shrink-0"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        <span className="text-xs text-muted-foreground truncate">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Token Info */}
                    <div className="space-y-6">
                        {/* Token Details Card */}
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Coins className="w-5 h-5 text-primary" />
                                    Token Details
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {tokenInfo.map((item, index) => (
                                        <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-4 transition-transform hover:scale-105">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xl">{item.icon}</span>
                                                <p className="text-sm text-muted-foreground">{item.label}</p>
                                            </div>
                                            <p className="text-xl font-bold">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Distribution Breakdown */}
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                            <CardHeader>
                                <CardTitle>Allocation Breakdown</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {tokenData.map((item, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-4 h-4 rounded-full"
                                                    style={{ backgroundColor: item.color }}
                                                />
                                                <span className="text-sm font-medium">{item.name}</span>
                                            </div>
                                            <Badge
                                                variant="secondary"
                                                className="font-mono font-bold"
                                                style={{
                                                    backgroundColor: `${item.color}20`,
                                                    color: item.color,
                                                    borderColor: item.color
                                                }}
                                            >
                                                {item.value}%
                                            </Badge>
                                        </div>
                                        {/* Progress bar */}
                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-500"
                                                style={{
                                                    width: `${item.value}%`,
                                                    backgroundColor: item.color
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

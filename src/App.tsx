import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CommunityStats } from '@/components/CommunityStats';
import { Features } from '@/components/Features';
import { WhyZebcoin } from '@/components/WhyZebcoin';
import { StakingCalculator } from '@/components/StakingCalculator';
import { TokenDistribution } from '@/components/TokenDistribution';
import { Roadmap } from '@/components/Roadmap';
// import { Team } from '@/components/Team';
import { Partners } from '@/components/Partners';
import { SecurityBadges } from '@/components/SecurityBadges';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <CommunityStats />
        <Features />
        <WhyZebcoin />
        <StakingCalculator />
        <TokenDistribution />
        <Roadmap />
        {/* <Team /> */}
        <Partners />
        <SecurityBadges />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;

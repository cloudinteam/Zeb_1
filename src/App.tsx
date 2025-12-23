import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { TokenDistribution } from '@/components/TokenDistribution';
import { Roadmap } from '@/components/Roadmap';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <TokenDistribution />
        <Roadmap />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;

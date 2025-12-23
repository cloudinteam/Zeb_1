# ZEBCOIN Website

A premium cryptocurrency landing page built with React, TypeScript, Vite, and shadcn/ui. Features stunning 3D visuals, GSAP animations, and a beautiful gold theme.

![ZEBCOIN](https://zebcoin.ai/og-image.png)

## ✨ Features

- **3D Visuals**: Three.js powered rotating golden coin and particle network
- **GSAP Animations**: Smooth scroll-triggered animations throughout
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Responsive Design**: Optimized for all screen sizes
- **SEO Optimized**: Comprehensive meta tags, structured data, sitemap

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Animations**: GSAP + ScrollTrigger
- **Charts**: Recharts

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/zebcoin/website.git

# Navigate to project
cd ZebCoin_Shadcn

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── three/           # 3D components
│   │   │   ├── CoinScene.tsx
│   │   │   └── ParticleNetwork.tsx
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── TokenDistribution.tsx
│   │   ├── Roadmap.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ThemeToggle.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── vercel.json
└── package.json
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

Or use the CLI:

```bash
npm i -g vercel
vercel --prod
```

### Netlify

```bash
npm run build
# Deploy the 'dist' folder
```

### Manual Deployment

```bash
npm run build
# Upload contents of 'dist' folder to your hosting
```

## ⚙️ Environment Variables

No environment variables required for basic deployment.

## 📊 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1

## 📄 License

© 2025 ZEBCOIN. All rights reserved.

## 🔗 Links

- **Website**: [zebcoin.ai](https://zebcoin.ai)
- **White Paper**: [Download PDF](https://zebcoin.ai/assets/img/Zebcoin%20-%20Whitepaper.pdf)
- **PancakeSwap**: [Buy ZCN](https://pancakeswap.finance/)
- **Contact**: contact@zebcoin.ai

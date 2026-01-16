'use client';

import React, { useEffect, useRef, useCallback } from 'react';

interface FireworksBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    population?: number;
    colors?: string | string[];
    fireworkSpeed?: number | { min: number; max: number };
    fireworkSize?: number | { min: number; max: number };
    particleSpeed?: number | { min: number; max: number };
    particleSize?: number | { min: number; max: number };
    canvasProps?: React.ComponentProps<'canvas'>;
}

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    alpha: number;
    color: string;
    size: number;
    decay: number;
}

interface Firework {
    x: number;
    y: number;
    targetY: number;
    speed: number;
    color: string;
    size: number;
    exploded: boolean;
    particles: Particle[];
}

// Random colors for fireworks
const defaultColors = [
    '#FFD700', // Gold
    '#FF6B6B', // Coral Red
    '#4ECDC4', // Teal
    '#45B7D1', // Sky Blue
    '#96E6A1', // Mint Green
    '#DDA0DD', // Plum
    '#F7DC6F', // Yellow
    '#BB8FCE', // Purple
    '#85C1E9', // Light Blue
    '#F8B500', // Amber
    '#FF69B4', // Hot Pink
    '#00FF7F', // Spring Green
    '#FF4500', // Orange Red
    '#7B68EE', // Medium Slate Blue
    '#00CED1', // Dark Turquoise
];

function getRandomValue(value: number | { min: number; max: number }): number {
    if (typeof value === 'number') return value;
    return Math.random() * (value.max - value.min) + value.min;
}

function getRandomColor(colors: string | string[]): string {
    if (typeof colors === 'string') return colors;
    return colors[Math.floor(Math.random() * colors.length)];
}

export function FireworksBackground({
    population = 3,
    colors = defaultColors,
    fireworkSpeed = { min: 4, max: 8 },
    fireworkSize = { min: 2, max: 4 },
    particleSpeed = { min: 2, max: 6 },
    particleSize = { min: 1, max: 3 },
    canvasProps,
    className,
    ...props
}: FireworksBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | null>(null);
    const fireworksRef = useRef<Firework[]>([]);
    const lastSpawnRef = useRef<number>(0);

    const createFirework = useCallback((canvasWidth: number, canvasHeight: number): Firework => {
        const fireworkColor = getRandomColor(colors);
        return {
            x: Math.random() * canvasWidth,
            y: canvasHeight,
            targetY: Math.random() * (canvasHeight * 0.4) + canvasHeight * 0.1,
            speed: getRandomValue(fireworkSpeed),
            color: fireworkColor,
            size: getRandomValue(fireworkSize),
            exploded: false,
            particles: [],
        };
    }, [colors, fireworkSpeed, fireworkSize]);

    const createParticles = useCallback((x: number, y: number, particleColor: string): Particle[] => {
        const particles: Particle[] = [];
        const particleCount = Math.floor(Math.random() * 30) + 40;

        for (let i = 0; i < particleCount; i++) {
            const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5;
            const speed = getRandomValue(particleSpeed) * (0.5 + Math.random() * 0.5);

            particles.push({
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                alpha: 1,
                color: particleColor,
                size: getRandomValue(particleSize),
                decay: 0.015 + Math.random() * 0.01,
            });
        }

        return particles;
    }, [particleSpeed, particleSize]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const animate = (timestamp: number) => {
            if (!ctx || !canvas) return;

            // Clear canvas completely (transparent background)
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Spawn new fireworks
            const spawnInterval = 1000 / population;
            if (timestamp - lastSpawnRef.current > spawnInterval) {
                if (fireworksRef.current.filter(f => !f.exploded).length < population) {
                    fireworksRef.current.push(createFirework(canvas.width, canvas.height));
                }
                lastSpawnRef.current = timestamp;
            }

            // Update and draw fireworks
            fireworksRef.current = fireworksRef.current.filter(firework => {
                if (!firework.exploded) {
                    // Move firework up
                    firework.y -= firework.speed;

                    // Draw firework trail
                    ctx.beginPath();
                    ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
                    ctx.fillStyle = firework.color;
                    ctx.fill();

                    // Draw trail glow
                    const gradient = ctx.createRadialGradient(
                        firework.x, firework.y, 0,
                        firework.x, firework.y, firework.size * 3
                    );
                    gradient.addColorStop(0, firework.color);
                    gradient.addColorStop(1, 'transparent');
                    ctx.beginPath();
                    ctx.arc(firework.x, firework.y, firework.size * 3, 0, Math.PI * 2);
                    ctx.fillStyle = gradient;
                    ctx.fill();

                    // Check if reached target
                    if (firework.y <= firework.targetY) {
                        firework.exploded = true;
                        firework.particles = createParticles(firework.x, firework.y, firework.color);
                    }
                    return true;
                } else {
                    // Update and draw particles
                    let hasVisibleParticles = false;

                    firework.particles.forEach(particle => {
                        if (particle.alpha > 0) {
                            hasVisibleParticles = true;

                            // Apply gravity
                            particle.vy += 0.05;
                            particle.x += particle.vx;
                            particle.y += particle.vy;
                            particle.alpha -= particle.decay;

                            // Draw particle
                            ctx.beginPath();
                            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                            ctx.fillStyle = particle.color;
                            ctx.globalAlpha = Math.max(0, particle.alpha);
                            ctx.fill();

                            // Draw glow
                            const glow = ctx.createRadialGradient(
                                particle.x, particle.y, 0,
                                particle.x, particle.y, particle.size * 2
                            );
                            glow.addColorStop(0, particle.color);
                            glow.addColorStop(1, 'transparent');
                            ctx.beginPath();
                            ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
                            ctx.fillStyle = glow;
                            ctx.globalAlpha = Math.max(0, particle.alpha * 0.5);
                            ctx.fill();

                            ctx.globalAlpha = 1;
                        }
                    });

                    return hasVisibleParticles;
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [population, createFirework, createParticles]);

    return (
        <div
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className || ''}`}
            {...props}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                {...canvasProps}
            />
        </div>
    );
}

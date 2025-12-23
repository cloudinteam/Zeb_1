import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/components/ThemeProvider';

function GoldenCoin() {
    const meshRef = useRef<THREE.Group>(null);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    // Vibrant gold colors
    const goldColor = isDark ? '#FFD700' : '#DAA520';
    const highlightColor = isDark ? '#FFF8DC' : '#FFE4B5';

    useFrame((state) => {
        if (meshRef.current) {
            // Smooth rotation on Y axis
            meshRef.current.rotation.y += 0.008;
            // Gentle tilt animation
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
            // Subtle floating
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
        }
    });

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.1}
            floatIntensity={0.2}
        >
            <group ref={meshRef}>
                {/* Main coin body */}
                <mesh castShadow receiveShadow>
                    <cylinderGeometry args={[1.2, 1.2, 0.12, 64]} />
                    <meshStandardMaterial
                        color={goldColor}
                        metalness={1}
                        roughness={0.15}
                        envMapIntensity={2}
                    />
                </mesh>

                {/* Outer rim - raised edge */}
                <mesh position={[0, 0, 0]}>
                    <torusGeometry args={[1.15, 0.08, 16, 64]} />
                    <meshStandardMaterial
                        color={highlightColor}
                        metalness={1}
                        roughness={0.1}
                        envMapIntensity={2.5}
                    />
                </mesh>

                {/* Inner decorative ring */}
                <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.065, 0]}>
                    <torusGeometry args={[0.85, 0.03, 8, 64]} />
                    <meshStandardMaterial
                        color={highlightColor}
                        metalness={1}
                        roughness={0.08}
                    />
                </mesh>

                {/* Center emblem - Z shape */}
                <mesh position={[0, 0.07, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[0.3, 0.5, 6]} />
                    <meshStandardMaterial
                        color={highlightColor}
                        metalness={1}
                        roughness={0.1}
                        side={THREE.DoubleSide}
                    />
                </mesh>

                {/* Glow sphere in center */}
                <mesh position={[0, 0.08, 0]}>
                    <sphereGeometry args={[0.15, 32, 32]} />
                    <meshStandardMaterial
                        color={goldColor}
                        metalness={0.5}
                        roughness={0.3}
                        emissive={goldColor}
                        emissiveIntensity={isDark ? 0.5 : 0.2}
                    />
                </mesh>
            </group>
        </Float>
    );
}

function OrbitingParticles() {
    const groupRef = useRef<THREE.Group>(null);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const particles = useMemo(() => {
        const positions: { pos: [number, number, number]; scale: number }[] = [];
        for (let i = 0; i < 24; i++) {
            const angle = (i / 24) * Math.PI * 2;
            const radius = 1.8 + Math.random() * 0.4;
            const height = (Math.random() - 0.5) * 1;
            positions.push({
                pos: [
                    Math.cos(angle) * radius,
                    height,
                    Math.sin(angle) * radius
                ],
                scale: 0.03 + Math.random() * 0.04
            });
        }
        return positions;
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
        }
    });

    return (
        <group ref={groupRef}>
            {particles.map((p, i) => (
                <mesh key={i} position={p.pos} scale={p.scale}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshStandardMaterial
                        color={isDark ? '#FFD700' : '#DAA520'}
                        metalness={0.8}
                        roughness={0.2}
                        emissive={isDark ? '#FFD700' : '#DAA520'}
                        emissiveIntensity={isDark ? 0.8 : 0.3}
                    />
                </mesh>
            ))}
        </group>
    );
}

function Lights() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <>
            <ambientLight intensity={isDark ? 0.4 : 0.6} />
            <directionalLight
                position={[5, 5, 5]}
                intensity={isDark ? 2 : 1.5}
                color="#ffffff"
                castShadow
            />
            <directionalLight
                position={[-3, 3, -3]}
                intensity={isDark ? 1 : 0.8}
                color="#FFD700"
            />
            <pointLight
                position={[0, 2, 2]}
                intensity={isDark ? 1.5 : 1}
                color="#FFD700"
                distance={10}
            />
            <pointLight
                position={[0, -2, -2]}
                intensity={0.5}
                color="#FFA500"
                distance={8}
            />
        </>
    );
}

function Scene() {
    return (
        <Suspense fallback={null}>
            <Lights />
            <Environment preset="sunset" />
            <GoldenCoin />
            <OrbitingParticles />
        </Suspense>
    );
}

export function CoinScene() {
    return (
        <div className="w-full h-full min-h-[300px] lg:min-h-[400px]">
            <Canvas
                camera={{ position: [0, 1, 4], fov: 45 }}
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    alpha: true,
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.2
                }}
                shadows
            >
                <Scene />
            </Canvas>
        </div>
    );
}

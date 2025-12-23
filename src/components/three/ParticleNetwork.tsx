import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '@/components/ThemeProvider';

interface ParticleData {
    position: THREE.Vector3;
    velocity: THREE.Vector3;
}

function NetworkParticles({ count = 60 }: { count?: number }) {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const linesRef = useRef<THREE.LineSegments>(null);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    // Use proper 6-digit hex colors
    const particleColor = isDark ? '#FFD700' : '#DAA520';
    const lineColor = isDark ? '#FFD700' : '#B8860B';

    const particles = useMemo<ParticleData[]>(() => {
        const temp: ParticleData[] = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: new THREE.Vector3(
                    (Math.random() - 0.5) * 12,
                    (Math.random() - 0.5) * 8,
                    (Math.random() - 0.5) * 6
                ),
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.008,
                    (Math.random() - 0.5) * 0.008,
                    (Math.random() - 0.5) * 0.003
                )
            });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame(() => {
        if (!meshRef.current || !linesRef.current) return;

        const linePositions: number[] = [];

        // Update particle positions
        particles.forEach((particle, i) => {
            // Move particle
            particle.position.add(particle.velocity);

            // Bounce off boundaries
            if (Math.abs(particle.position.x) > 6) particle.velocity.x *= -1;
            if (Math.abs(particle.position.y) > 4) particle.velocity.y *= -1;
            if (Math.abs(particle.position.z) > 3) particle.velocity.z *= -1;

            // Update instance matrix
            dummy.position.copy(particle.position);
            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(i, dummy.matrix);

            // Find connections (nearby particles)
            particles.forEach((other, j) => {
                if (i >= j) return;
                const dist = particle.position.distanceTo(other.position);
                if (dist < 2) {
                    linePositions.push(
                        particle.position.x, particle.position.y, particle.position.z,
                        other.position.x, other.position.y, other.position.z
                    );
                }
            });
        });

        meshRef.current.instanceMatrix.needsUpdate = true;

        // Update line geometry
        const lineGeometry = linesRef.current.geometry as THREE.BufferGeometry;
        lineGeometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(linePositions, 3)
        );
    });

    return (
        <>
            <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
                <sphereGeometry args={[0.04, 12, 12]} />
                <meshBasicMaterial
                    color={particleColor}
                    transparent
                    opacity={isDark ? 0.9 : 0.7}
                />
            </instancedMesh>
            <lineSegments ref={linesRef}>
                <bufferGeometry />
                <lineBasicMaterial
                    color={lineColor}
                    transparent
                    opacity={isDark ? 0.25 : 0.15}
                />
            </lineSegments>
        </>
    );
}

function Scene() {
    return (
        <>
            <NetworkParticles count={50} />
        </>
    );
}

export function ParticleNetwork() {
    return (
        <div className="absolute inset-0 -z-5 opacity-70">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ antialias: false, alpha: true }}
            >
                <Scene />
            </Canvas>
        </div>
    );
}

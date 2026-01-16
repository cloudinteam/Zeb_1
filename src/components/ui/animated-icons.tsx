import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface AnimatedIconProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

// Bounce animation for icons
export function BounceIcon({ children, className = '', delay = 0 }: AnimatedIconProps) {
    return (
        <motion.div
            className={className}
            initial={{ y: 0 }}
            animate={{ y: [-2, 2, -2] }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

// Pulse animation for icons
export function PulseIcon({ children, className = '', delay = 0 }: AnimatedIconProps) {
    return (
        <motion.div
            className={className}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

// Spin animation for icons
export function SpinIcon({ children, className = '', delay = 0 }: AnimatedIconProps) {
    return (
        <motion.div
            className={className}
            animate={{ rotate: 360 }}
            transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

// Shake animation for icons
export function ShakeIcon({ children, className = '', delay = 0 }: AnimatedIconProps) {
    return (
        <motion.div
            className={className}
            animate={{ rotate: [-5, 5, -5, 5, 0] }}
            transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 2,
                ease: 'easeInOut',
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

// Float animation for icons
export function FloatIcon({ children, className = '', delay = 0 }: AnimatedIconProps) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [-4, 4, -4],
                x: [-2, 2, -2],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

// Glow animation for icons
export function GlowIcon({ children, className = '', delay = 0 }: AnimatedIconProps) {
    return (
        <motion.div
            className={className}
            animate={{
                filter: ['drop-shadow(0 0 0px currentColor)', 'drop-shadow(0 0 8px currentColor)', 'drop-shadow(0 0 0px currentColor)'],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

// Heartbeat animation for icons
export function HeartbeatIcon({ children, className = '', delay = 0 }: AnimatedIconProps) {
    return (
        <motion.div
            className={className}
            animate={{
                scale: [1, 1.2, 1, 1.2, 1],
            }}
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 1,
                ease: 'easeInOut',
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

// Swing animation for icons
export function SwingIcon({ children, className = '', delay = 0 }: AnimatedIconProps) {
    return (
        <motion.div
            className={className}
            style={{ transformOrigin: 'top center' }}
            animate={{
                rotate: [-10, 10, -10],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

// Zoom in/out animation for icons
export function ZoomIcon({ children, className = '', delay = 0 }: AnimatedIconProps) {
    return (
        <motion.div
            className={className}
            animate={{
                scale: [1, 0.9, 1.1, 1],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

// Flash animation for icons
export function FlashIcon({ children, className = '', delay = 0 }: AnimatedIconProps) {
    return (
        <motion.div
            className={className}
            animate={{
                opacity: [1, 0.3, 1],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

// Flip animation for icons
export function FlipIcon({ children, className = '', delay = 0 }: AnimatedIconProps) {
    return (
        <motion.div
            className={className}
            animate={{
                rotateY: [0, 180, 360],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

// Rubber band animation for icons
export function RubberbandIcon({ children, className = '', delay = 0 }: AnimatedIconProps) {
    return (
        <motion.div
            className={className}
            animate={{
                scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1],
                scaleY: [1, 0.75, 1.25, 0.85, 1.05, 1],
            }}
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 2,
                ease: 'easeInOut',
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

// Tada animation for icons
export function TadaIcon({ children, className = '', delay = 0 }: AnimatedIconProps) {
    return (
        <motion.div
            className={className}
            animate={{
                scale: [1, 0.9, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1],
                rotate: [0, -3, 3, -3, 3, -3, 3, -3, 0],
            }}
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 3,
                ease: 'easeInOut',
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

// Jello animation for icons
export function JelloIcon({ children, className = '', delay = 0 }: AnimatedIconProps) {
    return (
        <motion.div
            className={className}
            animate={{
                skewX: [0, -12.5, 6.25, -3.125, 1.5625, 0],
                skewY: [0, -12.5, 6.25, -3.125, 1.5625, 0],
            }}
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 2,
                ease: 'easeInOut',
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}

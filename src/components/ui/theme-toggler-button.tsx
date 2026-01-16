'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils';

interface ThemeTogglerButtonProps {
    className?: string;
    size?: 'sm' | 'default' | 'lg';
}

// Sun/Moon icon that morphs between states - inspired by animate-ui
export function ThemeTogglerButton({
    className,
    size = 'default'
}: ThemeTogglerButtonProps) {
    const { theme, setTheme } = useTheme();
    const isDark = theme === 'dark';

    const toggleTheme = () => {
        setTheme(isDark ? 'light' : 'dark');
    };

    const sizeClasses = {
        sm: 'w-8 h-8',
        default: 'w-10 h-10',
        lg: 'w-12 h-12',
    };

    const iconSizes = {
        sm: 18,
        default: 22,
        lg: 26,
    };

    const iconSize = iconSizes[size];

    return (
        <motion.button
            onClick={toggleTheme}
            className={cn(
                'relative rounded-full flex items-center justify-center',
                'bg-secondary/50 hover:bg-secondary/80',
                'border border-primary/20 hover:border-primary/40',
                'transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background',
                sizeClasses[size],
                className
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                    // Moon Icon
                    <motion.svg
                        key="moon"
                        xmlns="http://www.w3.org/2000/svg"
                        width={iconSize}
                        height={iconSize}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                        initial={{ rotate: 90, scale: 0, opacity: 0 }}
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        exit={{ rotate: -90, scale: 0, opacity: 0 }}
                        transition={{
                            type: 'spring' as const,
                            stiffness: 200,
                            damping: 15,
                        }}
                    >
                        <motion.path
                            d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        />
                    </motion.svg>
                ) : (
                    // Sun Icon
                    <motion.svg
                        key="sun"
                        xmlns="http://www.w3.org/2000/svg"
                        width={iconSize}
                        height={iconSize}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                        initial={{ rotate: -90, scale: 0, opacity: 0 }}
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        exit={{ rotate: 90, scale: 0, opacity: 0 }}
                        transition={{
                            type: 'spring' as const,
                            stiffness: 200,
                            damping: 15,
                        }}
                    >
                        {/* Sun center circle */}
                        <motion.circle
                            cx="12"
                            cy="12"
                            r="4"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                        />
                        {/* Sun rays */}
                        <motion.path
                            d="M12 2v2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 0.15, duration: 0.2 }}
                        />
                        <motion.path
                            d="M12 20v2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.2 }}
                        />
                        <motion.path
                            d="m4.93 4.93 1.41 1.41"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 0.25, duration: 0.2 }}
                        />
                        <motion.path
                            d="m17.66 17.66 1.41 1.41"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.2 }}
                        />
                        <motion.path
                            d="M2 12h2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 0.35, duration: 0.2 }}
                        />
                        <motion.path
                            d="M20 12h2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.2 }}
                        />
                        <motion.path
                            d="m6.34 17.66-1.41 1.41"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 0.45, duration: 0.2 }}
                        />
                        <motion.path
                            d="m19.07 4.93-1.41 1.41"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.2 }}
                        />
                    </motion.svg>
                )}
            </AnimatePresence>
        </motion.button>
    );
}

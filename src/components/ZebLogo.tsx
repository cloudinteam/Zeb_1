// Custom Zeb Logo SVG Component
// A stylized zebra-themed "Z" logo with stripes

interface ZebLogoProps {
    className?: string;
    size?: number;
}

export function ZebLogo({ className = '', size = 40 }: ZebLogoProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Background circle with gradient */}
            <defs>
                <linearGradient id="zebGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="50%" stopColor="#FFA500" />
                    <stop offset="100%" stopColor="#FF8C00" />
                </linearGradient>
                <linearGradient id="stripeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1a1a1a" />
                    <stop offset="100%" stopColor="#333333" />
                </linearGradient>
            </defs>

            {/* Main circle background */}
            <circle cx="50" cy="50" r="48" fill="url(#zebGradient)" />

            {/* Inner glow */}
            <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />

            {/* Stylized "Z" with zebra stripes */}
            <path
                d="M25 25 L75 25 L35 50 L75 50 L75 55 L30 55 L70 75 L25 75 L25 70 L55 70 L25 50 L25 45 L65 45 L25 30 L25 25"
                fill="url(#stripeGradient)"
            />

            {/* White stripes on the Z */}
            <path d="M30 28 L65 28 L55 33 L28 33 Z" fill="white" opacity="0.9" />
            <path d="M40 42 L70 42 L65 47 L35 47 Z" fill="white" opacity="0.9" />
            <path d="M32 57 L62 57 L70 62 L35 62 Z" fill="white" opacity="0.9" />
            <path d="M28 72 L58 72 L68 77 L30 77 Z" fill="white" opacity="0.9" />

            {/* Highlight effect */}
            <ellipse cx="35" cy="35" rx="15" ry="10" fill="white" opacity="0.15" />
        </svg>
    );
}

// Smaller icon version for inline use
export function ZebIcon({ className = '', size = 24 }: ZebLogoProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle cx="12" cy="12" r="11" fill="currentColor" />
            <path
                d="M6 6 L18 6 L9 12 L18 12 L18 13.5 L7.5 13.5 L16.5 18 L6 18 L6 16.5 L13.5 16.5 L6 12 L6 10.5 L15 10.5 L6 7.5 L6 6"
                fill="white"
                opacity="0.95"
            />
            {/* Zebra stripes */}
            <path d="M7.5 7 L15 7 L13 8 L7 8 Z" fill="currentColor" opacity="0.3" />
            <path d="M9.5 10 L16.5 10 L15.5 11 L8.5 11 Z" fill="currentColor" opacity="0.3" />
            <path d="M8 14 L15 14 L16.5 15 L8.5 15 Z" fill="currentColor" opacity="0.3" />
        </svg>
    );
}

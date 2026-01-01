// Indian Festival Themes for Bhet Mobile
export const THEMES = [
    {
        id: 'orange-white',
        name: 'Bhet Original',
        emoji: '🧡',
        description: 'Classic Orange & White Theme',
        colors: {
            primary: '#FF4500', // Brand Original Orange
            secondary: '#ffffff', // White
            accent: '#CC3700', // Brand Darker Orange
            background: '#ffffff', // Pure White
            text: '#0f172a', // Slate-900
            card: '#f8fafc', // Slate-50 for slight contrast
            border: '#e2e8f0' // Slate-200
        }
    },
    {
        id: 'default-dark',
        name: 'Night Mode',
        emoji: '🌙',
        description: 'Classic dark theme',
        colors: {
            primary: '#3b82f6',
            secondary: '#1e293b',
            accent: '#60a5fa',
            background: '#0f172a',
            text: '#f8fafc',
            card: '#1e293b',
            border: '#334155'
        }
    },
    {
        id: 'diwali',
        name: 'Diwali Festival',
        emoji: '🪔',
        description: 'Festival of Lights - Orange & Gold',
        colors: {
            primary: '#f59e0b',
            secondary: '#78350f',
            accent: '#fbbf24',
            background: '#1c1917',
            text: '#fef3c7',
            card: '#292524',
            border: '#92400e'
        }
    },
    {
        id: 'holi',
        name: 'Holi Colors',
        emoji: '🎨',
        description: 'Festival of Colors - Vibrant Mix',
        colors: {
            primary: '#ec4899',
            secondary: '#4c1d95',
            accent: '#06b6d4',
            background: '#1e1b4b',
            text: '#fdf4ff',
            card: '#2e1065',
            border: '#7c3aed'
        }
    },
    {
        id: 'independence',
        name: 'Independence Day',
        emoji: '🇮🇳',
        description: 'Tiranga - Saffron, White & Green',
        colors: {
            primary: '#f97316',
            secondary: '#166534',
            accent: '#ffffff',
            background: '#14532d',
            text: '#f0fdf4',
            card: '#166534',
            border: '#22c55e'
        }
    },
    {
        id: 'eid',
        name: 'Eid Mubarak',
        emoji: '🌙',
        description: 'Crescent Moon - Green & Gold',
        colors: {
            primary: '#22c55e',
            secondary: '#14532d',
            accent: '#fbbf24',
            background: '#052e16',
            text: '#dcfce7',
            card: '#14532d',
            border: '#16a34a'
        }
    },
    {
        id: 'navratri',
        name: 'Navratri Nights',
        emoji: '💃',
        description: 'Garba Vibes - Red & Gold',
        colors: {
            primary: '#dc2626',
            secondary: '#7f1d1d',
            accent: '#fbbf24',
            background: '#450a0a',
            text: '#fef2f2',
            card: '#7f1d1d',
            border: '#b91c1c'
        }
    },
    {
        id: 'christmas',
        name: 'Christmas Joy',
        emoji: '🎄',
        description: 'Red & Green Holiday Spirit',
        colors: {
            primary: '#dc2626',
            secondary: '#166534',
            accent: '#fef3c7',
            background: '#14532d',
            text: '#f0fdf4',
            card: '#166534',
            border: '#22c55e'
        }
    },
    {
        id: 'new-year',
        name: 'New Year 2026',
        emoji: '🎉',
        description: 'Celebration - Purple & Gold',
        colors: {
            primary: '#a855f7',
            secondary: '#581c87',
            accent: '#fbbf24',
            background: '#2e1065',
            text: '#faf5ff',
            card: '#581c87',
            border: '#9333ea'
        }
    },
    {
        id: 'raksha-bandhan',
        name: 'Raksha Bandhan',
        emoji: '🧵',
        description: 'Brother-Sister Bond - Pink & Gold',
        colors: {
            primary: '#ec4899',
            secondary: '#831843',
            accent: '#fbbf24',
            background: '#500724',
            text: '#fdf2f8',
            card: '#831843',
            border: '#db2777'
        }
    },
    {
        id: 'ganesh-chaturthi',
        name: 'Ganesh Chaturthi',
        emoji: '🐘',
        description: 'Lord Ganesha - Orange & Red',
        colors: {
            primary: '#ea580c',
            secondary: '#7c2d12',
            accent: '#fcd34d',
            background: '#431407',
            text: '#ffedd5',
            card: '#7c2d12',
            border: '#c2410c'
        }
    }
];

export const getThemeById = (id) => {
    return THEMES.find(theme => theme.id === id) || THEMES[0];
};

import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
		'./app/**/*.{js,jsx,ts,tsx}',
		'./src/**/*.{js,jsx,ts,tsx}'
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: {
					DEFAULT: 'hsl(var(--border))',
					dark: 'hsl(var(--border-dark))'
				},
				input: {
					DEFAULT: 'hsl(var(--input))',
					dark: 'hsl(var(--input-dark))'
				},
				ring: {
					DEFAULT: 'hsl(var(--ring))',
					dark: 'hsl(var(--ring-dark))'
				},
				background: {
					DEFAULT: '#FFFFFF',
					dark: '#0A1A1F' // Darker blue-green for dark mode
				},
				foreground: {
					DEFAULT: '#1A1A1A',
					dark: '#E5E5E5'
				},
				// Solar energy theme colors
				primary: {
					50: '#ECFDF5',
					100: '#D1FAE5',
					200: '#A7F3D0',
					300: '#6EE7B7',
					400: '#34D399',
					500: '#10B981', // Solar panel green
					600: '#059669',
					700: '#047857',
					800: '#065F46',
					900: '#064E3B',
					DEFAULT: '#10B981',
					foreground: '#FFFFFF'
				},
				// Sun/Energy colors
				secondary: {
					50: '#FFFBEB',
					100: '#FEF3C7',
					200: '#FDE68A',
					300: '#FCD34D',
					400: '#FBBF24',
					500: '#F59E0B', // Sunny orange
					600: '#D97706',
					700: '#B45309',
					800: '#92400E',
					900: '#78350F',
					DEFAULT: '#F59E0B',
					foreground: '#1A1A1A'
				},
				// Electric blue theme
				accent: {
					50: '#EFF6FF',
					100: '#DBEAFE',
					200: '#BFDBFE',
					300: '#93C5FD',
					400: '#60A5FA',
					500: '#3B82F6', // Electric blue
					600: '#2563EB',
					700: '#1D4ED8',
					800: '#1E40AF',
					900: '#1E3A8A',
					DEFAULT: '#3B82F6',
					foreground: '#FFFFFF'
				},
				// Status colors for monitoring
				info: {
					50: '#F0F9FF',
					100: '#E0F2FE',
					200: '#BAE6FD',
					300: '#7DD3FC',
					400: '#38BDF8',
					500: '#0EA5E9', // Information blue
					600: '#0284C7',
					700: '#0369A1',
					800: '#075985',
					900: '#0C4A6E',
					DEFAULT: '#0EA5E9',
					foreground: '#FFFFFF'
				},
				success: {
					50: '#F0FDF4',
					100: '#DCFCE7',
					200: '#BBF7D0',
					300: '#86EFAC',
					400: '#4ADE80',
					500: '#22C55E', // Success green
					DEFAULT: '#22C55E',
					foreground: '#FFFFFF'
				},
				warning: {
					50: '#FFF7ED',
					100: '#FFEDD5',
					200: '#FED7AA',
					300: '#FDBA74',
					400: '#FB923C',
					500: '#F97316', // Warning orange
					DEFAULT: '#F97316',
					foreground: '#1A1A1A'
				},
				error: {
					50: '#FEF2F2',
					100: '#FEE2E2',
					200: '#FECACA',
					300: '#FCA5A5',
					400: '#F87171',
					500: '#EF4444', // Error red
					DEFAULT: '#EF4444',
					foreground: '#FFFFFF'
				},
				// Energy consumption levels
				consumption: {
					low: '#22C55E', // Low consumption - green
					medium: '#F59E0B', // Medium consumption - orange
					high: '#EF4444' // High consumption - red
				},
				// Generation status colors
				generation: {
					optimal: '#22C55E', // Optimal generation - green
					moderate: '#F59E0B', // Moderate generation - orange
					low: '#EF4444' // Low generation - red
				},
				// Battery status colors
				battery: {
					full: '#22C55E', // Full - green
					charging: '#F59E0B', // Charging - orange
					low: '#EF4444' // Low - red
				},
				// Chart colors
				chart: {
					1: '#10B981', // Generation
					2: '#F59E0B', // Consumption
					3: '#3B82F6', // Grid
					4: '#8B5CF6', // Battery
					5: '#EC4899' // Additional metrics
				},
				// Semantic UI elements
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
};

export default config;

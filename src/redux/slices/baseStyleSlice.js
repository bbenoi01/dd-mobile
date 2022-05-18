import { createSlice } from '@reduxjs/toolkit';

export const baseStyleSlice = createSlice({
	name: 'base',
	initialState: {
		color: {
			brand: {
				primary: '#2182BD',
				secondary: '#5282BD',
				muted: '#C6DAF7',
			},
			ui: {
				primary: '#262626',
				secondary: '#757575',
				tertiary: '#F1F1F1',
				quaternary: '#FFFFFF',
				disabled: '#DEDEDE',
				error: '#D0421B',
				success: '#138000',
			},
			bg: {
				primary: '#FFFFFF',
				secondary: '#F1F1F1',
			},
			text: {
				primary: '#262626',
				secondary: '#757575',
				disabled: '#9C9C9C',
				inverse: '#FFFFFF',
				error: '#D0421B',
				success: '#138000',
			},
		},
		font: {
			fonts: {
				body: 'Oswald_400Regular',
				heading: 'Oswald_700Bold',
				monospace: 'Oswald_400Regular',
			},
			fontWeights: {
				regular: 400,
				medium: 500,
				bold: 700,
			},
			fontSizes: {
				caption: 12,
				button: 14,
				body: 16,
				title: 20,
				h5: 24,
				h4: 34,
				h3: 45,
				h2: 56,
				h1: 112,
			},
			lineHeights: {
				title: 28,
				copy: 20,
			},
		},
		size: {
			xs: 4,
			sm: 8,
			md: 16,
			lg: 24,
			xl: 32,
			xxl: 40,
			xxxl: 80,
		},
		space: [0, 4, 8, 16, 32, 64],
	},
	reducers: {},
});

export default baseStyleSlice.reducer;

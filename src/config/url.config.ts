export const APP_URL = process.env.NEXT_PUBLIC_APP_URL as string

export const PUBLIC_URL = {
	root: (url = '') => `${url ? url : ''}`,
	home: (url = '') => `${url ? url : '/'}`,
	games: (url = '') => `/games${url ? url : ''}`,
	profile: (url = '') => `/profile${url ? url : ''}`,
	partners: (url = '') => `/partners${url ? url : ''}`,
	bonuses: (url = '') => `/bonuses${url ? url : ''}`,
	wallet: (url = '') => `/wallet${url ? url : ''}`,

}
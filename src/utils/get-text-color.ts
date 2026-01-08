export const getTextColor = (bgColor: string) => {
	const color = bgColor.trim()

	if (color.startsWith('#') && (color.length === 7 || color.length === 4)) {
		let r, g, b

		if (color.length === 7) {
			r = parseInt(color.slice(1, 3), 16)
			g = parseInt(color.slice(3, 5), 16)
			b = parseInt(color.slice(5, 7), 16)
		} else {
			// сокращённый hex #fff
			r = parseInt(color[1] + color[1], 16)
			g = parseInt(color[2] + color[2], 16)
			b = parseInt(color[3] + color[3], 16)
		}

		const brightness = (r * 299 + g * 587 + b * 114) / 1000
		return brightness > 186 ? 'text-black' : 'text-white' // 186 — стандартный порог WCAG
	}

	return 'text-white'
}

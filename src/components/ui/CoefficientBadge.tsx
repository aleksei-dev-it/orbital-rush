import { FC } from 'react'

interface ICoefficientBadge {
	color?: string
	coefficient?: string | number
}

const CoefficientBadge: FC<ICoefficientBadge> = ({ color = 'rgba(255,255,255,0.44)', coefficient }) => {
	// Функция для конвертации HEX в rgba с прозрачностью
	const hexToRgba = (hex: string, alpha: number) => {
		// Убираем #
		let c = hex.replace('#', '')
		// Поддержка короткой записи #fff
		if (c.length === 3) {
			c = c.split('').map(ch => ch + ch).join('')
		}
		const r = parseInt(c.substring(0, 2), 16)
		const g = parseInt(c.substring(2, 4), 16)
		const b = parseInt(c.substring(4, 6), 16)
		return `rgba(${r},${g},${b},${alpha})`
	}

	return (
		<div
			className='w-15.5 h-8 flex items-center justify-center text-center rounded-[0.75rem] backdrop-blur-lg shrink-0 text-sm font-bold'
			style={{
				backgroundColor: hexToRgba(color, 0.32), // прозрачность 32%
				color: color
			}}
		>
			{coefficient}
		</div>
	)
}

export default CoefficientBadge

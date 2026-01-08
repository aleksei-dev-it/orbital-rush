import { getTextColor } from '@/src/utils/get-text-color'
import { cn } from '@/src/utils/tw-merge'

import Image from 'next/image'
import { FC } from 'react'
interface IAvatar {
	imgSrc?: string
	name: string
	borderColor?: string
	BgColor?: string
	hasBorder?: boolean
	size?: number
	className?: string
}
const Avatar: FC<IAvatar> = ({
	name,
	imgSrc,
	size,
	borderColor,
	className,
	BgColor = 'var(--color-accent)',
	hasBorder = true
}) => {
	const textColor = getTextColor(BgColor)

	return (
		<div
			className={cn(
				'rounded-full w-8 h-8 flex items-center justify-center font-bold leading-none overflow-hidden relative text-sm',
				hasBorder && 'border',
				hasBorder && (borderColor ?? 'border-accent'),
				textColor,
				className
			)}
			style={{ backgroundColor: BgColor, width: size ? `${size}px` : '32px', height: size ? `${size}px` : '32px' }}
		>
			{imgSrc ? (
				<Image src={imgSrc} alt={name} fill />
			) : (
				<span>
					{name.replace(/[^a-zA-Zа-яА-Я0-9]/g, '').charAt(0)}
				</span>
			)}
		</div>
	)
}


export default Avatar
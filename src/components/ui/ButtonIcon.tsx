import { cn } from '@/src/utils/tw-merge'
import {
	ElementType,
	ComponentPropsWithoutRef,
	ReactNode,
} from 'react'

type ButtonIconProps<T extends ElementType = 'button'> = {
	as?: T
	icon?: ReactNode | string
	size?: 'small' | 'default' | 'medium'
} & ComponentPropsWithoutRef<T>

const ButtonIcon = <T extends ElementType = 'button'>({
	as,
	icon,
	size = 'default',
	className,
	...props
}: ButtonIconProps<T>) => {
	const Component = as || 'button'

	return (
		<Component
			className={cn(
				'rounded-full flex items-center justify-center text-white shrink-0 bg-buttons',
				size === 'small'
					? 'w-6 h-6 p-1.5'
					: size === 'medium'
						? 'w-9 h-9'
						: 'w-8 h-8',
				className
			)}
			{...(Component === 'button' && { type: 'button' })}
			{...props}
		>
			{icon}
		</Component>
	)
}

export default ButtonIcon

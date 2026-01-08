import { cn } from '@/src/utils/tw-merge'
import { ElementType, ComponentPropsWithoutRef } from 'react'

type HeadingSize = 'medium' | 'small' | 'default'

type HeadingProps<T extends ElementType> = {
	as?: T
	size?: HeadingSize
	className?: string
} & ComponentPropsWithoutRef<T>

const Heading = <T extends ElementType = 'h2'>({
	as,
	size = 'default',
	className,
	children,
	...props
}: HeadingProps<T>) => {
	const Component = as || 'h2'

	return (
		<Component
			className={cn(
				'font-black',
				size === 'medium'
					? 'text-lg'
					: size === 'small'
						? 'text-base'
						: 'text-2xl',
				className
			)}
			{...props}
		>
			{children}
		</Component>
	)
}

export default Heading

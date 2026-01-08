import { cn } from '@/src/utils/tw-merge'
import { ComponentPropsWithoutRef, ElementType, PropsWithChildren, ReactNode } from 'react'

type ButtonOwnProps = {
	size?: 'default' | 'meduim' | 'small'
	variant?: 'primary' | 'secondary' | 'light'
	blur?: boolean
	isIconLeft?: boolean
	isIconRight?: boolean
	icon?: ReactNode
	secondIcon?: ReactNode
}

type ButtonProps<T extends ElementType> = PropsWithChildren<
	ButtonOwnProps & {
		as?: T
	}
> &
	Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps | 'as'>

const Button = <T extends ElementType = 'button'>({
	as,
	children,
	hasIcon,
	size = 'default',
	blur,
	variant = 'secondary',
	isIconLeft,
	isIconRight,
	secondIcon,
	icon,
	...props
}: ButtonProps<T>) => {
	const Component = as || 'button'

	return (
		<Component
			{...props}
			className={cn(
				'inline-flex items-center outline-none justify-center gap-1.5 disabled:opacity-50',
				size === 'meduim'
					? 'h-9 rounded-full px-4 font-black text-sm'
					: size === 'small'
						? 'h-8 rounded-4xl gap-0.5 px-3 font-medium font-sf-rounded text-sm'
						: 'h-12 rounded-full px-4 font-black',
				variant === 'secondary' ? 'bg-buttons' : variant === 'light' ? 'bg-white text-dark' : 'bg-accent text-dark',
				blur && 'backdrop-blur-[5px]',
				props.className
			)}
		>
			{isIconLeft && <span className='w-6 aspect-square shrink-0 flex items-center justify-center'>{icon}</span>}
			{children}
			{isIconRight && <span className='w-6 aspect-square shrink-0 flex items-center justify-center'>{secondIcon}</span>}
		</Component>
	)
}

export default Button

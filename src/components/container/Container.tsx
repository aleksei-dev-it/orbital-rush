import { cn } from '@/src/utils/tw-merge'
import { FC, PropsWithChildren } from 'react'
interface IContainer {
	className?: string
}
const Container: FC<PropsWithChildren<IContainer>> = ({ children, className }) => {
	return (
		<div className={cn('mx-auto px-4 max-w-152 w-full', className)}>{children}</div>
	)
}

export default Container
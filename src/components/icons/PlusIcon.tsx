import { IconProps } from '@/src/types/icon.types'


const PlusIcon = ({ size = 14, strokeWidth = 2, ...props }: IconProps) => (

	<svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M7 1V13M1 7L13 7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
	</svg>)
export default PlusIcon


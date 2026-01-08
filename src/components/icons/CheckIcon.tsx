import { IconProps } from '@/src/types/icon.types'

const CheckIcon = ({ size = 12, ...props }: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 12 9"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M2.56066 3.43934C1.97487 2.85355 1.02513 2.85355 0.43934 3.43934C-0.146447 4.02513 -0.146447 4.97487 0.43934 5.56066L3.43934 8.56066C4.02513 9.14645 4.97487 9.14645 5.56066 8.56066L11.5607 2.56066C12.1464 1.97487 12.1464 1.02513 11.5607 0.43934C10.9749 -0.146447 10.0251 -0.146447 9.43934 0.43934L4.5 5.37868L2.56066 3.43934Z" fill="currentColor" />
	</svg>
)

export default CheckIcon

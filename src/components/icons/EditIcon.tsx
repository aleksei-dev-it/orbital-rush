import { IconProps } from '@/src/types/icon.types'

const EditIcon = ({ size = 14, ...props }: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 14 13"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M6.62502 11.7008H12.25M9.43752 1.38833C9.68616 1.13968 10.0234 1 10.375 1C10.7266 1 11.0639 1.13968 11.3125 1.38833C11.5612 1.63697 11.7008 1.97419 11.7008 2.32583C11.7008 2.67746 11.5612 3.01468 11.3125 3.26333L3.50002 11.0758L1.00002 11.7008L1.62502 9.20082L9.43752 1.38833Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
)

export default EditIcon
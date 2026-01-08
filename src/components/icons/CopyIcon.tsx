import { IconProps } from '@/src/types/icon.types'

const CopyIcon = ({ size = 16, ...props }: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd" d="M9.71429 0H1.71429C0.767512 0 0 0.767512 0 1.71429V9.71429C0 10.6611 0.767512 11.4286 1.71429 11.4286H3.14286V6.28571C3.14286 4.54997 4.54997 3.14286 6.28571 3.14286H11.4286V1.71429C11.4286 0.767512 10.6611 0 9.71429 0ZM6.28571 4.57143H14.2857C15.2325 4.57143 16 5.33894 16 6.28571V14.2857C16 15.2325 15.2325 16 14.2857 16H6.28571C5.33894 16 4.57143 15.2325 4.57143 14.2857V6.28571C4.57143 5.33894 5.33894 4.57143 6.28571 4.57143Z" fill="currentColor" />
	</svg>
)

export default CopyIcon




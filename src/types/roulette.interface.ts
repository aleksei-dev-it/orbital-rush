
export interface RouletteStoreProps {
	isDisabledButton: boolean
	setIsDisabledButton: (value: boolean) => void
	isOpenModal: boolean
	setIsOpenModal: (value: boolean) => void
	timeoutRef: NodeJS.Timeout | null
	setTimeoutRef: (value: NodeJS.Timeout | null) => void
	ANIMATION_DURATION: number
	winSpin: string
	setWinSpin: (value: string) => void
	winInnerSpin?: number
	setWinInnerSpin?: (value: number) => void

	isStartSpin: boolean
	setIsStartSpin: (value: boolean) => void
}
export interface RouletteSectorProps {
	name: string
	is_positive: boolean
}
export interface SlotSegment {
	win: string
	imageUrl: string
	size: number
	bgGradient: [string, string]
}
export interface SegmentProps {
	label?: string
	gradient: string
	iconUrl?: string
	value?: string
}

export interface RouletteInnerSectorProps {
	number: string
	color: string
}
export interface RouletteInnerSectorWinProps {
	external_win_sector: string
	internal_win_sector: number
}
export interface SpinWheelProps {
	data: RouletteSectorProps[]
	spinDate?: number
	isLoading: boolean
	timeLeft?: number
	className?: string
	innerSpinWheel?: boolean
	innerData?: RouletteInnerSectorProps[]
}
export interface SegmentProps {
	label?: string
	gradient: string
	iconUrl?: string
	value?: string
}
export interface InnerSegmentProps {
	label?: string
	background: string
	iconUrl?: string
	value?: string
}

export interface SpinnerProps {
	segments: SegmentProps[]
	innerSegments: InnerSegmentProps[],
	size?: number
	className?: string
	innerSpinWheel?: boolean
}
export interface SpinnerInnerProps extends Omit<SpinnerProps, 'segments'> { }

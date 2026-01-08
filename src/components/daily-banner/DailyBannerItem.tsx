import { cn } from '@/src/utils/tw-merge'
import { FC } from 'react'
import { CheckIcon, CloseIcon } from '../icons'

interface IDailyBannerItem {
	dayNumber: number
	successDays?: number[]
	rejectDays?: number[]
}

const DailyBannerItem: FC<IDailyBannerItem> = ({
	dayNumber,
	successDays = [],
	rejectDays = [],
}) => {
	const isSuccess = successDays.includes(dayNumber)
	const isReject = rejectDays.includes(dayNumber)

	return (
		<div
			className={cn(
				'w-4 shrink-0 aspect-square h-4 rounded-full flex items-center justify-center leading-none font-semibold text-xs p-1',
				isSuccess && 'bg-accent text-dark',
				isReject && 'bg-[#FF383C]/44 text-text',
				!isSuccess && !isReject && 'bg-buttons text-text'
			)}
		>
			{isSuccess ? <CheckIcon /> : isReject ? <CloseIcon /> : dayNumber}
		</div>
	)
}

export default DailyBannerItem

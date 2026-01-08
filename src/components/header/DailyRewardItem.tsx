import { cn } from '@/src/utils/tw-merge'
import Image from 'next/image'
import { FC } from 'react'
interface IDailyRewardItem {
	currentPrice?: boolean
	isMega?: boolean
	day?: number
	win: string
	icon: string
}
const DailyRewardItem: FC<IDailyRewardItem> = ({ currentPrice, day, win, icon, isMega }) => {

	return (
		<div className={cn('text-lg font-black rounded-3.5xl flex flex-col text-center items-center justify-center bg-buttons py-4 px-2 leading-none gap-1.5 border-2 last:col-span-3', currentPrice ? 'border-accent' : 'border-transparent opacity-40')}>
			<div>
				<span className='text-text'>Day</span> <span>{day}</span>
			</div>
			<div className={cn('flex items-center justify-center aspect-square shrink-0 relative',isMega ? 'h-27.25' : 'w-13')}>
				<Image alt='' src={icon} fill objectFit='contain' />
			</div>
			{isMega ? (
				<div className='flex flex-col items-center justify-center text-center gap-1'>
					<div className='text-base'>Mega Spin</div>
					<div className='text-sm font-semibold text-text'>Cash rewards only</div>
				</div>
			) : <div>{win}</div>}

		</div>
	)
}

export default DailyRewardItem
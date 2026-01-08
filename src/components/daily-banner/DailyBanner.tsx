'use client'
import { PUBLIC_URL } from '@/src/config/url.config'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Container from '../container/Container'
import { ChevronIcon } from '../icons'
import { cn } from '@/src/utils/tw-merge'
import DailyBannerItem from './DailyBannerItem'
import { FC } from 'react'

interface IDailyBanner {
	className?: string
}
const DailyBanner:FC<IDailyBanner> = ({className}) => {

	return (
		<Container className={cn('py-4', className)}>
			<div
				className='rounded-2.5xl bg-linear-90 from-[#1DD2D6] to-[#0A5557] py-1 min-h-13.5 px-3 flex items-center justify-between gap-4'

			>
				<div className='grid gap-x-2 grid-cols-[2.125rem_1fr]'>
					<div className='shrink-0 flex items-center justify-center aspect-square w-8 relative row-span-3 self-center'>
						<Image src='/images/sand-clock.svg' fill alt='sand' />
					</div>
					<div className='leading-none font-black'>Daily Rewards</div>
					<div className='font-semibold text-sm text-white/60'>Claimed</div>
				</div>
				<div className='flex gap-1 flex-col items-end'>
					<div className='grid grid-cols-7 gap-0.5'>
						{Array.from({ length: 7 }, (_, i) => (
							<DailyBannerItem key={i} dayNumber={i + 1} rejectDays={[3]} successDays={[1,2]}/>
						))}
					</div>
					<div className='flex items-center gap-2'>
						<div className='flex items-center gap-1 font-semibold text-sm'>
							<div className='w-3.25 aspect-square shrink-0 relative'>
								<Image src='/images/crystal.svg' alt='' fill />
							</div>
							<span>240</span>
						</div>
						<div className='flex items-center gap-1 font-semibold text-sm'>
							<div className='w-3.25 aspect-square shrink-0 relative'>
								<Image src='/images/coin.svg' alt='' fill />
							</div>
							<span>55</span>
						</div>
					</div>

				</div>
			</div>
		</Container>
	)
}

export default DailyBanner
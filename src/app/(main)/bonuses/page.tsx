import Container from '@/src/components/container/Container'
import DailyBanner from '@/src/components/daily-banner/DailyBanner'
import Heading from '@/src/components/heading/Heading'
import BonusRewards from '@/src/components/layout/bonus-rewards/BonusRewards'
import SpinBanner from '@/src/components/spin-banner/SpinBanner'
import Image from 'next/image'

export default function Bonuses() {
	return (
		<div className='flex flex-col overflow-hidden'>
			<Container className='py-4 flex-1 flex flex-col gap-6'>
				<Heading>Bonuses</Heading>
				<div className='flex flex-col items-center justify-center leading-none gap-2 text-center'>
					<div className='font-semibold text-sm text-text'>Total bonuses</div>
					<div className='flex items-center gap-2 justify-center'>
						<div className='w-7 h-6.5 relative shrink-0 flex items-center justify-center'><Image alt='' src='/images/crystal.svg' fill /></div>
						<div className='font-black text-[2rem]'>3403</div>
					</div>
				</div>
			</Container>
			<SpinBanner />
			<DailyBanner className='pt-0' />
			<BonusRewards />
		</div>
	)
}

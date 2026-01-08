'use client'
import { PUBLIC_URL } from '@/src/config/url.config'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Container from '../container/Container'
import { ChevronIcon } from '../icons'


const SpinBanner = () => {
	const router = useRouter()
	const handleGoToSpin = () => {
		router.push(PUBLIC_URL.games('/daily-spin'))
	}
	return (
		<Container className='py-4'>
			<div
				className='rounded-2.5xl bg-linear-90 from-[#FFAE00] to-[#D17D00] py-1 min-h-13.5 px-3 flex items-center justify-between gap-4'
				onClick={handleGoToSpin}
			>
				<div className='grid gap-x-2 grid-cols-[2.125rem_1fr]'>
					<Image className="row-span-3 self-center" src='/images/spin.svg' width={34} height={36} alt='spinner' />
					<div className='leading-none font-black'>Spin now</div>
					<div className='font-semibold text-sm text-white/60'>Spins: 9/10</div>
				</div>
				<div className='flex items-center gap-2'>
					<div className='text-sm flex items-center gap-1 py-0.5 h-7.75 px-3 bg-white/20 rounded-full leading-none'>
						<span className='font-semibold'>Next spin in</span>
						<span className='font-black'>59:07</span>
					</div>
					<div className='w-4 h-4 flex items-center justify-center'><ChevronIcon className='-rotate-90 text-text' /></div>
				</div>
			</div>
		</Container>
	)
}

export default SpinBanner
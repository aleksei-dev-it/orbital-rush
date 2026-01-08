import Container from '@/src/components/container/Container'
import OrbitalRushGame from '@/src/components/games/orbital-rush/OrbitalRushGame'
import Header from '@/src/components/header/Header'
import BetPanel from '@/src/components/layout/bet-panel/BetPanel'
import CoefficientBadge from '@/src/components/ui/CoefficientBadge'


export default function OrbitalRush() {
	return <div className='flex flex-col min-h-screen overflow-hidden bg-[linear-gradient(0deg,#030109_0%,#552DB9_105.5%)] pt-11 -mt-11'>
		<Header variantLogo='light' />
		{/* <OrbitalRushGame /> */}
		<div className='flex-1 flex flex-col'>
			<Container className='w-full'>
				<div className='flex gap-1 overflow-hidden px-4 -mx-4 pt-1.25 relative z-1'>
					<CoefficientBadge coefficient='x13.10' />
					<CoefficientBadge color='#FF383C' coefficient='x2.61' />
					<CoefficientBadge color='#FF8D28' coefficient='x6.27' />
					<CoefficientBadge coefficient='x11.13' />
					<CoefficientBadge color='#0088FF' coefficient='x7.05' />
				</div>
				<div className='pt-15.5 pb-49.5 relative'>
					<div className='flex flex-col gap-1 text-center justify-center w-fit relative z-1'>
						<div className='text-2xl font-black px-3 py-2 w-fit bg-buttons rounded-[1rem] leading-none'>00:23</div>
						<span className='text-xs font-semibold text-text'>Countdown</span>
					</div>
					<div className='absolute bottom-0 w-full'>
						<OrbitalRushGame />
					</div>
				</div>
			</Container>
			<div className='relative z-1' >
				<BetPanel />
			</div>

		</div>
	</div>
}

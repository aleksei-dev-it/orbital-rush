import { slots } from '@/src/assets/data/slots'
import Container from '@/src/components/container/Container'
import HeaderNavigation from '@/src/components/header/HeaderNavigation'
import Roulette from '@/src/components/layout/games/Roulette'



import WalletBar from '@/src/components/wallet/WalletBar'


export default function OrbitalRush() {

	return <div className='flex flex-col min-h-screen overflow-hidden bg-linear-180 from-[#F9A800] to-[#000000] pt-11 -mt-11'>
		<Container >
			<HeaderNavigation />
			<WalletBar className='justify-center h-15.5' />
		</Container>
		<Container className='pt-8.5'>
			<div className='mx-auto max-w-69.25'>
				<p className='text-xl font-semibold opacity-70 text-center leading-tight'>Spin up to 10 times a day and get a $10 gaming account</p>
				<div className='flex flex-col text-center items-center justify-center pt-6.5'>
					<div className='text-[1.75rem] font-black'>00:30</div>
					<span className='font-semibold text-xs text-white/60'>Until the next spin</span>
				</div>
			</div>
			<Roulette/>

		</Container>
	</div>
}
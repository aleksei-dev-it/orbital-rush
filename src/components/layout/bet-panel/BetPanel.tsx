import { FC } from 'react'
import Container from '../../container/Container'
import CasinoSpinIcon from '../../icons/CasinoSpinIcon'
import UserIcon from '../../icons/UserIcon'
import PlayChip from '../../play-chip/PlayChip'
import PlayersScore from '../../players-score/PlayersScore'
interface IBetPanel {
	handleStartGame?: () => void
}
const BetPanel: FC<IBetPanel> = ({ handleStartGame }) => {

	return (
		<Container className='pt-5 pb-4 flex flex-col gap-5 mt-auto w-full'>
			<PlayChip />
			<div className='grid grid-cols-2 gap-2'>
				<div className='grid gap-x-2  leading-none grid-cols-[1.5rem_1fr] p-3 bg-buttons rounded-2.5xl'>
					<UserIcon className='text-text row-span-3 self-center' />
					<span className='text-white/52 text-sm'>Players</span>
					<span className='font-black'>37</span>
				</div>
				<div className='grid gap-x-2  leading-none grid-cols-[1.5rem_1fr] p-3 bg-buttons rounded-2.5xl'>
					<CasinoSpinIcon className='text-text row-span-3 self-center' />
					<span className='text-white/52 text-sm'>Bets</span>
					<span className='font-black'>$3,589</span>
				</div>
			</div>
			<PlayersScore />

		</Container>
	)
}

export default BetPanel
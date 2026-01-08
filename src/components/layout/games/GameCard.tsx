import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import Button from '../../ui/Button'
interface IGameCard {
	link: string
}
const GameCard: FC<IGameCard> = ({ link }) => {
	const router = useRouter()

	return (
		<div className='rounded-[1.75rem] p-4 h-62 flex items-end w-full overflow-hidden relative'>
			<Image alt='' src='/images/orbital-rush-card.png' fill objectFit='cover'/>
			<div className='flex flex-col items-start gap-3 relative z-1'>
				<div className='flex flex-col gap-1'>
					<div className='font-black text-white'>Orbital Rush</div>
					<span className='text-sm text-text font-semibold'>4,291 online</span>
				</div>
				<Button size='small'
					onClick={() => router.push(link)}
				>
					Play
				</Button>
			</div>
		</div>
	)
}

export default GameCard
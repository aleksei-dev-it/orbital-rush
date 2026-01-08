'use client'
import { PUBLIC_URL } from '@/src/config/url.config'
import Container from '../../container/Container'
import Heading from '../../heading/Heading'
import GameCard from './GameCard'

const Games = () => {
	return (
		<section className='py-4'>
			<Container>
				<Heading className='mb-3'>Games</Heading>
				<div className='flex gap-2'>
					<GameCard link={PUBLIC_URL.games('/orbital-rush')} />
				</div>
			</Container>
		</section>
	)
}

export default Games
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import Heading from '../../heading/Heading'
import RewardCard from './RewardCard'
// Import Swiper styles
import 'swiper/css'
import Container from '../../container/Container'
const BonusRewards = () => {
	return (
		<section className='py-4'>
			<Container>
				<Heading className='mb-3'>Bonus rewards</Heading>
				<Swiper
					className='overflow-visible!'
					spaceBetween={8}
					slidesPerView={1.38}
				>
					<SwiperSlide>
						<RewardCard />
					</SwiperSlide>
					<SwiperSlide>
						<RewardCard />
					</SwiperSlide>
				</Swiper>
			</Container>
		</section >
	)
}

export default BonusRewards
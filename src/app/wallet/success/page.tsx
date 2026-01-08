
import Container from '@/src/components/container/Container'
import Heading from '@/src/components/heading/Heading'
import Button from '@/src/components/ui/Button'
import Image from 'next/image'

export default function Success() {
	return (
		<div className='flex flex-col min-h-screen overflow-hidden bg-linear-180 from-[#1EA100] to-[#001B00]'>
			<Container className='flex-1 flex flex-col items-center justify-center gap-6'>

				<div className='relative w-15.5 aspect-square shrink-0'>
					<Image alt='success' src='/images/success.svg' fill />
				</div>
				<div className='leading-none text-center flex flex-col gap-2'>
					<Heading>Congratulation</Heading>
					<div className='text-text font-semibold'>You have purchased <span className='font-black text-white'>$250</span></div>
				</div>
					<Button className='px-5'>Check wallet</Button>
			</Container>
		</div>
	)
}

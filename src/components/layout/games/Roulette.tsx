'use client'

import { FC, useEffect, useRef } from 'react'
import WheelCanvas, { WheelCanvasRef } from '../../spin-wheel/WheelCanvas'
import Image from 'next/image'
import Button from '../../ui/Button'




const Roulette = () => {
	const wheelRef = useRef<WheelCanvasRef>(null)

	return (
		<div>

			<div className='relative pt-51.5 h-0 mb-15'>
				<div className="absolute left-1/2 -translate-x-1/2 bottom-0">
					<WheelCanvas ref={wheelRef} />
				</div>
				<div className='w-7.25 h-9.75 relative left-1/2 -translate-x-1/2 bottom-3'>
					<Image alt='' src='/images/games/roulette/pin.svg' fill objectFit='contain' />
				</div>
			</div>
			<div className='flex flex-col gap-2.5 items-center'>
				<Button
					variant='light'
					className='px-5'
					onClick={() => wheelRef.current?.spin()}
				>Spin & Win</Button>
				<p className='text-xs text-center text-text'>10 spins left</p>
			</div>
		</div>
	)
}
export default Roulette

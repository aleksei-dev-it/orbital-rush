
'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { OrbitalRushPhase, useOrbitalRushStore } from '@/src/store/games/orbital-rush.store'

const OrbitalRushGame = () => {
	const phase = useOrbitalRushStore((s) => s.phase)
	const startFlying = useOrbitalRushStore((s) => s.startFlying)
	const finishGame = useOrbitalRushStore((s) => s.finishGame)

	const isLaunch = phase === OrbitalRushPhase.LAUNCH
	const isFlying = phase === OrbitalRushPhase.FLYING
	const isFinished = phase === OrbitalRushPhase.FINISHED
	const isActive = isLaunch || isFlying || isFinished

	// LAUNCH → FLYING
	useEffect(() => {
		if (phase === OrbitalRushPhase.LAUNCH) {
			const t = setTimeout(startFlying, 1500)
			return () => clearTimeout(t)
		}
	}, [phase, startFlying])

	// FLYING → FINISHED
	useEffect(() => {
		if (phase === OrbitalRushPhase.FLYING) {
			const t = setTimeout(finishGame, 2000)
			return () => clearTimeout(t)
		}
	}, [phase, finishGame])

	return (
		<div className='absolute left-1/2 -translate-x-1/2 w-[calc(100%+2rem)] -bottom-18.5 overflow-hidden'>
			<span className='absolute w-full left-0 z-1 h-38.5 bottom-0 bg-[linear-gradient(0deg,#22124B_29.87%,rgba(47,23,106,0)_100%)]' />

			{/* 🚀 Ракета (ТОЛЬКО до FINISHED) */}
			{!isFinished && (
				<motion.div
					className='w-30.5 h-31.25 absolute bottom-20 left-1/2 -translate-x-1/2 z-1'
					animate={
						isLaunch || isFlying
							? { y: '-70%', scale: 0.85 }
							: { y: 0, scale: 1 }
					}
					transition={{ duration: 2.2, ease: 'easeInOut' }}
				>
					<Image
						alt=''
						src='/images/games/orbital-rush/rocket.svg'
						fill
						objectFit='contain'
					/>

					{/* 💨 Дым */}
					{(isLaunch || isFlying) && (
						<motion.div
							className='absolute left-1/2 -translate-x-[calc(50%+3px)] top-[81%] w-6 bg-linear-90 bg-blend-screen rocket-smoke-mask'
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: '1.75rem', opacity: 0.7 }}
							transition={{ duration: 0.6, ease: 'easeOut' }}
						/>
					)}
				</motion.div>
			)}

			{/* 💥 Взрыв (ЗАМЕНЯЕТ ракету) */}
			{isFinished && (
				<motion.div
					className='absolute top-1/2 -translate-y-1/3 left-1/2 -translate-x-1/2 z-2
						bg-[url("/images/games/orbital-rush/boom.png")]
						bg-contain bg-no-repeat
						w-[14.19rem] h-[10.2344rem]'
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.4, ease: 'easeOut' }}
				/>
			)}

			{/* 🌌 Фон — НЕ откатывается */}
			<div className='relative w-full h-144 overflow-hidden'>
				<motion.div
					className='absolute w-full bottom-0'
					animate={isActive ? { y: '75%' } : { y: 0 }}
					transition={{ duration: 5, ease: 'easeInOut' }}
				>
 					<Image
						className='w-full object-cover'
						alt=''
						src='/images/games/orbital-rush/space-layer.png'
						width={375}
						height={2349}
					/>
				</motion.div>
			</div>
		</div>
	)
}

export default OrbitalRushGame

'use client'
import { ChangeEvent, useState } from 'react'
import { MinusIcon, PlusIcon } from '../icons'
import Button from '../ui/Button'
import { Checkbox } from '../ui/Checkbox'
import { Label } from '../ui/Label'
import { OrbitalRushPhase, useOrbitalRushStore } from '@/src/store/games/orbital-rush.store'

const PlayChip = () => {
	const phase = useOrbitalRushStore((s) => s.phase)
	const [betValue, setBetValue] = useState('4200')
	const startGame = useOrbitalRushStore((state) => state.startGame)
	const isLaunch = phase === OrbitalRushPhase.LAUNCH
	const betList = [
		{
			title: '50',
			value: '50'
		},
		{
			title: '100',
			value: '100'
		},
		{
			title: '200',
			value: '200'
		},
		{
			title: '500',
			value: '500'
		},
	]
	const handleChangeValueBet = (e: ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value

		// Убираем $, оставляем только цифры
		value = value.replace(/\$/g, '').replace(/\D/g, '')

		// Обновляем state
		setBetValue(value)
	}
	const handlePlay = () => {
		console.log('Запуск игры с ставкой', betValue)
		startGame() // 🚀 запускаем OrbitalRushGame
		
	}
	return (
		<div className='bg-buttons p-3 rounded-3.5xl'>
			<div className='flex items-center flex-wrap gap-x-5 gap-y-1 mb-4'>
				<div className="flex items-center gap-2">
					<Checkbox id="auto-bet" checked />
					<Label htmlFor="auto-bet">Auto Bet</Label>
				</div>
				<div className="flex items-center gap-2">
					<Checkbox id="auto-bet" disabled />
					<Label htmlFor="auto-withdraw">Auto Withdraw</Label>
				</div>
			</div>
			<div className='grid grid-cols-[58.4%_41.5%] gap-2'>
				<div className='rounded-2.5xl p-2 bg-[#342754] flex-1 flex flex-col gap-2'>
					<div className='flex items-center gap-2'>
						<button className='aspect-square w-9 shrink-0 bg-text rounded-[0.75rem] flex items-center justify-center' type="button"><MinusIcon /></button>
						<input
							className='w-full font-black text-xl text-center'
							type="text"
							value={`$${betValue}`}
							onChange={handleChangeValueBet}
						/>

						<button className='aspect-square w-9 shrink-0 bg-text rounded-[0.75rem] flex items-center justify-center' type="button"><PlusIcon strokeWidth={3} /></button>
					</div>
					<div className='flex gap-1'>
						{betList.map(item => (
							<div className='flex-1 min-w-fit text-nowrap h-6.5 text-white/70 bg-buttons flex items-center text-center justify-center rounded-full font-bold text-sm' key={item.value}>{item.title}</div>
						))}
					</div>
				</div>
				<Button className='text-xl w-full h-21.5 text-dark rounded-2.5xl border-4 border-[#342754] ' variant='primary'
					onClick={handlePlay}
				>{isLaunch ? 'Stop' : 'Play'}

				</Button>
			</div>
		</div>
	)
}

export default PlayChip
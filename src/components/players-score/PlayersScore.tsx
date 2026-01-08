import PlayScoreRow from './PlayScoreRow'

const PlayersScore = () => {
	return (
		<div >
			<div className='grid grid-cols-[1fr_4.625rem_4.625rem] text-sm font-semibold text-text mb-2'>
				<div className='pr-2'>Player</div>
				<div className='px-2'>Coefficient</div>
				<div className='pl-2 text-end'>Winning</div>
			</div>
			<div className='grid gap-1 h-45 overflow-y-auto pr-2 -mr-2'>
				<PlayScoreRow />
				<PlayScoreRow />
				<PlayScoreRow />
				<PlayScoreRow />
				<PlayScoreRow />
			</div>
		</div>
	)
}

export default PlayersScore
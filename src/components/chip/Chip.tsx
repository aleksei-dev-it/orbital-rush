import { FC } from 'react'

interface IChip {
	name?: string
	title?: string
}
const Chip: FC<IChip> = ({ name, title }) => {
	return (
		<div className='h-20 p-4 flex items-center flex-col bg-buttons justify-center gap-2 text-center rounded-2.5xl'>
			<div className='text-sm font-semibold text-text'>{name}</div>
			<div className='text-xl font-black'>{title}</div>
		</div>
	)
}

export default Chip
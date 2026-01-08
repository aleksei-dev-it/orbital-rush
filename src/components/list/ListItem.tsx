import { FC } from 'react'
import { IListItem } from './types'
import { cn } from '@/src/utils/tw-merge'


const ListItem: FC<IListItem> = ({ title, counter, className }) => {
	return (
		<div className={cn('flex items-center justify-between text-nowrap text-sm gap-3', className)} key={title}>
			<span className='text-ellipsis flex-1 overflow-hidden font-semibold text-text'>
				{title}
			</span>
			{counter && (
				<span className='font-black'>{counter}</span>
			)}
		</div>
	)
}

export default ListItem
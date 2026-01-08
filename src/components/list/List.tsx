import { FC } from 'react'
import { IList, IListItem, IListRow } from './types'
import ListItem from './ListItem'


const List: FC<IList> = ({ list }) => {
	return (
		<div>
			{
				list.map((statisticRow: IListRow, index: number) => (
					<div className='py-4 border-b border-buttons leading-none grid gap-1.5 first:pt-0 last:pb-0 last:border-none' key={index}>
						{statisticRow.map((statisticItem: IListItem) => (
							<ListItem title={statisticItem.title} counter={statisticItem.counter} key={statisticItem.title} />
						))}
					</div>
				))
			}
		</div>

	)
}

export default List
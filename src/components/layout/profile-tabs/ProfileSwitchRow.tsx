
import Image from 'next/image'
import { FC, ReactNode } from 'react'
import { Switch } from '../../ui/Switch'
import { cn } from '@/src/utils/tw-merge'
interface IProfileSwitchRow {
	title: string
	text: string
	icon?: string
	children?: ReactNode
	contentReverse?: boolean
	className?: string
}
const ProfileSwitchRow: FC<IProfileSwitchRow> = ({ icon, text, title, contentReverse, className, children }) => {
	return (
		<div className={cn('flex items-center min-h-13 px-4 py-2 rounded-[1rem] bg-buttons gap-3',className)}>
			{icon && (
				<div className='w-5 relative aspect-square shrink-0'>
					<Image alt={title} src={icon} fill />
				</div>
			)}
			<div className={cn('flex gap-1 leading-none flex-1', contentReverse ? 'flex-col-reverse' : 'flex-col')}>
				<div className='font-semibold text-white'>{title}</div>
				<div className='text-xs font-semibold text-text'>{text}</div>
			</div>
			{children ?? <Switch />}
		</div>
	)
}

export default ProfileSwitchRow
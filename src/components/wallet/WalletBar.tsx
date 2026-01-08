import { cn } from '@/src/utils/tw-merge'
import Image from 'next/image'
import { FC } from 'react'
import { PlusIcon } from '../icons'
interface IWalletBar {
	className?: string
}
const WalletBar: FC<IWalletBar> = ({ className }) => {
	return (
		<div className={cn('flex items-center gap-2 py-1.75', className)}>
			<div className='font-black text-sm flex items-center gap-1 rounded-full px-3 h-8 bg-[#140c49]/70'>
				<Image src='/images/crystal.svg' alt='' width={18} height={18} />
				<span>3403</span>
			</div>
			<div className='flex items-center bg-buttons rounded-2xl h-8 pr-1 pl-3 text-sm font-black'>
				<Image src='/images/coin.svg' alt='' width={16} height={16} />
				<span className='block ml-1 mr-1.5'>2,582</span>
				<button type="button" className='w-6 aspect-square shrink-0 rounded-full bg-accent flex items-center justify-center'><PlusIcon color='#0B1020' /></button>
			</div>
		</div>
	)
}

export default WalletBar
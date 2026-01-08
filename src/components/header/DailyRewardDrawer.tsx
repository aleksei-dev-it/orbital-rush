import { cn } from '@/src/utils/tw-merge'
import Button from '../ui/Button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/Drawer'
import DailyRewardItem from './DailyRewardItem'
import Container from '../container/Container'
import { dailyWin } from '@/src/assets/data/daily-win'
import ButtonIcon from '../ui/ButtonIcon'
import { CloseIcon } from '../icons'

const DailyRewardDrawer = () => {
	return (
		<Drawer>
			<DrawerTrigger>
				Daily reward
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>
						Daily reward
					</DrawerTitle>
					<DrawerDescription>Log in to the game <span className='text-white'>every day</span> and receive a daily reward.</DrawerDescription>
					<DrawerClose>
						<ButtonIcon size='medium' className='absolute right-4 p-2.5 top-3.5' icon={<CloseIcon />} />
					</DrawerClose>
				</DrawerHeader>
				<Container className='flex-1 overflow-y-auto pb-21 pt-4.5'>
					<div className='grid grid-cols-3 gap-2'>
						{dailyWin.map((item, index) => (
							<DailyRewardItem currentPrice={index === 0} day={index + 1} win={item.win} icon={item.icon} isMega={index === 6} key={index} />

						))}
					</div>
				</Container>
				<DrawerFooter className='absolute bottom-0 w-full backdrop-blur-[0.3125rem]'>
					<DrawerClose className=''>
						<Button className='w-full' variant='primary' as='div'>Claim</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}

export default DailyRewardDrawer
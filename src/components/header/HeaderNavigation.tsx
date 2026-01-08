
'use client'
import { PUBLIC_URL } from '@/src/config/url.config'
import { usePathname, useRouter } from 'next/navigation'
import Container from '../container/Container'
import { ChevronIcon, CloseIcon, DotsVerticalIcon } from '../icons'
import Button from '../ui/Button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '../ui/DropdownMenu'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/Drawer'
import DailyRewardDrawer from './DailyRewardDrawer'

const HeaderNavigation = () => {
	const pathname = usePathname()
	const router = useRouter()

	const isHome = pathname === PUBLIC_URL.home()

	const handleCloseOrLink = () => {
		if (!isHome) return router.back()

	}
	return (
		<Container className='fixed top-0 left-1/2 -translate-x-1/2 z-50'>
			<div className='flex items-center  justify-between py-2'>
				<Button
					size='small'
					blur
					isIconLeft
					className='pl-1'
					icon={isHome ? <CloseIcon /> : <ChevronIcon className='rotate-90' size={12} />}
					onClick={handleCloseOrLink}
				>
					{isHome ? 'Close' : 'Back'}
				</Button>
				<DailyRewardDrawer />
				<Button size='small' className='gap-4 px-2' as='div' isIconRight isIconLeft icon={<ChevronIcon />} secondIcon={<DotsVerticalIcon />} />
			</div>
		</Container>
	)
}

export default HeaderNavigation
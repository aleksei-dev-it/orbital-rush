'use client'
import { PUBLIC_URL } from '@/src/config/url.config'
import { cn } from '@/src/utils/tw-merge'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
const Navbar = () => {
	const [currentLink, setCurrentLink] = useState(0)
	const pathname = usePathname()
	const router = useRouter()
	const menu = [
		{
			title: 'Games',
			icon: '/images/icons/games.svg',
			link: PUBLIC_URL.home()
		},
		{
			title: 'Bonuses',
			icon: '/images/icons/bonuses.svg',
			link: PUBLIC_URL.bonuses()
		},
		{
			title: 'Partner',
			icon: '/images/icons/games.svg',
			link: PUBLIC_URL.partners()
		},
		{
			title: 'Wallet',
			icon: '/images/icons/wallet.svg',
			link: PUBLIC_URL.wallet()
		},
		{
			title: 'Profile',
			icon: '/images/icons/user.svg',
			link: PUBLIC_URL.profile()
		},
	]

	const hadnleChangeCurrentLink = (pathname: string) => {
		router.push(pathname)
	}
	return (
		<nav className='fixed bottom-0 left-1/2 -translate-x-1/2 pb-4 pt-2 max-w-152 w-full px-4 z-1'>

			<ul className='flex bg-white/12 p-1 rounded-full glass-effect'>
				{menu.map((item, index) => {
					const isActive = pathname === item.link
					return (
						<li key={index}
							className={cn(
								'flex-1 text-xs font-medium text-center py-2 px-1 flex items-center flex-col rounded-full cursor-pointer transition',
								isActive && 'bg-white/20'
							)}
							onClick={() => {
								hadnleChangeCurrentLink(item.link)

								console.log(pathname)
								console.log(item.link)

							}}
						>
							<div className='w-6 h-6 flex items-center justify-center relative' >
								<Image src={item.icon} alt='icon' fill loading='eager' />
							</div>
							<span>{item.title}</span>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Navbar
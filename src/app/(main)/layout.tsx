
import HeaderNavigation from '@/src/components/header/HeaderNavigation'
import Navbar from '@/src/components/layout/navbar/Navbar'
import { ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
	return (
		<div className='pb-21 pt-11'>
			<HeaderNavigation />
			{children}
			<Navbar />
		</div>
	)
}

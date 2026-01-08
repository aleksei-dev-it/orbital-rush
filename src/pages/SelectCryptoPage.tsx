'use client'
import { cryptoList } from '@/src/assets/data/crypto-list'
import Container from '@/src/components/container/Container'
import HeaderNavigation from '@/src/components/header/HeaderNavigation'
import Heading from '@/src/components/heading/Heading'
import { ChevronIcon } from '@/src/components/icons'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { PUBLIC_URL } from '../config/url.config'

export default function SelectCryptoPage() {
	const router = useRouter()
	return (
		<div className='flex flex-col min-h-screen overflow-hidden'>
			<Container >
				<HeaderNavigation />
				<div className='flex flex-col gap-4 py-4'>
					<Heading>Select Crypto</Heading>
					<div className='grid gap-2'>
						{cryptoList.map(wallet => (
							<div
								className='flex items-center gap-2 h-12 px-3 py-1 text-sm font-semibold uppercase rounded-[1rem] bg-buttons'
								key={wallet.title}
								onClick={() => router.push(PUBLIC_URL.wallet(`/select-crypto/${wallet.slug}`))}
							>
								<div className='w-7.5 aspect-square shrink-0 relative'><Image src={wallet.icon} alt={wallet.title} fill /></div>
								<span className='flex-1'>{wallet.title}</span>
								<div className='w-4 aspect-square shrink-0 -rotate-90 flex items-center justify-center opacity-50'><ChevronIcon size={12} /></div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</div>
	)
}

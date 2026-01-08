'use client'

import Container from '@/src/components/container/Container'
import Button from '@/src/components/ui/Button'
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/src/components/ui/Drawer'
import { Label } from '@/src/components/ui/Label'
import { RadioGroup, RadioGroupItem } from '@/src/components/ui/RadioGroup'
import { useRouter } from 'next/navigation'
import { PUBLIC_URL } from '../config/url.config'
import HeaderNavigation from '../components/header/HeaderNavigation'

export default function DepositPage() {
	const router = useRouter()
	return (
		<div className='flex flex-col min-h-screen overflow-hidden'>
			<Container>
				<HeaderNavigation />
				<div className='py-4 flex flex-col gap-8 leading-none text-center '>
					<div className='font-semibold'>Select the top-up amount:</div>
					<div className='font-black text-[3.25rem]'>$50.00</div>
					<div className='max-w-66.25 grid grid-cols-3 gap-2 mx-auto w-full'>
						<div className='font-semibold p-2 flex items-center justify-center h-9 rounded-full bg-buttons'>$10</div>
						<div className='font-semibold p-2 flex items-center justify-center h-9 rounded-full bg-buttons'>$50</div>
						<div className='font-semibold p-2 flex items-center justify-center h-9 rounded-full bg-buttons'>$100</div>
						<div className='font-semibold p-2 flex items-center justify-center h-9 rounded-full bg-buttons'>$500</div>
						<div className='font-semibold p-2 flex items-center justify-center h-9 rounded-full bg-buttons'>$1,000</div>
						<div className='font-semibold p-2 flex items-center justify-center h-9 rounded-full bg-buttons'>$5,000</div>
					</div>
				</div>
				<div className='grid grid-cols-2 gap-2'>
					<Button className='w-full'>Cancel</Button>
					<Drawer>
						<DrawerTrigger>
							<Button className='w-full' variant='primary' as='div'>Continue</Button>
						</DrawerTrigger>
						<DrawerContent>
							<DrawerHeader>
								<DrawerTitle className='text-2xl font-black'>Select Payment Method</DrawerTitle>
							</DrawerHeader>
							<div className='px-4'>
								<RadioGroup defaultValue="crypto">
									<Label htmlFor="r1"
										className="relative flex items-center gap-2.5 h-12 px-4 py-2 rounded-[1rem] bg-buttons border-2 border-text has-[button[data-state=checked]]:border-accent has-disabled:opacity-44
  								">
										<RadioGroupItem value="crypto" id="r1" />
										<span >Crypto</span>
									</Label>
									<Label htmlFor="r2"
										className="relative flex items-center gap-2.5 h-12 px-4 py-2 rounded-[1rem] bg-buttons border-2 border-text has-[button[data-state=checked]]:border-accent has-disabled:opacity-44
  								">
										<RadioGroupItem value="telegram-stars" id="r2" disabled />
										<span >Telegram Stars</span>
									</Label>
									<Label htmlFor="r3"
										className="relative flex items-center gap-2.5 h-12 px-4 py-2 rounded-[1rem] bg-buttons border-2 border-text has-[button[data-state=checked]]:border-accent has-disabled:opacity-44
  								">
										<RadioGroupItem value="credit-card" id="r3" disabled />
										<span >Credit Card</span>
									</Label>
								</RadioGroup>
							</div>
							<DrawerFooter>
								<Button variant='primary' onClick={() => router.push(PUBLIC_URL.wallet('/select-crypto'))}>Confirm</Button>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				</div>
			</Container>
		</div>
	)
}

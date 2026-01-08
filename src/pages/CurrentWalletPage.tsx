'use client'
import Container from '@/src/components/container/Container'
import HeaderNavigation from '@/src/components/header/HeaderNavigation'
import Heading from '@/src/components/heading/Heading'
import Button from '@/src/components/ui/Button'
import Image from 'next/image'
import { handleCopy } from '../utils/copy-text'
export default function CurrentWalletPage() {
	const address = '0x1FDAdae89539b739583C63D37059E8Cf3872D102'


	return (
		<div className='flex flex-col min-h-screen overflow-hidden bg-linear-180 from-[#0098EA] to-[#040307]'>
			<Container>
				<HeaderNavigation />
				<div className='py-4 flex flex-col gap-6'>
					<Heading className='text-center'>USDT (TON)</Heading>
					<div className='w-58.5 mx-auto flex flex-col gap-3'>
						<div className='bg-buttons p-5 text-center flex flex-col gap-4 rounded-3.5xl'>
							<div className='w-45 relative aspect-square mx-auto'>
								<Image alt='qr' src='/images/wallets/qr.svg' fill />
							</div>
							<span className='text-sm font-semibold text-text'>Scan the QR code to send USDT to your wallet.</span>
						</div>
						<div className='bg-buttons p-4 text-center flex flex-col gap-2 rounded-3.5xl items-center'>
							<span className='text-sm font-semibold text-text'>Your address USDT (TON)</span>
							<div className='text-sm font-black break-all'>{address}</div>
							<Button
								size='meduim'
								onClick={() => handleCopy(address)}
							>Copy address</Button>
						</div>
					</div>
				</div>
			</Container>
			<div className='fixed left-1/2 -translate-1/2 bottom-0 mx-auto px-4 max-w-152 w-full z-10 '>
				<div className='text-text py-2.5 px-4 rounded-2.5xl text-xs bg-buttons'>
					<span className='text-white'>Notice:</span> Send only TON (Toncoin) to this deposit address. Coins will be deposited automatically after 6 network confirmations. Smart contract addresses are not supported.
				</div></div>
		</div>
	)
}

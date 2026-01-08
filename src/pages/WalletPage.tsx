'use client'

import { profileHistory } from '@/src/assets/data/history'
import Container from '@/src/components/container/Container'
import Heading from '@/src/components/heading/Heading'
import { MinusIcon, PlusIcon } from '@/src/components/icons'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/src/components/ui/Accordion'
import Button from '@/src/components/ui/Button'
import { Input } from '@/src/components/ui/Input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/src/components/ui/Table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/components/ui/Tabs'
import { getStatusColor } from '@/src/utils/statusColor'
import { cn } from '@/src/utils/tw-merge'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { PUBLIC_URL } from '../config/url.config'

export default function WalletPage() {
	const router = useRouter()
	return (
		<div className='flex flex-col min-h-screen overflow-hidden'>
			<Container>
				<div className='flex flex-col gap-6 pt-4'>
					<Heading>Wallet</Heading>
					<div className='flex flex-col gap-6 flex-1 overflow-y-auto'>
						<div className='rounded-3.5xl p-4 bg-buttons text-center'>
							<div className='text-sm font-semibold text-text mb-2'>Total balance</div>
							<div>
								<div className='flex items-center gap-2 justify-center leading-none text-[2rem] font-black'>
									<div className='w-6.5 aspect-square relative shrink-0'>
										<Image alt='coin' src='/images/icons/coin.svg' fill />
									</div>
									<div>24,850.<span className='opacity-44'>80</span></div>
								</div>
								<div className='flex gap-2 pt-4'>
									<Button className='flex-1'><MinusIcon /> Withdraw</Button>
									<Button
										className='flex-1'
										variant='primary'
										onClick={() => router.push(PUBLIC_URL.wallet('/deposit'))}
									>
										<PlusIcon /> Deposit
									</Button>
								</div>
							</div>
						</div>
						<Accordion type="single" collapsible className='rounded-3.5xl bg-buttons p-4'>
							<AccordionItem className='gap-2 flex flex-col' value="promo">
								<AccordionTrigger className='p-0 font-semibold'>Promo code</AccordionTrigger>
								<AccordionContent className='pb-0'>
									<div className='flex gap-2'>
										<Input
											placeholder='HJDPSW'
										/>
										<Button variant='primary'>Apply</Button>
									</div>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Tabs defaultValue="all" className='flex-1 overflow-hidden'>
							<TabsList>
								<TabsTrigger value="all">All</TabsTrigger>
								<TabsTrigger value="succesful">Succesful</TabsTrigger>
								<TabsTrigger value="rejected">Rejected</TabsTrigger>
							</TabsList>
							<TabsContent value="all" className='orelative verflow-y-auto pr-2 -mr-2'>
								<Table>
									<TableHeader className='sticky top-0'>
										<TableRow>
											<TableHead>Date</TableHead>
											<TableHead>Rate</TableHead>
											<TableHead className="text-right">Status</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody className='overflow-y-auto'>
										{profileHistory.map((item) => (
											<TableRow key={item.date}>
												<TableCell className="font-medium">{item.date}</TableCell>
												<TableCell>{item.rate}</TableCell>
												<TableCell className={cn("text-right",
													getStatusColor(item.status)
												)}>{item.status}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TabsContent>
							<TabsContent value="succesful" className='orelative verflow-y-auto pr-2 -mr-2'>
								<Table>
									<TableHeader className='sticky top-0'>
										<TableRow>
											<TableHead>Date</TableHead>
											<TableHead>Rate</TableHead>
											<TableHead className="text-right">Status</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody className='overflow-y-auto'>
										{profileHistory.map((item) => (
											<TableRow key={item.date}>
												<TableCell className="font-medium">{item.date}</TableCell>
												<TableCell>{item.rate}</TableCell>
												<TableCell className={cn("text-right",
													getStatusColor(item.status)
												)}>{item.status}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TabsContent>
							<TabsContent value="rejected" className='relative overflow-y-auto pr-2 -mr-2'>
								<Table>
									<TableHeader className='sticky top-0'>
										<TableRow>
											<TableHead>Date</TableHead>
											<TableHead>Rate</TableHead>
											<TableHead className="text-right">Status</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody className='overflow-y-auto'>
										{profileHistory.map((item) => (
											<TableRow key={item.date}>
												<TableCell className="font-medium">{item.date}</TableCell>
												<TableCell>{item.rate}</TableCell>
												<TableCell className={cn("text-right",
													getStatusColor(item.status)
												)}>{item.status}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TabsContent>
						</Tabs>

					</div>
				</div>
			</Container>
		</div>
	)
}

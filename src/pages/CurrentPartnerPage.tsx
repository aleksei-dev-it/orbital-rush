'use client'

import { companyStatisticShort, companyStatisticTab } from '../assets/data/company-statistic'
import Container from '../components/container/Container'
import Heading from '../components/heading/Heading'
import { CopyIcon, EditIcon } from '../components/icons'
import ProfileSwitchRow from '../components/layout/profile-tabs/ProfileSwitchRow'
import List from '../components/list/List'
import ListItem from '../components/list/ListItem'
import Button from '../components/ui/Button'
import ButtonIcon from '../components/ui/ButtonIcon'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs'
import { handleCopy } from '../utils/copy-text'

export default function CurrentPartnerPage() {
	return (
		<div className='flex flex-col  overflow-hidden flex-1'>
			<Container className='flex-1 py-4 flex flex-col gap-6'>

				<div className='flex items-center justify-between gap-2'>
					<div className='flex flex-col gap-1.5 leading-none'>
						<Heading as='h1'>Company 1</Heading>
						<p className='font-semibold text-sm text-text'>Added on December 18 at 14:09:23</p>
					</div>
					<div className='leading-none text-sm font-semibold px-2 py-1 rounded-full bg-[#34C759]'>Active</div>
				</div>
				<ProfileSwitchRow
					contentReverse
					title='https://utms.pro/OCNSB'
					text='Link'
					className='py-3'
				>
					<ButtonIcon
						onClick={() => handleCopy('https://utms.pro/OCNSB')}
						icon={<CopyIcon />}
					/>
				</ProfileSwitchRow>
				<div className='flex flex-col gap-4'>
					<Heading size='medium' as='h3'>Statistics</Heading>
					<div>
						{companyStatisticShort.map((statisticRow, index) => (
							<div className='py-4 border-b border-buttons leading-none grid gap-1.5 first:pt-0 last:pb-0 last:border-none' key={index}>
								{statisticRow.map(statisticItem => (
									<div className='flex items-center justify-between text-nowrap text-sm gap-3' key={statisticItem.title}>
										<span className='text-ellipsis flex-1 overflow-hidden font-semibold text-text'>
											{statisticItem.title}
										</span>
										<span className='font-black'>{statisticItem.counter}</span>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
				<Tabs defaultValue="deposits" className='flex-1 overflow-hidden'>
					<TabsList>
						<TabsTrigger value="deposits">Deposits</TabsTrigger>
						<TabsTrigger value="my">My</TabsTrigger>
						<TabsTrigger value="other">Other</TabsTrigger>
					</TabsList>
					<TabsContent value="deposits" className='orelative verflow-y-auto pr-2 -mr-2'>
						<div className='flex flex-col gap-4'>
							<List list={companyStatisticTab} />
							<ListItem title='Data is updated every few minutes.' />
						</div>
					</TabsContent>
					<TabsContent value="my" className='orelative verflow-y-auto pr-2 -mr-2'>

					</TabsContent>
					<TabsContent value="other" className='relative overflow-y-auto pr-2 -mr-2'>

					</TabsContent>
				</Tabs>
				<Button className='w-full'>
					<EditIcon />
					Edit
				</Button>
			</Container>
		</div>
	)
}

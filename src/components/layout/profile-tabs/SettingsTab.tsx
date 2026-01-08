'use client'

import { handleCopy } from '@/src/utils/copy-text'
import { ChevronIcon, CopyIcon } from '../../icons'
import Button from '../../ui/Button'
import ButtonIcon from '../../ui/ButtonIcon'
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../../ui/Drawer'
import { docList } from './doc-list'
import ProfileSwitchRow from './ProfileSwitchRow'

const SettingsTab = () => {
	return (
		<div className='flex flex-col gap-6'>
			<div className='grid gap-2'>
				<ProfileSwitchRow
					icon='/images/icons/lock.svg'
					title='2F Authentication'
					text='Account security'
				/>
				<ProfileSwitchRow
					icon='/images/icons/volume.svg'
					title='Sounds'
					text='Game sounds'
				/>
				<ProfileSwitchRow
					icon='/images/icons/vibration.svg'
					title='Vibration'
					text='Haptic feedback'
				/>
				<ProfileSwitchRow
					icon='/images/icons/anonym.svg'
					title='Anonymity'
					text='Your activity is hidden from other users.'
				/>
				<ProfileSwitchRow
					icon='/images/icons/globus.svg'
					title='Language'
					text='Select language'
				>
					<div className='flex items-center gap-2.5'>
						<div className='text-sm font-semibold'>English</div>
						<div className='-rotate-90 opacity-50 w-4 aspect-square shrink-0 flex items-center justify-center'><ChevronIcon size={12} /></div>
					</div>
				</ProfileSwitchRow>
				<ProfileSwitchRow
					icon='/images/icons/doc.svg'
					title='Official Documents'
					text='Account security'
				>
					<Drawer>
						<DrawerTrigger>
							<div className='-rotate-90 opacity-50 w-4 aspect-square shrink-0 flex items-center justify-center'><ChevronIcon size={12} /></div>
						</DrawerTrigger>
						<DrawerContent>
							<DrawerHeader>
								<DrawerTitle className='text-2xl font-black'>Official <br /> Documents</DrawerTitle>
							</DrawerHeader>
							<div className='my-auto'>
								<ul className='grid items-center gap-6'>
									{docList.map(item => (
										<li className='text-accent font-semibold text-center leading-none' key={item.title}>{item.title}</li>
									))}
								</ul>
							</div>
							<DrawerFooter>
								<DrawerClose>
									<Button className='w-full' as='span'>Cancel</Button>
								</DrawerClose>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>

				</ProfileSwitchRow>
			</div>
			<div>
				<div className='font-black text-text mb-4'>Supports</div>
				<div className='grid gap-2'>
					<ProfileSwitchRow
					contentReverse
						title='support@orbitalrush.games'
						text='Supports'
					>
						<ButtonIcon
							onClick={() => handleCopy('support@orbitalrush.games')}
							icon={<CopyIcon />}
						/>
					</ProfileSwitchRow>
					<ProfileSwitchRow
					contentReverse
						title='support@orbitalrush.games'
						text='Supports'
					>
						<ButtonIcon
							onClick={() => handleCopy('support@orbitalrush.games')}
							icon={<CopyIcon />}
						/>
					</ProfileSwitchRow>
				</div>
			</div>
		</div>
	)
}

export default SettingsTab
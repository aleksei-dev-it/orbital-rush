import Image from 'next/image'
import Chip from '../../chip/Chip'
import { EditIcon } from '../../icons'
import Avatar from '../../ui/Avatar'
import Button from '../../ui/Button'
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../../ui/Drawer'
import { Field, FieldLabel } from '../../ui/Field'
import { Input } from '../../ui/Input'

const AccountTab = () => {
	return (
		<div className='flex flex-col gap-6'>
			<div className='flex flex-col gap-4 items-center justify-center text-center'>
				<Avatar className='border-[0.1875rem]' size={94} name='New Keyboard' imgSrc='/images/avatars/avatar-5.jpg' BgColor='#7F7F7F' />
				<div className='flex flex-col text-cnter items-center justify-center font-semibold'>
					<h3 className=' text-xl'>New Keyboard</h3>
					<p className='text-text'>@nicktg</p>
				</div>
				<Drawer>
					<DrawerTrigger>
						<Button as='div' size='meduim'>
							<span className='flex items-center justify-center w-4 shrink-0 aspect-square'>
								<EditIcon />
							</span>
							Edit
						</Button>
					</DrawerTrigger>
					<DrawerContent>
						<DrawerHeader>
							<DrawerTitle>Edit profile</DrawerTitle>
						</DrawerHeader>
						<div className='px-4'>
							<div className='relative mx-auto w-23.5 mb-6'>
								<Avatar className='border-[0.1875rem]' size={94} name='New Keyboard' imgSrc='/images/avatars/avatar-5.jpg' BgColor='#7F7F7F' />
								<label className='w-10 shrink-0 aspect-square absolute rounded-full flex items-center justify-center bg-buttons backdrop-blur-lg -right-1 -bottom-2' >
									<input type="file" hidden />
									<span className='w-4 aspect-square relative'>
										<Image src='/images/icons/edit.svg' fill alt='edit' />
									</span>
								</label>
							</div>
							<Field>
								<FieldLabel htmlFor='nickname'>Nickname</FieldLabel>
								<Input
									id="Nickname"
									placeholder="Nickname"
									required
								/>
							</Field>
						</div>
						<DrawerFooter className='flex-row'>
							<DrawerClose className='w-full'>
								<Button className='w-full' as='div'>Cancel</Button>
							</DrawerClose>
							<Button className='w-full' variant='primary'>Save</Button>

						</DrawerFooter>
					</DrawerContent>
				</Drawer>

			</div>
			<div className='grid grid-cols-2 gap-2'>
				<Chip name='Total bets' title='258' />
				<Chip name='Total winnings' title='$5,258' />
				<Chip name='Max. wins' title='$427' />
				<Chip name='Max. coefficient' title='x260,34' />
			</div>
			<div>
				<div className='text-lg font-black mb-4'>Latest bets</div>
				<div className='py-9 flex items-center justify-center gap-6 min-h-58.75 flex-col'>
					<div className='flex flex-col items-center justify-center gap-4 leading-none'>
						<div className='w-8 aspect-square shrink-0 relative'>
							<Image fill alt='' src='/images/icons/cube.svg' />
						</div>
						<div className='font-semibold'>No rates available</div>
						<div className='text-xs font-semibold text-text'>It's time to play</div>
					</div>
					<Button className='min-w-18' variant='primary'>Play</Button>
				</div>
			</div>
		</div>
	)
}

export default AccountTab
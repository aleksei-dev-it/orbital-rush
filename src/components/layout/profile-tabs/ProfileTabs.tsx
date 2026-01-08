import Container from '../../container/Container'
import Heading from '../../heading/Heading'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/Tabs'
import AccountTab from './AccountTab'
import HistoryTab from './HistoryTab'
import SettingsTab from './SettingsTab'

const ProfileTabs = () => {
	return (
		<Container className='pt-4 pb-21 overflow-hidden flex flex-col'>

			<Heading className='mb-6'>Profile</Heading>
			<Tabs defaultValue="account" className='flex-1 overflow-hidden'>
				<TabsList>
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="history">History</TabsTrigger>
					<TabsTrigger value="settings">Settings</TabsTrigger>
				</TabsList>
				<TabsContent value="account" className='orelative verflow-y-auto pr-2 -mr-2'>
					<AccountTab />
				</TabsContent>
				<TabsContent value="history" className='orelative verflow-y-auto pr-2 -mr-2'>
					<HistoryTab />
				</TabsContent>
				<TabsContent value="settings" className='relative overflow-y-auto pr-2 -mr-2'>
					<SettingsTab />
				</TabsContent>
			</Tabs>
		</Container>
	)
}

export default ProfileTabs
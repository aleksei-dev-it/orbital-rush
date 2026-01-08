import { profileHistory } from '@/src/assets/data/history'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../../ui/Table'
import { cn } from '@/src/utils/tw-merge'
import { getStatusColor } from '@/src/utils/statusColor'

const HistoryTab = () => {

	return (
		<Table>
			<TableHeader className='sticky top-0'>
				<TableRow>
					<TableHead>Date</TableHead>
					<TableHead>Game</TableHead>
					<TableHead>Rate</TableHead>
					<TableHead className="text-right">Status</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody className='overflow-y-auto'>
				{profileHistory.map((item) => (
					<TableRow key={item.date}>
						<TableCell className="font-medium">{item.date}</TableCell>
						<TableCell>{item.game}</TableCell>
						<TableCell>{item.rate}</TableCell>
						<TableCell className={cn("text-right",
							getStatusColor(item.status)
						)}>{item.status}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
export default HistoryTab
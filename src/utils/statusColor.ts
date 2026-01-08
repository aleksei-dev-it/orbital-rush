export const getStatusColor = (status: string) => {
	switch (status.toLowerCase()) {
		case 'success':
			return 'text-[#34C759]'
		case 'pending':
			return 'text-accent'
		case 'failed':
		case 'error':
			return 'text-[#FF383C]'
		default:
			return 'text-muted-foreground'
	}
}

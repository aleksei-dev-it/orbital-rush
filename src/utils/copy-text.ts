import { toast } from 'sonner'

export const handleCopy = async (text:string) => {
		try {
			await navigator.clipboard.writeText(text)
			// при желании можно добавить уведомление
			// alert('Address copied!')
			toast.success("Copied!")
		} catch (err) {
			console.error('Failed to copy:', err)
		}
	}
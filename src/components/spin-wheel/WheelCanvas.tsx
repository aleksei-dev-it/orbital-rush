'use client'
import { slots } from '@/src/assets/data/slots'
import {
	FC,
	useEffect,
	useRef,
	useState,
	forwardRef,
	useImperativeHandle,
} from 'react'

export type WheelCanvasRef = {
	spin: () => void
}

const OUTER_SIZE = 460
const BORDER = 98
const CANVAS_SIZE = OUTER_SIZE + BORDER * 2



const WheelCanvas = forwardRef<WheelCanvasRef, {}>((_, ref) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([])
	const [isLoading, setIsLoading] = useState(true)

	const [angle, setAngle] = useState(0)
	const [spinning, setSpinning] = useState(false)
	const [targetIndex, setTargetIndex] = useState<number | null>(null)
	const slotPathRef = useRef<Path2D | null>(null)
	useEffect(() => {
		slotPathRef.current = new Path2D(
			'M83.1591 28.2629C84.3524 19.4516 84.949 15.0459 83.5217 11.2612C82.3293 8.09967 79.7926 5.03102 76.9117 3.26539C73.463 1.15171 69.3472 0.926766 61.1157 0.476871C48.4458 -0.215604 35.7459 -0.153878 23.0834 0.66172C14.8566 1.19161 10.7432 1.45655 7.31521 3.60365C4.45166 5.3972 1.94482 8.49037 0.783306 11.6633C-0.607173 15.4617 0.0322358 19.8614 1.31106 28.6607L5.8039 59.5749C7.09065 68.4288 7.73402 72.8557 9.69942 75.8345C11.5602 78.6548 13.6801 80.422 16.7891 81.7452C20.0729 83.1426 25.0382 82.961 34.9689 82.5978C39.9863 82.4143 45.0083 82.3899 50.0272 82.5246C59.961 82.7913 64.9278 82.9246 68.1978 81.4953C71.2939 80.142 73.3964 78.3542 75.2297 75.516C77.1661 72.5182 77.7664 68.0853 78.967 59.2194L83.1591 28.2629Z'
		)
	}, [])
	// 🔹 публичный метод запуска
	useImperativeHandle(ref, () => ({
		spin() {
			if (spinning) return
			const randomIndex = Math.floor(Math.random() * slots.length) // Рандномный сегмент.В дальнейшем из БД прокидывать
			setTargetIndex(randomIndex)
			setSpinning(true)
		},
	}))

	// Загрузка изображений
	useEffect(() => {
		const loadImages = async () => {
			const images = await Promise.all(
				slots.map(
					slot =>
						new Promise<HTMLImageElement | null>(resolve => {
							if (!slot.imageUrl) return resolve(null)
							const img = new Image()
							img.onload = () => resolve(img)
							img.onerror = () => resolve(null)
							img.src = slot.imageUrl
						})
				)
			)
			setLoadedImages(images.filter(Boolean) as HTMLImageElement[])
			setIsLoading(false)
		}
		loadImages()
	}, [])

	// Рендер колеса
	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas || isLoading) return
		const ctx = canvas.getContext('2d')
		if (!ctx) return

		const dpr = window.devicePixelRatio || 1
		canvas.width = CANVAS_SIZE * dpr
		canvas.height = CANVAS_SIZE * dpr
		canvas.style.width = `${CANVAS_SIZE}px`
		canvas.style.height = `${CANVAS_SIZE}px`
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

		const center = CANVAS_SIZE / 2
		const radius = OUTER_SIZE / 2 + BORDER / 2
		const slotRadius = OUTER_SIZE / 2
		const slice = (Math.PI * 2) / slots.length

		ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)

		// Внешнее кольцо
		ctx.beginPath()
		ctx.arc(center, center, radius, 0, Math.PI * 2)
		ctx.lineWidth = BORDER
		ctx.strokeStyle = 'rgba(255,255,255,0.24)'
		ctx.stroke()

		// Слоты
		slots.forEach((slot, i) => {
			const anglePerSlot = i * slice + angle

			ctx.save()
			ctx.translate(center, center)
			ctx.rotate(anglePerSlot)
			// 🔥 opacity логика
			if (!spinning && targetIndex !== null) {
				ctx.globalAlpha = i === targetIndex ? 1 : 0.52
			} else {
				ctx.globalAlpha = 0.52
			}
			const w = 84
			const h = 82

			const grad = ctx.createLinearGradient(0, -h / 2, 0, h / 2)
			grad.addColorStop(0, slot.bgGradient[0])
			grad.addColorStop(1, slot.bgGradient[1])

			ctx.save()
			ctx.translate(-w / 2, -slotRadius - 7 - h)
			ctx.clip(slotPathRef.current!)
			ctx.fillStyle = grad
			ctx.fillRect(0, 0, w, h)

			if (slot.imageUrl && loadedImages[i]) {
				const imgSize = 36
				ctx.drawImage(
					loadedImages[i],
					w / 2 - imgSize / 2,
					h - 8 - imgSize,
					imgSize,
					imgSize
				)
			}
			ctx.restore()

			ctx.fillStyle = '#fff'
			ctx.font = `600 ${slot.size}px sans-serif`
			ctx.textAlign = 'center'
			ctx.textBaseline = 'middle'
			ctx.fillText(slot.win, 0, -slotRadius - 70)

			ctx.restore()
		})
	}, [angle, loadedImages, isLoading, targetIndex, spinning])

	// Вращение
	useEffect(() => {
		if (!spinning || targetIndex === null) return

		const duration = 4000
		const start = performance.now()
		const startAngle = angle

		const slice = (Math.PI * 2) / slots.length
		const minRotations = 3

		// Угол, при котором нужный слот будет сверху (стрелка на 12 часов)

		const targetSlotAngle = Math.PI - targetIndex * slice

		// Нормализуем текущий угол
		const currentNormalized =
			((startAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)

		// Сколько нужно докрутить до нужного слота (ТОЛЬКО ВПЕРЁД)
		let delta =
			targetSlotAngle - currentNormalized

		if (delta < 0) {
			delta += 2 * Math.PI
		}

		// Минимум 3 полных оборота
		const finalDelta =
			minRotations * 2 * Math.PI + delta

		const finalAngle = startAngle + finalDelta

		const animate = (now: number) => {
			const t = Math.min((now - start) / duration, 1)
			const easeOut = 1 - Math.pow(1 - t, 3)

			setAngle(startAngle + easeOut * finalDelta)

			if (t < 1) requestAnimationFrame(animate)
			else setSpinning(false)
		}

		requestAnimationFrame(animate)
	}, [spinning, targetIndex])


	return <canvas ref={canvasRef} />
})

WheelCanvas.displayName = 'WheelCanvas'
export default WheelCanvas

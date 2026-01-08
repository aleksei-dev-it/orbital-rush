import React from 'react'

const RewardCard = () => {
	return (
		<div className='flex flex-col gap-3 rounded-[28px] min-h-25 p-4  shrink-0 items-start bg-linear-180 from-[#121E26] to-[#344852] even:from-[#485057] even:to-[#8294A1]'>
			<div className='font-bold'>Join our Telegram bot</div>
			<button className='py-2 px-4 bg-white/20 rounded-full text-sm font-black' type="button">Receive</button>
		</div>
	)
}

export default RewardCard
import React from 'react'
import Avatar from '../ui/Avatar'

const PlayScoreRow = () => {
	return (
		<div className='grid grid-cols-[1fr_4.625rem_4.625rem] text-sm font-semibold bg-linear-90 from-white/12 to-white/0 h-9 rounded-xl '>
			<div className='flex items-center gap-1 p-2 overflow-hidden'>
				<Avatar className='shrink-0' borderColor='rgba(255,255,255,0.44)' BgColor='#fff' imgSrc='/images/avatars/avatar-1.jpg' name='@NickName' size={20} />
				<span className='text-ellipsis overflow-hidden w-full flex-1'>@NickName</span>
			</div>
			<div className='p-2'>5.27x</div>
			<div className='p-2 text-end'>$250</div>
		</div>
	)
}

export default PlayScoreRow
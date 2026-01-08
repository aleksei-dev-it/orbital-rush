import { PUBLIC_URL } from '@/src/config/url.config'
import { ILogo } from '@/src/types/logo.types'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Logo: FC<ILogo> = ({ variant = 'default' }) => {
	return (
		<Link href={PUBLIC_URL.home()}>
			<Image src={`/images/${variant === 'light' ? 'logo-light.svg' : 'logo.svg'}`} alt='Orbital Rush logo' width={120} height={30}/>
		</Link>
	)
}

export default Logo
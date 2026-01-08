import { FC } from 'react'
import Container from '../container/Container'
import Logo from '../logo/Logo'
import WalletBar from '../wallet/WalletBar'
type LogoVariant = 'light' | 'default'
interface IHeader {
	variantLogo?: LogoVariant
}
const Header: FC<IHeader> = ({ variantLogo = 'default' }) => {

	return (
		<header className='relative z-10'>
			<Container>
				<div className='py-2 flex items-center gap-4 justify-between'>
					<Logo variant={variantLogo} />
					<WalletBar />
				</div>
			</Container>
		</header>
	)
}

export default Header
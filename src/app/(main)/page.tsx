import Header from '@/src/components/header/Header'
import BonusRewards from '@/src/components/layout/bonus-rewards/BonusRewards'
import Games from '@/src/components/layout/games/Games'
import Navbar from '@/src/components/layout/navbar/Navbar'
import SpinBanner from '@/src/components/spin-banner/SpinBanner'

export default function Home() {
  return (
    <div className='flex flex-col overflow-hidden'>
      <Header />
      <main className='flex-1 '>
        <SpinBanner />
        <Games />
        <BonusRewards />
      </main>
    </div>

  )
}

import type { Metadata } from "next"
import { Archivo } from "next/font/google"
import '@/src/styles/_animations.css'
import "@/src/styles/globals.css"
import { APP_URL } from '../config/url.config'
import { SITE_NAME, SITE_DESCRIPTION } from '../constants/seo.constants'
import { ReactNode } from 'react'
import { Toaster } from '../components/ui/Sonner'
const archivoSans = Archivo({
  variable: "--font-archivo-sans",
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
    template: `%s - ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(APP_URL),
  applicationName: SITE_NAME
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${archivoSans.variable} antialiased
          pt-[env(safe-area-inset-top)]
          pb-[env(safe-area-inset-bottom)]
          pl-[env(safe-area-inset-left)]
          pr-[env(safe-area-inset-right)]
        `}
      >
        <div className='flex flex-col min-h-screen'>
          {children}
        </div>
        <Toaster position='top-center' />
      </body>
    </html>
  )
}

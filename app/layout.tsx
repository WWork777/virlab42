import localFont from 'next/font/local'
import './globals.css'

const rubik = localFont({
	src: './fonts/Rubik-Regular.woff2',
	variable: '--font-rubik',
	weight: '1400 500 600 700 800 900',
})
const cormorant = localFont({
	src: './fonts/CormorantGaramond-Bold.woff2',
	variable: '--font-cormorant',
	weight: '300 400 500 600 700',
})

// const rubik = Rubik({
// 	subsets: ['cyrillic'],
// 	variable: '--font-rubik',
// 	weight: ['400', '500', '600', '700', '800', '900'],
// })
// const cormorant = Cormorant_Garamond({
// 	subsets: ['cyrillic'],
// 	variable: '--font-cormorant',
// 	weight: ['300', '400', '500', '600', '700'],
// })

import Footer from '@/components/shared/footer/Footer'
import Header from '@/components/shared/header/header'
import MainForm from '@/components/shared/mainForm/MainForm'
import { YandexMetrika } from '@/components/YandexMetrika/YandexMetrika'
import { Suspense } from 'react'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${rubik.variable} ${cormorant.variable} antialiased`}>
				<Suspense fallback={<></>}>
					<YandexMetrika />
				</Suspense>
				<Header />
				{children}
				<MainForm />
				<Footer />
			</body>
		</html>
	)
}

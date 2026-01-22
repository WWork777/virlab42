import type { Metadata } from 'next'
import HomeAbout from '../components/home/home-about/home-about'
import HomeService from '../components/home/home-service/home-service'
import HomeAdvantage from '../components/home/home-advantage/home-advantage'
import HomeHero from '../components/home/home-hero/home-hero'
import HomeProjects from '../components/home/home-projects/home-projects'
import HomeTeam from '../components/home/home-team/home-team'
import Brands from '../components/shared/brands/brands'
import Pricing from '@/components/pricing/pricing'
import Calculator from '@/components/calculator/calculator'

export const metadata: Metadata = {
	metadataBase: new URL('https://virlab42.ru'),
	title: 'Создание сайтов, 3D-печать, дизайн и продвижение — IT-компания VIRLAB',
	description:
		'VIRLAB — профессиональная IT-компания: создаем сайты, 3D-модели, фирменный стиль, продвигаем',
	keywords:
		'создание сайтов, 3D-печать, веб-дизайн, продвижение сайтов, заказать сайт под ключ, айти компания, разработка сайтов, digital агентство',
	alternates: {
		canonical: '/',
	},
	openGraph: {
		url: '/',
		title: 'Создание сайтов, 3D-печать, дизайн и продвижение — IT-компания VIRLAB',
		description:
			'VIRLAB — профессиональная IT-компания: создаем сайты, 3D-модели, фирменный стиль, продвигаем',
		images: {
			url: '/og/og.jpg',
			width: 1200,
			height: 630,
		},
	},
}
export default function HomePage() {
	return (
		<div>
			<HomeHero />
			<HomeService />
			<Pricing/>
			<Calculator/>
			<HomeAdvantage />
			<Brands revers={false} />
			<HomeAbout />
			<Brands revers={false} />
			<HomeProjects />
			{/* <HomeTeam /> */}
		</div>
	)
}

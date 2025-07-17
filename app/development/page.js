export const metadata = {
	metadataBase: new URL('https://virlab42.ru'),
	title: 'Создание сайтов под ключ Москва Кемерово — IT-компания VIRLAB',
	description:
		'Разработка сайтов любой сложности — лендинги, корпоративные сайты, интернет-магазины. VIRLAB — полное сопровождение и продвижение.',
	keywords:
		'создание сайтов, заказать сайт, разработка сайтов под ключ, веб-студия, digital агентство, создание сайтов для бизнеса, продвижение сайтов',
	alternates: {
		canonical: '/development',
	},
	openGraph: {
		url: '/development',
		title: 'Создание сайтов под ключ Москва Кемерово — IT-компания VIRLAB',
		description:
			'Разработка сайтов любой сложности — лендинги, корпоративные сайты, интернет-магазины. VIRLAB — полное сопровождение и продвижение.',
		images: {
			url: '/og/og.jpg',
			width: 1200,
			height: 630,
		},
	},
}
import DevelopmentHero from '@/components/development/development-hero/development-hero'
import DevelopmentPayment from '@/components/development/development-payment/development-payment'
import Advantage from '@/components/shared/advantage/advantage'
import Brands from '@/components/shared/brands/brands'
import Pricing from '@/components/shared/pricing/pricing'
import Stages from '@/components/shared/stages/stages'
import WhyAccordion from '@/components/shared/why-accordion/why-accordion'
import Why from '@/components/shared/why/why'
import HomeProjects from '@/components/home/home-projects/home-projects'
import { advantage } from '@/data/advantage'
import { pricing } from '@/data/pricing'
import { stages } from '@/data/stages'
import { why } from '@/data/why'

const DevelopmentPage = () => {
	return (
		<div>
			<DevelopmentHero />
			<Why why={why.default} />
			<Advantage advantage={advantage.development} />
			<HomeProjects />
			<Brands revers={false} />
			<WhyAccordion page='development' />
			<Pricing pricing={pricing.development} />
			<DevelopmentPayment />
		</div>
	)
}

export default DevelopmentPage

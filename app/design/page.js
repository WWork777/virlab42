export const metadata = {
	metadataBase: new URL('https://virlab42.ru'),
	title: 'Графический дизайн, логотипы, фирменный стиль Москва Кемерово — VIRLAB',
	description: 'Разработка логотипов, фирменного стиля, презентаций, баннеров и рекламных материалов для бизнеса. Креативная команда VIRLAB.',
	keywords:
		'графический дизайн, заказать логотип, разработка фирменного стиля, создание баннеров, услуги дизайна, брендбук',
	alternates: {
		canonical: '/design',
	},
	openGraph: {
		url: '/design',
		title: 'Графический дизайн, логотипы, фирменный стиль Москва Кемерово — VIRLAB',
		description: 'Разработка логотипов, фирменного стиля, презентаций, баннеров и рекламных материалов для бизнеса. Креативная команда VIRLAB.',
		images: {
			url: '/og/og.jpg',
			width: 1200,
			height: 630,
		},
	},
}

import LogosHero from '@/components/logos/logos-hero/logos-hero'
import Brands from '@/components/shared/brands/brands'
import Advantage from '@/components/shared/advantage/advantage'
import CarouselLogos from '@/components/logos/logos-carousel/logos-carousel'
import CarouselBanner from '@/components/logos/banner-carousel/banner-carousel'
import CarouselVideo from '@/components/logos/video-carousel/video-carousel'
import Stages from '@/components/shared/stages/stages'
import WhyAccordion from '@/components/shared/why-accordion/why-accordion'
import Why from '@/components/shared/why/why'
import { advantage } from '@/data/advantage'
import { stages } from '@/data/stages'
import { why } from '@/data/why'
import LogosPricing from '../../components/logos/logos-pricing/logos-pricing'
const LogosPage = () => {
	return (
		<>
			<LogosHero />
			<Why why={why.logos} />
			<Advantage advantage={advantage.logos} />
			<CarouselLogos />
			<Brands />
			<CarouselBanner />
			<CarouselVideo />		
		</>
	)
}

export default LogosPage

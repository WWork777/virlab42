export const metadata = {
	metadataBase: new URL('https://virlab42.ru'),
	title: 'Создание сайтов на Tilda Москва Кемерово — Заказать лендинг или интернет-магазин в VIRLAB',
	description: 'Разработка современных сайтов на Tilda под ключ. Лендинги, многостраничные сайты, интернет-магазины с уникальным дизайном и адаптацией под мобильные устройства.',
	keywords:
		'создание сайтов на Tilda, разработка сайтов на Tilda, Tilda лендинг, интернет-магазин на Tilda, заказать сайт на Tilda, веб-дизайн на Tilda, адаптивный сайт Tilda',
	alternates: {
		canonical: '/tilda',
	},
	openGraph: {
		url: '/tilda',
		title: 'Создание сайтов на Tilda Москва Кемерово — Заказать лендинг или интернет-магазин в VIRLAB',
		description:
			'Разработка современных сайтов на Tilda под ключ. Лендинги, многостраничные сайты, интернет-магазины с уникальным дизайном и адаптацией под мобильные устройства.',
		images: {
			url: '/og/og.jpg',
			width: 1200,
			height: 630,
		},
	},
}
import Advantage from '@/components/shared/advantage/advantage'
import Brands from '@/components/shared/brands/brands'
import Pricing from '@/components/shared/pricing/pricing'
import Stages from '@/components/shared/stages/stages'
import WhyAccordion from '@/components/shared/why-accordion/why-accordion'
import Why from '@/components/shared/why/why'
import TildaHero from '@/components/tilda/tilda-hero/tilda-hero'
import { advantage } from '@/data/advantage'
import { pricing } from '@/data/pricing'
import { stages } from '@/data/stages'
import { why } from '@/data/why'

const TildaPage = () => {
	return (
		<div>
			<TildaHero />
			<Why why={why.tilda} />
			<Advantage advantage={advantage.tilda} />
			<Brands />
			<WhyAccordion page='tilda' />
			<Pricing pricing={pricing.tilda} />
			<Brands revers={true} />
			<Stages stages={stages.default} />
		</div>
	)
}

export default TildaPage

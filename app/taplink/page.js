export const metadata = {
	metadataBase: new URL('https://virlab42.ru'),

	title: 'Создание Taplink-страниц и мини-сайтов под ключ Москва Кемерово — VIRLAB',
	description: 'Закажите создание стильной Taplink-страницы для бизнеса в VIRLAB. Адаптивный дизайн, функциональность и интеграции для Instagram и мессенджеров.',
	keywords:
		'создание Taplink, заказать Taplink страницу, Taplink для Instagram, мини-сайт для бизнеса, лендинг в Taplink, Taplink приложение на заказ',
	alternates: {
		canonical: '/taplink',
	},
	openGraph: {
		url: '/taplink',
		title: 'Создание Taplink-страниц и мини-сайтов под ключ Москва Кемерово — VIRLAB',
		description:
			'Закажите создание стильной Taplink-страницы для бизнеса в VIRLAB. Адаптивный дизайн, функциональность и интеграции для Instagram и мессенджеров.',
		images: {
			url: '/og/og.jpg',
			width: 1200,
			height: 630,
		},
	},
}

import Advantage from '@/components/shared/advantage/advantage'
import Brands from '@/components/shared/brands/brands'
import Stages from '@/components/shared/stages/stages'
import WhyAccordion from '@/components/shared/why-accordion/why-accordion'
import Why from '@/components/shared/why/why'
import TaplinkHero from '@/components/taplink/taplink-hero/taplink-hero'
import TaplinkPricing from '@/components/taplink/taplink-pricing/taplink-pricing'
import { advantage } from '@/data/advantage'
import { stages } from '@/data/stages'
import { why } from '@/data/why'

const TaplinkPage = () => {
	return (
		<div>
			<TaplinkHero />
			<Why why={why.taplink} />
			<Advantage advantage={advantage.taplink} />
			<Brands />
			<WhyAccordion page='taplink' />
			<TaplinkPricing />
			<Brands revers={true} />
			<Stages stages={stages.taplink} />
		</div>
	)
}

export default TaplinkPage

export const metadata = {
	metadataBase: new URL('https://virlab42.ru'),
	title: 'Эффективное продвижение сайтов Москва Кемерово — Яндекс.Директ и Google Ads с VIRLAB',
	description: 'Настраиваем рекламу в Яндекс.Директ и Google Ads, SEO-продвижение и комплексное привлечение клиентов. Результаты уже в первый месяц.',
	keywords:
		'продвижение сайтов, реклама в Яндекс.Директ, контекстная реклама, SEO продвижение, привлечение клиентов, digital-маркетинг',
	alternates: {
		canonical: '/ads',
	},
	openGraph: {
		url: '/ads',
		title: 'Эффективное продвижение сайтов Москва Кемерово — Яндекс.Директ и Google Ads с VIRLAB',
		description:
			'Настраиваем рекламу в Яндекс.Директ и Google Ads, SEO-продвижение и комплексное привлечение клиентов. Результаты уже в первый месяц.',
		images: {
			url: '/og/og.jpg',
			width: 1200,
			height: 630,
		},
	},
}

import CarouselAds from '@/components/ads/ads-carousel/ads-carousel'
import AdvantageAds from '@/components/ads/ads-advantage/ads-advantage'
import HeroAds from '@/components/ads/ads-hero/ads-hero'
import PaymentAds from '@/components/ads/ads-payment/ads-payment'
import PrisingAds from '@/components/ads/ads-pricing/ads-pricing'
import WhyAds from '@/components/ads/ads-why/ads-why'

const PageAds = () => {
	return (
		<div>
			<HeroAds />
			<WhyAds />
			<AdvantageAds />
			<CarouselAds />
			<PrisingAds />
			<PaymentAds />
		</div>
	)
}

export default PageAds

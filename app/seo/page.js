export const metadata = {
	metadataBase: new URL('https://virlab42.ru'),
	title: 'VIRLAB | Продвижение',
	description: 'Телеграм-боты VIRLAB',
	alternates: {
		canonical: '/seo',
	},
	openGraph: {
		url: '/seo',
		title: 'VIRLAB | Продвижение',
		description:
			'По-настоящему продающие сайты. Разработка. Продвижение. Дизайн. Телеграм-боты. 3D-печать. От концепта готового продукта. Реальный опыт, фокус на сроки и качество. Звоните +7-999-431-62-66 или оставляйте заявку на сайте.',
		images: {
			url: '/og/og.jpg',
			width: 1200,
			height: 630,
		},
	},
}
import Plug from '@/components/plug/plug'
import SeoHero from '@/components/seo/seo-hero/seo-hero'

const SeoPage = () => {
	return (
		<div>
			<SeoHero />
			<Plug />
		</div>
	)
}

export default SeoPage

export const metadata = {
	metadataBase: new URL('https://virlab42.ru'),
	title:
		'Промышленное макетирование на заказ в ВИРЛАБ Кемерово — 3D-макеты, прототипы, модели',
	description:
		'Профессиональное промышленное макетирование: создание точных 3D-макетов, прототипов и моделей для бизнеса. Современное оборудование, инженерные пластики, полный цикл производства.',
	keywords:
		'промышленное макетирование, 3D-макетирование, создание макетов, макетирование на заказ, прототипирование, 3D-моделирование, разработка макетов',
	alternates: {
		canonical: '/modeling',
	},
	openGraph: {
		url: '/modeling',
		title:
			'Промышленное макетирование на заказ в ВИРЛАБ Кемерово — 3D-макеты, прототипы, модели',
		description:
			'Профессиональное промышленное макетирование: создание точных 3D-макетов, прототипов и моделей для бизнеса. Современное оборудование, инженерные пластики, полный цикл производства.',
		images: {
			url: '/og/og.jpg',
			width: 1200,
			height: 630,
		},
	},
}

import Payment3d from '@/components/3d/3d-payment/3d-payment'
import ModelingAdvantage from '@/components/modeling-page/advantage/ModelingAdvantage'
import ModelingCarousel from '@/components/modeling-page/carousel/ModelingCarousel'
import ModelingHero from '@/components/modeling-page/hero/ModelingHero'
import ModelingWhy from '@/components/modeling-page/why/ModelingWhy'

const ModelingPage = () => {
	return (
		<div>
			<ModelingHero />
			<ModelingWhy />
			<ModelingAdvantage />
			<ModelingCarousel />

			<Payment3d />
		</div>
	)
}

export default ModelingPage

export const metadata = {
	metadataBase: new URL('https://virlab42.ru'),
	title: '3D-печать на заказ в VIRLAB Кемерово — Модели, прототипы, детали',
	description: 'Высокоточная 3D-печать прототипов и деталей для бизнеса и частных клиентов. Современное оборудование и оперативная печать.',
	keywords:
		'3D-печать, 3D-печать на заказ, услуги 3D-печати, создание 3D-моделей, прототипы на 3D-принтере',
	alternates: {
		canonical: '/3d',
	},
	openGraph: {
		url: '/3d',
		title: '3D-печать на заказ в VIRLAB Кемерово — Модели, прототипы, детали',
		description:
			'Высокоточная 3D-печать прототипов и деталей для бизнеса и частных клиентов. Современное оборудование и оперативная печать.',
		images: {
			url: '/og/og.jpg',
			width: 1200,
			height: 630,
		},
	},
}

import Carousel3d from '@/components/3d/3d-carousel/3d-carousel'
import Advantage3d from '@/components/3d/3d-advantage/3d-advantage'
import Hero3d from '@/components/3d/3d-hero/3d-hero'
import Payment3d from '@/components/3d/3d-payment/3d-payment'
import Prising3d from '@/components/3d/3d-pricing/3d-pricing'
import Why3d from '@/components/3d/3d-why/3d-why'

const Page3d = () => {
	return (
		<div>
			<Hero3d />
			<Why3d />
			<Advantage3d />
			<Carousel3d />
			<Prising3d />
			<Payment3d />
		</div>
	)
}

export default Page3d

export const metadata = {
	metadataBase: new URL('https://virlab42.ru'),
	title: 'Разработка Telegram-ботов под бизнес — VIRLAB',
	description: 'Создаем Telegram-ботов для бизнеса: автоматизация приема заявок, клиентская поддержка, рассылки и оповещения. Простой и удобный инструмент для бизнеса.',
	keywords:
		'разработка Telegram-ботов, чат-бот для бизнеса, автоматизация бизнеса, бот для приема заявок, заказ чат-бота',
	alternates: {
		canonical: '/bots',
	},
	openGraph: {
		url: '/bots',
		title: 'Разработка Telegram-ботов под бизнес — VIRLAB',
		description:
			'Создаем Telegram-ботов для бизнеса: автоматизация приема заявок, клиентская поддержка, рассылки и оповещения. Простой и удобный инструмент для бизнеса.',
		images: {
			url: '/og/og.jpg',
			width: 1200,
			height: 630,
		},
	},
}
import BotsHero from '@/components/bots/bots-hero/bots-hero'
import CarouselBots from '@/components/bots/bots-carousel/bots-carousel'
import AdvantageBots from '@/components/bots/bots-advantage/bots-advantage'
import PaymentBots from '@/components/bots/bots-payment/bots-payment'
import PrisingBots from '@/components/bots/bots-pricing/bots-pricing'
import WhyBots from '@/components/bots/bots-why/bots-why'


const BotsPage = () => {
	return (
		<div>
			<BotsHero />
			<WhyBots  />
			<AdvantageBots  />
			<CarouselBots  />
			<PrisingBots />
			<PaymentBots />
		</div>
	)
}

export default BotsPage

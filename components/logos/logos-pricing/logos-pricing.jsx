'use client'
import { useState } from 'react'
import s from './logos-pricing.module.scss'

const PricingBots = () => {
	const [rate, setRate] = useState('bots-печать')
	return (
		<div className={`${s.pricing}`}>
			<div className={`${s.container} container `}>
				<div className={s.header}>
					<h2 className={`${s.title} cormorant-garamond-bold text-center`}>
						Ценообразование
					</h2>
					<div className={`${s.divider} hidden md:block`}></div>
					<span
						className={`${s.logo}  cormorant-garamond-bold hidden md:block`}
					>
						VIRLAB
					</span>
				</div>
				<div
					className={`${s.row_top} grid gap-y-4 sm:grid-cols-3 sm:gap-5 py-5 sm:max-w-5xl sm:mx-auto`}
				>
					{/* Первая плитка */}
					<div
						onClick={() => setRate('bots-печать')}
						type='button'
						className={`${s.col_top} col-5 offset-1 cursor-pointer `}
					>
						<div
							style={
								rate === 'bots-печать' ? { color: '#fff' } : { color: 'grey' }
							}
							className={`${s.top_wrap}`}
						>
							<div className={`${s.top_overlay}`}>
								<h3 className={`${s.top_title}`}>Логотипы</h3>
								<p className={`${s.top_disc}`}>
								Мы создаем уникальные логотипы, которые идеально отражают стиль и суть вашего бизнеса.
								</p>
								<div className={`${s.top_price}`}>
									<b>2 000 рублей</b>
								</div>
							</div>
						</div>
					</div>
					{/* Вторая плитка */}
					<div
						onClick={() => setRate('Моделирование')}
						type='button'
						className={`${s.col_top} col-5 cursor-pointer`}
					>
						<div
							style={
								rate === 'Моделирование' ? { color: '#fff' } : { color: 'grey' }
							}
							className={`${s.top_wrap}`}
						>
							<div className={`${s.top_overlay}`}>
								<h3 className={`${s.top_title}`}>Баннеры</h3>
								<p className={`${s.top_disc}`}>
								Мы разрабатываем баннеры для различных платформ и целей — от веб-сайтов до рекламных кампаний.
								</p>
								<div className={`${s.top_price}`}>
									<b>1 000 рублей</b>
								</div>
							</div>
						</div>
					</div>
					{/* Третья плитка */}
					<div
						onClick={() => setRate('Рекламные услуги')}
						type='button'
						className={`${s.col_top} col-5 cursor-pointer`}
					>
						<div
							style={
								rate === 'Рекламные услуги' ? { color: '#fff' } : { color: 'grey' }
							}
							className={`${s.top_wrap}`}
						>
							<div className={`${s.top_overlay}`}>
								<h3 className={`${s.top_title}`}>Видео</h3>
								<p className={`${s.top_disc}`}>
								Профессиональный монтаж видео с использованием эффектных переходов, анимаций и спецэффектов.
								</p>
								<div className={`${s.top_price}`}>
									<b>1 700 рублей</b>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PricingBots

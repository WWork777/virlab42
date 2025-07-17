'use client'
import { useState } from 'react'
import s from './bots-pricing.module.scss'

const PricingBots = () => {
	const [rate, setRate] = useState('bots-печать')
	return (
		<div className={`${s.pricing}`}>
			<div className={`${s.container} container `}>
				<div className={s.header}>
					<h2 className={`${s.title} cormorant-garamond-bold text-center`}>
						Примерное ценообразование
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
								<h3 className={`${s.top_title}`}>TG-бот для приема заявок</h3>
								<p className={`${s.top_disc}`}>
									Проброс заявок с любого типа сайта
								</p>
								<div className={`${s.top_price}`}>
									<b>ОТ 5 000 рублей</b>
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
								<h3 className={`${s.top_title}`}>TG-бот реализации продаж</h3>
								<p className={`${s.top_disc}`}>
									Для реализации воронки <br /> продаж
								</p>
								<div className={`${s.top_price}`}>
									<b>ОТ 15 000 рублей</b>
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
								<h3 className={`${s.top_title}`}>Встроенное приложение</h3>
								<p className={`${s.top_disc}`}>
									Приложение замещающее сайт, платежную систему.
								</p>
								<div className={`${s.top_price}`}>
									<b>ОТ 50 000 рублей</b>
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

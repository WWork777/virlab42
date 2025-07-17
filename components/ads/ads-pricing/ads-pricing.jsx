'use client'
import { useState } from 'react'
import s from './ads-pricing.module.scss'

const PricingAds = () => {
	const [rate, setRate] = useState('ads-печать')
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
						onClick={() => setRate('ads-печать')}
						type='button'
						className={`${s.col_top} col-5 offset-1 cursor-pointer `}
					>
						<div
							style={
								rate === 'ads-печать' ? { color: '#fff' } : { color: 'grey' }
							}
							className={`${s.top_wrap}`}
						>
							<div className={`${s.top_overlay}`}>
								<h3 className={`${s.top_title}`}>Яндекс (РФ)</h3>
								<p className={`${s.top_disc}`}>
									Тонкая ручная настройка Единых перфоманс кампаний
								</p>
								<div className={`${s.top_price}`}>
									<b>ОТ 10 000 рублей</b>
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
								<h3 className={`${s.top_title}`}>Google (вне РФ)</h3>
								<p className={`${s.top_disc}`}>
									Мы предоставляем рекламу зарубеж
								</p>
								<div className={`${s.top_price}`}>
									<b>ОТ 100$ +12%</b>
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
								<h3 className={`${s.top_title}`}>SEO</h3>
								<p className={`${s.top_disc}`}>
									SEO-оптимизация и покупка позиций поиска
								</p>
								<div className={`${s.top_price}`}>
									<b>ОТ 10 000 рублей</b>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PricingAds

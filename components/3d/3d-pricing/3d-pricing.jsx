'use client'
import { useState } from 'react'
import s from './3d-pricing.module.scss'

const Pricing3d = () => {
	const [rate, setRate] = useState('3D-печать')
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
					className={`${s.row_top} grid gap-y-4 sm:grid-cols-2 sm:gap-5 py-5 sm:max-w-5xl sm:mx-auto`}
				>
					<div
						onClick={() => setRate('3D-печать')}
						type='button'
						className={`${s.col_top} col-5 offset-1 cursor-pointer `}
					>
						<div
							style={
								rate == '3D-печать' ? { color: '#fff' } : { color: 'grey' }
							}
							className={`${s.top_wrap}`}
						>
							<div className={`${s.top_overlay}`}>
								<h3 className={`${s.top_title}`}>3D печать</h3>
								<p className={`${s.top_disc}`}>
									У нас самая низкая цена, потому что мы работаем напрямую на
									материалах заводов-изготовителей
								</p>
								<div className={`${s.top_price}`}>
									{' '}
									<b>ОТ 10 рублей/грамм</b>
								</div>
							</div>
						</div>
					</div>
					<div
						onClick={() => setRate('Моделирование')}
						type='button'
						className={`${s.col_top} col-5 cursor-pointer`}
					>
						<div
							style={
								rate == 'Моделирование' ? { color: '#fff' } : { color: 'grey' }
							}
							className={`${s.top_wrap}`}
						>
							<div className={`${s.top_overlay}`}>
								<h3 className={`${s.top_title}`}>Моделирование</h3>
								<p className={`${s.top_disc}`}>
									Индивидуальная разработка 3D-модели детали с неограниченными
									возможностями.
								</p>
								<div className={`${s.top_price}`}>
									<b>ОТ 500 рублей</b>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Pricing3d

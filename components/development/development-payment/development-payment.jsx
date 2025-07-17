import { faPenNib, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import s from './development-payment.module.scss'

const DevelopmentPayment = () => {
	return (
		<div className={s.payment}>
			<div className='container'>
				<div>
					<div className={s.header}>
						<h2 className={`${s.title} cormorant-garamond-bold`}>
							Возможна поэтапная оплата
						</h2>
						<div className={`${s.divider} hidden md:block`}></div>
						<span
							className={`${s.logo} cormorant-garamond-bold hidden md:block `}
						>
							Разработка <br /> в два этапа
						</span>
					</div>
					<div className='grid max-w-4xl mx-auto gap-y-5 sm:grid-cols-4 sm:gap-x-5 md:grid-cols-2'>
						<div
							className={`${s.col} sm:col-start-1 sm:col-end-3  md:col-start-1 md:col-end-2`}
						>
							<div className={`${s.col_wrap} `}>
								<div className={`${s.col_overlay}`}>
									<div className={s.stage}>1 этап</div>
									<div className={`${s.overlay_title} cormorant-garamond-bold`}>
										Маркетинг + <br /> Дизайн сайта
									</div>
									<div className={`${s.circs}`}>
										<div className={s.sale}>
											Оплата 50%
											<FontAwesomeIcon color={'#968c76'} icon={faSackDollar} />
										</div>
										<div className={s.act}>
											Подписание договора
											<FontAwesomeIcon color={'#968c76'} icon={faPenNib} />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className={`${s.col} sm:col-start-3 sm:col-end-5  md:col-start-2 md:col-end-2  `}
						>
							<div className={`${s.col_wrap} `}>
								<div className={`${s.col_overlay}`}>
									<div className={s.stage}>2 этап</div>
									<div className={`${s.overlay_title} cormorant-garamond-bold`}>
										Разработка + <br /> Запуск проекта
									</div>
									<div className={`${s.circs}`}>
										<div className={s.sale}>
											Оплата 50%
											<FontAwesomeIcon color={'#968c76'} icon={faSackDollar} />
										</div>
										<div className={s.act}>
											Подписание акта
											<FontAwesomeIcon color={'#968c76'} icon={faPenNib} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DevelopmentPayment

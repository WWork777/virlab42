'use client'
import s from './taplink-pricing.module.scss'

const TaplinkPricing = () => {
	return (
		<div className={`${s.pricing}`}>
			<div className={`${s.container} container `}>
				<div className={s.header}>
					<h2 className={`${s.title} cormorant-garamond-bold text-center`}>
						Преимущества и недостатки
					</h2>
					<div className={`${s.divider} hidden md:block`}></div>
					<span
						className={`${s.logo}  cormorant-garamond-bold hidden md:block`}
					>
						TAPLINK
					</span>
				</div>
				<div className='py-6 grid md:grid-cols-2 gap-3'>
					<div>
						<h3 className='text-accent_color cormorant-garamond-bold text-4xl md:text-5xl text-center pb-5'>
							Плюсы Taplink
						</h3>
						<ul className='p-5 cormorant-garamond-regular text-xl md:text-2xl flex flex-col  gap-2 bg-[#1d1e25] text-center text-white md:min-h-[810px] lg:min-h-[650px] 2xl:min-h-[560px] '>
							<li>
								Удобство: <br /> Все важные ссылки собраны в одном месте, что
								облегчает доступ для пользователей.
							</li>
							<li>
								Персонализация: <br /> Страница на Taplink легко настраивается
								под стиль вашего бренда.
							</li>
							<li>
								Аналитика: <br /> Taplink предоставляет данные о кликах и
								переходах, что помогает оптимизировать маркетинг.
							</li>
							<li>
								Мобильная адаптация: <br /> Страница адаптируется под мобильные
								устройства, что удобно для большинства пользователей.
							</li>
							<li>
								Многофункциональность: <br /> Taplink поддерживает кнопки для
								мессенджеров, формы для сбора данных и другие полезные функции
								для бизнес
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-accent_color cormorant-garamond-bold text-4xl md:text-5xl text-center pb-5'>
							Минусы Taplink
						</h3>
						<ul className='p-5 cormorant-garamond-regular text-xl md:text-2xl flex flex-col  gap-2 bg-[#1d1e25] text-center text-white md:min-h-[810px] lg:min-h-[650px] 2xl:min-h-[560px]  '>
							<li>
								Ограниченная бесплатная версия: <br /> Меньше функций и шаблонов
								в бесплатной версии.
							</li>
							<li>
								Зависимость от сервиса: <br /> Проблемы у Taplink могут сделать
								вашу страницу недоступной.
							</li>
							<li>
								Проблемы с SEO: <br /> Страница не индексируется в поисковиках.
							</li>
							<li>
								Платная подписка: <br /> Для доступа к продвинутым функциям
								нужно платить.
							</li>
							<li>
								Ограниченная кастомизация: <br /> Нет полного контроля над
								дизайном страницы (HTML, CSS).
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TaplinkPricing

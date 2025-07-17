import './ads-advantage.scss'

const AdvantageAds = () => {
	return (
		<div className='ads-advantage container'>
			<ul className='grid gap-y-4 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3'>
				<li>
					{' '}
					<div className='advantage__item advantage-item'>
						<div className='advantage-item__inner'>
							<h4 className='advantage-item__title cormorant-garamond-bold leading-none'>
								Реальный опыт
							</h4>
							<div className='advantage-item__body'>
								<p>
									Каждый написанный нами сайт участвует в рекламе. Наши директологи - это действующие бизнесмены, которые на собственных ошибках и деньгах поняли как и какими методами рекламы стоит пользоваться. Мы готовы поделиться с вами опытом какая реклама работает, а какая попросту выкачивает деньги
								</p>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div className='advantage__item advantage-item'>
						<div className='advantage-item__inner'>
							<h4 className='advantage-item__title cormorant-garamond-bold leading-none'>
								Зарабатываем вместе
							</h4>
							<div className='advantage-item__body'>
								<p>
									Мы настраиваем только эффективную рекламу, потому что мы масштабируемся вместе с вами. У нас нет мотивации вас обманывать и обязывать вас платить за неэффективную рекламу, поскольку мы дорожим своей репутацией и настроены ИСКЛЮЧИТЕЛЬНО на долгосрочное сотрудничество.
								</p>
							</div>
						</div>
					</div>
				</li>
				<li className='md:col-start-1 md:col-end-3 lg:col-start-3 lg:col-end-4'>
					<div className='advantage__item advantage-item'>
						<div className='advantage__item advantage-item'>
							<div className='advantage-item__inner'>
								<h4 className='advantage-item__title cormorant-garamond-bold leading-none'>
								 Гибкий подход
								</h4>
								<div className='advantage-item__body'>
									<p>
										В зависимости от ваших ожиданий, сферы вашей деятельности мы предложим вам самый эффективный метод рекламы. В некоторых бизнесах контекст не может работать априори, в отличие от SEO, и наоборот. С нами - вы сделаете правильный выбор.
									</p>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	)
}

export default AdvantageAds

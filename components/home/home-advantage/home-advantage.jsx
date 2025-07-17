import Divider from '../../shared/divider/divider'
import './home-advantage.css'
const HomeAdvantage = () => {
	return (
		<div className='home-advantage container'>
			<Divider />
			<div>
				<h2 className=' text-6xl text-center py-3 mb-2 cormorant-garamond-bold'>
					Почему VIRLAB?
				</h2>
				<ul className='grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-6'>
					<li className='lg:col-start-1 lg:col-end-3'>
						<div className='advantage__item advantage-item advantage-item_design'>
							<div className='advantage-item__inner'>
								<h4 className='advantage-item__title cormorant-garamond-bold'>
									Реальные разработчики
								</h4>
								<div className='advantage-item__body'>
									<p>
										Мы пишем КОД на самых современных фреймворках, а не пользуемся конструкторами.
									</p>
								</div>
							</div>
						</div>
					</li>
					<li className='lg:col-start-3 lg:col-end-5'>
						<div className='advantage__item advantage-item advantage-item_dev'>
							<div className='advantage-item__inner'>
								<h4 className='advantage-item__title cormorant-garamond-bold'>
									Опыт
								</h4>
								<div className='advantage-item__body'>
									<p>
										За последние 2 года мы реализовали более 80-ти коммерческих проектов, и мы на ПРАКТИКЕ знаем как развить ваш бизнес в интернете
									</p>
								</div>
							</div>
						</div>
					</li>
					<li className='lg:col-start-5 lg:col-end-7'>
						<div className='advantage__item advantage-item advantage-item_seo'>
							<div className='advantage-item__inner'>
								<h4 className='advantage-item__title cormorant-garamond-bold'>
									Рабочая реклама
								</h4>
								<div className='advantage-item__body'>
									<p>
										На собственном опыте знаем какие методы рекламы работают, а какие попросту выкачивают деньги. 
									</p>
								</div>
							</div>
						</div>
					</li>
					<li className='lg:col-start-1 lg:col-end-4'>
						<div className='advantage__item advantage-item advantage-item_automat'>
							<div className='advantage-item__inner'>
								<h4 className='advantage-item__title cormorant-garamond-bold'>
									Отличающийся дизайн
								</h4>
								<div className='advantage-item__body'>
									<p>
										Мы используем РУЧНЫЕ методы разработки графических материалов, а не стандартные наборы картинок. 
										С нами - ваш дизайн станет действительно УНИКАЛЬНЫМ.
									</p>
								</div>
							</div>
						</div>
					</li>
					<li className='sm:col-start-1 sm:col-end-3 lg:col-start-4 lg:col-end-7'>
						<div className='advantage__item advantage-item advantage-item_business'>
							<div className='advantage-item__inner'>
								<h4 className='advantage-item__title cormorant-garamond-bold'>
									Ответственность
								</h4>
								<div className='advantage-item__body'>
									<p>Мы заключаем Договор, чтобы закрепить выполнение обязательств по срокам и качеству.</p>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default HomeAdvantage

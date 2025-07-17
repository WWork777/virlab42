import './bots-advantage.scss'

const AdvantageBots = () => {
	return (
		<div className='bots-advantage container'>
			<ul className='grid gap-y-4 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3'>
				<li>
					{' '}
					<div className='advantage__item advantage-item'>
						<div className='advantage-item__inner'>
							<h4 className='advantage-item__title cormorant-garamond-bold leading-none'>
								Удобство
							</h4>
							<div className='advantage-item__body'>
								<p>
									Поскольку Telegram самый популярный мессенджер, большинству клиентов удобно принимать заявки в соц.сеть в которой они проводят большую часть времени.
								</p>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div className='advantage__item advantage-item'>
						<div className='advantage-item__inner'>
							<h4 className='advantage-item__title cormorant-garamond-bold leading-none'>
								Безопасность
							</h4>
							<div className='advantage-item__body'>
								<p>
									Встроенные инструменты Telegram не только многофункциональны и удобны для разработчиков, клиентов и владельцев бизнесов. Но и обладают самыми современными протоколами безопасности.
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
								 Масштабируемость
								</h4>
								<div className='advantage-item__body'>
									<p>
										Приложения, реализованные в Telegram - могут замещать целые интернет-порталы, игры и платежные системы.
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

export default AdvantageBots

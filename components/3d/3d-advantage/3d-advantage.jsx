import './3d-advantage.scss'

const Advantage3d = () => {
	return (
		<div className='3d-advantage container'>
			<ul className='grid gap-y-4 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3'>
				<li>
					{' '}
					<div className='advantage__item advantage-item'>
						<div className='advantage-item__inner'>
							<h4 className='advantage-item__title cormorant-garamond-bold leading-none'>
								Настоящие инженеры
							</h4>
							<div className='advantage-item__body'>
								<p>
									Наши инженеры 3D-печати имеют опыт разработки деталей
									участвующих в серьезных технологических процессах.
									Каждая деталь — индивидуальная разработка.
								</p>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div className='advantage__item advantage-item'>
						<div className='advantage-item__inner'>
							<h4 className='advantage-item__title cormorant-garamond-bold leading-none'>
								Профессиональные материалы
							</h4>
							<div className='advantage-item__body'>
								<p>
									Мы предоставляем выбор материалов
									от бытового назначения (PLA, PETG, ABS) до очень стойких пластиков 
									выдерживающих действительно высокие механические нагрузки (Total CF-5)
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
									Профессиональное оборудование
								</h4>
								<div className='advantage-item__body'>
									<p>
										Мы используем современное оборудование для 3D-печати. Например, Creality k1c и Flashforge 5M.
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

export default Advantage3d

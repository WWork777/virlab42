import './ModelingAdvantage.scss'

const ModelingAdvantage = () => {
	return (
		<div className='3d-advantage container'>
			<ul className='grid gap-y-4 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3'>
				<li>
					<div className='advantage__item advantage-item'>
						<div className='advantage-item__inner'>
							<h4 className='advantage-item__title cormorant-garamond-bold leading-none'>
								Точность до 0.05 мм
							</h4>
							<div className='advantage-item__body'>
								<p>
									Наши инженеры обеспечивают высокую точность изготовления
									макетов с допусками до 0.05 мм. Идеальная геометрия для любых
									промышленных задач.
								</p>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div className='advantage__item advantage-item'>
						<div className='advantage-item__inner'>
							<h4 className='advantage-item__title cormorant-garamond-bold leading-none'>
								Инженерные пластики
							</h4>
							<div className='advantage-item__body'>
								<p>
									Мы предлагаем широкий выбор конструкционных материалов: от ABS
									и поликарбоната до композитов с углеродным волокном,
									выдерживающих высокие нагрузки.
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
									Промышленные принтеры
								</h4>
								<div className='advantage-item__body'>
									<p>
										Мы используем профессиональное оборудование для
										промышленного макетирования. Каждый принтер проходит
										регулярную калибровку.
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

export default ModelingAdvantage

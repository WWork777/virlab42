import './advantage.scss'

const Advantage = ({ advantage }) => {
	return (
		<div className='development-advantage container'>
			<ul className='grid gap-y-4 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3'>
				{advantage.map(item => (
					<li key={Math.random()}>
						{' '}
						<div className='advantage__item advantage-item'>
							<div className='advantage-item__inner'>
								<h4 className='advantage-item__title cormorant-garamond-bold leading-none'>
									{item.title}
								</h4>
								<div className='advantage-item__body'>
									<div>
										{item.subtitle.split('.').map(item => (
											<>
												<p key={Math.random()}>{item}</p>
											</>
										))}
									</div>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Advantage

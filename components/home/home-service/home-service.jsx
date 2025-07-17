import './home-service.css' // Импортируйте файл CSS для стилизации

const services = [
	{
		title: 'Разработка сайтов',
		price: 'от 10 000 руб.',
		backgroundImage: "url('./img/dev2.png')",
		link: '/development'
	},
	{
		title: '3D-печать',
		price: 'от 10 руб.',
		backgroundImage: "url('./img/3d.png')",
		link: '/3d'
	},
	{
		title: 'Дизайн',
		price: 'от 500 руб.',
		backgroundImage: "url('./img/design.png')",
		link: '/design'
	},
	{
		title: 'Продвижение',
		price: 'от 10 000 руб.',
		backgroundImage: "url('./img/seo2.png')",
		link: '/ads'
	},
	{
		title: 'Telegram боты',
		price: 'от 5 000 руб.',
		backgroundImage: "url('./img/bot3.png')",
		link: '/bots'
	},
]

const HomeService = () => {
	return (
		<>
			<div className='slider'>
				{services.map((service, index) => (
					<div
						className='service-block'
						key={index}
						style={{
							backgroundImage: service.backgroundImage,
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
						}}
					>
						<div className='content-service-overlay h-full bg-[#181f24e6]'>
							<div className='service-content'>
								<h1>{service.title}</h1>
								<p className='description'>{service.description}</p>
								<p className='price'></p>
								<a href={service.link}>
									<button className='price-button'>{service.price}</button>
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default HomeService

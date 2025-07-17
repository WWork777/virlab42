'use client'
import Link from 'next/link'
import { EffectCreative, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './home-hero.css'

function HomeHero() {
	const scrollToOrder = () => {
		const element = document.getElementById('main-form')
		const offset = 200
		const elementPosition = element.getBoundingClientRect().top
		const offsetPosition = elementPosition + window.pageYOffset - offset

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		})
	}

	return (
		<>
			<Swiper
				grabCursor={false}
				effect={'creative'}
				speed={1000}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				navigation={true}
				pagination={true}
				loop={true}
				creativeEffect={{
					prev: {
						shadow: true,
						translate: ['-40%', 0, -1],
					},
					next: {
						translate: ['100%', 0, 0],
					},
				}}
				modules={[EffectCreative, Navigation, Pagination]}
				className='mySwiper3'
			>
				<SwiperSlide>
					<div
						className='background-image'
						style={{
							backgroundImage: `url('./hero/dev2.png')`,
							backgroundPositionX: '90%',
						}}
					>
						<div className='fon-img bg-[#181f24e6]'>
							<h2 className='slide-text cormorant-garamond-bold leading-none'>
								По-настоящему <br /> продающие сайты
							</h2>
							<p className='slide-text-p'>- Одностраничные от 40 000 руб</p>
							<p className='slide-text-p'>- Многостраничные от 60 000 руб</p>
							<p className='slide-text-p'>- Интернет-магазины от 100 000 руб</p>
							<div className='buttons-car'>
								<Link href='/development' onClick={() => window.scrollTo(0, 0)}>
									<button className='d-btn'>ПОДРОБНЕЕ</button>
								</Link>
								<Link href={'javascript:void(0)'} onClick={scrollToOrder}>
									<button className='d-btn'>ОСТАВИТЬ ЗАЯВКУ</button>
								</Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='background-image'
						style={{
							backgroundImage: `url('./logos/logos_bg.jpg')`,
							backgroundPositionX: '90%',
						}}
					>
						<div className=' fon-img bg-[#181f24bf]'>
							<h2 className='slide-text cormorant-garamond-bold leading-none'>
								Логотипы, <br /> Баннеры, <br />
								Монтаж видео
							</h2>
							<p className='slide-text-p'>
								-Логотип вашего продукта от 1.700 руб
							</p>
							<p className='slide-text-p'>-Продающий баннер от 1.000 руб</p>
							<p className='slide-text-p'>
								-Монтаж любой сложности от 1.700 руб
							</p>
							<div className='buttons-car'>
								<Link href='/design' onClick={() => window.scrollTo(0, 0)}>
									<button className='d-btn'>ПОДРОБНЕЕ</button>
								</Link>
								<Link href={'javascript:void(0)'} onClick={scrollToOrder}>
									<button className='d-btn'>ОСТАВИТЬ ЗАЯВКУ</button>
								</Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='background-image'
						style={{
							backgroundImage: `url('./hero/seo2.png')`,
							backgroundPositionX: '90%',
						}}
					>
						<div className='fon-img bg-[#181f24e6]'>
							<h2 className='slide-text cormorant-garamond-bold'>
								Продвижение
							</h2>
							<p className='slide-text-p'>- Яндекс.Директ от 10 000 руб</p>
							<p className='slide-text-p'>
								- Google от 100$ (+12% за транзакции)
							</p>
							<div className='buttons-car'>
								<Link href='/ads' onClick={() => window.scrollTo(0, 0)}>
									<button className='d-btn'>ПОДРОБНЕЕ</button>
								</Link>
								<Link href={'javascript:void(0)'} onClick={scrollToOrder}>
									<button className='d-btn'>ОСТАВИТЬ ЗАЯВКУ</button>
								</Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='background-image'
						style={{ backgroundImage: `url('./hero/3d.png')` }}
					>
						<div className='fon-img bg-[#181f24e6]'>
							<h2 className='slide-text cormorant-garamond-bold'> 3D-печать</h2>
							<p className='slide-text-p'>- Моделирование от 500 руб</p>
							<p className='slide-text-p'>- Печать от 10 руб./грамм</p>
							<div className='buttons-car'>
								<Link href='/3d' onClick={() => window.scrollTo(0, 0)}>
									<button className='d-btn'>ПОДРОБНЕЕ</button>
								</Link>
								<Link href={'javascript:void(0)'} onClick={scrollToOrder}>
									<button className='d-btn'>ОСТАВИТЬ ЗАЯВКУ</button>
								</Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='background-image'
						style={{
							backgroundImage: `url('./tilda/tilda_bg.jpg')`,
							backgroundPositionX: '90%',
						}}
					>
						<div className=' fon-img bg-[#181f24bf]'>
							<h2 className='slide-text cormorant-garamond-bold leading-none'>
								Разработка лендингов <br /> и визиток на Tilda
							</h2>
							<p className='slide-text-p'>-Сайт визитка от 15.000 руб</p>
							<p className='slide-text-p'>
								-Одностраничный лендинг от 35.000 руб
							</p>
							<p className='slide-text-p'>
								-Многостраничный сайт от 50.000 руб
							</p>
							<div className='buttons-car'>
								<Link href='/tilda' onClick={() => window.scrollTo(0, 0)}>
									<button className='d-btn'>ПОДРОБНЕЕ</button>
								</Link>
								<Link href={'javascript:void(0)'} onClick={scrollToOrder}>
									<button className='d-btn'>ОСТАВИТЬ ЗАЯВКУ</button>
								</Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='background-image'
						style={{
							backgroundImage: `url('./taplink/taplink_bg.jpg')`,
							backgroundPositionX: '90%',
						}}
					>
						<div className=' fon-img bg-[#181f24bf]'>
							<h2 className='slide-text cormorant-garamond-bold leading-none'>
								Разработка визиток
								<br /> на Taplink
							</h2>
							<p className='slide-text-p'>
								-Визитка для одного филиала от 5.000 руб
							</p>
							<p className='slide-text-p'>
								-Визитка для 5+ филиалов от 7.000 руб
							</p>
							<p className='slide-text-p'>
								-Визитка для 10+ филиалов от 10.000 руб
							</p>
							<div className='buttons-car'>
								<Link href='/taplink' onClick={() => window.scrollTo(0, 0)}>
									<button className='d-btn'>ПОДРОБНЕЕ</button>
								</Link>
								<Link href={'javascript:void(0)'} onClick={scrollToOrder}>
									<button className='d-btn'>ОСТАВИТЬ ЗАЯВКУ</button>
								</Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='background-image'
						style={{
							backgroundImage: `url('./hero/bot3.png')`,
							backgroundPositionX: '100%',
						}}
					>
						<div className='fon-img bg-[#181f24e6]'>
							<h2 className='slide-text cormorant-garamond-bold'>
								Telegram-боты
							</h2>
							<p className='slide-text-p'>- Для приема заявок от 5000 руб.</p>
							<div className='buttons-car'>
								<Link href='/bots' onClick={() => window.scrollTo(0, 0)}>
									<button className='d-btn'>ПОДРОБНЕЕ</button>
								</Link>
								<Link href={'javascript:void(0)'} onClick={scrollToOrder}>
									<button className='d-btn'>ОСТАВИТЬ ЗАЯВКУ</button>
								</Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	)
}
export default HomeHero

'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import slide5 from './alyakina.ru.png'
import slide6 from './brk42.ru.png'
import slide4 from './iluma-prime.ru.png'
import slide1 from './iluma-store.ru.png'
import slide3 from './lowers.jpg'
import slide7 from './tipmestudio.ru.png'
import slide2 from './tvoy3d.ru.png'

const ProjectsSlider = () => {
	return (
		<div className='container'>
			<Swiper
				grabCursor={false}
				loop={true}
				speed={3000}
				slidesPerView={1}
				spaceBetween={10}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
					reverseDirection: true,
					waitForTransition: true,
				}}
				breakpoints={{
					576: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 3,
					},
				}}
				navigation={false}
				pagination={false}
				modules={[Navigation, Pagination, Autoplay]}
				className='mySwiperProjects'
			>
				<SwiperSlide>
					<div className='slide-wrap'>
						<Link href='https://ilumaspace.ru'>
							<Image width={'100%'} height={'100%'} src={slide1} alt='slide1' />
						</Link>
						<p>ilumaspace.ru</p>
						<p>Сайт разработан на React</p>
						<p>Срок разработки: 30 дней</p>
						<p>Стоимость разработки: 120 000 руб</p>
						<p>Конверсия сайта: 10%</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='slide-wrap'>
						<Link href='https://tvoy3d.ru'>
							<Image width={'100%'} height={'100%'} src={slide2} alt='slide2' />
						</Link>
						<p>tvoy3d.ru</p>
						<p>Сайт разработан на React</p>
						<p>Срок разработки: 30 дней</p>
						<p>Стоимость разработки: 280 000 руб</p>
						<p>Конверсия сайта: 15%</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='slide-wrap'>
						<Link href='https://yurist42.ru'>
							<Image width={'100%'} height={'100%'} src={slide3} alt='slide3' />
						</Link>
						<p>yurist42.ru</p>
						<p>Сайт разработан на Bootstrap</p>
						<p>Срок разработки: 14 дней</p>
						<p>Стоимость разработки: 60 000 руб</p>
						<p>Конверсия сайта: 16%</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='slide-wrap'>
						<Link href='https://iluma-prime.ru'>
							<Image width={'100%'} height={'100%'} src={slide4} alt='slide4' />
						</Link>
						<p>iluma-prime.ru</p>
						<p>Сайт разработан на React</p>
						<p>Срок разработки: 30 дней</p>
						<p>Стоимость разработки: 150 000 руб</p>
						<p>Конверсия сайта: 16%</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='slide-wrap'>
						<Link href='https://alyakina.ru'>
							<Image width={'100%'} height={'100%'} src={slide5} alt='slide5' />
						</Link>
						<p>alykina.ru</p>
						<p>Сайт разработан на React</p>
						<p>Срок разработки: 30 дней</p>
						<p>Стоимость разработки: 150 000 руб</p>
						<p>Конверсия сайта: 15%</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='slide-wrap'>
						<Link href='https://brk42.ru'>
							<Image width={'100%'} height={'100%'} src={slide6} alt='slide6' />
						</Link>
						<p>brk42.ru</p>
						<p>Сайт разработан на React</p>
						<p>Срок разработки: 45 дней</p>
						<p>Стоимость разработки: 180 000 руб</p>
						<p>Конверсия сайта: 16%</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='slide-wrap'>
						<Link href='https://tipmestudio.ru'>
							<Image width={'100%'} height={'100%'} src={slide7} alt='slide7' />
						</Link>
						<p>tipmestudio.ru</p>
						<p>Сайт разработан на React</p>
						<p>Срок разработки: 30 дней</p>
						<p>Стоимость разработки: 150 000 руб</p>
						<p>Конверсия сайта: 15%</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default ProjectsSlider

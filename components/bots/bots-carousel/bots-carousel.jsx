'use client'
import Divider from '@/components/shared/divider/divider'
import Image from 'next/image'
import { useState } from 'react'
import 'swiper/css/zoom'
import { Navigation, Pagination, Zoom } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './bots-carousel.css'

import item1 from './img/arhitekbot.png'
import item2 from './img/ilumabot.png'
import item3 from './img/ilumabot1.png'
import item4 from './img/ilumabot2.png'

const CarouselBots = () => {
	const [images] = useState([
		{
			original: item1,
			thumbnail: item1,
			alt: 'Image 1',
			name: 'Архитек',
			title: 'Заявки',
		},
		{
			original: item4,
			thumbnail: item4,
			alt: 'Image 4',
			name: 'IlumaStore',
			title: 'Заявки',
		},
		{
			original: item2,
			thumbnail: item2,
			alt: 'Image 2',
			name: 'IlumaStore',
			title: 'Tg-бот для продаж',
		},
		{
			original: item3,
			thumbnail: item3,
			alt: 'Image 3',
			name: 'IlumaStore',
			title: 'Tg-приложение',
		},
	])

	return (
		<>
			<div id='team'></div>
			<div className='slider-container'>
				<Divider />
				<div className='head-container'>
					<h2 className='cormorant-garamond-bold'>Применение Telegram ботов</h2>
				</div>
				<div className='galary container'>
					<Swiper
						slidesPerView={1}
						centeredSlides={false}
						loop={true}
						navigation={{
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						}}
						pagination={{
							clickable: true,
						}}
						breakpoints={{
							140: {
								slidesPerView: 1,
								spaceBetween: 5,
							},
							540: {
								slidesPerView: 2,
								spaceBetween: 5,
							},
							1200: {
								slidesPerView: 3,
								spaceBetween: 5,
							},
							1640: {
								slidesPerView: 4,
								spaceBetween: 5,
							},
						}}
						modules={[Pagination, Navigation, Zoom]}
						className='mySwiperTeam'
					>
						{images.length > 0 ? (
							images.map((article, index) => (
								<SwiperSlide className='' key={index}>
									<div className='team-card'>
										<h1 className='card-team__h cormorant-garamond-bold'>{article.name}</h1>
										<p className='card-team__p'>{article.title}</p>
										<Image
											style={{ objectFit: 'cover' }}
											width={'100%'}
											height={'100%'}
											src={article.original}
											alt={article.alt}
										/>
									</div>
								</SwiperSlide>
							))
						) : (
							<p className='no-articles'>Изображения не найдены</p>
						)}
					</Swiper>
					<button className='swiper-button-prev'></button>
					<button className='swiper-button-next'></button>
				</div>
			</div>
		</>
	)
}

export default CarouselBots

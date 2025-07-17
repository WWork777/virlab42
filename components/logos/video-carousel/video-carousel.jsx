'use client'
import Divider from '@/components/shared/divider/divider'
import { useState } from 'react'
import 'swiper/css/zoom'
import { Autoplay, Navigation, Pagination, Zoom } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './video-carousel.css'

const CarouselVideo = () => {
	const [images] = useState([
		{
			path: './videos/videoyandex.mp4',
			name: 'Яндекс Директ',
			price: '1700 Р',
		},
		{
			path: './videos/yandexbusiness.mp4',
			name: 'Яндекс Бизнес',
			price: '1700 Р',
		},
		{
			path: './videos/videogoogle.mp4',
			name: 'Google Ads',
			price: '1000 Р',
		},

		{
			path: './videos/videoyandex1.mp4',
			name: 'Другое',
			price: '1000 Р',
		},
	])

	return (
		<>
			<div className='slider-container'>
				<Divider />
				<div className='head-container'>
					<h2 className='cormorant-garamond-bold'>Монтаж видео</h2>
				</div>
				<div className='galary container'>
					<Swiper
						slidesPerView={1}
						centeredSlides={false}
						// speed={8000}
						// autoplay={{
						// 	delay: 0,
						// 	disableOnInteraction: false,
						// 	pauseOnMouseEnter: true,
						// 	reverseDirection: false,
						// 	waitForTransition: true,
						// }}
						loop={true}
						navigation={{
							nextEl: '.swiper-button-next_video',
							prevEl: '.swiper-button-prev_video',
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
						modules={[Pagination, Navigation, Zoom, Autoplay]}
						className='mySwiperVideo'
					>
						{images.length > 0 ? (
							images.map(article => (
								<SwiperSlide key={Math.random()}>
									<div className='video-card pb-30'>
										<h1 className='card-video__h cormorant-garamond-bold'>
											{article.name}
										</h1>

										<video
											className='mx-auto'
											width='320'
											height='240'
											controls
											loop='loop'
											autoPlay='autoplay'
										>
											<source src={article.path} type='video/mp4' />
											Your browser does not support the video tag.
										</video>
										<p
											style={{
												color: 'green',
												fontWeight: 'bold',
												marginTop: '10px',
											}}
										>
											{article.price}
										</p>
									</div>
								</SwiperSlide>
							))
						) : (
							<p className='no-articles'>Изображения не найдены</p>
						)}
					</Swiper>
					<button className='swiper-button-prev swiper-button-next_video'></button>
					<button className='swiper-button-next swiper-button-next_video'></button>
				</div>
			</div>
		</>
	)
}

export default CarouselVideo

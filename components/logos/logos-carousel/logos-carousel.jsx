'use client'
import Divider from '@/components/shared/divider/divider'
import Image from 'next/image'
import { useState } from 'react'
import 'swiper/css/zoom'
import { Navigation, Pagination, Zoom } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './logos-carousel.css'

import item3 from './img/logobusiness.png'
import item4 from './img/logomap.png'
import item2 from './img/logomap1.png'
import item1 from './img/poisk.png'

const CarouselLogos = () => {
	const [images] = useState([
		{
			original: item1,
			thumbnail: item1,
			alt: 'Image 1',
			name: 'Для поиска',
			price: '2000 Р',
		},
		{
			original: item2,
			thumbnail: item2,
			alt: 'Image 2',
			name: 'Для Яндекс Карт',
			price: '2000 Р',
		},
		{
			original: item3,
			thumbnail: item3,
			alt: 'Image 3',
			name: 'Для Яндекс Бизнеса',
			price: '2000 Р',
		},
		{
			original: item4,
			thumbnail: item4,
			alt: 'Image 4',
			name: 'Другое',
			price: '2000 Р',
		},
	])

	return (
		<>
			<div className='slider-container'>
				<Divider />
				<div className='head-container'>
					<h2 className='cormorant-garamond-bold'>Логотипы</h2>
				</div>
				<div className='galary container'>
					<Swiper
						slidesPerView={1}
						centeredSlides={false}
						loop={true}
						navigation={{
							nextEl: '.swiper-button-prev_logos',
							prevEl: '.swiper-button-next_logos',
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
						className='mySwiperLogos'
					>
						{images.length > 0 ? (
							images.map(article => (
								<SwiperSlide className='' key={Math.random()}>
									<div className='logos-card pb-30'>
										<h1 className='card-logos__h cormorant-garamond-bold'>
											{article.name}
										</h1>
										<Image
											style={{ objectFit: 'cover' }}
											width={'100%'}
											height={'100%'}
											src={article.original}
											alt={article.alt}
										/>
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
					<button className='swiper-button-prev swiper-button-prev_logos'></button>
					<button className='swiper-button-next swiper-button-next_logos'></button>
				</div>
			</div>
		</>
	)
}

export default CarouselLogos

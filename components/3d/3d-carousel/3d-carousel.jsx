'use client'
import Divider from '@/components/shared/divider/divider'
import Image from 'next/image'
import { useState } from 'react'
import 'swiper/css/zoom'
import { Navigation, Pagination, Zoom } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './3d-carousel.css'

import item1 from './img/d1.jpg'
import item10 from './img/d10.jpg'
import item11 from './img/d11.jpg'
import item12 from './img/d12.jpg'
import item2 from './img/d2.jpg'
import item3 from './img/d3.jpg'
import item4 from './img/d4.jpg'
import item5 from './img/d5.jpg'
import item6 from './img/d6.jpg'
import item7 from './img/d7.jpg'
import item8 from './img/d8.jpg'
import item9 from './img/d9.jpg'

const Carousel3d = () => {
	const [images] = useState([
		{
			original: item1,
			thumbnail: item1,
			alt: 'Image 1',
		},
		{
			original: item2,
			thumbnail: item2,
			alt: 'Image 2',
		},
		{
			original: item12,
			thumbnail: item12,
			alt: 'Image 12',
		},
		{
			original: item3,
			thumbnail: item3,
			alt: 'Image 3',
		},
		{
			original: item4,
			thumbnail: item4,
			alt: 'Image 4',
		},
		{
			original: item5,
			thumbnail: item5,
			alt: 'Image 5',
		},
		{
			original: item6,
			thumbnail: item6,
			alt: 'Image 6',
		},
		{
			original: item7,
			thumbnail: item7,
			alt: 'Image 7',
		},
		{
			original: item8,
			thumbnail: item8,
			alt: 'Image 8',
		},
		{
			original: item9,
			thumbnail: item9,
			alt: 'Image 9',
		},
		{
			original: item10,
			thumbnail: item10,
			alt: 'Image 10',
		},
		{
			original: item11,
			thumbnail: item11,
			alt: 'Image 11',
		},

		// Добавьте остальные изображения
	])
	return (
		<>
			<div id='team'></div>
			<div className='slider-container'>
				<Divider />
				<div className='head-container'>
					<h2 className='cormorant-garamond-bold'>Наши работы</h2>
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
							images.map(article => (
								<SwiperSlide className='' key={article.alt}>
									<div className='team-card '>
										<Image
											style={{ objectFit: 'cover' }}
											width={'100%'}
											height={'100%'}
											src={article.original}
											alt={article.alt}
										/>
										<p className='card-team__p'>{article.name}</p>
										<p className='card-team__p'>{article.title}</p>
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

export default Carousel3d

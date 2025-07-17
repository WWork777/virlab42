'use client'
import Divider from '@/components/shared/divider/divider'
import Image from 'next/image'
import { useState } from 'react'
import 'swiper/css/zoom'
import { Navigation, Pagination, Zoom } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './home-team.css'

import item2 from './img/bo.jpg'
import item4 from './img/evgn.jpg'
import item6 from './img/german.jpg'
import item3 from './img/gleb.png'
import item1 from './img/nastya.jpeg'
import item7 from './img/rls.png'
import item5 from './img/serg.jpg'
import item8 from './img/svyat.png'
import item9 from './img/denis1.jpg'
import item10 from './img/serg1.jpg'
import item11 from './img/zhenya1.jpg'

const HomeTeam = () => {
	const [images] = useState([
		{
			original: item1,
			thumbnail: item1,
			thumbnailHeight: 70,
			alt: 'Image 1',
			title: 'Дизайнер',
			name: 'Настя',
		},
		{
			original: item2,
			thumbnail: item2,
			thumbnailHeight: 70,
			alt: 'Image 2',
			title: 'Веб-дизайнер',
			name: 'Бо',
		},
		{
			original: item3,
			thumbnail: item3,
			thumbnailHeight: 70,
			alt: 'Image 3',
			title: 'Разработчик',
			name: 'Денис',
		},
		{
			original: item10,
			thumbnail: item10,
			thumbnailHeight: 70,
			alt: 'Image 4',
			title: 'Разработчик',
			name: 'Евгений',
		},
		{
			original: item9,
			thumbnail: item9,
			thumbnailHeight: 70,
			alt: 'Image 5',
			title: 'Разработчик',
			name: 'Сергей',
		},
		{
			original: item11,
			thumbnail: item11,
			thumbnailHeight: 70,
			alt: 'Image 7',
			title: '3D Инженер',
			name: 'Евгений',
		},
		// Добавьте остальные изображения
	])

	return (
		<>
			<div id='team'></div>
			<div className='slider-container'>
				<Divider />
				<div className='head-container'>
					<h2 className='cormorant-garamond-bold'>Команда</h2>
					<p>
						Состоит из СОБСТВЕННЫХ (мы не пользуемся подрядом) профессиональных
						разработчиков, дизайнеров и маркетологов.
					</p>
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
								<SwiperSlide className='' key={Math.random()}>
									<div className='team-card' key={article.id}>
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

export default HomeTeam

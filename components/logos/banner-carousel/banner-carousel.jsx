'use client'
import Divider from '@/components/shared/divider/divider'
import Image from 'next/image'
import { useState } from 'react'
import 'swiper/css/zoom'
import { Navigation, Pagination, Zoom } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './banner-carousel.css'

// import {
// 	default as item1,
// 	default as item2,
// 	default as item3,
// 	default as item4,
// } from './img/poisk.png'
import business from './img/bannerbusiness.jpg'
import google from './img/bannergoogle.jpg'
import narush from './img/bannernaruzh.png'
import direct from './img/bannerVK.png'
import yandex from './img/banneryandex.jpg'

const CarouselBanner = () => {
	const [images] = useState([
		{
			original: direct,
			thumbnail: direct,
			alt: 'direct',
			name: 'Соц.сети',
			price: '1000 Р',
		},
		{
			original: business,
			thumbnail: business,
			alt: 'Image 1',
			name: 'Яндекс Карты',
			price: '1000 Р',
		},
		{
			original: yandex,
			thumbnail: yandex,
			alt: 'Image 3',
			name: 'Яндекс Директ',
			price: '1000 Р',
		},
		{
			original: google,
			thumbnail: google,
			alt: 'google',
			name: 'Google Ads',
			price: '1000 Р',
		},
		{
			original: narush,
			thumbnail: narush,
			alt: 'Image 4',
			name: 'Наружняя реклама',
			price: '1000 Р',
		},
	])

	return (
		<>
			<div className='slider-container'>
				<Divider />
				<div className='head-container'>
					<h2 className='cormorant-garamond-bold'>Рекламные баннеры</h2>
				</div>
				<div className='galary container'>
					<Swiper
						slidesPerView={1}
						centeredSlides={false}
						loop={true}
						navigation={{
							nextEl: '.swiper-button-next_banners',
							prevEl: '.swiper-button-prev_banners',
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
						className='mySwiperBanners'
					>
						{images.length > 0 ? (
							images.map(article => (
								<SwiperSlide className='' key={Math.random()}>
									<div className='banners-card pb-30'>
										<h1 className='card-banners__h cormorant-garamond-bold'>
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
					<button className='swiper-button-prev swiper-button-prev_banners'></button>
					<button className='swiper-button-next swiper-button-next_banners'></button>
				</div>
			</div>
		</>
	)
}

export default CarouselBanner

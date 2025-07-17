'use client'
import Image from 'next/image'
import 'swiper/css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import brand1 from './img/arhiteck.png'
import brand2 from './img/autofamily.png'
import brand3 from './img/edvays.png'
import brand4 from './img/fortuna.png'
import brand5 from './img/logistic.png'
import brand6 from './img/logolawyer.png'
import brand7 from './img/rrclinik.png'
import brand8 from './img/tinatiev.png'
import brand9 from './img/tvoycompozit.png'

const Brands = ({ revers }) => {
	return (
		<div className='brands py-7 '>
			<Swiper
				grabCursor={false}
				loop={true}
				speed={3000}
				slidesPerView={3}
				slidesPerGroup={1}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
					reverseDirection: revers,
					waitForTransition: true,
				}}
				breakpoints={{
					576: {
						slidesPerView: 4,
					},
					680: {
						slidesPerView: 5,
					},
					768: {
						slidesPerView: 6,
					},
					992: {
						slidesPerView: 7,
					},
					1024: {
						slidesPerView: 8,
					},
					1200: {
						slidesPerView: 8,
					},
					1280: {
						slidesPerView: 8,
					},
				}}
				navigation={false}
				pagination={false}
				modules={[Navigation, Pagination, Autoplay]}
				className='swiper-brands '
			>
				<SwiperSlide>
					<Image width={100} height={100} src={brand1} alt='logos' />
				</SwiperSlide>
				<SwiperSlide>
					<Image width={100} height={100} src={brand2} alt='logos' />
				</SwiperSlide>
				<SwiperSlide>
					<Image width={100} height={100} src={brand3} alt='logos' />
				</SwiperSlide>
				<SwiperSlide>
					<Image width={100} height={100} src={brand4} alt='logos' />
				</SwiperSlide>
				<SwiperSlide>
					<Image width={100} height={100} src={brand5} alt='logos' />
				</SwiperSlide>
				<SwiperSlide>
					<Image width={100} height={100} src={brand6} alt='logos' />
				</SwiperSlide>
				<SwiperSlide>
					<Image width={100} height={100} src={brand7} alt='logos' />
				</SwiperSlide>
				<SwiperSlide>
					<Image width={100} height={100} src={brand8} alt='logos' />
				</SwiperSlide>
				<SwiperSlide>
					<Image width={100} height={100} src={brand9} alt='logos' />
				</SwiperSlide>
				<SwiperSlide>
					<Image width={100} height={100} src={brand1} alt='logos' />
				</SwiperSlide>
				<SwiperSlide>
					<Image width={100} height={100} src={brand2} alt='logos' />
				</SwiperSlide>
				<SwiperSlide>
					<Image width={100} height={100} src={brand3} alt='logos' />
				</SwiperSlide>
				<SwiperSlide>
					<Image width={100} height={100} src={brand4} alt='logos' />
				</SwiperSlide>
				<SwiperSlide>
					<Image width={100} height={100} src={brand5} alt='logos' />
				</SwiperSlide>
				<SwiperSlide>
					<Image width={100} height={100} src={brand6} alt='logos' />
				</SwiperSlide>
				<SwiperSlide>
					<Image width={100} height={100} src={brand7} alt='logos' />
				</SwiperSlide>
				<SwiperSlide>
					<Image width={100} height={100} src={brand8} alt='logos' />
				</SwiperSlide>
				<SwiperSlide>
					<Image width={100} height={100} src={brand9} alt='logos' />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Brands

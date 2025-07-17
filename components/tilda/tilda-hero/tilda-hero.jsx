'use client'

import Link from 'next/link'
import { EffectCreative, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './Carousel.scss'
import styles from './Hero.module.scss'

const DesignHero = () => {
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
		<div className={styles.hero}>
			<>
				<Swiper
					grabCursor={false}
					effect={'creative'}
					speed={1000}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
					navigation={false}
					pagination={false}
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
					className='mySwiperDev'
				>
					<SwiperSlide>
						<div
							className='background-image'
							style={{
								backgroundImage: `url('./tilda/tilda_page.jpg')`,
								backgroundPositionY: 'top',
							}}
						>
							<img
								className={`${styles.scroll} hidden lg:block`}
								src='./development/scroll.svg'
								alt='scroll'
							/>
							<img
								className={`${styles.scroll} lg:hidden`}
								src='./development/arrow.svg'
								alt='scroll'
							/>

							<div className='fon-img-tilda '>
								<h2 className='slide-text slide-text-dev leading-none cormorant-garamond-bold'>
									Дизайн,
									<br /> который впечатляет
								</h2>

								<div className='buttons-car'>
									<Link href={'javascript:void(0)'} onClick={scrollToOrder}>
										<button className='d-btn'>ОСТАВИТЬ ЗАЯВКУ</button>
									</Link>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</>
		</div>
	)
}

export default DesignHero

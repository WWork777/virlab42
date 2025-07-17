'use client'
import ButtonOrder from '@/components/shared/button-order/button-order'
import Designer from '@/components/shared/designer/designer'
import Accordions from './partials/accordion'
import './why-accordion.scss'

const WhyAccordion = ({ page }) => {
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
		<section className='acordeon-home-2 relative' id='acordeon'>
			<img
				className='absolute bottom-0 right-0 hidden lg:block'
				src='./development/scroll.svg'
				alt='scroll'
			/>
			<img
				src='./development/arrow.svg'
				alt='scroll'
				className='absolute bottom-0 right-0 lg:hidden '
			/>
			<div className=' container'>
				<div className='grid md:grid-cols-2'>
					<div className='col-md-6'>
						<div className='row'>
							<div className=''>
								{' '}
								<div className='acordeon-content'>
									<h2 className='acordeon__title cormorant-garamond-bold '>
										ПОЧЕМУ ВАМ СТОИТ ВЫБРАТЬ НАС?
									</h2>
									{page === 'development' && (
										<ButtonOrder onClick={scrollToOrder} />
									)}
									{(page === 'tilda' ||
										page === 'taplink' ||
										page === 'logos') && <Designer />}
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='acordeon-content-img my-10'>
							<div className=' acordeon-content-overlay '>
								<Accordions />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WhyAccordion

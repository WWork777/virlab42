const WhyBots = () => {
	return (
		<div className='bots-why container py-8 md:flex md:flex-row-reverse'>
			<div className='bots-why-left flex gap-5 md:flex-row-reverse md:w-1/2'>
				<div className='grow w-1/3 sm:w-1/4  flex flex-col'>
					<div className=' md:mr-auto'>
						<img
							className='ml-auto'
							src='./bots/stars.png'
							alt='image'
						/>
					</div>
					<div className='md:mr-auto'>
						<img
							className='ml-auto '
							src='./bots/speed.png'
							alt='image'
						/>
					</div>
				</div>
				<div className='grow w-2/3 sm:w-3/4 '>
					<h5 className='text-[22px] mb-2 text-bg_color font-semibold md:text-right '>
						Все включено!
					</h5>
					<div className='md:text-right'>
						<p className=' text-[#465a65]'>
							Боты для приема заявок, для рассылок, боты-каталоги услуг 
						</p>
					</div>
				</div>
			</div>
			<div className='ads-why-right mt-3 md:w-1/2'>
				<h2 className='cormorant-garamond-bold text-3xl text-[#465a65] text-center md:text-left lg:text-[42px]'>
					ПОЧЕМУ ОНИ ПОПУЛЯРНЫ?
				</h2>
			</div>
		</div>
	)
}

export default WhyBots

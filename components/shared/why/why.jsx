const Why = ({ why }) => {
	const text = why.text.split('.')

	return (
		<div className='development-why container py-8 md:flex md:flex-row-reverse'>
			<div className='development-why-left flex gap-5 md:flex-row-reverse md:w-1/2'>
				<div className='grow w-1/3 sm:w-1/4  flex flex-col'>
					<div className=' md:mr-auto'>
						<img
							className='ml-auto'
							src='./development/stars.png'
							alt='image'
						/>
					</div>
					<div className='md:mr-auto'>
						<img
							className='ml-auto '
							src='./development/speed.png'
							alt='image'
						/>
					</div>
				</div>
				<div className='grow w-2/3 sm:w-3/4 '>
					<h5 className='text-[22px] mb-2 text-bg_color font-semibold md:text-right '>
						Все включено!
					</h5>
					<div className='md:text-right'>
						{text.map((item, index) => (
							<p key={Math.random()} className=' text-[#465a65]'>
								{item}
							</p>
						))}
					</div>
				</div>
			</div>
			<div className='development-why-right mt-3 md:w-1/2'>
				<h2 className='cormorant-garamond-bold text-3xl text-[#465a65] text-center md:text-left lg:text-[42px] uppercase leading-tight'>
					{why.title}
				</h2>
			</div>
		</div>
	)
}

export default Why

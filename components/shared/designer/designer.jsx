const Designer = () => {
	return (
		<div className='designer md:ms-6 '>
			<h3 className='cormorant-garamond-bold text-4xl '>Наш дизайнер, Бо</h3>
			<p className='pt-5 pb-3 text-lg'>
				Наш дизайнер обладает отличным вкусом и умением создавать уникальные
				решения, которые могут подойти для вашего проекта. <br /> Он готов
				предложить креативные идеи, с учетом всех ваших пожеланий, и сделает
				сайт не только красивым, но и функциональным.
			</p>
			<div className='min-w-full'>
				<button
					className='d-btn mt-5 mx-auto block sm:mx-0'
					data-bs-toggle='modal'
					data-bs-target='#exampleModal'
				>
					<a href='https://teletype.in/@bo-design/j4r52cUlNZG'>
						ВОТ ЕГО ПОРТФОЛИО
					</a>
				</button>
			</div>
		</div>
	)
}

export default Designer

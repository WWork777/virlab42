import Image from 'next/image'
import about from './3d_printing_skull-min.jpg'
import './home-about.css'

function HomeAbout() {
	return (
		<>
			<div id='about'></div>
			<section className='about-home-2'>
				<div className='about-content-img '>
					<div className='about-content-overlay'>
						<Image src={about} alt='about' />
						<div className='content-card'>
							<h3>100+</h3>
							<p>Выполненных работ</p>
						</div>
						<div className='content-card'>
							<h3>5+</h3>
							<p>
								Лет опыт <br></br> сотрудников
							</p>
						</div>
						<div className='content-card'>
							<h3>24/7</h3>
							<p>Всегда на связи</p>
						</div>
					</div>
				</div>

				<div className='about-content'>
					<h2 className='cormorant-garamond-bold'>О компании</h2>
					<p>
						Здравствуйте!
					</p>
					<p>
						Компания VIRLAB — команда профессионалов с более чем 5-летним опытом реализации коммерческих проектов.
					</p>
					<p>
						Собрана команда специалистов, специализирующихся на разработке технологических решений в сфере 
						3D-печати для решения реальных задач бизнеса — от производства прототипов до создания конечных изделий и оптимизации производственных процессов.
					</p>
				</div>
			</section>
		</>
	)
}

export default HomeAbout

import Image from 'next/image'
import about from './about1.png'
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
						Здравствуйте! Меня зовут Павел Сакнэ
					</p>
					<p>
						Я являюсь руководителем команды VIRLAB и имею более чем 10-ти летний опыт реализации
						научных и коммерческих проектов.
					</p>
					<p>
						Я собрал команду профессионалов специализирующихся на разработке программных 
						продуктов для РЕШЕНИЯ РЕАЛЬНЫХ задач бизнеса (продажи, продвижение, ПО для оптимизации работы).
					</p>
				</div>
			</section>
		</>
	)
}

export default HomeAbout

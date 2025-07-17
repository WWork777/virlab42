'use client'
import Divider from '@/components/shared/divider/divider'
import Link from 'next/link'
import './home-projects.css'
import ProjectsSlider from './partials/ProjectsSlider'

const HomeProjects = () => {
	return (
		<div className='proj container'>
			<Divider />
			<div className='head-container'>
				<h2 className='cormorant-garamond-bold'>Наши проекты</h2>
				<p>
					Мы создаем привлекательные, быстрые, продающие сайты для клиентов
					&nbsp;различных отраслей.
				</p>
			</div>
			<div>
				<div className='articles-containerr w-full mx-auto'>
					<ProjectsSlider />
					<div className='flex py-2 mt-3 w-full '>
						{' '}
						<Link
							href='/projects'
							onClick={() => window.scrollTo(0, 0)}
							className='read-more'
						>
							<span className='circle' aria-hidden='true'>
								<span className='icon arrow'></span>
							</span>
							<span className='button-text'>Все проекты</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeProjects

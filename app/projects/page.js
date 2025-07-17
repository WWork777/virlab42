export const metadata = {
	metadataBase: new URL('https://virlab42.ru'),
	title: 'Портфолио VIRLAB — Наши проекты по созданию сайтов и 3D-печати',
	description: 'Изучите проекты VIRLAB: сайты для бизнеса, онлайн-магазины, 3D-модели, логотипы и фирменный стиль. Реализованные решения по всей России.',
	keywords:
		'портфолио веб-студии, примеры работ, проекты по созданию сайтов, успешные кейсы, 3D-моделирование',
	alternates: {
		canonical: '/projects',
	},
	openGraph: {
		url: '/projects',
		title: 'Портфолио VIRLAB — Наши проекты по созданию сайтов и 3D-печати',
		description:
			'Изучите проекты VIRLAB: сайты для бизнеса, онлайн-магазины, 3D-модели, логотипы и фирменный стиль. Реализованные решения по всей России.',
		images: {
			url: '/og/og.jpg',
			width: 1200,
			height: 630,
		},
	},
}
import Projects from '@/components/projects/projects'

const ProjectsPage = () => {
	return (
		<div className=' pt-[91px] md:pt-[120px]'>
			<Projects />
		</div>
	)
}

export default ProjectsPage

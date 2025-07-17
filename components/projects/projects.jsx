'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import './projects.scss'

const Projects = () => {
	const [articles, setArticles] = useState([])
	const [displayedArticlesCount, setDisplayedArticlesCount] = useState(8)
	const articlesPerPage = 9
	const [filter, setFilter] = useState('all')

	useEffect(() => {
		fetch('/projects/projects.json')
			.then(response => response.json())
			.then(data => {
				setArticles(data)
			})
			.catch(error => console.error('Error fetching articles:', error))
	}, [])

	useEffect(() => {
		filterArticles(filter)
		setDisplayedArticlesCount(articlesPerPage)
	}, [filter, setFilter])

	const filterArticles = filter => {
		let filtered = articles

		if (filter && filter === 'all') {
			return filtered
		}
		filtered = filtered.filter(proj => proj.filter === filter)

		return filtered
	}
	const filteredArticles = filterArticles(filter)

	const handleLoadMore = () => {
		setDisplayedArticlesCount(prevCount => prevCount + articlesPerPage)
	}

	return (
		<div className='blog'>
			<div className='search'>
				<div className='search-container'>
					<h1 className='cormorant-garamond-bold '>Проекты</h1>

					<ul className='flex flex-wrap justify-around items-center gap-2 '>
						<li
							onClick={e => setFilter(e.target.dataset.filter)}
							className={`filter cursor-pointer ${
								filter == 'all' ? 'filter_active' : null
							}`}
							data-filter='all'
						>
							Все
						</li>
						<li
							onClick={e => setFilter(e.target.dataset.filter)}
							className={`filter cursor-pointer ${
								filter == 'web' ? 'filter_active ' : null
							}`}
							data-filter='web'
						>
							Многостраничники
						</li>
						<li
							onClick={e => setFilter(e.target.dataset.filter)}
							className={`filter cursor-pointer ${
								filter == 'graphic' ? 'filter_active' : null
							}`}
							data-filter='graphic'
						>
							Лэндинги
						</li>

						<li
							onClick={e => setFilter(e.target.dataset.filter)}
							className={`filter cursor-pointer ${
								filter == 'laravel' ? 'filter_active ' : null
							}`}
							data-filter='laravel'
						>
							Laravel
						</li>
						<li
							onClick={e => setFilter(e.target.dataset.filter)}
							className={`filter cursor-pointer ${
								filter == 'react' ? 'filter_active' : null
							}`}
							data-filter='react'
						>
							React
						</li>
						<li
							onClick={e => setFilter(e.target.dataset.filter)}
							className={`filter cursor-pointer ${
								filter == 'wp' ? 'filter_active ' : null
							}`}
							data-filter='wp'
						>
							Wordpress
						</li>
						<li
							onClick={e => setFilter(e.target.dataset.filter)}
							className={`filter cursor-pointer ${
								filter == 'other' ? 'filter_active' : null
							}`}
							data-filter='other'
						>
							Модернизация
						</li>
					</ul>
				</div>
			</div>
			<div className='articles-container'>
				{filteredArticles.length > 0 ? (
					filteredArticles.slice(0, displayedArticlesCount).map(article => (
						<div className='article-card' key={article.id}>
							<Link
								style={{ textDecoration: 'none' }}
								href={`${article.url}`}
								onClick={() => window.scrollTo(0, 0)}
							>
								<div className='blog-img'>
									<div className='fon-blog'>
										<Image
											width={0}
											height={0}
											sizes='100vw'
											priority={true}
											src={`/projects/${article.title}.png`}
											alt={article.title}
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'contain',
											}}
										/>
									</div>
								</div>
							</Link>
							<div className='container'>
								<p className='block proj-title'>{article.title}</p>
								<p className='block date'>{article.stack}</p>
								<p className='block proj-term'>{article.term}</p>
								<p className='block proj-pricing'>{article.pricing}</p>
								<p className='block proj-conversion'>{article.conversion}</p>
							</div>
						</div>
					))
				) : (
					<p className='no-articles'>Проекты не найдены</p>
				)}
			</div>
			{filteredArticles.length > displayedArticlesCount && (
				<button className='load-more' onClick={handleLoadMore}>
					Показать больше
				</button>
			)}
		</div>
	)
}

export default Projects

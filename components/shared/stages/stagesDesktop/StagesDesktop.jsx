'use client'
import { useState } from 'react'
import Progrezz from '../progress/Progress'

import './StagesDesktop.scss'

// import {
// 	Screen1,
// 	Screen2,
// 	Screen3,
// 	Screen4,
// 	Screen5,
// 	Screen6,
// 	Screen7,
// 	Screen8,
// } from '../screens/Screens'

const StagesDesktop = ({ stages }) => {
	const [stage, setStage] = useState(0)
	const [title, setTitle] = useState(stages.titles[0])
	const [day, setDay] = useState('1 день')
	const [width, setWidth] = useState(100 / stages.titles.length)

	const getData = () => {
		return stages.screens[+stage]
	}
	const updStage = (num, text) => {
		setStage(num)
		setTitle(text)
	}

	return (
		<>
			<section className='stages-desktop desktop flex'>
				<img src='./development/scroll.svg' alt='scroll' className='scroll' />

				<div className='desktop-content-img '>
					<div className='desktop-content-overlay'>
						<div className='desktop__header pt-3'>
							<img
								className='mb-2'
								src='./development/target.svg'
								alt='target'
							/>
							<div>
								<h3 className='desktop__title'>ЭТАП № {+stage + 1}</h3>
								<h6
									style={{ textTransform: 'uppercase', marginTop: '5px' }}
									className='desktop__desc'
								>
									{title}
								</h6>
							</div>
						</div>
						<div className='desktop__body'>
							<p>{getData()}</p>
						</div>
					</div>
				</div>

				<div className='desktop-content'>
					<h2 className='cormorant-garamond-bold'>ЭТАПЫ РАЗРАБОТКИ</h2>
					<ul style={{ listStyleType: 'decimal' }} className='desktop__list '>
						{stages.titles.map((item, index) => (
							<li key={index} className='desktop__list-item'>
								<a
									onClick={e => {
										updStage(e.target.dataset.num, e.target.innerHTML)
										setDay('1-й день')
										setWidth((100 / stages.titles.length) * (index + 1))
									}}
									data-num={index}
									style={
										stage == index ? { color: '#ffffff' } : { color: 'grey' }
									}
									type='button'
									className='desktop__list-link uppercase'
								>
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>
			</section>
			<div className='hidden lg:block'>
				<Progrezz day={day} width={width} />
			</div>
		</>
	)
}

export default StagesDesktop

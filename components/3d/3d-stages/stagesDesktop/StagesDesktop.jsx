'use client'
import { useState } from 'react'
import Progrezz from '../progress/Progress'
import StagesMobile from '../stagesMobile/stages-mobile'

import './StagesDesktop.scss'

import {
	Screen1,
	Screen2,
	Screen3,
	Screen4,
	Screen5,
	Screen6,
	Screen7,
	Screen8,
} from '../screens/Screens'

const StagesDesktop = () => {
	const [stage, setStage] = useState(1)
	const [title, setTitle] = useState('Запуск и ведение проекта')
	const [day, setDay] = useState('1 день')
	const [width, setWidth] = useState(12.5)

	const data = () => {
		switch (+stage) {
			case 1:
				return <Screen1 />
			case 2:
				return <Screen2 />
			case 3:
				return <Screen3 />
			case 4:
				return <Screen4 />
			case 5:
				return <Screen5 />
			case 6:
				return <Screen6 />
			case 7:
				return <Screen7 />
			case 8:
				return <Screen8 />
			default:
				break
		}
	}
	const updStage = (num, text) => {
		setStage(num)
		setTitle(text)
	}

	return (
		<>
			<StagesMobile />
			<section className='stages-desktop desktop hidden lg:flex'>
				<img src='./3d/scroll.svg' alt='scroll' className='scroll' />

				<div className='desktop-content-img '>
					<div className='desktop-content-overlay'>
						<div className='desktop__header pt-3'>
							<img className='mb-2' src='./3d/target.svg' alt='target' />
							<div>
								<h3 className='desktop__title'>ЭТАП № {stage}</h3>
								<h6
									style={{ textTransform: 'uppercase', marginTop: '5px' }}
									className='desktop__desc'
								>
									{title}
								</h6>
							</div>
						</div>
						<div className='desktop__body'>{data()}</div>
					</div>
				</div>

				<div className='desktop-content'>
					<h2 className='cormorant-garamond-bold'>ЭТАПЫ РАЗРАБОТКИ</h2>
					<ul style={{ listStyleType: 'decimal' }} className='desktop__list'>
						<li className='desktop__list-item'>
							<a
								onClick={e => {
									updStage(e.target.dataset.num, e.target.innerHTML)
									setDay('1-й день')
									setWidth(12.5)
								}}
								data-num='1'
								style={stage == 1 ? { color: '#ffffff' } : { color: 'grey' }}
								type='button'
								className='desktop__list-link'
							>
								ЗАПУСК И ВЕДЕНИЕ ПРОЕКТА
							</a>
						</li>
						<li className='desktop__list-item'>
							<a
								onClick={e => {
									updStage(e.target.dataset.num, e.target.innerHTML)
									setDay('5-й день')
									setWidth(25)
								}}
								data-num='2'
								style={stage == 2 ? { color: '#ffffff' } : { color: 'grey' }}
								type='button'
								className='desktop__list-link'
							>
								МАРКЕТИНГ И ПРОТОТИП
							</a>
						</li>
						<li className='desktop__list-item'>
							<a
								onClick={e => {
									updStage(e.target.dataset.num, e.target.innerHTML)
									setDay('10-й день')
									setWidth(37.5)
								}}
								data-num='3'
								style={stage == 3 ? { color: '#ffffff' } : { color: 'grey' }}
								type='button'
								className='desktop__list-link'
							>
								ОТРИСОВКА ДИЗАЙНА
							</a>
						</li>
						<li className='desktop__list-item'>
							<a
								onClick={e => {
									updStage(e.target.dataset.num, e.target.innerHTML)
									setDay('15-й день')
									setWidth(50)
								}}
								data-num='4'
								style={stage == 4 ? { color: '#ffffff' } : { color: 'grey' }}
								type='button'
								className='desktop__list-link'
							>
								ВЕРСТКА
							</a>
						</li>
						<li className='desktop__list-item'>
							<a
								onClick={e => {
									updStage(e.target.dataset.num, e.target.innerHTML)
									setDay('23-й день')
									setWidth(62.5)
								}}
								data-num='5'
								style={stage == 5 ? { color: '#ffffff' } : { color: 'grey' }}
								type='button'
								className='desktop__list-link'
							>
								АДАПТАЦИЯ ПОД МОБИЛЬНЫЕ УСТРОЙСТВА
							</a>
						</li>
						<li className='desktop__list-item'>
							<a
								onClick={e => {
									updStage(e.target.dataset.num, e.target.innerHTML)
									setDay('25-й день')
									setWidth(75)
								}}
								data-num='6'
								style={stage == 6 ? { color: '#ffffff' } : { color: 'grey' }}
								type='button'
								className='desktop__list-link'
							>
								Интеграция и запуск сайта
							</a>
						</li>
						<li className='desktop__list-item'>
							<a
								onClick={e => {
									updStage(e.target.dataset.num, e.target.innerHTML)
									setDay('28-й день')
									setWidth(87.5)
								}}
								data-num='7'
								style={stage == 7 ? { color: '#ffffff' } : { color: 'grey' }}
								type='button'
								className='desktop__list-link'
							>
								Тестирование и отладка сайта
							</a>
						</li>
						<li className='desktop__list-item'>
							<a
								onClick={e => {
									updStage(e.target.dataset.num, e.target.innerHTML)
									setDay('30-й день')
									setWidth(100)
								}}
								data-num='8'
								style={stage == 8 ? { color: '#ffffff' } : { color: 'grey' }}
								type='button'
								className='desktop__list-link'
							>
								Сдача проекта и запуск в работу
							</a>
						</li>
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

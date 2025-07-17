import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Progress from '@radix-ui/react-progress'
import './Progress.scss'
import './styles.css'

const Progrezz = ({ width }) => {
	return (
		<>
			<div className='progres  '>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<div className='progress'>
								<Progress.Root className='ProgressRoot' value={width}>
									<Progress.Indicator
										className='ProgressIndicator'
										style={{ transform: `translateX(-${100 - width}%)` }}
									/>
								</Progress.Root>
							</div>
							<div className='progres__text flex item-center justify-between p-2'>
								<div className='flex item-center gap-2'>
									Прогресс разработки
									<FontAwesomeIcon
										size='xl'
										color='#968c76'
										icon={faArrowRightLong}
									/>
								</div>
								<span
									style={
										width == 100
											? { display: 'block', color: '#968c76' }
											: { display: 'none' }
									}
								>
									ГОТОВО!
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="progres_img">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-2">
                            <div>
                                <div className=" progres__img-wrap position-relative">
                                    <div
                                        style={
                                            stage == 1 || width == 100
                                                ? { display: 'none' }
                                                : { display: 'block' }
                                        }
                                        className=" progres-overlay position-absolute"
                                    ></div>

                                    <img
                                        style={{
                                            width: '128px',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '25px',
                                            margin: '0 auto',
                                            display: 'block',
                                        }}
                                        src={slide1}
                                        alt=""
                                    />
                                </div>
                                <h6 className="text-center">Проект-менеджер</h6>
                                <p className="text-center">Планирование и ведение проекта</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <div className=" progres__img-wrap position-relative">
                                    <div
                                        style={
                                            stage == 2 || width == 100
                                                ? { display: 'none' }
                                                : { display: 'block' }
                                        }
                                        className=" progres-overlay position-absolute"
                                    ></div>

                                    <img
                                        style={{
                                            width: '128px',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '25px',
                                            margin: '0 auto',
                                            display: 'block',
                                        }}
                                        src={slide2}
                                        alt=""
                                    />
                                </div>
                                <h6 className="text-center">Маркетолог</h6>
                                <p className="text-center">Разрабатывает макет страницы</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <div className=" progres__img-wrap position-relative">
                                    <div
                                        style={
                                            stage == 3 || width == 100
                                                ? { display: 'none' }
                                                : { display: 'block' }
                                        }
                                        className=" progres-overlay position-absolute"
                                    ></div>

                                    <img
                                        style={{
                                            width: '128px',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '25px',
                                            margin: '0 auto',
                                            display: 'block',
                                        }}
                                        src={slide3}
                                        alt=""
                                    />
                                </div>
                                <h6 className="text-center">Дизайнер</h6>
                                <p className="text-center">Разрабатывает дизайн будущего сайта</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <div className=" progres__img-wrap position-relative">
                                    <div
                                        style={
                                            stage == 4 || stage == 5 || width == 100
                                                ? { display: 'none' }
                                                : { display: 'block' }
                                        }
                                        className=" progres-overlay position-absolute"
                                    ></div>

                                    <img
                                        style={{
                                            width: '128px',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '25px',
                                            margin: '0 auto',
                                            display: 'block',
                                        }}
                                        src={slide4}
                                        alt=""
                                    />
                                </div>
                                <h6 className="text-center">Верстальщик</h6>
                                <p className="text-center">Верстка сайта и адаптив</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <div className=" progres__img-wrap position-relative">
                                    <div
                                        style={
                                            stage == 6 || width == 100
                                                ? { display: 'none' }
                                                : { display: 'block' }
                                        }
                                        className=" progres-overlay position-absolute"
                                    ></div>

                                    <img
                                        style={{
                                            width: '128px',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '25px',
                                            margin: '0 auto',
                                            display: 'block',
                                        }}
                                        src={slide5}
                                        alt=""
                                    />
                                </div>

                                <h6 className="text-center">Программист</h6>
                                <p className="text-center">
                                    Разработка основного функционала сайта
                                </p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <div className=" progres__img-wrap position-relative">
                                    <div
                                        style={
                                            stage == 7 || width == 100
                                                ? { display: 'none' }
                                                : { display: 'block' }
                                        }
                                        className=" progres-overlay position-absolute"
                                    ></div>

                                    <img
                                        style={{
                                            width: '128px',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '25px',
                                            margin: '0 auto',
                                            display: 'block',
                                        }}
                                        src={slide6}
                                        alt=""
                                    />
                                </div>

                                <h6 className="text-center">Тестировщик</h6>
                                <p className="text-center">Тестирование функционала и запуск</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
		</>
	)
}

export default Progrezz

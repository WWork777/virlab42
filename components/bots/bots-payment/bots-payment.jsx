import { faPenNib, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './bots-payment.module.scss';

const PaymentBots = () => {
    return (
        <div className={s.payment}>
            <div className='container'>
                <div>
                    <div className={s.header}>
                        <h2 className={`${s.title} cormorant-garamond-bold`}>
                            Порядок работы
                        </h2>
                        <div className={`${s.divider} hidden md:block`}></div>
                        <span className={`${s.logo} cormorant-garamond-bold hidden md:block`}>
                            Реклама <br /> в три этапа
                        </span>
                    </div>
                    <div className='grid max-w-5xl mx-auto gap-y-5 sm:grid-cols-1 md:grid-cols-3'>
                        <div className={`${s.col}`}>
                            <div className={`${s.col_wrap}`}>
                                <div className={`${s.col_overlay}`}>
                                    <div className={s.stage}>1 этап</div>
                                    <div className={`${s.overlay_title} cormorant-garamond-bold`}>
                                        Анализ + <br /> Разработка Бота
                                    </div>
                                    <div className={`${s.circs}`}>
                                        <div className={s.sale}>
                                            Оплата 50%
                                            <FontAwesomeIcon color={'#968c76'} icon={faSackDollar} />
                                        </div>
                                        <div className={s.act}>
                                            Заключение договора
                                            <FontAwesomeIcon color={'#968c76'} icon={faPenNib} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.col}`}>
                            <div className={`${s.col_wrap}`}>
                                <div className={`${s.col_overlay}`}>
                                    <div className={s.stage}>2 этап</div>
                                    <div className={`${s.overlay_title} cormorant-garamond-bold`}>
                                        Первый запуск + <br /> Корректировка
                                    </div>
                                    <div className={`${s.circs}`}>
                                        <div className={s.sale}>
                                            Оплата 100%
                                            <FontAwesomeIcon color={'#968c76'} icon={faSackDollar} />
                                        </div>
                                        <div className={s.act}>
                                            Подписание акта
                                            <FontAwesomeIcon color={'#968c76'} icon={faPenNib} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.col}`}>
                            <div className={`${s.col_wrap}`}>
                                <div className={`${s.col_overlay}`}>
                                    <div className={s.stage}>3 этап</div>
                                    <div className={`${s.overlay_title} cormorant-garamond-bold`}>
                                        Поддержка <br /> каждый месяц
                                    </div>
                                    <div className={`${s.circs}`}>
                                        <div className={s.sale}>
                                            от 500 руб.
                                            <FontAwesomeIcon color={'#968c76'} icon={faSackDollar} />
                                        </div>
                                        <div className={s.act}>
                                            Подписание актов
                                            <FontAwesomeIcon color={'#968c76'} icon={faPenNib} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentBots;

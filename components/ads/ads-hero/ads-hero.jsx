"use client";

import Link from "next/link";
import { EffectCreative, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Carousel.scss";
import styles from "./Hero.module.scss";

const HeroAds = () => {
  const scrollToOrder = () => {
    const element = document.getElementById("main-form");
    const offset = 200;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.hero}>
      <>
        <Swiper
          grabCursor={false}
          effect={"creative"}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={false}
          pagination={false}
          loop={true}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-40%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Navigation, Pagination]}
          className="mySwiperDev"
        >
          <SwiperSlide>
            <div
              className="background-image"
              style={{ backgroundImage: `url('./ads/seo2.png')` }}
            >
              <img
                className={`${styles.scroll} hidden lg:block`}
                src="./ads/scroll.svg"
                alt="scroll"
              />
              <img
                className={`${styles.scroll} lg:hidden`}
                src="./ads/arrow.svg"
                alt="scroll"
              />

              <div className="fon-img bg-[#181f24f5]">
                <h2 className="slide-text slide-text-dev leading-none cormorant-garamond-bold">
                  По-настоящему эффективная реклама
                </h2>
                {/* 
								<div className='buttons-car'>
									<Link href='javascript:void(0)' onClick={scrollToOrder}>
										<button className='d-btn'>ОСТАВИТЬ ЗАЯВКУ</button>
									</Link>
								</div> */}
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
                        <div
                            className="background-image"
                            style={{ backgroundImage: `url(${card3})` }}
                        >
                            <div className="fon-img">
                                <h2 className="slide-text cormorant-garamond-bold">Продвижение</h2>
                                <p className="slide-text-p">- Яндекс.Директ от 10 000 руб</p>
                                <p className="slide-text-p">
                                    - Google от 100$ (+12% за транзакции)
                                </p>
                                <div className="buttons-car">
                                     href={"#"}
                                        
                                        href="/services"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        <button className="d-btn">ПОДРОБНЕЕ</button>
                                    </Link>
                                     href={"#"}
                                        
                                        href="/applicationmain"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        <button className="d-btn">ОСТАВИТЬ ЗАЯВКУ</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="background-image"
                            style={{ backgroundImage: `url(${card3})` }}
                        >
                            <div className="fon-img">
                                <h2 className="slide-text cormorant-garamond-bold">Дизайн</h2>
                                <p className="slide-text-p">- логотипы 1500 руб</p>
                                <p className="slide-text-p">- баннер от 500 руб</p>
                                <p className="slide-text-p">- монтаж видео от 1500 руб</p>
                                <div className="buttons-car">
                                     href={"#"}>
                                        <button className="d-btn" onClick={scrollToGalery}>
                                            ПОДРОБНЕЕ
                                        </button>
                                    </Link>
                                     href={"#"}
                                        
                                        href="/applicationmain"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        <button className="d-btn">ОСТАВИТЬ ЗАЯВКУ</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="background-image"
                            style={{ backgroundImage: `url(${card3})` }}
                        >
                            <div className="fon-img">
                                <h2 className="slide-text cormorant-garamond-bold">
                                    Telegram-боты
                                </h2>
                                <p className="slide-text-p">- для приема заявок от 5000 руб.</p>
                                <div className="buttons-car">
                                     href={"#"}>
                                        <button className="d-btn" onClick={scrollToGalery}>
                                            ПОДРОБНЕЕ
                                        </button>
                                    </Link>
                                     href={"#"}
                                        
                                        href="/applicationmain"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        <button className="d-btn">ОСТАВИТЬ ЗАЯВКУ</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="background-image"
                            style={{ backgroundImage: `url(${card3})` }}
                        >
                            <div className="fon-img">
                                <h2 className="slide-text cormorant-garamond-bold"> ads-печать</h2>
                                <p className="slide-text-p">- моделирование от 500 руб</p>
                                <p className="slide-text-p">- печать от 7 руб./грамм</p>
                                <div className="buttons-car">
                                     href={"#"}>
                                        <button className="d-btn" onClick={scrollToGalery}>
                                            ПОДРОБНЕЕ
                                        </button>
                                    </Link>
                                     href={"#"}
                                        
                                        href="/applicationmain"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        <button className="d-btn">ОСТАВИТЬ ЗАЯВКУ</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
        </Swiper>
      </>
    </div>
  );
};

export default HeroAds;

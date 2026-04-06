"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./pricing.module.scss";

// --- Интерфейсы ---
interface PricingPlan {
  planName: string;
  planPrice: string;
  cancelPrice?: string;
  planDescp: string;
  tag?: string;
  planIncludes: string[];
  planIncludesTitle?: string;
}

interface PricingData {
  data: PricingPlan[];
}

// --- Данные ---
const PRICING_JSON: PricingData = {
  data: [
    {
      planName: "Landing",
      planPrice: "59 990₽",
      cancelPrice: "79 990₽",
      planDescp:
        "Отлично подходит тем, кто только начинает развивать бизнес в интернете.",
      planIncludes: [
        "Индивидуальный ручной дизайн",
        "Формирование воронки",
        "SEO ядро",
        "Заявки на почту, CRM или TG-бот",
        "Подключение Яндекс.Метрика, Google",
      ],
    },
    {
      planName: "Многостраничник",
      tag: "Популярный",
      planPrice: "99 990₽",
      cancelPrice: "149 990₽",
      planDescp: "Идеально подходит компаниям, нацеленным масштабироваться.",
      planIncludes: [
        "Индивидуальный ручной дизайн",
        "Воронки для каждой страницы",
        "SEO ядро для каждой страницы",
        "Заявки на почту, CRM или TG-бот",
        "Подключение Яндекс.Метрика, Google",
        "Блог",
      ],
    },
    {
      planName: "Интернет-магазин",
      planPrice: "149 990₽",
      planDescp:
        "Для магазинов, которые хотят отличаться от конкурентов на Tilda и Wordpress.",
      planIncludes: [
        "Индивидуальный ручной дизайн",
        "Формирование воронки",
        "Каталог товаров",
        "SEO ядро для страниц и товаров",
        "Заявки на почту, CRM или TG-бот",
        "Подключение Яндекс.Метрика, Google",
      ],
    },
  ],
};

const IT_OUTSOURCE_JSON: PricingData = {
  data: [
    {
      planName: "Тариф БАЗОВЫЙ",
      planPrice: "9 990₽",
      cancelPrice: "19 990₽",
      planDescp: "Для тех, кому нужно просто «чтобы работало»",
      planIncludes: [
        "Разработка сайта",
        "Резервное копирование",
        "SSL-сертификат",
        "Техподдержка сайта (обеспечение 24/7 работы)",
        "Рабочие заявки в TG/почту/CRM",
      ],
    },
    {
      planName: "Тариф СТАНДАРТ",
      planIncludesTitle: "Все из Базового +",
      planPrice: "19 990₽",
      cancelPrice: "29 990₽",
      planDescp: "Для растущих проектов",
      planIncludes: [
        "Разработчик для развития проекта",
        "Дизайнер для рекламных материалов",
        "Наполнение, оформление Яндекс.Карт",
      ],
    },
    {
      planName: "Тариф ПРОДВИЖЕНИЕ",
      planPrice: "39 990₽",
      cancelPrice: "49 990₽",
      planIncludesTitle: "Все из Базового и Стандарта +",
      planDescp: "Для лидеров рынка",
      planIncludes: [
        "Директолог",
        "SEO на 1 регион",
        "Бюджет на SEO включен в тариф",
      ],
    },
    {
      planName: "НОВЫЙ ТАРИФ",
      planPrice: "64 990₽",
      cancelPrice: "74 990₽",
      planIncludesTitle: "Все из Предыдущих тарифов +",
      planDescp: "Полноценый аутсорсинг для бизнеса",
      planIncludes: ["Сайт", "SEO (включая бюджет)", "СММ"],
    },
    {
      planName: "Тариф ПРОДАЖИ",
      planPrice: "79 990₽",
      cancelPrice: "89 990₽",
      planIncludesTitle: "Все из Предыдущих тарифов +",
      planDescp: "Для быстрого роста продаж",
      planIncludes: [
        "Настройка контекстной рекламы",
        "Ведение рекламных кампаний",
        "Рекламный бюджет включен в тариф",
      ],
    },
  ],
};

// --- Основной компонент ---
export default function Pricing() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  if (!mounted) return null;

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.inner}>
            {/* СЕКЦИЯ 1: СТОИМОСТЬ (ГРИД) */}
            <div className={styles.topBlock}>
              <h2 className="text-6xl max-lg:text-[50px] text-center py-3 cormorant-garamond-bold text-black uppercase">
                Стоимость
              </h2>

              <div className={styles.grid}>
                {PRICING_JSON.data.map((value: PricingPlan, index: number) => (
                  <div key={`main-card-${index}`} className={styles.card}>
                    <div className={styles.cardTop}>
                      <div className={styles.cardTitleRow}>
                        <p className={styles.planName}>{value.planName}</p>
                        {value.tag && (
                          <div className={styles.tag}>
                            <Icon
                              icon="fluent:fire-20-regular"
                              width="20"
                              height="20"
                              style={{ color: "#fff" }}
                            />
                            <span className={styles.tagText}>{value.tag}</span>
                          </div>
                        )}
                      </div>

                      <div className={styles.priceBlock}>
                        <div className={styles.priceRow}>
                          {value.cancelPrice && (
                            <h3 className={styles.cancelPrice}>
                              <del>{value.cancelPrice}</del>
                            </h3>
                          )}
                          <h3 className={styles.price}>{value.planPrice}</h3>
                        </div>
                      </div>
                      <p className={styles.desc}>{value.planDescp}</p>
                    </div>

                    <div className={styles.priceBetween}>
                      <div className={styles.includes}>
                        <p className={styles.includesTitle}>Что включено:</p>
                        <ul className={styles.includesList}>
                          {value.planIncludes.map((item: string, i: number) => (
                            <li
                              key={`inc-${index}-${i}`}
                              className={styles.includesItem}
                            >
                              <div className={styles.check}>
                                <Image
                                  src="/icons/right-check.svg"
                                  alt="check"
                                  width={20}
                                  height={20}
                                />
                              </div>
                              <span className={styles.includesText}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto">
                        <Link
                          href="https://max.ru/u/f9LHodD0cOJXGrzpVLDRugOGDp3Xu_r0mAB6UOgBedxOQi5ozS_WPVB33So"
                          className={styles.btn}
                        >
                          <span className={styles.btnText}>Заказать</span>
                          <div className={styles.btnIconWrap}>
                            <svg
                              className={styles.btnIcon}
                              width="58"
                              height="58"
                              viewBox="0 0 58 58"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g filter="url(#filter0_d_1_873)">
                                <rect
                                  x="3"
                                  y="2"
                                  width="52"
                                  height="52"
                                  rx="26"
                                  fill="white"
                                />
                                <path
                                  d="M24 23H34M34 23V33M34 23L24 33"
                                  stroke="#1F2A2E"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <filter
                                  id="filter0_d_1_873"
                                  x="0"
                                  y="0"
                                  width="58"
                                  height="58"
                                  filterUnits="userSpaceOnUse"
                                  colorInterpolationFilters="sRGB"
                                >
                                  <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                  />
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  />
                                  <feOffset dy="1" />
                                  <feGaussianBlur stdDeviation="1.5" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_1_873"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_1_873"
                                    result="shape"
                                  />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* СЕКЦИЯ 2: IT-АУТСОРСИНГ (СЛАЙДЕР) */}
            <div className="mt-20">
              <h2 className="text-6xl max-lg:text-[50px] text-center py-3 mb-10 cormorant-garamond-bold text-black uppercase">
                IT - Аутсорсинг
              </h2>

              <div className="slider-container">
                <Slider {...sliderSettings}>
                  {IT_OUTSOURCE_JSON.data.map(
                    (value: PricingPlan, index: number) => (
                      <div
                        key={`outsource-card-${index}`}
                        className={styles.slideOuter}
                      >
                        <div className={styles.slideCard}>
                          <div className={styles.slideContent}>
                            <div className={styles.cardTop}>
                              <p className={styles.planName}>
                                {value.planName}
                              </p>
                              <div className={styles.priceBlock}>
                                <div className={styles.priceRowLeft}>
                                  {value.cancelPrice && (
                                    <h3 className={styles.cancelPrice}>
                                      <del>{value.cancelPrice}</del>
                                    </h3>
                                  )}
                                  <h3 className={styles.price}>
                                    {value.planPrice}
                                  </h3>
                                </div>
                              </div>
                              <p className={styles.desc}>{value.planDescp}</p>
                            </div>

                            <div className={styles.includes}>
                              <p className={styles.includesTitle}>
                                Что включено:
                              </p>
                              {value.planIncludesTitle && (
                                <p className="text-sm font-bold text-gray-300 mb-2">
                                  {value.planIncludesTitle}
                                </p>
                              )}
                              <ul className={styles.includesList}>
                                {value.planIncludes.map(
                                  (item: string, i: number) => (
                                    <li
                                      key={`inc-out-${index}-${i}`}
                                      className={styles.includesItem}
                                    >
                                      <div className={styles.check}>
                                        <Image
                                          src="/icons/right-check.svg"
                                          alt="check"
                                          width={20}
                                          height={20}
                                        />
                                      </div>
                                      <span className={styles.includesText}>
                                        {item}
                                      </span>
                                    </li>
                                  ),
                                )}
                              </ul>
                            </div>
                          </div>

                          <div className="p-6 pt-0 mt-auto">
                            <Link
                              href="https://max.ru/u/f9LHodD0cOJXGrzpVLDRugOGDp3Xu_r0mAB6UOgBedxOQi5ozS_WPVB33So"
                              className={styles.btn}
                            >
                              <span className={styles.btnText}>Заказать</span>
                              <div className={styles.btnIconWrap}>
                                <svg
                                  className={styles.btnIcon}
                                  width="58"
                                  height="58"
                                  viewBox="0 0 58 58"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g filter="url(#filter-outsource)">
                                    <rect
                                      x="3"
                                      y="2"
                                      width="52"
                                      height="52"
                                      rx="26"
                                      fill="white"
                                    />
                                    <path
                                      d="M24 23H34M34 23V33M34 23L24 33"
                                      stroke="#1F2A2E"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </g>
                                  <defs>
                                    <filter
                                      id="filter-outsource"
                                      x="0"
                                      y="0"
                                      width="58"
                                      height="58"
                                      filterUnits="userSpaceOnUse"
                                      colorInterpolationFilters="sRGB"
                                    >
                                      <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                      />
                                      <feOffset dy="1" />
                                      <feGaussianBlur stdDeviation="1.5" />
                                      <feComposite
                                        in2="hardAlpha"
                                        operator="out"
                                      />
                                      <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_1"
                                      />
                                      <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_1"
                                        result="shape"
                                      />
                                    </filter>
                                  </defs>
                                </svg>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

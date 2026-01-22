"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./calculator.module.scss";

export default function Calculator() {
  // Шаг 1: Тип сайта + сервер
  const [siteType, setSiteType] = useState<"single" | "multi">("single");
  const [isNotOurServer, setIsNotOurServer] = useState(false);

  // Шаг 2: SEO
  const [seoOption, setSeoOption] = useState<"free" | "120" | "240" | "1000">(
    "free"
  );

  // Шаг 3: Реклама
  const [adOption, setAdOption] = useState<"free" | "paid">("free");

  // Шаг 4: Доп. аутсорсинг
  const [blogChecked, setBlogChecked] = useState(false);

  // Шаг 5: SMM (опционально)
  const [isSmmNeeded, setIsSmmNeeded] = useState(true);
  const [postsPerWeek, setPostsPerWeek] = useState<"1" | "2" | "3" | "5" | "7">(
    "1"
  );
  const [socialNetworks, setSocialNetworks] = useState<"1" | "2" | "3">("2");
  const [shootingsNeeded, setShootingsNeeded] = useState(false);

  // Навигация
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const calculateStep1Total = () => {
    let total = siteType === "single" ? 10000 : 20000;
    if (isNotOurServer) total += 2000;
    return total;
  };

  const calculateStep2Total = () => {
    let total = calculateStep1Total();
    switch (seoOption) {
      case "120":
        total += 20000;
        break;
      case "240":
        total += 25000;
        break;
      case "1000":
        total += 50000;
        break;
      default:
        break;
    }
    return total;
  };

  const calculateStep3Total = () => {
    let total = calculateStep2Total();
    if (adOption === "paid") total += 10000;
    return total;
  };

  const calculateStep4Total = () => {
    let total = calculateStep3Total();
    if (blogChecked) total += 5000;
    return total;
  };

  const calculateStep5TotalWithoutShooting = () => {
    if (!isSmmNeeded) return calculateStep4Total();

    let total = calculateStep4Total();

    let smmBase = 0;
    switch (postsPerWeek) {
      case "1":
        smmBase = 5000;
        break;
      case "2":
        smmBase = 6000;
        break;
      case "3":
        smmBase = 8000;
        break;
      case "5":
        smmBase = 12000;
        break;
      case "7":
        smmBase = 18000;
        break;
    }

    let multiplier = 1.0;
    switch (socialNetworks) {
      case "1":
        multiplier = 0.7;
        break;
      case "3":
        multiplier = 1.3;
        break;
      default:
        multiplier = 1.0;
    }

    total += smmBase * multiplier;
    return total;
  };

  const calculateStep5Total = () => {
    let total = calculateStep5TotalWithoutShooting();
    if (shootingsNeeded && isSmmNeeded) total += 5000;
    return total;
  };

  const totalAmount = calculateStep5Total();

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep((s) => s + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const getSmmPrice = () => {
    if (!isSmmNeeded) return "Не включено";

    let smmBase = 0;
    switch (postsPerWeek) {
      case "1":
        smmBase = 5000;
        break;
      case "2":
        smmBase = 6000;
        break;
      case "3":
        smmBase = 8000;
        break;
      case "5":
        smmBase = 12000;
        break;
      case "7":
        smmBase = 18000;
        break;
    }

    let multiplier = 1.0;
    switch (socialNetworks) {
      case "1":
        multiplier = 0.7;
        break;
      case "3":
        multiplier = 1.3;
        break;
      default:
        multiplier = 1.0;
    }

    return `${Math.round(smmBase * multiplier).toLocaleString()} ₽`;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className={styles.stepBlock}>
            <h3 className={styles.stepTitle}>1. Выберите тип сайта</h3>

            <div className={styles.grid2}>
              <label className={styles.optionCard}>
                <input
                  type="radio"
                  name="siteType"
                  value="single"
                  checked={siteType === "single"}
                  onChange={() => setSiteType("single")}
                  className={styles.control}
                />
                <div>
                  <span className={styles.optionTitle}>
                    Одностраничник (лендинг)
                  </span>
                  <span className={styles.optionDesc}>
                    Быстрый запуск, минимум страниц
                  </span>
                  <span className={styles.pricePill}>10 000 ₽/мес</span>
                </div>
              </label>

              <label className={styles.optionCard}>
                <input
                  type="radio"
                  name="siteType"
                  value="multi"
                  checked={siteType === "multi"}
                  onChange={() => setSiteType("multi")}
                  className={styles.control}
                />
                <div>
                  <span className={styles.optionTitle}>
                    Многостраничный сайт
                  </span>
                  <span className={styles.optionDesc}>
                    Полноценный сайт с разделами, меню, формами
                  </span>
                  <span className={styles.pricePill}>20 000 ₽/мес</span>
                </div>
              </label>
            </div>

            <div className={styles.mt6}>
              <label className={styles.optionCard}>
                <input
                  type="checkbox"
                  checked={isNotOurServer}
                  onChange={(e) => setIsNotOurServer(e.target.checked)}
                  className={styles.control}
                />
                <div>
                  <span className={styles.optionTitle}>Сервер не наш</span>
                  <span className={styles.optionDesc}>
                    Вы используете свой хостинг или сервер
                  </span>
                  <span className={styles.pricePill}>+2 000 ₽/мес</span>
                </div>
              </label>
            </div>

            <div className={styles.subtotal}>
              <div className={styles.subtotalRow}>
                <span>Промежуточный итог:</span>
                <span className={styles.subtotalValue}>
                  {calculateStep1Total().toLocaleString()} ₽/мес
                </span>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className={styles.stepBlock}>
            <h3 className={styles.stepTitle}>2. SEO (выберите пакет)</h3>

            <div className={styles.grid2}>
              <label className={styles.optionCard}>
                <input
                  type="radio"
                  name="seo"
                  value="free"
                  checked={seoOption === "free"}
                  onChange={() => setSeoOption("free")}
                  className={styles.control}
                />
                <div>
                  <span className={styles.optionTitle}>Базовый пакет</span>
                  <span className={styles.optionDesc}>14 дней, 120 запросов</span>
                  <span className={styles.pricePill}>Бесплатно</span>
                </div>
              </label>

              <label className={styles.optionCard}>
                <input
                  type="radio"
                  name="seo"
                  value="120"
                  checked={seoOption === "120"}
                  onChange={() => setSeoOption("120")}
                  className={styles.control}
                />
                <div>
                  <span className={styles.optionTitle}>Стандарт</span>
                  <span className={styles.optionDesc}>120 запросов</span>
                  <span className={styles.pricePill}>20 000 ₽</span>
                </div>
              </label>

              <label className={styles.optionCard}>
                <input
                  type="radio"
                  name="seo"
                  value="240"
                  checked={seoOption === "240"}
                  onChange={() => setSeoOption("240")}
                  className={styles.control}
                />
                <div>
                  <span className={styles.optionTitle}>Профессиональный</span>
                  <span className={styles.optionDesc}>240 запросов</span>
                  <span className={styles.pricePill}>25 000 ₽</span>
                </div>
              </label>

              <label className={styles.optionCard}>
                <input
                  type="radio"
                  name="seo"
                  value="1000"
                  checked={seoOption === "1000"}
                  onChange={() => setSeoOption("1000")}
                  className={styles.control}
                />
                <div>
                  <span className={styles.optionTitle}>Премиум</span>
                  <span className={styles.optionDesc}>1000 запросов</span>
                  <span className={styles.pricePill}>50 000 ₽</span>
                </div>
              </label>
            </div>

            <div className={styles.subtotal}>
              <div className={styles.subtotalRow}>
                <span>Промежуточный итог:</span>
                <span className={styles.subtotalValue}>
                  {calculateStep2Total().toLocaleString()} ₽/мес
                </span>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className={styles.stepBlock}>
            <h3 className={styles.stepTitle}>3. Реклама (Директолог)</h3>

            <div className={styles.grid2}>
              <label className={styles.optionCard}>
                <input
                  type="radio"
                  name="ads"
                  value="free"
                  checked={adOption === "free"}
                  onChange={() => setAdOption("free")}
                  className={styles.control}
                />
                <div>
                  <span className={styles.optionTitle}>Первичная настройка</span>
                  <span className={styles.optionDesc}>
                    Запуск рекламы без дальнейшего ведения
                  </span>
                  <span className={styles.pricePill}>Бесплатно</span>
                </div>
              </label>

              <label className={styles.optionCard}>
                <input
                  type="radio"
                  name="ads"
                  value="paid"
                  checked={adOption === "paid"}
                  onChange={() => setAdOption("paid")}
                  className={styles.control}
                />
                <div>
                  <span className={styles.optionTitle}>Полное ведение</span>
                  <span className={styles.optionDesc}>
                    Настройка + ежемесячное ведение кампаний
                  </span>
                  <span className={styles.pricePill}>10 000 ₽/мес</span>
                </div>
              </label>
            </div>

            <div className={styles.subtotal}>
              <div className={styles.subtotalRow}>
                <span>Промежуточный итог:</span>
                <span className={styles.subtotalValue}>
                  {calculateStep3Total().toLocaleString()} ₽/мес
                </span>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className={styles.stepBlock}>
            <h3 className={styles.stepTitle}>4. Доп. аутсорсинг (Web)</h3>

            <label className={styles.optionCard}>
              <input
                type="checkbox"
                checked={blogChecked}
                onChange={(e) => setBlogChecked(e.target.checked)}
                className={styles.control}
              />
              <div>
                <span className={styles.optionTitle}>Ведение блога</span>
                <span className={styles.optionDesc}>
                  Написание и публикация статей/новостей
                </span>
                <span className={styles.pricePill}>+5 000 ₽/мес</span>
              </div>
            </label>

            <div className={styles.subtotal}>
              <div className={styles.subtotalRow}>
                <span>Промежуточный итог:</span>
                <span className={styles.subtotalValue}>
                  {calculateStep4Total().toLocaleString()} ₽/мес
                </span>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className={styles.stepBlock}>
            <h3 className={styles.stepTitle}>5. SMM</h3>

            <label className={`${styles.optionCard} ${styles.mb6}`}>
              <input
                type="checkbox"
                checked={!isSmmNeeded}
                onChange={(e) => setIsSmmNeeded(!e.target.checked)}
                className={styles.control}
              />
              <div>
                <span className={styles.optionTitle}>Мне не нужен SMM</span>
                <span className={styles.optionDesc}>
                  Пропустить этот шаг и не включать SMM в расчёт
                </span>
              </div>
            </label>

            <div className={`${styles.smmBlock} ${!isSmmNeeded ? styles.smmDisabled : ""}`}>
              <div>
                <label className={styles.selectLabel}>
                  Посты в неделю (для 2 соцсетей)
                </label>
                <select
                  value={postsPerWeek}
                  onChange={(e) => setPostsPerWeek(e.target.value as any)}
                  className={styles.select}
                  disabled={!isSmmNeeded}
                >
                  <option value="1">1 пост/нед — 5 000 ₽</option>
                  <option value="2">2 поста/нед — 6 000 ₽</option>
                  <option value="3">3 поста/нед — 8 000 ₽</option>
                  <option value="5">5 постов/нед — 12 000 ₽</option>
                  <option value="7">7 постов/нед (ежедневно) — 18 000 ₽</option>
                </select>
              </div>

              <div>
                <label className={styles.selectLabel}>Количество соцсетей</label>
                <select
                  value={socialNetworks}
                  onChange={(e) => setSocialNetworks(e.target.value as any)}
                  className={styles.select}
                  disabled={!isSmmNeeded}
                >
                  <option value="1">1 соцсеть — ×0.7</option>
                  <option value="2">2 соцсети — ×1.0</option>
                  <option value="3">3 соцсети — ×1.3</option>
                </select>
              </div>

              <label className={styles.optionCard}>
                <input
                  type="checkbox"
                  checked={shootingsNeeded}
                  onChange={(e) => setShootingsNeeded(e.target.checked)}
                  className={styles.control}
                  disabled={!isSmmNeeded}
                />
                <div>
                  <span className={styles.optionTitle}>Выезд на съёмку</span>
                  <span className={styles.optionDesc}>
                    Фото/видео контент для постов
                  </span>
                  <span className={styles.pricePill}>+5 000 ₽/мес</span>
                </div>
              </label>
            </div>

            <div className={styles.subtotal}>
              <div className={styles.subtotalRow}>
                <span>Промежуточный итог:</span>
                <span className={styles.subtotalValue}>
                  {calculateStep5Total().toLocaleString()} ₽/мес
                </span>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className={styles.stepBlock}>
            <h3 className={styles.stepTitle}>Готово! Ваша конфигурация</h3>

            <div className={styles.summaryBox}>
              <div className={styles.summaryList}>
                <div className={styles.summaryRow}>
                  <span>Тип сайта:</span>
                  <span className={styles.summaryValue}>
                    {siteType === "single"
                      ? "Одностраничник (10 000 ₽)"
                      : "Многостраничник (20 000 ₽)"}
                  </span>
                </div>

                <div className={styles.summaryRow}>
                  <span>Сервер не наш:</span>
                  <span className={styles.summaryValue}>
                    {isNotOurServer ? "+2 000 ₽" : "Не выбрано"}
                  </span>
                </div>

                <div className={styles.summaryRow}>
                  <span>SEO пакет:</span>
                  <span className={styles.summaryValue}>
                    {seoOption === "free"
                      ? "Бесплатно"
                      : seoOption === "120"
                      ? "20 000 ₽"
                      : seoOption === "240"
                      ? "25 000 ₽"
                      : "50 000 ₽"}
                  </span>
                </div>

                <div className={styles.summaryRow}>
                  <span>Реклама:</span>
                  <span className={styles.summaryValue}>
                    {adOption === "free" ? "Бесплатно" : "10 000 ₽"}
                  </span>
                </div>

                <div className={styles.summaryRow}>
                  <span>Ведение блога:</span>
                  <span className={styles.summaryValue}>
                    {blogChecked ? "5 000 ₽" : "Не выбрано"}
                  </span>
                </div>

                <div className={styles.summaryRow}>
                  <span>SMM:</span>
                  <span className={styles.summaryValue}>{getSmmPrice()}</span>
                </div>

                <div className={styles.summaryRow}>
                  <span>Выезд на съёмку:</span>
                  <span className={styles.summaryValue}>
                    {shootingsNeeded && isSmmNeeded ? "5 000 ₽" : "Не выбрано"}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.totalBox}>
              <div className={styles.totalRow}>
                <span>Итого в месяц:</span>
                <span className={styles.totalValue}>
                  {totalAmount.toLocaleString()} ₽
                </span>
              </div>
            </div>

            <div className={styles.finalActions}>
              <button onClick={prevStep} className={styles.backBtn}>
                <span className={styles.backBtnText}>Назад</span>
              </button>

              <Link href="https://t.me/Pavelvrl" className={styles.orderBtn}>
                <span className={styles.orderBtnText}>Заказать</span>
                <div className={styles.orderBtnIconWrap}>
                  <svg
                    className={styles.orderBtnIcon}
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
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.root}>

    <h2 className=' text-6xl text-center py-3 mb-2 cormorant-garamond-bold'>
        РАССЧИТАЙТЕ СТОИМОСТЬ
    </h2>

      <div className={styles.card}>
        <div className={styles.dots}>
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`${styles.dot} ${
                i + 1 === currentStep ? styles.dotActive : ""
              }`}
            />
          ))}
        </div>

        {renderStep()}

        {currentStep < 6 && (
          <div className={styles.nav}>
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`${styles.navBtn} ${
                currentStep === 1 ? styles.navBtnDisabled : styles.navBtnGhost
              }`}
            >
              Назад
            </button>

            <button onClick={nextStep} className={`${styles.navBtn} ${styles.navBtnPrimary}`}>
              {currentStep === 5 ? "Рассчитать" : "Далее"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import s from "./pricing.module.scss";

const Pricing = ({ pricing }) => {
  const pricingData = {
    plusLow: [
      "Минимальные сроки запуска (MVP за 1-2 недели)",
      "Низкий порог входа и экономия бюджета",
      "Простота управления контентом без знаний кода",
      "Оптимальное решение для проверки гипотез и лендингов",
      "Готовые протестированные модули и блоки",
    ],
    minusLow: [
      "Ограничения в уникальном дизайне и анимациях",
      "Сложность внедрения нестандартного функционала",
      "Зависимость от возможностей конкретного конструктора/CMS",
      "Трудности при масштабном SEO-продвижении",
      "Сниженная производительность при росте нагрузки",
    ],
    plusHigh: [
      "Полная свобода в реализации визуальных идей",
      "Максимальная скорость работы и оптимизация Core Web Vitals",
      "Высокий уровень безопасности и защиты данных",
      "Масштабируемая архитектура под будущий рост бизнеса",
      "Чистый код, адаптированный под любые SEO-требования",
    ],
    minusHigh: [
      "Более длительный цикл разработки и тестирования",
      "Требуются более высокие инвестиции на старте",
      "Необходимость привлечения специалистов для поддержки",
      "Сложность внесения правок непрофессионалами",
      "Повышенные требования к детальному техзаданию",
    ],
  };

  const [rate, setRate] = useState("«ПОДЕШЕВЛЕ»");
  return (
    <div className={`${s.pricing}`}>
      <div className={`${s.container} container `}>
        <div className={s.header}>
          <h2 className={`${s.title} cormorant-garamond-bold text-center`}>
            Примерное ценообразование
          </h2>
          <div className={`${s.divider} hidden md:block`}></div>
          <span
            className={`${s.logo}  cormorant-garamond-bold hidden md:block`}
          >
            ВИРЛАБ
          </span>
        </div>
        <h2 className={`${s.subtitle} text-center`}>Выберите категорию</h2>
        <div
          className={`${s.row_top} grid gap-y-4 sm:grid-cols-2 sm:gap-5 py-5 sm:max-w-5xl sm:mx-auto`}
        >
          <div
            onClick={() => setRate("«ПОДЕШЕВЛЕ»")}
            type="button"
            className={`${s.col_top} col-5 offset-1 cursor-pointer `}
          >
            <div
              style={
                rate == "«ПОДЕШЕВЛЕ»" ? { color: "#fff" } : { color: "grey" }
              }
              className={`${s.top_wrap}`}
            >
              <div className={`${s.top_overlay}`}>
                <h3 className={`${s.top_title}`}>«ПОДЕШЕВЛЕ»</h3>
                <p className={`${s.top_disc}`}>
                  Удешевляем проект из-за реализации на простых фреймворках.
                </p>
                <div className={`${s.top_price}`}>
                  {" "}
                  <b>ОТ 100 000 рублей</b>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setRate("«ПОДОРОЖЕ»")}
            type="button"
            className={`${s.col_top} col-5 cursor-pointer`}
          >
            <div
              style={
                rate == "«ПОДОРОЖЕ»" ? { color: "#fff" } : { color: "grey" }
              }
              className={`${s.top_wrap}`}
            >
              <div className={`${s.top_overlay}`}>
                <h3 className={`${s.top_title}`}>«ПОДОРОЖЕ»</h3>
                <p className={`${s.top_disc}`}>
                  Индивидуальная разработка сайта с неограниченными
                  возможностями и последующим расширением.
                </p>
                <div className={`${s.top_price}`}>
                  <b>ОТ 200 000 рублей</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${s.row_bottom} grid gap-y-4  sm:grid-cols-2 sm:gap-5 sm:max-w-5xl sm:mx-auto`}
        >
          <div className={`${s.col_bottom} col-5 offset-1`}>
            <div className={`${s.bottom_wrap}`}>
              <h3 className={`${s.bottom_title}`}>{`ПЛЮСЫ ${rate}`}</h3>
              <ul className={`${s.bottom_list} list-unstyled`}>
                {rate == "«ПОДЕШЕВЛЕ»"
                  ? pricing.plusLow.map((item) => (
                      <li
                        key={Math.random()}
                        className={`${s.bottom_item_plus}`}
                      >
                        {item}
                      </li>
                    ))
                  : pricing.plusHigh.map((item) => (
                      <li
                        key={Math.random()}
                        className={`${s.bottom_item_plus}`}
                      >
                        {item}
                      </li>
                    ))}
              </ul>
            </div>
          </div>
          <div className={`${s.col_bottom} col-5`}>
            <div className={`${s.bottom_wrap}`}>
              <h3 className={`${s.bottom_title}`}>{`МИНУСЫ ${rate}`}</h3>
              <ul className={`${s.bottom_list} list-unstyled`}>
                {rate == "«ПОДЕШЕВЛЕ»"
                  ? pricing.minusLow.map((item) => (
                      <li
                        key={Math.random()}
                        className={`${s.bottom_item_minus}`}
                      >
                        {item}
                      </li>
                    ))
                  : pricing.minusHigh.map((item) => (
                      <li
                        key={Math.random()}
                        className={`${s.bottom_item_minus}`}
                      >
                        {item}
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

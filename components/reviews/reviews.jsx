"use client";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Импорт стилей Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Reviews.module.scss";

const reviewsData = [
  {
    id: 1,
    source: "avito",
    author: "АРХИТЕК",
    text: "Профессионально. Оперативно. Пунктуально",
    rating: 5,
  },
  {
    id: 2,
    source: "avito",
    author: "Сэм",
    text: "Благодарю за отличный ноут). Хороший человек, отличный продавец!)",
    rating: 5,
  },
  {
    id: 3,
    source: "avito",
    author: "Денис Савинцев",
    text: "Все супер)",
    rating: 5,
  },
  {
    id: 4,
    source: "avito",
    author: "Павел",
    text: "Заказывали изготовление шестярни моторчика дворников. Все сделали быстро, качественно и не за большую цену. Обращайтесь, рекомендую!",
    rating: 5,
  },
  {
    id: 5,
    source: "yandex",
    author: "КодексЪ Юридическая Компания",
    text: "Большой восторг от работы Вашей компании! Договаривались о разработке сайта и рекламы. Все сделано на высшем уровне. Ребята настоящие профессионалы, выслушали все мои пожелания, дали грамотные советы и сделали все четко и в срок. Вежливые менеджеры, которые всегда готовы придти на помощь и ответить на все интересующие вопросы.",
    rating: 5,
  },
  {
    id: 6,
    source: "yandex",
    author: "Yugito Koidzumi",
    text: "Профессионалы своего дела! Четко определили цели, быстро выполнили задачи и без нареканий ведут дальнейшие работы. За продвижение отдельное спасибо",
    rating: 5,
  },
  {
    id: 7,
    source: "yandex",
    author: "Александр Заскин",
    text: "Обратился за помощью в разработке веб-сайта. Все работы были выполнены в срок, своевременная обратная связь. Если ищите, куда обратиться за разработкой сайта - это идеальный вариант. Отдельно хотелось бы выделить Павла, который разобрал каждый непонятный момент, был на связи круглосуточно и помог выбраться сайту в топ 5 поиска)",
    rating: 5,
  },
  {
    id: 8,
    source: "2gis",
    author: "Наталья Ш",
    text: "Сломался курок запуска газонокосилки, в отличии от сервисных центров изготовителя не отказали в помощи, привезла деталь, сделали макет и сам курок всего за два дня и вполне приемлемой стоимости, сделали крепче и надежнее оригинала, косилка работает, в чем и был смысл! Красная на фото это оригинал, черная это работа Virlab. Спасибо, что вы есть у нас в городе, выручили !",
    rating: 5,
  },
  {
    id: 9,
    source: "2gis",
    author: "​Руслан Акчурин",
    text: "Крутое место, заказал корпус для шейвера, сделали за пару дней, супер качественно, подход индивидуальный, цены не кусаются, остался очень доволен, буду обращаться не один раз ещё, рекомендую обращаться за печатью изделий только сюда",
    rating: 5,
  },
  {
    id: 10,
    source: "2gis",
    author: "Дмитрий Новиков",
    text: "Обратился в Virlab впервые. Нужна была деталь, кольцо-заглушка для колонки JBL Pulse 3. Скинул 3D макет детали и в тот же день получил результат.Остался очень доволен ! Качественные материалы изготовления, отзывчивая команда, быстро подобрали нужный тип пластика и цвет ! Теперь колонка имеет оригинальный вид и радует глаз. Рекомендую обращаться в Virlab !",
    rating: 5,
  },
  {
    id: 11,
    source: "2gis",
    author: "Александр",
    text: "Хотим поблагодарить Вашу компанию за профессиональную работу в продвижении сайта и создании рекламы. Всё выполнено в срок, результат полностью соответствует ожиданиям. Качество, эффективность, коммуникация - все на высшем уровне. Менеджер всегда на связи, оперативно отвечает на вопросы и предоставляет понятные отчеты о проделанной работе.",
    rating: 5,
  },
  {
    id: 12,
    source: "2gis",
    author: "Елена Астапенко",
    text: "Работаем с компанией давно. Отзывчивые, четкие. 👍 одно удовольствие взаимодействовать 👍👍👍 а сайты делают просто ТОП 👍",
    rating: 5,
  },

  {
    id: 13,
    source: "2gis",
    author: "Владимир Епифанцев",
    text: "Достойная команда! Сделали нам сайт, занимаются сео раскруткой и яндекс директом. Сроки хорошие! Обратная связь в чате всегда есть. Рекомендую!",
    rating: 5,
  },
  {
    id: 14,
    source: "2gis",
    author: "Алена Коновалова",
    text: "Ребята хорошие специалисты, знают свое дело. Сделали качественный сайт, который выделяется на фоне конкурентов",
    rating: 5,
  },
  {
    id: 15,
    source: "2gis",
    author: "​Андрей Василенко",
    text: "Огромное спасибо Virlab за помощь👍 сын давно просил статуэтку Nickelodeon, соответственно её ни где не найти, но ребята спасли меня😁 Буквально за пару дней, после звонка, они уже изготовили данный шедевр, и по символической цене 👍 сынок рад, папа спокоен😊 спасибо вам огромное",
    rating: 5,
  },
  {
    id: 16,
    source: "2gis",
    author: "Вадим Чураков",
    text: "Отдал детальку, через пару дней готово, все подошло",
    rating: 5,
  },
  {
    id: 17,
    source: "2gis",
    author: "Андрей Каратаев",
    text: "Заказывал несколько раз сложные детали и закажу ещё, моделируют и производят всё, что душе угодно, любой сложности и всегда в обговоренные сроки, сделают даже то, что существует только в моем воображении, всем советую)",
    rating: 5,
  },
  {
    id: 18,
    source: "2gis",
    author: "Тимофей Бородин",
    text: "Отличный сервис, быстрое исполнение👍 Заказывал для огорода всякие безделушки, работа была сделана очень качественно",
    rating: 5,
  },
  {
    id: 19,
    source: "2gis",
    author: "Екатерина Дунаевская",
    text: "Выражаем благодарность макетной мастерской Virlab за содействие и помощь с нашим макетом. В частности хотим от всей души поблагодарить руководителя Андрея Николаевича, за помощь, чуткость, аккуратность, профессионализм, содействие во всех вопросах и отзывчивость. Рекомендуем компанию как надёжного и внимательного подрядчика, который сможет реализовать любой запрос!",
    rating: 5,
  },
  {
    id: 20,
    source: "2gis",
    author: "​Григорий Мухачев",
    text: "Отличная компания, приятные в общении сотрудники!",
    rating: 5,
  },

  {
    id: 21,
    source: "2gis",
    author: "​Надежда Колотова",
    text: "Добрый день! Обратилась к ребятам за помощью в изготовлении корпоративной сувенирной продукции. Сделали всё оперативно, качество на высоте, доброжелательное отношение к своим клиентам! Я осталась очень довольна, всем рекомендую!))",
    rating: 5,
  },
  {
    id: 22,
    source: "2gis",
    author: "Сергей Жданович",
    text: "Сделали всё быстро и аккуратно, результатом доволен, сотрудники-консультанты вежливые и могут помочь с любым вопросом",
    rating: 5,
  },
  {
    id: 23,
    source: "2gis",
    author: "Игорь Гузяев",
    text: "Грамотные специалисты, заказал деталь для авто, напечатали быстро и в размер, теперь только к ним буду обращаться.",
    rating: 5,
  },
  {
    id: 24,
    source: "2gis",
    author: "​Антон Чехов",
    text: "Всё супер. Пунктуально, вежливо и приемлемо. Даже скажу, очень бюджетно, но крайне качественно. Ребята тольковые, своё дело знают отлично.",
    rating: 5,
  },
  {
    id: 25,
    source: "2gis",
    author: "Татьяна Ткачук",
    text: "Заказала в данной фирме проектирование и печать уголков под полки в шкаф - изготовили оперативно по приятной цене, проконсультировали по цветовой палитре и видам пластика (хоть я в этом и не разбираюсь) полная уверенность в профессионализме сопровождалась обратным откликом (держали в курсе исполнения заказа) буду обращаться к вам еще, спасибо",
    rating: 5,
  },
  {
    id: 26,
    source: "2gis",
    author: "Иван Веремьев",
    text: "Обратился в данную компанию впервые ,с покупкой робота пылесоса встал вопрос об установке порожков для беспрепятственной езды.Изготовление прошло быстро с учетом моих пожеланий и недорого с учетом предложений на рынке.Настоятельно рекомендую обращаться именно сюда.Очень клиентоориентированые сотрудники.",
    rating: 5,
  },
  {
    id: 27,
    source: "2gis",
    author: "​Александр",
    text: "Заказывал проектирование и изготовление втулок для монтажа унитазов на инсталляцию ,которые потеряли монтажники 😡. Андрей очень быстро отреагировал на заказ смоделировал деталь и отдал в тот же день , даже вызвал курьера и отправил до адреса . Молодцы!",
    rating: 5,
  },
  {
    id: 28,
    source: "2gis",
    author: "City spirit",
    text: "Отличные ребята. Сделали все оперативно и качественно, причем за небольшие деньги",
    rating: 5,
  },
  {
    id: 29,
    source: "2gis",
    author: "​BAKSSSSSSSSSS",
    text: "Очень крутая контора!!! Помогли распечатать на 3D принтере мой эскиз. Очень быстро и качественно. Рекомендую для сотрудничества!!!",
    rating: 5,
  },
  {
    id: 30,
    source: "2gis",
    author: "​Дмитрий",
    text: "Все делают качественно и быстро. Рекомендую!",
    rating: 5,
  },
];

const ReviewCard = ({ review, onReadMore }) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    // Проверяем, обрезался ли текст.
    // scrollHeight - это реальная высота текста,
    // clientHeight - это высота видимого блока (наши 4 строки)
    const checkTruncation = () => {
      if (textRef.current) {
        setIsTruncated(
          textRef.current.scrollHeight > textRef.current.clientHeight,
        );
      }
    };

    checkTruncation();

    // Опционально: перепроверять при ресайзе окна
    window.addEventListener("resize", checkTruncation);
    return () => window.removeEventListener("resize", checkTruncation);
  }, [review.text]);

  return (
    <div className={styles.card}>
      <div className={styles.rating}>{"★".repeat(review.rating)}</div>
      <div className={styles.cardBody}>
        {/* Добавили ref сюда */}
        <span ref={textRef} className={styles.text}>
          "{review.text}"
        </span>

        {/* Показываем кнопку ТОЛЬКО если текст обрезался */}
        {isTruncated && (
          <button
            className={styles.readMore}
            onClick={() => onReadMore(review)}
          >
            Читать полностью
          </button>
        )}
      </div>
      <div className={styles.author}>{review.author}</div>
    </div>
  );
};

const Reviews = () => {
  const [filter, setFilter] = useState("avito");
  const [selectedReview, setSelectedReview] = useState(null);

  // НОВОЕ: Состояние для хранения экземпляра Swiper
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedReview ? "hidden" : "unset";
  }, [selectedReview]);

  // НОВОЕ: Сбрасываем слайдер к первому слайду при смене фильтра
  useEffect(() => {
    if (swiperInstance && !swiperInstance.destroyed) {
      swiperInstance.slideTo(0, 0); // (индекс слайда, скорость анимации в мс). 0 мс = мгновенно
    }
  }, [filter, swiperInstance]);

  const filteredReviews = reviewsData.filter((rev) => rev.source === filter);

  return (
    <section className={styles.reviews}>
      <div className={styles.container}>
        <h2 className={styles.title}>Отзывы наших клиентов</h2>

        <div className={styles.tabs}>
          {["avito", "yandex", "2gis"].map((s) => (
            <button
              key={s}
              className={filter === s ? styles.activeTab : ""}
              onClick={() => setFilter(s)}
            >
              {s === "yandex"
                ? "Яндекс"
                : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.slider}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
          {filteredReviews.map((review) => (
            <SwiperSlide key={review.id} className={styles.swiperSlide}>
              <ReviewCard review={review} onReadMore={setSelectedReview} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* НОВАЯ КНОПКА "ОСТАВИТЬ ОТЗЫВ" */}
        {/* <div className={styles.bottomAction}>
          <a
            href={getReviewLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.leaveReviewBtn}
          >
            Оставить отзыв
          </a>
        </div> */}
      </div>

      {selectedReview && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedReview(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeModal}
              onClick={() => setSelectedReview(null)}
            >
              &times;
            </button>
            <div className={styles.modalRating}>
              {"★".repeat(selectedReview.rating)}
            </div>
            <h3 className={styles.modalAuthor}>{selectedReview.author}</h3>
            <p className={styles.fullText}>{selectedReview.text}</p>
            <div className={styles.modalSource}>
              Источник: {selectedReview.source}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;

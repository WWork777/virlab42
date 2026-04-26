"use client";
import React from "react";
import styles from "./TelegramFunnel.module.scss";

const TelegramFunnel = () => {
  // Укажите здесь ссылку на ваш Telegram-канал
  const telegramLink = "https://t.me/virlab";

  return (
    <section className={styles.funnelSection}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <h2 className={styles.title}>Больше наших работ в Telegram</h2>
            <p className={styles.description}>
              Подпишитесь на наш канал, чтобы следить за процессом 3D-печати,
              разработки сайтов, узнавать о новых материалах и получать
              эксклюзивные скидки для подписчиков.
            </p>
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              {/* Иконка Telegram (SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={styles.icon}
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.29-.48.79-.74 3.08-1.34 5.15-2.23 6.19-2.66 2.95-1.23 3.56-1.44 3.96-1.44.09 0 .28.02.41.11.11.08.14.2.16.28.02.1-.01.21-.02.34z" />
              </svg>
              Подписаться
            </a>
          </div>
          <div className={styles.imageSide}>
            {/* Декоративный элемент, можно заменить на фото ваших изделий */}
            <div className={styles.graphic}>
              <span className={styles.tgBigIcon}>↗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramFunnel;

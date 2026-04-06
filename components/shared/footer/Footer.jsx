"use client";
import Link from "next/link";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="content-block">
          <div className="nav-block">
            <Link
              href="/"
              onClick={() => window.scrollTo(0, 0)}
              className="logo"
            >
              <div className="logo-text cormorant-garamond-bold text-5xl ">
                ВИРЛАБ
              </div>
              {/* <img src={logo} height={35} alt="logo" /> */}
            </Link>
          </div>
          <div className="footer-container">
            <div className="nav-container">
              <div className="nav-block">
                <Link
                  href="/"
                  onClick={() => window.scrollTo(0, 0)}
                  className="nav-link"
                >
                  Главная
                </Link>
                <Link
                  href="/development"
                  onClick={() => window.scrollTo(0, 0)}
                  className="nav-link"
                >
                  Услуги
                </Link>
                <Link
                  href="/projects"
                  onClick={() => window.scrollTo(0, 0)}
                  className="nav-link"
                >
                  Проекты
                </Link>
                <Link
                  href="/contacts"
                  onClick={() => window.scrollTo(0, 0)}
                  className="nav-link"
                >
                  Контакты
                </Link>
              </div>
              <p>© 2026 ВИРЛАБ. Все права защищены.</p>
            </div>
            <div className="nav-container">
              <div className="nav-block">
                <Link
                  href="https://max.ru/u/f9LHodD0cOJXGrzpVLDRugOGDp3Xu_r0mAB6UOgBedxOQi5ozS_WPVB33So"
                  onClick={() => window.scrollTo(0, 0)}
                  className="nav-connection"
                >
                  <img src="/icons/MAX.svg" alt="" width={30} height={30} />
                </Link>

                <Link
                  href="https://vk.com/virlab"
                  onClick={() => window.scrollTo(0, 0)}
                  className="nav-connection"
                >
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 48C0 25.3726 0 14.0589 7.02944 7.02944C14.0589 0 25.3726 0 48 0H52C74.6274 0 85.9411 0 92.9706 7.02944C100 14.0589 100 25.3726 100 48V52C100 74.6274 100 85.9411 92.9706 92.9706C85.9411 100 74.6274 100 52 100H48C25.3726 100 14.0589 100 7.02944 92.9706C0 85.9411 0 74.6274 0 52V48Z"
                      fill="currentColor"
                    />
                    <path
                      d="M53.2082 72.042C30.4165 72.042 17.4167 56.417 16.875 30.417H28.2916C28.6666 49.5003 37.0831 57.5836 43.7498 59.2503V30.417H54.5001V46.8752C61.0835 46.1669 67.9993 38.667 70.3326 30.417H81.083C79.2913 40.5837 71.7913 48.0836 66.4579 51.1669C71.7913 53.6669 80.3334 60.2086 83.5834 72.042H71.7497C69.208 64.1253 62.8751 58.0003 54.5001 57.1669V72.042H53.2082Z"
                      fill="#181f24"
                    />
                  </svg>
                </Link>
              </div>
              <div className="mail-tel">
                <a href="mailto:pavel-sakne@yandex.ru">pavel-sakne@yandex.ru</a>
                <a href="tel:79994316266">
                  <span style={{ color: "white" }}>По вопросам:</span> +7 (999)
                  431-62-66
                </a>
                <a href="tel:79505940280">
                  <span style={{ color: "white" }}>3д Печать:</span> +7 (950)
                  594-02-80
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА */}
        {/* МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА */}
        {/* МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА */}

        <div className="content-block-mob">
          <div className="nav-block footer-logo">
            <Link
              href="/"
              onClick={() => window.scrollTo(0, 0)}
              className="logo"
            >
              <div className="logo-text text-4xl cormorant-garamond-bold">
                ВИРЛАБ
              </div>
              {/* <img height={35} src={logo} alt="logo" /> */}
            </Link>
          </div>
          <div className="footer-container">
            <div className="nav-container">
              <div className="nav-block menu">
                <Link
                  href="/"
                  onClick={() => window.scrollTo(0, 0)}
                  className="nav-link"
                >
                  Главная
                </Link>
                <Link
                  href="/development"
                  onClick={() => window.scrollTo(0, 0)}
                  className="nav-link"
                >
                  Услуги
                </Link>
                <Link
                  href="/projects"
                  onClick={() => window.scrollTo(0, 0)}
                  className="nav-link"
                >
                  Проекты
                </Link>
                <Link
                  href="/contacts"
                  onClick={() => window.scrollTo(0, 0)}
                  className="nav-link"
                >
                  Контакты
                </Link>
              </div>
            </div>
            <div className="nav-container">
              <div className="nav-block nav-block-connection">
                <div className="flex gap-3">
                  <Link
                    href="https://max.ru/u/f9LHodD0cOJXGrzpVLDRugOGDp3Xu_r0mAB6UOgBedxOQi5ozS_WPVB33So"
                    onClick={() => window.scrollTo(0, 0)}
                    className="nav-connection"
                  >
                    <img
                      src="/icons/MAX.svg"
                      alt=""
                      width={35}
                      height={35}
                      style={{ border: "none" }}
                    />
                  </Link>

                  <Link
                    href="https://vk.com/virlab"
                    onClick={() => window.scrollTo(0, 0)}
                    className="nav-connection"
                  >
                    <svg
                      width="130"
                      height="130"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 48C0 25.3726 0 14.0589 7.02944 7.02944C14.0589 0 25.3726 0 48 0H52C74.6274 0 85.9411 0 92.9706 7.02944C100 14.0589 100 25.3726 100 48V52C100 74.6274 100 85.9411 92.9706 92.9706C85.9411 100 74.6274 100 52 100H48C25.3726 100 14.0589 100 7.02944 92.9706C0 85.9411 0 74.6274 0 52V48Z"
                        fill="currentColor"
                      />
                      <path
                        d="M53.2082 72.042C30.4165 72.042 17.4167 56.417 16.875 30.417H28.2916C28.6666 49.5003 37.0831 57.5836 43.7498 59.2503V30.417H54.5001V46.8752C61.0835 46.1669 67.9993 38.667 70.3326 30.417H81.083C79.2913 40.5837 71.7913 48.0836 66.4579 51.1669C71.7913 53.6669 80.3334 60.2086 83.5834 72.042H71.7497C69.208 64.1253 62.8751 58.0003 54.5001 57.1669V72.042H53.2082Z"
                        fill="#181f24"
                      />
                    </svg>
                  </Link>
                </div>
                <a className="nav-connection" href="mail:pavel-sakne@yandex.ru">
                  pavel-sakne@yandex.ru
                </a>
                <a className="nav-connection" href="tel:79994316266">
                  <span style={{ color: "white" }}>По вопросам: </span> +7 (999)
                  431-62-66
                </a>
                <a className="nav-connection" href="tel:79505940280">
                  <span style={{ color: "white" }}>3д Печать:</span> +7 (950)
                  594-02-80
                </a>
              </div>
            </div>
          </div>

          <p className="prava">© 2026 ВИРЛАБ. Все права защищены.</p>
        </div>

        {/* МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА */}
        {/* МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА */}
        {/* МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА МОБИЛКА */}
      </footer>
    </>
  );
}
export default Footer;

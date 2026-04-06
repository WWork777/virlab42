import "./contacts.scss";
import Maps from "./partials/map";

export const metadata = {
  metadataBase: new URL("https://virlab42.ru"),
  title: "Контакты ВИРЛАБ — Свяжитесь с IT-компанией для сотрудничества",
  description:
    "Свяжитесь с командой ВИРЛАБ — обсудим создание вашего сайта, печать на 3D-принтере, разработку дизайна или продвижение в интернете.",
  keywords:
    "контакты ВИРЛАБ, связаться с айти-компанией, разработка сайтов на заказ, услуги 3D-печати",
  alternates: {
    canonical: "/contacts",
  },
  openGraph: {
    url: "/contacts",
    title: "Контакты ВИРЛАБ — Свяжитесь с IT-компанией для сотрудничества",
    description:
      "Свяжитесь с командой ВИРЛАБ — обсудим создание вашего сайта, печать на 3D-принтере, разработку дизайна или продвижение в интернете.",
    images: {
      url: "/og/og.jpg",
      width: 1200,
      height: 630,
    },
  },
};

function Contacts() {
  return (
    <>
      <div className=" contacts pt-[91px] md:pt-[120px]">
        <div className="header-contacts">
          <h1 className="cormorant-garamond-bold">Контакты</h1>
        </div>

        <div className="body-contacts">
          <div className="left-body-contacts">
            <a
              href="https://max.ru/u/f9LHodD0cOJXGrzpVLDRugOGDp3Xu_r0mAB6UOgBedxOQi5ozS_WPVB33So"
              className="contacts-square"
            >
              <img src="/icons/MAX.svg" alt="Max" width={60} height={60} />
            </a>

            <a href="https://vk.com/virlab" className="contacts-square">
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
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <div className="right-body-contacts">
            <div className="right-body-contacts-content">
              <div>
                <h4>ТЕЛЕФОН</h4>
                <a href="tel:79994316266">
                  <p>
                    <span className="color">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="#968c76"
                        className="bi bi-telephone-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                        />
                      </svg>
                      +7 (999) 431-62-66
                    </span>
                  </p>
                </a>
              </div>
              <div>
                <h4>АДРЕС</h4>
                <p>
                  <span className="color">
                    <svg
                      viewBox="0 0 1024 1024"
                      width={18}
                      height={18}
                      fill="#968c76"
                      className="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                    ул. Кирова 37 (ЦУМ), 4 этаж, оф.12
                  </span>
                </p>
              </div>
              <div>
                <h4>ПОЧТА</h4>
                <a href="mailto:pavel-sakne@yandex.ru">
                  <p>
                    <span className="color">
                      <svg
                        fill="#968c76"
                        width={18}
                        height={18}
                        viewBox="0 0 1920 1920"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"
                            fillRule="evenodd"
                          ></path>{" "}
                        </g>
                      </svg>
                      pavel-sakne@yandex.ru
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contacts-footer">
          <Maps />
        </div>
      </div>
    </>
  );
}

export default Contacts;

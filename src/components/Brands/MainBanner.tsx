import React from "react";

import ScrollingBanner from "./scrolling-banner";

const logos = [
  {
    key: "logo-1",
    src: "/img/clientes/LOGOSCLIENTES/LOGO_CERTIFICADO_FSSC.png",
  },
  {
    key: "logo-2",
    src: "/img/clientes/LOGOSCLIENTES/LOGO_CERTIFICADO_KOSHER.png",
  },
  {
    key: "logo-3",
    src: "/img/clientes/LOGOSCLIENTES/LOGO_FIESTA.png",
  },
  {
    key: "logo-4",
    src: "/img/clientes/LOGOSCLIENTES/LOGO_HOLIDAY INN.png",
  },
  {
    key: "logo-5",
    src: "/img/clientes/LOGOSCLIENTES/LOGO_HOTEL_HILTON.png",
  },
  {
    key: "logo-6",
    src: "/img/clientes/LOGOSCLIENTES/LOGO_HOTEL_MARRIOT.png",
  },
  {
    key: "logo-7",
    src: "/img/clientes/LOGOSCLIENTES/LOGO_LA_SALLE.png",
  },
  {
    key: "logo-8",
    src: "/img/clientes/LOGOSCLIENTES/LOGO_MEDICA_SUR.png",
  },
  {
    key: "logo-9",
    src: "/img/clientes/LOGOSCLIENTES/LOGO_NESTLE.png",
  },
  {
    key: "logo-10",
    src: "/img/clientes/LOGOSCLIENTES/LOGO_PELTRE.png",
  },
  {
    key: "logo-11",
    src: "/img/clientes/LOGOSCLIENTES/LOGO_TAQUERIA_EL_CALIFA.png",
  },
  {
    key: "logo-12",
    src: "/img/clientes/LOGOSCLIENTES/LOGO_WALMART.png",
  },
  {
    key: "logo-13",
    src: "/img/clientes/LOGOSCLIENTES/LOGO_WESTING.png",
  },
];

export default function MainBanner() {
  return (
    <section className="mx-auto w-full max-w-6xl my-6">
      <ScrollingBanner  gap="40px">
        {logos.map(({ key, src }) => (
          <div
            key={key}
            className="flex items-center justify-center text-foreground"
          >
            <img
              src={src}
              alt={`Logo ${key}`}
              className="h-full w-full min-w-[90px] object-contain"
            />
          </div>
        ))}
      </ScrollingBanner>
    </section>
  );
}

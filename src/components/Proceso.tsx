import React from "react";
import {Button} from "@heroui/react";
import AppScreenshotLight from "./app-screenshot-light";


export default function Proceso() {
  return (
    <div className="relative flex  h-screen min-h-dvh w-full flex-col gap-9 mt-28 bg-background p-4 md:gap-12 md:px-10 md:py-[34px]">
      <main className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-300 px-3 md:rounded-3xl md:px-0">
        <section className="my-14 mt-16 flex flex-col items-center justify-center gap-6">
          <Button
            className="h-9 bg-background pointer-events-none px-[18px] text-default-500 shadow-[0_2px_15px_0_rgba(0,0,0,0.05)]"
            radius="full"
          >
            PROCESO
          </Button>
          <h1 className="text-center text-[clamp(2.125rem,1.142rem+3.659vw,4rem)] font-bold leading-none text-white">
          CONCENTRADO  DE
          <br /> JUGO ORGÁNICO
          </h1>
          <p className="text-center text-white text-base sm:w-[466px] md:text-lg md:leading-6">
            Acme makes running global teams simple. HR, Payroll, International Employment,
            contractor management and more.
          </p>
        </section>
        <div className="mt-auto w-[calc(100%-calc(theme(spacing.4)*2))] max-w-6xl overflow-hidden rounded-tl-2xl rounded-tr-2xl border-1 border-white/25 bg-white/40 px-2 pt-3 md:px-4 md:pt-6">
          <AppScreenshotLight />
        </div>
      </main>
    </div>
  );
}

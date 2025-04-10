import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";

/*
p-3 h-auto flex w-full items-center 
overflow-hidden color-inherit 
subpixel-antialiased 
rounded-b-large backdrop-blur
 backdrop-saturate-150 
*/
export default function LandingCards() {
  return (
    <section className="mx-auto w-full ">
      <h2 className="text-3xl font-bold text-center mb-6">
        Explora nuestras iniciativas
      </h2>
      <div className="gap-2 grid grid-cols-12 grid-rows-1 px-8">
        <Card
          isPressable
          isFooterBlurred
          className="col-span-12 sm:col-span-4 h-[300px]"
        >
          <CardHeader
            className="absolute z-10 top-0 flex-col !items-start  bg-black/40  border-t-1 border-default-600 dark:border-default-100 p-3 h-auto flex w-full 
overflow-hidden color-inherit 
subpixel-antialiased 
rounded-b-large backdrop-blur
 backdrop-saturate-150 "
          >
            <p className="text-tiny text-white/60 uppercase font-bold">
              El Sabor del Momento.
            </p>
            <h4 className="text-white font-medium text-large">
             directo del campo a tu
              mesa.
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://img.freepik.com/free-psd/juice-bar-poster-template_23-2148681994.jpg?t=st=1744161183~exp=1744164783~hmac=8eecb397ab60d1c3bfd13d654bf046ff6094deed2d2ca845507999a4381dcd68&w=1380"
          />
        </Card>
        <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader
            className="absolute z-10 top-0 flex-col !items-start  bg-black/40  border-t-1 border-default-600 dark:border-default-100 p-3 h-auto flex w-full 
overflow-hidden color-inherit 
subpixel-antialiased 
rounded-b-large backdrop-blur
 backdrop-saturate-150 "
          >
            <p className="text-tiny text-white/60 uppercase font-bold">
              El Favorito de Siempre.
            </p>
            <h4 className="text-white font-medium text-large">
              ideal para cualquier momento del día. 
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://img.freepik.com/free-psd/juice-bar-poster-template_23-2148681995.jpg?t=st=1744161211~exp=1744164811~hmac=55734add729dbd4a403c085ddf0cf6c3fb3d2e30ea9c4efabbf6407e9c0486b1&w=1380"
          />
        </Card>
        <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader
            className="absolute z-10 top-0 flex-col !items-start  bg-black/40  border-t-1 border-default-600 dark:border-default-100 p-3 h-auto flex w-full 
overflow-hidden color-inherit 
subpixel-antialiased 
rounded-b-large backdrop-blur
 backdrop-saturate-150 "
          >
            <p className="text-tiny text-white/60 uppercase font-bold">
              Explosión de Sabores.
            </p>
            <h4 className="text-white font-medium text-large">
              Este mix es una explosión tropical que encantará a tu paladar.
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://img.freepik.com/free-psd/smoothie-chocolate-food-menu-social-media-template_17005-1607.jpg?t=st=1744161262~exp=1744164862~hmac=62f512f2e39ae87e7e685a4081f07730859e1de3173abba1a343f607702a41c1&w=1380"
          />
        </Card>
      </div>
    </section>
  );
}

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
      <div className="flex flex-wrap gap-4 px-8 justify-center">

        <Card
          isPressable
          isFooterBlurred
          className="col-span-12 sm:col-span-4 h-[440px]"
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
              directo del campo a tu mesa.
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="public/img/TerceraSeccion/1.png"
          />
        </Card>
        <Card
        
        isPressable className="col-span-12 sm:col-span-4 h-[440px]">
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
            src="public/img/TerceraSeccion/2.png"
          />
        </Card>
        <Card isPressable className="col-span-12 sm:col-span-4 h-[440px]">
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
            src="public/img/TerceraSeccion/3.png"
          />
        </Card>
      </div>
    </section>
  );
}

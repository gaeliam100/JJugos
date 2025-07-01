import type {CardProps} from "@heroui/react";
import {Card, Image, CardBody} from "@heroui/react";

// Interfaz para las propiedades del paso del proceso
interface PasoProps extends CardProps {
  nombre: string;
  imagen: string;
  texto: string;
}

export default function PasosProcess({nombre, imagen, texto, ...props}: PasoProps) {
  return (
    <Card className="w-full max-w-[680px] shadow-[0_4px_8px_rgba(255,165,0,0.5)]" {...props}>
      <CardBody className="flex flex-row flex-wrap p-0 sm:flex-nowrap">
        <Image
          removeWrapper
          alt={nombre}
          className="h-auto w-full flex-none object-cover object-top md:w-48"
          src={imagen}
        />
        <div className="px-4 py-5">
          <h3 className="text-large  font-black leading-none bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">{nombre}</h3>
          <div className="flex flex-col gap-3 pt-2 text-small text-gray-700 dark:text-gray-300">
            <p>{texto}</p>

          </div>
        </div>
      </CardBody>
    </Card>
  );
}


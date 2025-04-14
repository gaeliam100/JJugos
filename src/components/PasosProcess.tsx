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
    <Card className="w-full max-w-[680px]" {...props}>
      <CardBody className="flex flex-row flex-wrap p-0 sm:flex-nowrap">
        <Image
          removeWrapper
          alt={nombre}
          className="h-auto w-full flex-none object-cover object-top md:w-48"
          src={imagen}
        />
        <div className="px-4 py-5">
          <h3 className="text-large font-medium">{nombre}</h3>
          <div className="flex flex-col gap-3 pt-2 text-small text-default-400">
            <p>{texto}</p>

          </div>
        </div>
      </CardBody>
    </Card>
  );
}


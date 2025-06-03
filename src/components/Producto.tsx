import type React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Image } from "@heroui/react";
import { motion } from "framer-motion";

interface Props {
  nombre: string;

  titulo: string;

  descripcion: string;

  color: string; // clase para el fondo o tema del producto

  imagenProducto?: string;

  frutas?: string[];
}

interface ProcutoProps {
  data: Props;
}

export const ProductCard: React.FC<ProcutoProps> = ({ data }) => {
  return (
    <>
      <motion.div
        initial="initial"
        whileHover="hover"
        animate="initial"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        variants={{
          initial: { scale: 1, rotate: 0 },
          hover: { scale: 1.03, rotate: -1 }
        }}
      >
        <Card
          isFooterBlurred
          className="w-full h-[450px] bg-green-400 relative"
          classNames={{
            base:"bg-green"
          }}
        >

          <CardHeader className="absolute z-10 top-1 flex-col items-end">
          <Chip 
            style={{
              background:data.color
            }}
            className="text-tiny text-white uppercase font-bold ">{data.nombre}</Chip>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-[300px]  object-contain"
            src={data.imagenProducto || "https://i.pinimg.com/originals/28/3e/53/283e53880ea4fd483c4968d89b143866.png"}
          />
          <motion.div className="card__fruit-container absolute">
            {data.frutas?.map((fruta, index) => (
              <motion.div
                key={index}
                className="card__fruit absolute left-4 top-4 w-32 h-32"
                variants={{
                  initial: { scale: 0, opacity: 0, x: 0, y: 0 },
                  hover: {
                    scale: 1,
                    opacity: 1,
                    ...(index === 0
                      ? { x: -60, y: -60 }     // arriba izquierda
                      : index === 1
                      ? { x: 60, y: -60 }      // arriba derecha
                      : index === 2
                      ? { x: -60, y: 60 }      // abajo izquierda
                      : { x: 60, y: 60 })      // abajo derecha
                  }
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Image alt={`Fruta ${index + 1}`} className="object-cover" src={fruta} />
              </motion.div>
            ))}
          </motion.div>

          <CardFooter className="absolute flex flex-col bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <h4 className="text-gray-700 text-left  text-base flex-1">{data.titulo}</h4>
            <div>
              <p className="text-gray-500 text-tiny text-wrap">{data.descripcion}</p>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </>
  );
};

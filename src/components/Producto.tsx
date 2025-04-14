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
        transition={{ type: "spring", stiffness: 300 }}
        variants={{
          initial: { scale: 1, rotate: 0 },
          hover: { scale: 1.05, rotate: 0.5 }
        }}
      >
        <Card
          isFooterBlurred
          className="w-full h-[450px] bg-green-400 relative"
          classNames={{
            base:"bg-green"
          }}
        >

          <CardHeader className="absolute z-10 top-1 flex-col items-start">
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
            src="https://static.vecteezy.com/system/resources/previews/010/064/040/non_2x/realistic-cans-white-for-mock-up-soda-can-mock-up-free-png.png"
          />
          <motion.div
            className="card__fruit absolute w-24 h-32"
            variants={{
              initial: { scale: 0, x: 0, y: 0, opacity: 0 },
              hover: { scale: 1, x: -50, y: -80, opacity: 1 }
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Image
              alt=""
              className="object-cover"
              src="https://i.pinimg.com/originals/28/3e/53/283e53880ea4fd483c4968d89b143866.png"
            />
          </motion.div>

          <motion.div
            className="card__fruit absolute w-24 h-32"
            variants={{
              initial: { scale: 0, x: 0, y: 0, opacity: 0 },
              hover: { scale: 1, x: 50, y: -60, opacity: 1 }
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Image
              alt=""
              className="object-cover"
              src="https://static.vecteezy.com/system/resources/previews/029/200/071/non_2x/watermelon-transparent-background-free-png.png"
            />
          </motion.div>

          <motion.div
            className="card__fruit absolute w-24 h-32"
            variants={{
              initial: { scale: 0, x: 0, y: 0, opacity: 0 },
              hover: { scale: 1, x: 0, y: 60, opacity: 1 }
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Image
              alt=""
              className="object-cover"
              src="https://i.pinimg.com/originals/28/3e/53/283e53880ea4fd483c4968d89b143866.png"
            />
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

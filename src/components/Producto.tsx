import { useState, useEffect } from "react";
import type React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Image } from "@heroui/react";
import { motion } from "framer-motion";

interface Props {
  nombre: string;
  titulo: string;
  descripcion: string;
  caracteristica?: string; // Nueva propiedad para mostrar información adicional
  color: string; // clase para el fondo o tema del producto
  imagenProducto?: string;
  fondo: string; // Nueva propiedad para el fondo tipo cover
}

interface ProcutoProps {
  data: Props;
}

export const ProductCard: React.FC<ProcutoProps> = ({ data }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detectar si es escritorio (hover disponible)
    if (typeof window !== "undefined") {
      const checkDesktop = () => setIsDesktop(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
      checkDesktop();
      window.addEventListener("resize", checkDesktop);
      return () => window.removeEventListener("resize", checkDesktop);
    }
  }, []);

  const openModal = (e: React.MouseEvent) => {
    if (!isDesktop) {
      setModalVisible(true);
    }
  };
  const closeModal = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setModalVisible(false);
  };

  return (
    <>
      <motion.div
        initial="initial"
        whileHover={isDesktop ? "hover" : undefined}
        animate="initial"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        variants={{
          initial: { scale: 1, rotate: 0 },
          hover: { scale: 1.03, rotate: -1 }
        }}
        onClick={openModal}
        className="cursor-pointer"
      >
        <Card
          isFooterBlurred
          className="w-full h-[450px] relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50"
          classNames={{
            base: "bg-gradient-to-br from-orange-50 via-white to-amber-50"
          }}
        >
          {/* Fondo tipo cover */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${data.fondo})` }}
          ></div>
          {/* Gradiente sutil para mejor legibilidad */}
          <div className="absolute inset-0 z-1 bg-gradient-to-br from-white/20 via-transparent to-white/10"></div>
          <CardHeader className="absolute z-10 top-1 flex-col items-end">
            <Chip 
              style={{ background: data.color }}
              className="text-tiny text-white uppercase font-bold">
              {data.nombre}
            </Chip>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-5 w-full h-[450px] object-contain relative"
            src={data.imagenProducto || "https://i.pinimg.com/originals/28/3e/53/283e53880ea4fd483c4968d89b143866.png"}
          />
          {/* Modal informativo en hover solo escritorio */}
          {isDesktop && (
            <motion.div 
              className="absolute inset-0 z-20 flex items-center justify-center"
              variants={{
                initial: { opacity: 0, scale: 0.8 },
                hover: { opacity: 1, scale: 1 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 mx-4 shadow-xl border border-white/20 max-w-sm">
                <h4 className="text-gray-800 text-lg font-bold mb-3 text-center">{data.titulo}</h4>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{data.descripcion}</p>
                {data.caracteristica && (
                  <p className="text-orange-600 text-sm text-center leading-relaxed mt-4">{data.caracteristica}</p>
                )}
              </div>
            </motion.div>
          )}
        </Card>
      </motion.div>
      {/* Bottom sheet para móvil */}
      {!isDesktop && isModalVisible && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40" onClick={closeModal}>
          <div className="w-full max-w-md bg-white rounded-t-3xl shadow-2xl p-6 pb-10 relative animate-slideup" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-3 right-4 text-gray-400 hover:text-orange-600 text-2xl font-bold"
              onClick={closeModal}
              aria-label="Cerrar"
            >
              ×
            </button>
            <h4 className="text-gray-800 text-lg font-bold mb-3 text-center">{data.titulo}</h4>
            <p className="text-gray-600 text-sm text-center leading-relaxed">{data.descripcion}</p>
            {data.caracteristica && (
              <p className="text-orange-600 text-sm text-center leading-relaxed mt-4">{data.caracteristica}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};
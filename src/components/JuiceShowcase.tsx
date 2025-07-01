import React from "react";
import { Card, CardBody, Divider, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { a } from "framer-motion/client";

export const JuiceShowcase: React.FC = () => {
  return (
    <div className="w-full py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            <span className="text-sm font-medium text-orange-600">
              100% Natural • Salud en Cada Gota
            </span>
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Jugos naturales de{" "}
            <span className="text-orange-600">calidad premium</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Descubre el sabor auténtico de la naturaleza en cada botella,
            elaborados con los mejores ingredientes frescos.
          </p>
        </div>

        {/* Main Grid - Restructured to 3 cards on top, 1 on bottom */}
        <div className="mt-16 grid gap-6">
          {/* Top Row - 3 equal cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <Card className="overflow-visible fade-in-top" shadow="sm">
              <CardBody className="p-0 overflow-hidden">
                <div className="relative h-full flex justify-between flex-col">
                  <div className="p-3 sm:p-8">
                    <div className="inline-flex items-center gap-2 bg-orange-100 px-3 py-1 rounded-full mb-3">
                      <Icon
                        icon="lucide:star"
                        className="text-orange-600 h-4 w-4"
                      />
                      <span className="text-xs font-medium text-orange-600">
                        Producto Estrella
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Haz de JJ Jugos Naturales el favorito de tus clientes
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Nuestros jugos 100% naturales son perfectos para
                      restaurantes y cafeterías
                    </p>
                  </div>
                  <div className="relative w-full aspect-w-16 aspect-h-9">
                    <img
                      className="object-cover rounded-b-xl w-full h-full"
                      src="/img/naturales_de_calidad_premium/1.png"
                      alt="Oportunidad de distribución de jugos"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Feature 2 */}
            <Card className="overflow-visible fade-in-top" shadow="sm">
              <CardBody className="p-0 overflow-hidden">
                <div className="relative h-full flex justify-between flex-col">
                  <div className="p-3 sm:p-8">
                    <div className="inline-flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full mb-3">
                      <Icon
                        icon="lucide:briefcase"
                        className="text-green-600 h-4 w-4"
                      />
                      <span className="text-xs font-medium text-green-600">
                        Oportunidad de Negocio
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Distribuye un producto premium
                    </h3>
                    <p className="text-gray-600 mb-4">
                      ¿Quieres ser tu propio jefe mientras distribuyes un
                      producto de alta calidad? Conviértete en distribuidor
                      oficial de JJ Jugos Naturales.
                    </p>
                  </div>
                  <div className="relative w-full aspect-w-16 aspect-h-9">
                    <img
                      className="object-cover rounded-b-xl w-full h-full"
                      src="/img/Socios/4.png"
                      alt="Oportunidad de distribución de jugos"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Feature 3 */}
            <Card className="overflow-visible fade-in-top" shadow="sm">
              <CardBody className="p-0 overflow-hidden">
                <div className="relative h-full flex justify-between flex-col">
                  <div className="p-6 sm:p-8">
                    <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-3">
                      <Icon
                        icon="lucide:users"
                        className="text-blue-600 h-4 w-4"
                      />
                      <span className="text-xs font-medium text-blue-600">
                        Únete a Nosotros
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Únete a Nuestro Éxito
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Lleva nuestros jugos a nuevos mercados y crece junto con
                      nosotros. Sé parte de la familia JJ Jugos Naturales.
                    </p>
                  </div>
                  <div className="relative w-full aspect-w-16 aspect-h-9">
                    <img
                      className="object-cover rounded-b-xl w-full h-full"
                      src="/img/naturales_de_calidad_premium/2.png"
                      alt="Únete al equipo de JJ Jugos Naturales"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          <Card className="overflow-visible mt-6 slide-in-bottom" shadow="sm">
            <CardBody className="p-0 overflow-hidden">
              <div className="grid md:grid-cols-2 h-full">
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-purple-100 px-3 py-1 rounded-full mb-3 w-fit">
                    <Icon
                      icon="lucide:heart"
                      className="text-purple-600 h-4 w-4"
                    />
                    <span className="text-xs font-medium text-purple-600">
                      Nuestra Filosofía
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Nuestra pasión por la{" "}
                    <span className="text-orange-600">calidad</span>
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    EXCELENCIA, CALIDAD, DEDICACIÓN, EXPERIENCIA Y EL MEJOR
                    SERVICIO AL CLIENTE son los valores que nos definen y nos
                    impulsan cada día.
                  </p>
                  <p className="text-gray-600 mb-8">
                    Desde la selección de las mejores frutas hasta el proceso de
                    embotellado, cada paso está diseñado para garantizar que
                    nuestros jugos conserven todo su sabor y propiedades
                    nutricionales.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      as={a}
                      href="/AboutUs"
                      color="primary"
                      size="lg"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      radius="full"
                      endContent={<Icon icon="lucide:arrow-right" />}
                    >
                      Nosotros
                    </Button>
                    <Button
                      as={a}
                      href="/Product"
                      variant="flat"
                      color="primary"
                      size="lg"
                      className="bg-orange-100 text-orange-600"
                      radius="full"
                    >
                      Ver productos
                    </Button>
                  </div>
                </div>
                <div className="relative w-full aspect-w-16 aspect-h-9">
                  <img
                    className="h-full w-full object-contain md:object-cover md:rounded-r-xl"
                    src="/img/naturales_de_calidad_premium/3.png"
                    alt="La pasión detrás de JJ Jugos Naturales"
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Button
            as={a}
            href="/Contact"
            size="lg"
            color="primary"
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl transition-all"
            radius="full"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            Contáctanos hoy mismo
          </Button>
        </div>
      </div>
    </div>
  );
};

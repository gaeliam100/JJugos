import type {IconProps} from "@iconify/react";
import {Link, Spacer} from "@heroui/react";
import {Icon} from "@iconify/react";

//  import JjugosLogo from "./JjugosLogo.astro";

type SocialIconProps = Omit<IconProps, "icon">;

const navItems = [
  { href: "/", text: "Inicio", class: "cs-li-link cs-active" },
  { href: "/AboutUs", text: "Nosotros", class: "cs-li-link" },
  { href: "/Product", text: "Producto", class: "cs-li-link" },
  { href: "/Process", text: "Proceso", class: "cs-li-link" },
  { href: "/Contact", text: "Contacto", class: "cs-li-link" },
];


export default function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="flex w-full flex-col">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="flex items-center justify-center">
          {/* <JjugosLogo /> */}
          <span className="text-medium font-medium">JJUGOS</span>
        </div>
        <Spacer y={4} />
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          {navItems.map((item) => (
            <Link
              key={item.text}
              className="text-default-500"
              href={item.href}
              size="sm"
            >
              {item.text}
            </Link>
          ))}
        </div>
        <Spacer y={6} />

        <p className="mt-1 text-center text-small text-default-400">
          &copy; {currentYear} JJ Jugos Naturales. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

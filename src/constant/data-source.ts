import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import MissionIcon from "../components/icons/mission/MissionIcon.astro";
import ValuesIcon from "../components/icons/values/ValuesIcon.astro";
import VisionIcon from "../components/icons/vision/VisionIcon.astro";

interface Product {
    text: string;
    href: string;
}

interface Card {
    icon: AstroComponentFactory;
    alt: string;
    title: string;
    description: string;
}

export const productsBrand: Product[] = [
    {
        text: "herramientas",
        href: "#herramientas"
    },
    {
        text: "eps",
        href: "#eps"
    },
    {
        text: "alquiler de equipos",
        href: "#alquiler"
    },
    {
        text: "servicios generales",
        href: "#servicios"
    }
]

export const listCardBrand: Card[] = [
    {
        icon: MissionIcon,
        alt: "mission",
        title: "Misión",
        description: "Proveer soluciones en servicios generales y alquiler de máquinas y equipos con alta tecnología y calidad, respaldados por personal comprometido con las necesidades del cliente."
    },
    {
        icon: VisionIcon,
        alt: "vision",
        title: "Visión",
        description: "Ser reconocidos como una empresa de altos estándares en el servicio de alquiler y venta de equipos para todos los sectores económicos e industriales."
    },
    {
        icon: ValuesIcon,
        alt: "valores",
        title: "Valores",
        description: "Honradez y honestidad, perseverancia, sencillez y humildad, lealtad y compromiso: principios que generan confianza y nos permiten crecer junto a nuestros clientes."
    }
]
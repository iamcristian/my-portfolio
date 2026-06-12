import type { UsesCategory } from "../../../types";

export const uses: UsesCategory[] = [
  {
    id: "hardware",
    name: "Hardware y Estación de Trabajo",
    items: [
      {
        name: "Lenovo Legion 5 Pro",
        description:
          "Máquina de desarrollo principal equipada con AMD Ryzen 7 5800H, 32 GB de RAM y NVIDIA RTX 3070.",
      },
      {
        name: 'LG UltraGear 27"',
        description:
          "Pantalla IPS de 27 pulgadas a 144 Hz para una renderización de texto nítida y alta fluidez.",
      },
      {
        name: "Teclado Mecánico Keychron K2",
        description:
          "Teclado mecánico inalámbrico configurado con interruptores Gateron G Pro Brown para una respuesta táctil óptima.",
      },
      {
        name: "Logitech MX Master 3S",
        description:
          "Ratón inalámbrico ergonómico con desplazamiento de precisión y controles de gestos personalizables.",
      },
    ],
  },
  {
    id: "software",
    name: "Software y Herramientas",
    items: [
      {
        name: "Visual Studio Code y Claude Code",
        description:
          "Editores de código de preferencia, optimizados con temas personalizados y extensiones para TypeScript/React/NestJS.",
      },
      {
        name: "Windows Terminal y PowerShell",
        description:
          "Entorno de línea de comandos moderno configurado con Oh My Posh para un estilo limpio del prompt.",
      },
      {
        name: "Figma",
        description:
          "Utilizado para maquetación rápida de UI, creación de recursos y prototipos de diseño.",
      },
    ],
  },
  {
    id: "office",
    name: "Mobiliario y Entorno",
    items: [
      {
        name: "Escritorio de Madera Personalizado",
        description:
          "Escritorio espacioso construido a medida con madera de pino local y gestión de cables integrada.",
      },
      {
        name: "Silla de Oficina Ergonómica",
        description:
          "Silla de malla con respaldo alto, soporte lumbar ajustable y reposabrazos para largas jornadas de programación.",
      },
    ],
  },
];

export default uses;

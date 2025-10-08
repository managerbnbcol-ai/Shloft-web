# Superhost Loft S.A.S Website

Sitio web moderno construido con [Next.js](https://nextjs.org/) y [Tailwind CSS](https://tailwindcss.com/) para Superhost Loft S.A.S.

## Requisitos previos

- Node.js 18.17 o superior
- npm 9 o superior

## Instalación

```bash
npm install
```

## Desarrollo local

Inicia el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

## Construcción para producción

```bash
npm run build
```

Para probar la versión optimizada:

```bash
npm run start
```

## Deploy en Vercel

1. Crea una cuenta en [Vercel](https://vercel.com/) y verifica tu email.
2. Instala la [CLI de Vercel](https://vercel.com/docs/cli) de forma opcional si deseas desplegar desde la terminal.
3. Desde el panel de Vercel, selecciona **New Project** y conecta el repositorio de GitHub que contenga este proyecto.
4. Vercel detectará automáticamente el framework **Next.js** con los siguientes comandos:
   - **Build Command:** `npm run build`
   - **Install Command:** `npm install`
   - **Output Directory:** `.vercel/output/static` (gestionado automáticamente por Next.js)
5. Haz clic en **Deploy** y espera a que termine el proceso.
6. Una vez finalizado el despliegue, obtendrás una URL pública. Puedes asignar un dominio personalizado desde la sección **Domains** del proyecto en Vercel.

### Deploy mediante la CLI

1. Autentícate en tu cuenta con `vercel login`.
2. Ejecuta `vercel` en la raíz del proyecto y sigue las instrucciones interactivas.
3. Para despliegues de producción, usa `vercel --prod`.

## Estructura del proyecto

```
.
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Estilos

- Fuentes principales gestionadas con `next/font` (Playfair Display para títulos y Inter para textos).
- Paleta de colores personalizada: negro (`midnight`), dorado (`gold`) y blanco.
- Diseño responsive utilizando utilidades de Tailwind CSS.

## Licencias de imágenes

Las imágenes utilizadas provienen de Unsplash y se incluyen únicamente como referencia visual. Sustitúyelas por activos con licencia apropiada antes de desplegar en producción.

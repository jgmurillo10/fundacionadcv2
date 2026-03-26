import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Ni Una Gota M\u00e1s \u2013 Programa Insignia | Fundaci\u00f3n ADC",
  description:
    "Programa insignia de Fundaci\u00f3n ADC para la gesti\u00f3n responsable del aceite de cocina usado. Recolecci\u00f3n, educaci\u00f3n ambiental y transformaci\u00f3n en biocombustible.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const ACTIVITIES = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
    title: "Recolecci\u00f3n de aceite",
    description:
      "Recolectamos aceite de cocina usado de hogares, restaurantes e instituciones, evitando que llegue a fuentes h\u00eddricas y al alcantarillado.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
    title: "Educaci\u00f3n ambiental",
    description:
      "Desarrollamos talleres, ferias ambientales y capacitaciones en colegios, empresas y comunidades sobre econom\u00eda circular y cuidado del agua.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
    title: "Transformaci\u00f3n en biocombustible",
    description:
      "El aceite recolectado se transforma en biodiésel, cerrando el ciclo de econom\u00eda circular y generando energ\u00eda limpia a partir de un residuo.",
  },
];

const METRICS = [
  {
    value: "50.000+",
    unit: "kg",
    label: "Aceite recuperado",
    description: "Kilogramos de aceite de cocina usado recolectados y aprovechados",
  },
  {
    value: "50M",
    unit: "litros",
    label: "Agua protegida",
    description: "Litros de agua que dejaron de ser contaminados",
  },
  {
    value: "105",
    unit: "ton CO\u2082",
    label: "Emisiones evitadas",
    description: "Toneladas de CO\u2082 equivalente que dejaron de emitirse",
  },
  {
    value: "100%",
    unit: "",
    label: "Aceite aprovechado",
    description: "Todo el aceite recolectado se transforma en biocombustible",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/programa-aceite/WhatsApp-Image-2023-04-27-at-11.19.53-AM.jpeg",
    alt: "Feria ambiental al aire libre organizada por Fundaci\u00f3n ADC",
  },
  {
    src: "/images/programa-aceite/WhatsApp-Image-2023-05-03-at-1.43.05-PM.jpeg",
    alt: "Taller de educaci\u00f3n ambiental en espacio cubierto",
  },
  {
    src: "/images/programa-aceite/WhatsApp-Image-2023-04-24-at-10.11.39-AM.jpeg",
    alt: "Capacitaci\u00f3n sobre manejo responsable de aceite de cocina usado",
  },
  {
    src: "/images/programa-aceite/Imagen-de-WhatsApp-2023-11-29-a-las-17.35.08_3afa6f3c.jpg",
    alt: "Jornada de recolecci\u00f3n de aceite de cocina usado",
  },
  {
    src: "/images/programa-aceite/WhatsApp-Image-2023-04-27-at-11.19.46-AM-_1_.jpeg",
    alt: "Actividad de sensibilizaci\u00f3n ambiental en la comunidad",
  },
  {
    src: "/images/programa-aceite/Imagen-de-WhatsApp-2023-11-29-a-las-17.35.08_847a6465.jpg",
    alt: "Equipo de Fundaci\u00f3n ADC durante jornada de recolecci\u00f3n",
  },
  {
    src: "/images/programa-aceite/WhatsApp-Image-2021-10-22-at-4.16.18-PM-_1_.jpeg",
    alt: "Voluntarios del programa Ni Una Gota M\u00e1s en campo",
  },
  {
    src: "/images/programa-aceite/Imagen-de-WhatsApp-2023-11-29-a-las-17.35.08_29617693.jpg",
    alt: "Punto de recolecci\u00f3n de aceite usado",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function NiUnaGotaMasPage() {
  return (
    <>
      <Navbar />

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <Image
          src="/images/programa-aceite/WhatsApp-Image-2023-04-27-at-11.19.53-AM.jpeg"
          alt="Feria ambiental del programa Ni Una Gota M&aacute;s"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/85 via-green-900/70 to-green-950/80" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8 max-w-4xl mx-auto">
          {/* Badge */}
          <span className="animate-fade-in-up inline-block rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 text-sm font-medium text-white/90 tracking-wide mb-6">
            Programa insignia
          </span>

          {/* Heading */}
          <h1 className="animate-fade-in-up delay-100 font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Ni Una Gota M&aacute;s
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed">
            Gesti&oacute;n responsable del aceite de cocina usado: recolectamos, educamos y transformamos para proteger nuestras fuentes h&iacute;dricas.
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4">
            <a
              href="#impacto"
              className="bg-white text-green-800 font-semibold rounded-xl px-8 py-4 hover:bg-green-50 transition shadow-lg text-base"
            >
              Ver nuestro impacto
            </a>
            <a
              href="#contacto"
              className="border-2 border-white text-white rounded-xl px-8 py-4 hover:bg-white/10 transition text-base font-medium"
            >
              Quiero participar
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#sobre-el-programa"
          aria-label="Ir a la secci&oacute;n del programa"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in-up delay-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-white/70 animate-bounce-slow"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </section>

      {/* ============================================================ */}
      {/*  BACK LINK                                                   */}
      {/* ============================================================ */}
      <div className="bg-green-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-700 hover:text-green-900 font-medium transition-colors group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  PROGRAM OVERVIEW                                            */}
      {/* ============================================================ */}
      <section id="sobre-el-programa" className="py-20 sm:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <span className="inline-block rounded-full bg-green-100 text-green-700 px-4 py-1.5 text-sm font-semibold tracking-wide mb-6">
                Sobre el programa
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight mb-6">
                Protegemos el agua transformando residuos en energ&iacute;a
              </h2>
              <div className="space-y-4 text-lg text-green-900/80 leading-relaxed">
                <p>
                  <strong className="text-green-800">Ni Una Gota M&aacute;s</strong> es el programa insignia de la Fundaci&oacute;n ADC. Nace de la necesidad de gestionar responsablemente el aceite de cocina usado, un residuo dom&eacute;stico que, al ser vertido por el desag&uuml;e, contamina hasta <strong className="text-green-800">1.000 litros de agua por cada litro</strong> de aceite.
                </p>
                <p>
                  A trav&eacute;s de un modelo de econom&iacute;a circular, recolectamos el aceite usado en hogares, restaurantes, colegios e instituciones de Girardot y la regi&oacute;n, evitando su disposici&oacute;n inadecuada y transform&aacute;ndolo en biocombustible.
                </p>
                <p>
                  El programa integra tres ejes fundamentales: <strong className="text-green-800">recolecci&oacute;n</strong>, <strong className="text-green-800">educaci&oacute;n ambiental</strong> y <strong className="text-green-800">transformaci&oacute;n</strong>, generando un impacto positivo en el medio ambiente y en la comunidad.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/programa-aceite/WhatsApp-Image-2023-05-03-at-1.43.05-PM.jpeg"
                alt="Taller del programa Ni Una Gota M&aacute;s"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  KEY ACTIVITIES                                              */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 bg-green-50">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block rounded-full bg-green-100 text-green-700 px-4 py-1.5 text-sm font-semibold tracking-wide mb-6">
              Ejes de acci&oacute;n
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight mb-4">
              &iquest;C&oacute;mo funciona el programa?
            </h2>
            <p className="text-lg text-green-900/70 leading-relaxed">
              Nuestro modelo de econom&iacute;a circular se sustenta en tres actividades clave que se retroalimentan entre s&iacute;.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACTIVITIES.map((activity, index) => (
              <div
                key={activity.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-green-100 group"
              >
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-green-100 text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                    {activity.icon}
                  </div>
                  <span className="font-[family-name:var(--font-heading)] text-sm font-bold text-green-400 tracking-widest uppercase">
                    Paso {index + 1}
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-green-900 mb-3">
                  {activity.title}
                </h3>
                <p className="text-green-900/70 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  IMPACT METRICS                                              */}
      {/* ============================================================ */}
      <section id="impacto" className="relative py-20 sm:py-28 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-950" />
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-400/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-4 py-1.5 text-sm font-semibold tracking-wide mb-6">
              Resultados
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Nuestro impacto en cifras
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Cada gota de aceite que recuperamos es agua que protegemos y CO&#8322; que evitamos.
            </p>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8 text-center hover:bg-white/15 transition-colors duration-300"
              >
                <p className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-extrabold text-white mb-1">
                  {metric.value}
                </p>
                {metric.unit && (
                  <p className="text-green-300 font-semibold text-sm uppercase tracking-wider mb-4">
                    {metric.unit}
                  </p>
                )}
                {!metric.unit && <div className="mb-4" />}
                <p className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-2">
                  {metric.label}
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PHOTO GALLERY                                               */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block rounded-full bg-green-100 text-green-700 px-4 py-1.5 text-sm font-semibold tracking-wide mb-6">
              Galer&iacute;a
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-900 leading-tight mb-4">
              El programa en acci&oacute;n
            </h2>
            <p className="text-lg text-green-900/70 leading-relaxed">
              Momentos de nuestras jornadas de recolecci&oacute;n, talleres de educaci&oacute;n ambiental y ferias comunitarias.
            </p>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={image.src}
                className={`relative overflow-hidden rounded-2xl group ${
                  index === 0 || index === 5
                    ? "sm:col-span-2 sm:row-span-2 aspect-square"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={
                    index === 0 || index === 5
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  }
                  quality={75}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium leading-snug">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section id="contacto" className="py-20 sm:py-28 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-10 sm:p-16 shadow-xl border border-green-100">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100 text-green-700 mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>

            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-extrabold text-green-900 leading-tight mb-4">
              &iquest;Quieres ser parte del cambio?
            </h2>
            <p className="text-lg text-green-900/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              Si eres un restaurante, colegio, empresa o simplemente quieres dejar de verter aceite por el desag&uuml;e, cont&aacute;ctanos. Juntos podemos proteger nuestras fuentes h&iacute;dricas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contacto@fundacionadc.org"
                className="inline-flex items-center justify-center gap-2 bg-green-700 text-white font-semibold rounded-xl px-8 py-4 hover:bg-green-800 transition shadow-lg text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                Escr&iacute;benos
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-700 text-green-700 rounded-xl px-8 py-4 hover:bg-green-50 transition text-base font-medium"
              >
                Conoce m&aacute;s de la fundaci&oacute;n
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

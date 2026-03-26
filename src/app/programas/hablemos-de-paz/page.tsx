import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hablemos de Paz y Sostenibilidad",
  description:
    "Proyecto comunitario que promueve espacios de formaci\u00f3n para la convivencia, la inclusi\u00f3n y el cuidado del medio ambiente. Desarrollado con apoyo del Ministerio del Interior.",
  openGraph: {
    title: "Hablemos de Paz y Sostenibilidad | Fundaci\u00f3n ADC",
    description:
      "Espacios de formaci\u00f3n para la convivencia, la inclusi\u00f3n y el cuidado del medio ambiente en comunidades de Girardot.",
  },
};

const activities = [
  {
    title: "Talleres participativos",
    description:
      "Espacios de di\u00e1logo y construcci\u00f3n colectiva donde las comunidades identifican sus necesidades y proponen soluciones pac\u00edficas.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "Formaci\u00f3n comunitaria",
    description:
      "Programas de capacitaci\u00f3n que fortalecen el liderazgo local y empoderan a las comunidades en la gesti\u00f3n de su territorio.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    title: "Cultura ciudadana y construcci\u00f3n de paz",
    description:
      "Iniciativas que fomentan la reconciliaci\u00f3n, el respeto por la diversidad y la resoluci\u00f3n pac\u00edfica de conflictos en el territorio.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
  {
    title: "Sostenibilidad ambiental",
    description:
      "Acciones orientadas al cuidado del medio ambiente, la gesti\u00f3n responsable de los recursos naturales y la educaci\u00f3n ambiental.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 10-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m-3.414 1.337A9.004 9.004 0 003.75 4.555"
        />
      </svg>
    ),
  },
];

const impactStats = [
  {
    value: "5.000+",
    label: "Personas sensibilizadas",
    description: "en temas de paz y convivencia",
  },
  {
    value: "25+",
    label: "Instituciones educativas",
    description: "vinculadas al proyecto",
  },
  {
    value: "M\u00faltiples",
    label: "Comunidades participantes",
    description: "en toda la regi\u00f3n",
  },
];

const galleryImages = [
  {
    src: "/images/proyecto-paz/WhatsApp-Image-2025-04-07-at-8.49.40-AM.jpeg",
    alt: "Grupo de estudiantes presentando poster sobre paz y sostenibilidad",
  },
  {
    src: "/images/proyecto-paz/WhatsApp-Image-2025-04-11-at-7.44.03-AM.jpeg",
    alt: "Estudiantes participando en actividad comunitaria de construcci\u00f3n de paz",
  },
  {
    src: "/images/proyecto-paz/WhatsApp-Image-2025-04-07-at-10.52.51-AM-_1_.jpeg",
    alt: "Taller comunitario sobre convivencia y sostenibilidad",
  },
  {
    src: "/images/proyecto-paz/WhatsApp-Image-2024-04-27-at-11.06.24-AM.jpeg",
    alt: "Comunidad reunida en jornada de formaci\u00f3n para la paz",
  },
  {
    src: "/images/proyecto-paz/WhatsApp-Image-2025-04-07-at-11.56.49-AM.jpeg",
    alt: "Actividad de integraci\u00f3n comunitaria por la sostenibilidad",
  },
  {
    src: "/images/proyecto-paz/WhatsApp-Image-2025-06-14-at-11.46.16-AM.jpeg",
    alt: "Participantes en jornada de sensibilizaci\u00f3n ambiental",
  },
  {
    src: "/images/proyecto-paz/WhatsApp-Image-2025-06-14-at-11.46.16-AM-_1_.jpeg",
    alt: "Comunidad participando en taller de cultura ciudadana",
  },
  {
    src: "/images/proyecto-paz/WhatsApp-Image-2024-04-26-at-7.53.40-PM.jpeg",
    alt: "Sesi\u00f3n de formaci\u00f3n comunitaria sobre resoluci\u00f3n de conflictos",
  },
];

export default function HablemosDePazPage() {
  return (
    <>
      <Navbar />

      {/* ─── Hero Banner ─── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/proyecto-paz/WhatsApp-Image-2025-04-07-at-8.49.40-AM.jpeg"
          alt="Comunidad participando en el proyecto Hablemos de Paz y Sostenibilidad"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />

        {/* Gradient overlay: blue to green */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/85 via-blue-700/60 to-green-900/70" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] rounded-full bg-green-400/10 blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8 max-w-4xl mx-auto">
          {/* Badge */}
          <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 text-sm font-medium text-white/90 tracking-wide mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 10-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m-3.414 1.337A9.004 9.004 0 003.75 4.555" />
            </svg>
            Proyecto comunitario
          </span>

          {/* Heading */}
          <h1 className="animate-fade-in-up delay-100 font-[family-name:var(--font-heading)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Hablemos de Paz y Sostenibilidad
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed">
            Promovemos espacios de formaci&oacute;n comunitaria para la convivencia, la inclusi&oacute;n y el cuidado del medio ambiente.
          </p>

          {/* Supported by */}
          <div className="animate-fade-in-up delay-300 flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-white/80"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
              />
            </svg>
            <span className="text-sm text-white/80 font-medium">
              Con apoyo del Ministerio del Interior
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in-up delay-500">
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
        </div>
      </section>

      {/* ─── Back Link ─── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium transition-colors group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* ─── Project Overview ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <span className="inline-block text-blue-700 font-semibold text-sm tracking-widest uppercase mb-4">
                Sobre el proyecto
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 leading-tight mb-6">
                Construyendo paz desde las comunidades
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-green-900">Hablemos de Paz y Sostenibilidad</strong> es un proyecto que promueve espacios de formaci&oacute;n comunitaria para la convivencia, la inclusi&oacute;n y el cuidado del medio ambiente. A trav&eacute;s de talleres, encuentros y actividades participativas, buscamos fortalecer el tejido social y la cultura de paz en nuestras comunidades.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Desarrollado con el apoyo del <strong className="text-blue-700">Ministerio del Interior</strong>, este proyecto llega a instituciones educativas, organizaciones comunitarias y l&iacute;deres sociales que trabajan por un territorio m&aacute;s justo y sostenible.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-3">
                {["Convivencia", "Inclusi\u00f3n", "Medio ambiente", "Liderazgo"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 rounded-full px-4 py-2 text-sm font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/proyecto-paz/WhatsApp-Image-2025-04-11-at-7.44.03-AM.jpeg"
                  alt="Estudiantes participando en actividad del proyecto Hablemos de Paz"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={80}
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-blue-200 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Key Activities ─── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-blue-700 font-semibold text-sm tracking-widest uppercase mb-4">
              Lo que hacemos
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 leading-tight mb-6">
              Actividades principales
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestras l&iacute;neas de acci&oacute;n est&aacute;n dise&ntilde;adas para generar transformaciones reales en las comunidades, fortaleciendo la cultura de paz y la sostenibilidad.
            </p>
          </div>

          {/* Activities grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                {/* Number */}
                <span className="absolute top-6 right-6 font-[family-name:var(--font-heading)] text-5xl font-extrabold text-gray-100 group-hover:text-blue-50 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-blue-700 mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                  {activity.icon}
                </div>

                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-green-900 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Impact Section ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <Image
          src="/images/proyecto-paz/WhatsApp-Image-2025-04-07-at-10.52.51-AM-_1_.jpeg"
          alt="Taller comunitario del proyecto Hablemos de Paz"
          fill
          className="object-cover"
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 to-green-900/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-blue-200 font-semibold text-sm tracking-widest uppercase mb-4">
              Nuestro alcance
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Impacto en el territorio
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Los n&uacute;meros reflejan el compromiso de las comunidades con la construcci&oacute;n de paz y la sostenibilidad ambiental.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-10"
              >
                <p className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl font-extrabold text-white mb-3">
                  {stat.value}
                </p>
                <p className="text-white font-semibold text-lg mb-1">
                  {stat.label}
                </p>
                <p className="text-white/60 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Photo Gallery ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-blue-700 font-semibold text-sm tracking-widest uppercase mb-4">
              En acci&oacute;n
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 leading-tight mb-6">
              Galer&iacute;a del proyecto
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Im&aacute;genes que capturan el esp&iacute;ritu de nuestras comunidades trabajando juntas por la paz y la sostenibilidad.
            </p>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 ${
                  index === 0 || index === 5
                    ? "sm:col-span-2 sm:row-span-2"
                    : ""
                }`}
              >
                <div
                  className={`relative w-full ${
                    index === 0 || index === 5
                      ? "aspect-square"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes={
                      index === 0 || index === 5
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    }
                    quality={75}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-medium leading-snug">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-700 via-blue-600 to-green-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 text-sm font-medium text-white/90 tracking-wide mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            &Uacute;nete al cambio
          </div>

          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            &iquest;Quieres ser parte de la transformaci&oacute;n?
          </h2>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Si eres l&iacute;der comunitario, docente, representante de una instituci&oacute;n educativa u organizaci&oacute;n social, te invitamos a sumarte a este proyecto por la paz y la sostenibilidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold rounded-xl px-8 py-4 hover:bg-blue-50 transition shadow-lg text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              Cont&aacute;ctanos
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white rounded-xl px-8 py-4 hover:bg-white/10 transition text-base font-medium"
            >
              Conoce m&aacute;s proyectos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

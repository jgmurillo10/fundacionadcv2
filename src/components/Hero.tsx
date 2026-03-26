import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <Image
        src="/images/programa-aceite/WhatsApp-Image-2023-04-27-at-11.19.53-AM.jpeg"
        alt="Proyecto de sostenibilidad ambiental de Fundación ADC en comunidad"
        fill
        className="object-cover"
        priority
        quality={85}
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 to-green-900/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8 max-w-4xl mx-auto">
        {/* Badge */}
        <span className="animate-fade-in-up inline-block rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 text-sm font-medium text-white/90 tracking-wide mb-8">
          Sostenibilidad &middot; Educaci&oacute;n &middot; Comunidad
        </span>

        {/* Heading */}
        <h1 className="animate-fade-in-up delay-100 font-[family-name:var(--font-heading)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Impulsamos proyectos que transforman el territorio hacia la sostenibilidad
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed">
          Dise&ntilde;amos e implementamos proyectos de sostenibilidad ambiental y social junto a comunidades, empresas e instituciones p&uacute;blicas.
        </p>

        {/* Buttons */}
        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4">
          <a
            href="#programas"
            className="bg-white text-green-800 font-semibold rounded-xl px-8 py-4 hover:bg-green-50 transition shadow-lg text-base"
          >
            Conoce nuestros proyectos
          </a>
          <a
            href="#contacto"
            className="border-2 border-white text-white rounded-xl px-8 py-4 hover:bg-white/10 transition text-base font-medium"
          >
            Trabajemos juntos
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#quienes-somos"
        aria-label="Ir a la sección Quiénes Somos"
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
  );
}

import Image from "next/image";

export default function About() {
  return (
    <section id="quienes-somos">
      {/* BLOCK 1 — Nuestra organización */}
      <div className="bg-white py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-1.5 h-12 rounded-full bg-green-700" />
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-extrabold text-green-900">
                Nuestra organizaci&oacute;n
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 mb-5">
              La Fundaci&oacute;n ADC &ndash; Ambiente, Desarrollo y Calidad es
              una organizaci&oacute;n sin &aacute;nimo de lucro ubicada en
              Girardot (Cundinamarca) que promueve el desarrollo sostenible
              mediante proyectos ambientales, educativos y sociales.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Desde el a&ntilde;o 2020 trabajamos con comunidades, empresas e
              instituciones p&uacute;blicas para impulsar iniciativas que
              contribuyan a la protecci&oacute;n del medio ambiente, la
              educaci&oacute;n ambiental, la econom&iacute;a circular y la
              participaci&oacute;n ciudadana.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/programa-aceite/WhatsApp-Image-2023-04-24-at-10.11.39-AM.jpeg"
              alt="Equipo de Fundación ADC trabajando en proyecto ambiental con la comunidad"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={80}
            />
          </div>
        </div>
      </div>

      {/* BLOCK 2 — Nuestro enfoque */}
      <div className="bg-cream py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-extrabold text-green-900 text-center mb-14">
            Nuestro enfoque de trabajo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card — Ambiental */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-green-700"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 17 3.5s.3 3.5-1 7c-1 2.8-3.2 4.4-3.2 4.4" />
                  <path d="M6.7 17.3c2-2 4.3-3.3 6.3-4.3" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-green-900 mb-3">
                Ambiental
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Promovemos pr&aacute;cticas sostenibles que contribuyen a la
                protecci&oacute;n de los recursos naturales, especialmente del
                agua y del suelo.
              </p>
            </div>

            {/* Card — Social */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition">
              <div className="w-16 h-16 rounded-full bg-blue-700/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-blue-700"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-green-900 mb-3">
                Social
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fortalecemos procesos de educaci&oacute;n ambiental,
                participaci&oacute;n comunitaria y construcci&oacute;n de
                cultura ciudadana.
              </p>
            </div>

            {/* Card — Gobernanza */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition">
              <div className="w-16 h-16 rounded-full bg-amber-600/10 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-amber-600"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V7l7-4 7 4v14" />
                  <path d="M9 21v-4h6v4" />
                  <path d="M10 9h1" />
                  <path d="M13 9h1" />
                  <path d="M10 13h1" />
                  <path d="M13 13h1" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-green-900 mb-3">
                Gobernanza
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Trabajamos de manera articulada con instituciones p&uacute;blicas,
                empresas y organizaciones sociales para impulsar proyectos de
                sostenibilidad.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK 3 — Propósito */}
      <div className="bg-white py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-100 rounded-2xl p-8 md:p-12 relative">
            {/* Decorative quote mark */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 text-green-300 mb-4"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378C7.06 7.795 6.02 9.789 5.762 11.478c.322-.16.694-.245 1.088-.245 1.588 0 2.871 1.315 2.871 2.939 0 1.623-1.283 2.938-2.871 2.938-1.09 0-2.04-.612-2.527-1.512l.26-.277ZM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-2.863 1.594-3.903 3.588-4.161 5.277.322-.16.694-.245 1.088-.245 1.588 0 2.871 1.315 2.871 2.939 0 1.623-1.283 2.938-2.871 2.938-1.09 0-2.04-.612-2.527-1.512l.26-.277Z" />
            </svg>

            <p className="text-xl md:text-2xl leading-relaxed text-green-900 font-medium mb-6">
              Promover iniciativas que contribuyan al mejoramiento de la calidad
              de vida de las comunidades mediante la educaci&oacute;n, la
              participaci&oacute;n ciudadana y la gesti&oacute;n responsable de
              los recursos naturales.
            </p>

            <p className="text-green-700 font-semibold text-lg">
              &mdash; Nuestro prop&oacute;sito
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Programs() {
  return (
    <section id="programas" className="bg-white py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-extrabold text-green-900 text-center mb-4">
          Programas y proyectos
        </h2>

        {/* Subtitle */}
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Conoce nuestros programas insignia que generan impacto real en el
          territorio
        </p>

        {/* Cards */}
        <div className="space-y-12">
          {/* Card 1 — Ni Una Gota Más */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-72 lg:h-auto lg:min-h-[400px]">
              <Image
                src="/images/programa-aceite/WhatsApp-Image-2023-05-03-at-1.43.05-PM.jpeg"
                alt="Recolección de aceite de cocina usado del programa Ni Una Gota Más"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="inline-block self-start rounded-full bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 mb-4">
                Programa insignia
              </span>

              <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                Ni Una Gota M&aacute;s
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                Promueve la gesti&oacute;n responsable del aceite de cocina usado
                mediante procesos de recolecci&oacute;n, educaci&oacute;n
                ambiental y aprovechamiento del residuo.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Este programa evita que el aceite sea vertido en el
                alcantarillado o en fuentes h&iacute;dricas, contribuyendo a la
                protecci&oacute;n del agua y al cuidado de ecosistemas
                estrat&eacute;gicos como el r&iacute;o Magdalena.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                El aceite recolectado es transformado en biocombustible de
                segunda generaci&oacute;n, lo que contribuye a la
                reducci&oacute;n de emisiones de gases efecto invernadero.
              </p>

              <a
                href="/programas/ni-una-gota-mas"
                className="inline-flex items-center bg-green-700 text-white rounded-xl px-6 py-3 font-semibold hover:bg-green-800 transition self-start"
              >
                Conocer m&aacute;s
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>

          {/* Card 2 — Hablemos de Paz y Sostenibilidad */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            {/* Content (left on desktop) */}
            <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
              <span className="inline-block self-start rounded-full bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 mb-4">
                Proyecto comunitario
              </span>

              <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                Hablemos de Paz y Sostenibilidad
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                Este proyecto promueve espacios de formaci&oacute;n comunitaria
                orientados a fortalecer la convivencia, la inclusi&oacute;n y el
                cuidado del entorno.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                A trav&eacute;s de metodolog&iacute;as participativas se
                desarrollan talleres que integran sostenibilidad ambiental,
                cultura ciudadana y construcci&oacute;n de paz.
              </p>

              <a
                href="/programas/hablemos-de-paz"
                className="inline-flex items-center bg-green-700 text-white rounded-xl px-6 py-3 font-semibold hover:bg-green-800 transition self-start"
              >
                Conocer m&aacute;s
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            {/* Image (right on desktop) */}
            <div className="relative h-72 lg:h-auto lg:min-h-[400px] order-1 lg:order-2">
              <Image
                src="/images/proyecto-paz/WhatsApp-Image-2025-04-07-at-8.49.40-AM.jpeg"
                alt="Taller comunitario del proyecto Hablemos de Paz y Sostenibilidad"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

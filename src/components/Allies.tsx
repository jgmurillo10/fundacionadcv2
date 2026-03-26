import Image from "next/image";

const allies = [
  {
    name: "Green Fuel",
    description: "Aliado en transformación de aceite en biocombustible",
    logo: "/images/logos/greenfuel.jpeg",
  },
  {
    name: "Fundación Construyendo Planeta",
    description: "Aliado en educación ambiental",
    logo: "/images/logos/construyendo_planeta.jpeg",
  },
  {
    name: "Sentido Verde",
    description: "Aliado en sostenibilidad y economía circular",
    logo: "/images/logos/sentido_verde_2.jpeg",
  },
];

export default function Allies() {
  return (
    <section id="aliados" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Nuestros aliados
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            El trabajo de la Fundaci&oacute;n ADC se fortalece mediante alianzas
            estrat&eacute;gicas con organizaciones comprometidas con la
            sostenibilidad
          </p>
        </div>

        {/* Ally Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {allies.map((ally) => (
            <div
              key={ally.name}
              className="bg-cream rounded-2xl p-8 w-80 text-center shadow-md hover:shadow-xl transition"
            >
              {/* Logo */}
              <div className="w-40 h-40 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src={ally.logo}
                  alt={`Logo de ${ally.name}`}
                  width={160}
                  height={160}
                  className="object-contain mix-blend-multiply"
                />
              </div>

              {/* Name */}
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-green-900 mb-3">
                {ally.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {ally.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

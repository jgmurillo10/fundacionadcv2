const ODS_ITEMS = [
  {
    number: "4",
    color: "#C5192D",
    title: "Educaci\u00f3n de calidad",
    text: "Promovemos procesos de educaci\u00f3n ambiental y formaci\u00f3n ciudadana.",
  },
  {
    number: "10",
    color: "#DD1367",
    title: "Reducci\u00f3n de desigualdades",
    text: "Promovemos la inclusi\u00f3n y la participaci\u00f3n de diversos grupos poblacionales.",
  },
  {
    number: "12",
    color: "#BF8B2E",
    title: "Producci\u00f3n y consumo responsables",
    text: "Impulsamos la gesti\u00f3n responsable de residuos y la econom\u00eda circular.",
  },
  {
    number: "13",
    color: "#3F7E44",
    title: "Acci\u00f3n por el clima",
    text: "Nuestros programas contribuyen a la reducci\u00f3n de emisiones y a la mitigaci\u00f3n del cambio clim\u00e1tico.",
  },
  {
    number: "16",
    color: "#00689D",
    title: "Paz, justicia e instituciones s\u00f3lidas",
    text: "Promovemos la participaci\u00f3n ciudadana y la convivencia comunitaria.",
  },
] as const;

export default function ODS() {
  return (
    <section id="ods" className="bg-white py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-extrabold text-green-900 text-center mb-4">
          Contribuci&oacute;n a los Objetivos de Desarrollo Sostenible
        </h2>

        {/* Subtitle */}
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Nuestros programas contribuyen al cumplimiento de la Agenda 2030 de
          las Naciones Unidas
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ODS_ITEMS.map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border-l-4"
              style={{
                borderLeftColor: item.color,
                backgroundColor: `${item.color}08`,
              }}
            >
              <span
                className="block text-5xl font-extrabold mb-3"
                style={{ color: item.color }}
              >
                {item.number}
              </span>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

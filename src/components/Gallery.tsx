import Image from "next/image";

const photos = [
  {
    src: "/images/programa-aceite/WhatsApp-Image-2023-04-27-at-11.19.53-AM.jpeg",
    alt: "Feria ambiental",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/proyecto-paz/WhatsApp-Image-2025-04-07-at-8.49.40-AM.jpeg",
    alt: "Taller de paz y sostenibilidad",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/programa-aceite/WhatsApp-Image-2023-04-24-at-10.11.39-AM.jpeg",
    alt: "Capacitaci\u00f3n sobre aceite de cocina usado",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/proyecto-paz/WhatsApp-Image-2025-04-11-at-7.44.03-AM.jpeg",
    alt: "Actividad educativa con ni\u00f1os",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/programa-aceite/Imagen-de-WhatsApp-2023-11-29-a-las-17.35.08_3afa6f3c.jpg",
    alt: "Recolecci\u00f3n de aceite",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/proyecto-paz/WhatsApp-Image-2025-04-07-at-10.52.51-AM-_1_.jpeg",
    alt: "Taller comunitario",
    className: "md:col-span-2 md:row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-[#F5F5F0] py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-extrabold text-green-900 text-center mb-4">
          Nuestro trabajo en acci&oacute;n
        </h2>

        {/* Subtitle */}
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Fotograf&iacute;as de nuestras actividades, talleres y capacitaciones
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[200px] gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`group relative overflow-hidden rounded-2xl ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                <span className="text-white text-lg font-semibold">
                  {photo.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

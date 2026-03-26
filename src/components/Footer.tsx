import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Quiénes somos", href: "/#quienes-somos" },
  { label: "Qué hacemos", href: "/#que-hacemos" },
  { label: "Programas", href: "/#programas" },
  { label: "Impacto", href: "/#impacto" },
  { label: "Contacto", href: "/#contacto" },
];

const programs = [
  { label: "Ni Una Gota Más", href: "/programas/ni-una-gota-mas" },
  { label: "Hablemos de Paz y Sostenibilidad", href: "/programas/hablemos-de-paz" },
];

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/images/logos/fundacionadclogo.png"
                alt="Fundacion ADC logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <p className="font-[family-name:var(--font-heading)] text-xl font-bold">
                Fundaci&oacute;n ADC
              </p>
            </div>
            <p className="text-green-300 font-medium mb-4">
              Ambiente, Desarrollo y Calidad
            </p>
            <p className="text-sm opacity-70 leading-relaxed">
              Organizaci&oacute;n sin &aacute;nimo de lucro comprometida con la
              sostenibilidad
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-bold text-lg mb-4">
              Navegaci&oacute;n
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="opacity-70 hover:opacity-100 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Programs */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-bold text-lg mb-4">
              Programas
            </h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.label}>
                  <a
                    href={program.href}
                    className="opacity-70 hover:opacity-100 transition"
                  >
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-bold text-lg mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mt-0.5 shrink-0 opacity-70"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="opacity-70">
                  Girardot, Cundinamarca, Colombia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mt-0.5 shrink-0 opacity-70"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span className="opacity-70">adcfundacion@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mt-0.5 shrink-0 opacity-70"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <div className="flex flex-col gap-1">
                  <a
                    href="https://wa.me/573007738824"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition"
                  >
                    +57 300 773 8824
                  </a>
                  <a
                    href="https://wa.me/573005503573"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition"
                  >
                    +57 300 550 3573
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <p className="text-center text-sm opacity-70">
            &copy; 2026 Fundaci&oacute;n ADC &ndash; Ambiente, Desarrollo y
            Calidad. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

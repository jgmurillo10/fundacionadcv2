"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    organizacion: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Contacto web – ${form.nombre}${form.organizacion ? ` (${form.organizacion})` : ""}`
    );

    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nOrganización: ${form.organizacion || "N/A"}\nCorreo: ${form.correo}\nTeléfono: ${form.telefono || "N/A"}\n\n${form.mensaje}`
    );

    window.location.href = `mailto:adcfundacion@gmail.com?subject=${subject}&body=${body}`;
  }

  const inputClasses =
    "w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-white";

  return (
    <section id="contacto" className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column — Info */}
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trabajemos juntos
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Si tu organizaci&oacute;n desea desarrollar proyectos de
            sostenibilidad ambiental o social, la Fundaci&oacute;n ADC puede
            acompa&ntilde;ar el dise&ntilde;o e implementaci&oacute;n de
            iniciativas que generen impacto positivo en el territorio.
          </p>

          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-700"
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
              </div>
              <div>
                <p className="font-semibold text-gray-900">Ubicaci&oacute;n</p>
                <p className="text-gray-600">
                  Girardot, Cundinamarca, Colombia
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Correo</p>
                <p className="text-gray-600">adcfundacion@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Tel&eacute;fono</p>
                <p className="text-gray-600">+57 300 773 8824</p>
                <p className="text-gray-600">+57 300 550 3573</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column — Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nombre */}
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                value={form.nombre}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Tu nombre completo"
              />
            </div>

            {/* Organización */}
            <div>
              <label
                htmlFor="organizacion"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Organizaci&oacute;n
              </label>
              <input
                id="organizacion"
                name="organizacion"
                type="text"
                value={form.organizacion}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Nombre de tu organización"
              />
            </div>

            {/* Correo electrónico */}
            <div>
              <label
                htmlFor="correo"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Correo electr&oacute;nico
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                required
                value={form.correo}
                onChange={handleChange}
                className={inputClasses}
                placeholder="correo@ejemplo.com"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Tel&eacute;fono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                value={form.telefono}
                onChange={handleChange}
                className={inputClasses}
                placeholder="+57 300 000 0000"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                required
                value={form.mensaje}
                onChange={handleChange}
                className={inputClasses + " resize-none"}
                placeholder="Cuéntanos sobre tu proyecto o iniciativa"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-700 text-white font-semibold rounded-xl py-4 hover:bg-green-800 transition shadow-lg cursor-pointer"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

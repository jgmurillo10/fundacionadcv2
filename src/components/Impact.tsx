"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface EnvironmentalMetric {
  icon: React.ReactNode;
  value: number;
  displayPrefix?: string;
  displaySuffix?: string;
  unit: string;
  label: string;
}

interface SocialMetric {
  value: string;
  label: string;
}

/* ------------------------------------------------------------------ */
/*  Inline SVG Icons                                                   */
/* ------------------------------------------------------------------ */

const DropletIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 md:w-14 md:h-14"
  >
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

const WavesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 md:w-14 md:h-14"
  >
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
  </svg>
);

const CloudIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 md:w-14 md:h-14"
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const RecycleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 md:w-14 md:h-14"
  >
    <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
    <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
    <path d="m14 16-3 3 3 3" />
    <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
    <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 12.013 3a1.784 1.784 0 0 1 1.575.887l4.03 6.98" />
    <path d="m15.664 9.178 1.098 4.096 4.096-1.098" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const ENVIRONMENTAL_METRICS: EnvironmentalMetric[] = [
  {
    icon: <DropletIcon />,
    value: 50000,
    displaySuffix: "+",
    unit: "kg",
    label: "Aceite de cocina usado recuperado",
  },
  {
    icon: <WavesIcon />,
    value: 50,
    displaySuffix: "M",
    unit: "litros",
    label: "Agua protegida de contaminaci\u00f3n",
  },
  {
    icon: <CloudIcon />,
    value: 105,
    unit: "ton CO\u2082",
    label: "Emisiones de CO\u2082 evitadas",
  },
  {
    icon: <RecycleIcon />,
    value: 100,
    unit: "%",
    label: "Aceite aprovechado como biocombustible",
  },
];

const SOCIAL_METRICS: SocialMetric[] = [
  {
    value: "5.000+",
    label: "Personas sensibilizadas en sostenibilidad y educaci\u00f3n ambiental",
  },
  {
    value: "25+",
    label: "Instituciones educativas vinculadas",
  },
  {
    value: "M\u00faltiples",
    label: "Comunidades, empresas y organizaciones participantes",
  },
];

/* ------------------------------------------------------------------ */
/*  Counter animation hook                                             */
/* ------------------------------------------------------------------ */

function useCounterAnimation(
  targetValue: number,
  isVisible: boolean,
  duration: number = 2000
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for a smooth deceleration
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(easedProgress * targetValue));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, targetValue, duration]);

  return count;
}

/* ------------------------------------------------------------------ */
/*  Metric Card (environmental)                                        */
/* ------------------------------------------------------------------ */

function EnvironmentalCard({
  metric,
  isVisible,
}: {
  metric: EnvironmentalMetric;
  isVisible: boolean;
}) {
  const animatedValue = useCounterAnimation(metric.value, isVisible);

  const formattedValue =
    metric.value >= 1000
      ? animatedValue.toLocaleString("es-CO")
      : String(animatedValue);

  return (
    <div className="group relative bg-green-800/60 backdrop-blur-md rounded-2xl px-6 py-10 text-center border border-white/25 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:border-white/40 transition-all duration-300 hover:-translate-y-1">
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* Icon container */}
        <div className="mx-auto mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-white/15 text-emerald-300 ring-1 ring-white/20">
          {metric.icon}
        </div>

        {/* Animated number */}
        <p className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-extrabold text-white leading-none tracking-tight">
          {metric.displayPrefix ?? ""}
          {formattedValue}
          {metric.displaySuffix ?? ""}
        </p>

        {/* Unit */}
        <p className="text-xl font-semibold text-emerald-300 mt-3">
          {metric.unit}
        </p>

        {/* Divider */}
        <div className="mx-auto mt-4 mb-4 w-10 h-px bg-white/30" />

        {/* Label */}
        <p className="text-white/80 text-sm leading-relaxed">
          {metric.label}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function Impact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="impacto">
      {/* ── Block 1: Environmental Impact ── */}
      <div
        ref={sectionRef}
        className="relative bg-gradient-to-b from-green-950 via-green-900 to-green-800 text-white py-28 px-6 overflow-hidden"
      >
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-400/15 text-emerald-300 text-sm font-medium px-4 py-1.5 rounded-full border border-emerald-400/25 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
            </svg>
            Impacto ambiental
          </div>

          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-extrabold mb-5">
            Nuestro impacto
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            Medimos el impacto de nuestros programas mediante indicadores
            ambientales, sociales y de gobernanza
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {ENVIRONMENTAL_METRICS.map((metric) => (
              <EnvironmentalCard
                key={metric.label}
                metric={metric}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Block 2: Social Impact ── */}
      <div className="relative bg-gray-50 py-24 px-6">
        {/* Top separator accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600" />

        <div className="max-w-5xl mx-auto">
          {/* Social impact header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z" />
              </svg>
              Impacto social
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-extrabold text-gray-900">
              Transformando comunidades
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOCIAL_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="relative bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all duration-300"
              >
                <p className="font-[family-name:var(--font-heading)] text-5xl font-extrabold text-green-700 mb-3">
                  {metric.value}
                </p>
                <div className="mx-auto mb-3 w-8 h-px bg-green-300" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

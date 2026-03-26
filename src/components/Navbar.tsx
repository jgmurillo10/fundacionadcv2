"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Quienes somos", href: "/#quienes-somos" },
  { label: "Que hacemos", href: "/#que-hacemos" },
  {
    label: "Programas",
    href: "/#programas",
    children: [
      { label: "Ni Una Gota M\u00e1s", href: "/programas/ni-una-gota-mas" },
      { label: "Hablemos de Paz y Sostenibilidad", href: "/programas/hablemos-de-paz" },
    ],
  },
  { label: "Impacto", href: "/#impacto" },
  { label: "Aliados", href: "/#aliados" },
  { label: "Contacto", href: "/#contacto" },
];

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled || mobileMenuOpen
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Navegacion principal"
      >
        {/* Logo */}
        <a
          href="/#inicio"
          className="flex items-center gap-2 font-[family-name:var(--font-heading)]"
          onClick={handleNavClick}
        >
          <Image
            src="/images/logos/fundacionadclogo.png"
            alt="Fundacion ADC logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <span
            className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled || mobileMenuOpen ? "text-green-700" : "text-white"
            }`}
          >
            Fundacion ADC
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className={link.children ? "relative group" : ""}>
              <a
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 font-[family-name:var(--font-body)] inline-flex items-center gap-1 ${
                  scrolled
                    ? "text-green-900 hover:bg-green-50 hover:text-green-700"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
                {link.children && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 opacity-60">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                )}
              </a>
              {link.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className={`rounded-xl shadow-lg border py-2 min-w-[240px] ${
                    scrolled
                      ? "bg-white border-gray-100"
                      : "bg-green-950/95 backdrop-blur-md border-white/10"
                  }`}>
                    {link.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                          scrolled
                            ? "text-green-900 hover:bg-green-50 hover:text-green-700"
                            : "text-white/90 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <a
          href="/#contacto"
          className={`hidden rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 font-[family-name:var(--font-body)] lg:inline-block ${
            scrolled
              ? "bg-green-700 text-white shadow-sm hover:bg-green-800 hover:shadow-md"
              : "bg-white text-green-700 hover:bg-green-50"
          }`}
        >
          Trabajemos juntos
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors duration-300 lg:hidden ${
            scrolled || mobileMenuOpen
              ? "text-green-900 hover:bg-green-50"
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <HamburgerIcon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="border-t border-green-100 bg-white px-4 pb-6 pt-4 sm:px-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-green-900 transition-colors duration-200 hover:bg-green-50 hover:text-green-700 font-[family-name:var(--font-body)]"
                  onClick={handleNavClick}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                >
                  {link.label}
                </a>
                {link.children && (
                  <ul className="ml-4">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <a
                          href={child.href}
                          className="block rounded-lg px-4 py-2.5 text-sm font-medium text-green-700 transition-colors duration-200 hover:bg-green-50 font-[family-name:var(--font-body)]"
                          onClick={handleNavClick}
                          tabIndex={mobileMenuOpen ? 0 : -1}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 px-4">
            <a
              href="/#contacto"
              className="block w-full rounded-xl bg-green-700 px-5 py-3 text-center text-base font-semibold text-white transition-colors duration-200 hover:bg-green-800 font-[family-name:var(--font-body)]"
              onClick={handleNavClick}
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              Trabajemos juntos
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

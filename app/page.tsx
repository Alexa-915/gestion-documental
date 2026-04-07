"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const skills = [
  {
    icon: "💻",
    title: "Programación",
    description: "Java, Python, JavaScript",
    detail: "Desarrollo de aplicaciones web y de escritorio con enfoque en código limpio y buenas prácticas.",
    color: "from-pink-400 to-rose-500",
    bg: "bg-pink-50",
    border: "border-pink-200",
    text: "text-pink-600",
  },
  {
    icon: "🤝",
    title: "Trabajo en equipo",
    description: "Comunicación, liderazgo",
    detail: "Experiencia colaborando en proyectos ágiles, con habilidades de comunicación efectiva y liderazgo.",
    color: "from-purple-400 to-violet-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-600",
  },
  {
    icon: "✨",
    title: "Creatividad",
    description: "Soluciones innovadoras",
    detail: "Capacidad para pensar fuera de la caja y proponer soluciones creativas a problemas complejos.",
    color: "from-yellow-400 to-amber-500",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-600",
  },
  {
    icon: "🎨",
    title: "Diseño UI/UX",
    description: "Figma, Tailwind CSS",
    detail: "Diseño de interfaces intuitivas y atractivas centradas en la experiencia del usuario.",
    color: "from-fuchsia-400 to-pink-500",
    bg: "bg-fuchsia-50",
    border: "border-fuchsia-200",
    text: "text-fuchsia-600",
  },
  {
    icon: "🗄️",
    title: "Bases de datos",
    description: "MySQL, PostgreSQL",
    detail: "Modelado, consultas y administración de bases de datos relacionales.",
    color: "from-violet-400 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    text: "text-violet-600",
  },
];

const projects = [
  {
    title: "Portafolio Web",
    description: "Hoja de vida interactiva desarrollada con Next.js y Tailwind CSS.",
    tags: ["Next.js", "Tailwind", "React"],
    color: "from-pink-400 to-purple-500",
  },
  {
    title: "App de Gestión",
    description: "Sistema de gestión documental con autenticación y panel de control.",
    tags: ["Java", "MySQL", "Spring"],
    color: "from-purple-400 to-violet-600",
  },
  {
    title: "Proyecto Creativo",
    description: "Aplicación web con enfoque en diseño y experiencia de usuario.",
    tags: ["JavaScript", "CSS", "Figma"],
    color: "from-yellow-400 to-pink-400",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">

      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span
            className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
              scrolled ? "text-purple-700" : "text-white"
            }`}
          >
            Alexa <span className="text-pink-400">💜</span>
          </span>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`relative pb-1 transition-colors duration-200 cursor-pointer ${
                    scrolled ? "text-gray-700 hover:text-purple-600" : "text-white/90 hover:text-white"
                  } ${
                    activeSection === link.href.replace("#", "")
                      ? "font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-pink-400 after:to-purple-500 after:rounded-full"
                      : ""
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden flex flex-col gap-1.5 cursor-pointer ${scrolled ? "text-gray-700" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-purple-100 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left text-gray-700 font-medium hover:text-purple-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center">
        <img
          src="/fondo.jpg"
          alt="fondo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 text-center text-white px-6 flex flex-col items-center">
          <div className="mb-8 ring-4 ring-white/30 ring-offset-4 ring-offset-transparent rounded-full shadow-2xl">
            <img
              src="/perfil.jpg"
              alt="Foto de perfil de Alexa Galeano"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Alexa{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Galeano
            </span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white/80 font-light">
            Ingeniera en formación · Desarrolladora Web · Creativa
          </p>

          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            <button
              onClick={() => scrollTo("#sobre-mi")}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-sm font-semibold shadow-lg hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Conoce más sobre mí
            </button>
            <button
              onClick={() => scrollTo("#contacto")}
              className="px-6 py-3 border border-white/40 rounded-full text-sm font-semibold backdrop-blur-sm hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Contáctame
            </button>
          </div>

          <div className="mt-16 animate-bounce text-white/50">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── SOBRE MÍ ── */}
      <section id="sobre-mi" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-pink-500 uppercase tracking-widest">Un poco sobre mí</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">Bienvenida a mi espacio ✨</h2>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 text-gray-600 leading-relaxed text-[1.05rem]">
              <p>
                Hola, soy <span className="font-semibold text-purple-700">Alexa</span>, una ingeniera en formación
                apasionada por la tecnología, la creatividad y el desarrollo de soluciones digitales.
              </p>
              <p>
                Me encanta construir experiencias web que combinen funcionalidad con buen diseño.
                Creo que el código puede ser tan creativo como cualquier otra forma de arte.
              </p>
              <p>
                Este espacio refleja mi crecimiento, mis habilidades y mi forma de ver el mundo
                desde la ingeniería 💻💜
              </p>
              <button
                onClick={() => scrollTo("#habilidades")}
                className="inline-flex items-center gap-2 mt-2 text-purple-600 font-semibold hover:text-pink-500 transition-colors cursor-pointer"
              >
                Ver mis habilidades →
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Lenguajes", value: "Java · Python · JS", icon: "💻" },
                { label: "Diseño", value: "Figma · Tailwind", icon: "🎨" },
                { label: "Bases de datos", value: "MySQL · PostgreSQL", icon: "🗄️" },
                { label: "Soft skills", value: "Liderazgo · Creatividad", icon: "🌟" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-2xl p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="mt-2 text-xs font-semibold text-purple-500 uppercase tracking-wide">{item.label}</p>
                  <p className="mt-1 text-sm text-gray-700 font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HABILIDADES ── */}
      <section id="habilidades" className="py-28 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-purple-500 uppercase tracking-widest">Lo que sé hacer</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">Mis habilidades 💻</h2>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full" />
          </div>

          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="pb-12"
          >
            {skills.map((skill) => (
              <SwiperSlide key={skill.title}>
                <div
                  className={`${skill.bg} ${skill.border} border rounded-3xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 h-full`}
                >
                  <div
                    className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl shadow-md`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className={`mt-5 text-lg font-bold ${skill.text}`}>{skill.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-gray-500">{skill.description}</p>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">{skill.detail}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── PROYECTOS ── */}
      <section id="proyectos" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-pink-500 uppercase tracking-widest">Mi trabajo</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">Proyectos 🚀</h2>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-pink-400 to-yellow-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`h-3 bg-gradient-to-r ${project.color}`} />
                <div className="p-7">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-semibold bg-purple-50 text-purple-600 rounded-full border border-purple-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="py-28 px-6 bg-gradient-to-br from-purple-600 via-violet-600 to-pink-600">
        <div className="max-w-2xl mx-auto text-center text-white">
          <span className="text-sm font-semibold text-pink-200 uppercase tracking-widest">¿Hablamos?</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold">Conecta conmigo 💜</h2>
          <p className="mt-5 text-white/75 text-lg leading-relaxed">
            Estoy abierta a nuevas oportunidades, colaboraciones y proyectos creativos.
            No dudes en escribirme.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            {[
              { icon: <FaGithub />, href: "https://github.com/Alexa-915", label: "GitHub", hover: "hover:bg-white/20" },
              { icon: <FaLinkedin />, href: "https://linkedin.com/in/alexa-sofia-galeano-betancourt-14b466368", label: "LinkedIn", hover: "hover:bg-white/20" },
              { icon: <FaInstagram />, href: "https://instagram.com/alexasofiagaleano", label: "Instagram", hover: "hover:bg-white/20" },
              { icon: <FaEnvelope />, href: "mailto:alexa@example.com", label: "Email", hover: "hover:bg-white/20" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-14 h-14 rounded-2xl border border-white/30 flex items-center justify-center text-xl text-white ${social.hover} hover:scale-110 transition-all duration-300`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <a
            href="mailto:alexa@example.com"
            className="mt-10 inline-block px-8 py-4 bg-white text-purple-700 font-bold rounded-full shadow-lg hover:shadow-white/30 hover:scale-105 transition-all duration-300"
          >
            Envíame un mensaje ✉️
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 text-center bg-gray-950 text-gray-500 text-sm">
        <p>
          © 2026{" "}
          <span className="text-purple-400 font-semibold">Alexa Galeano</span>{" "}
          — Todos los derechos reservados ✨
        </p>
      </footer>

    </main>
  );
}

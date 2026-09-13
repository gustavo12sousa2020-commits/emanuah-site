"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const artists = [
  {
    number: "01",
    name: "Edima Ômega",
    role: "ARTISTA",
    description: "Música & Pregação",
    image: "/odima.png",
    imageClass: "object-cover object-center",
  },
  {
    number: "02",
    name: "Davi Ota",
    role: "ARTISTA",
    description: "Louvor worship",
    image: "/davi-ota.png",
    imageClass: "object-cover object-center",
  },
  {
    number: "03",
    name: "Ev. João Vitor Ota",
    role: "PRELETOR",
    description: "Pregações",
    image: "/ev.joao-vitor-ota.png",
    imageClass: "object-cover object-center",
  },
  {
    number: "04",
    name: "Pr. Wilton Blanco",
    role: "PRELETOR",
    description: "Ministração & Palestra",
    image: "/pr.wilton-blanco.png",
    imageClass: "object-cover object-center",
  },
  {
    number: "05",
    name: "Ester Ota",
    role: "ARTISTA",
    description: "Música & Ministração",
    image: "/ester-ota.png",
    imageClass: "object-cover object-center",
  },
  {
    number: "06",
    name: "Pra. Adrielly Ota",
    role: "ARTISTA",
    description: "Ministração",
    image: "/pra-adrielly-ota.png",
    imageClass: "object-cover object-center",
  },
  {
    number: "07",
    name: "Weslay",
    role: "ARTISTA",
    description: "Música",
    image: "/weslay.png",
    imageClass: "object-cover object-center",
  },
];

const WHATSAPP_BASE = "https://wa.me/5511945065689";

const WHATSAPP_AGENDAMENTO =
  `${WHATSAPP_BASE}?text=Ol%C3%A1%2C%20Emanuah%21%20Gostaria%20de%20solicitar%20um%20agendamento%20para%20um%20evento.%20Gostaria%20de%20saber%20mais%20sobre%20disponibilidade%20e%20valores.`;

const WHATSAPP_NAV =
  `${WHATSAPP_BASE}?text=Ol%C3%A1%2C%20Emanuah%21%20Gostaria%20de%20saber%20mais%20sobre%20os%20agendamentos.`;

const carouselArtists = [
  {
    number: "01",
    name: "Pra. Adrielly Ota",
    role: "ARTISTA",
    description: "Música & Ministração",
    image: "/carousel/pra-adrielly-ota.png",
  },
  {
    number: "02",
    name: "Ev. João Vitor Ota",
    role: "PRELETOR",
    description: "Pregações",
    image: "/carousel/ev-joao-vitor-ota-carousel.jpg",
  },
  {
    number: "03",
    name: "Pr. Wilton Blanco",
    role: "PRELETOR",
    description: "Ministração & Palestra",
    image: "/carousel/pr-wilton-blanco-carousel.png",
  },
  {
    number: "04",
    name: "Davi Ota",
    role: "ARTISTA",
    description: "Louvor worship",
    image: "/carousel/davi-ota-carousel.png",
  },
  {
    number: "05",
    name: "Edima Ômega",
    role: "ARTISTA",
    description: "Música & Pregação",
    image: "/carousel/edima-omega-carousel.png",
  },
  {
    number: "06",
    name: "Ester Ota",
    role: "ARTISTA",
    description: "Música & Ministração",
    image: "/carousel/cantora-este-ota.png",
  },
  {
    number: "07",
    name: "Weslay",
    role: "ARTISTA",
    description: "Música",
    image: "/carousel/waslay.jpg",
  },
];

const services = [
  {
    number: "01",
    title: "Gestão artística",
    text: "Estratégia, organização e acompanhamento de artistas para transformar talento em carreira.",
  },
  {
    number: "02",
    title: "Booking artístico",
    text: "Conexão entre artistas, eventos, igrejas, produtores e oportunidades profissionais.",
  },
  {
    number: "03",
    title: "Produção de eventos",
    text: "Planejamento, organização e execução de eventos com artistas e talentos.",
  },
  {
    number: "04",
    title: "Conteúdo & audiovisual",
    text: "Produção de conteúdo e registros audiovisuais para fortalecer a presença artística.",
  },
  {
    number: "05",
    title: "Desenvolvimento artístico",
    text: "Posicionamento, identidade, repertório e direção para cada etapa da carreira.",
  },
];

const manifestoText =
  "Não basta ter talento. É preciso saber onde levá-lo.";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function ManifestoCharacter({
  character,
  index,
  total,
  progress,
}: {
  character: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    progress,
    [start, end],
    [0, 1]
  );

  return (
    <motion.span style={{ opacity }}>
      {character === " " ? "\u00A0" : character}
    </motion.span>
  );
}

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const manifestoRef = useRef<HTMLElement | null>(null);

const { scrollYProgress: manifestoProgress } = useScroll({
  target: manifestoRef,
  offset: ["start 85%", "end 35%"],
});

  const cursorOpacity = useTransform(
    manifestoProgress,
    [0, 0.95],
    [1, 0]
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide(
        (current) =>
          (current + 1) % carouselArtists.length
      );
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(
      (current) =>
        (current + 1) % carouselArtists.length
    );
  };

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0
        ? carouselArtists.length - 1
        : current - 1
    );
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  const scrollArtists = (
    direction: "left" | "right"
  ) => {
    const carousel =
      document.getElementById("artists-carousel");

    if (!carousel) return;

    carousel.scrollBy({
      left: direction === "right" ? 470 : -470,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">

      {/* =========================================================
    CONTEXTO INSTITUCIONAL
========================================================= */}

<section
  aria-labelledby="empresa-title"
  className="sr-only"
>
  <h2 id="empresa-title">Emanuàh Group</h2>

  <p>
  
  </p>

  <p>
    A Emanuàh Group conecta talentos a projetos e experiências,
    oferecendo assessoria artística, gestão de talentos, booking
    artístico, produção de eventos, desenvolvimento artístico e
    conteúdo audiovisual.
  </p>

  <p>
    A atuação da Emanuàh Group inclui shows, apresentações,
    cultos, congressos, ministrações, palestras e outros eventos
    que precisam de artistas e profissionais preparados.
  </p>
</section>

      {/* =========================================================
          SCROLL PROGRESS
      ========================================================= */}

      <div
        className="pointer-events-none fixed left-0 top-0 z-[300] h-[2px] bg-white"
        style={{
          width: `${scrollProgress}%`,
        }}
      />

      {/* =========================================================
          MOUSE LIGHT
      ========================================================= */}

      <div
        className="pointer-events-none fixed z-[200] hidden h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[80px] lg:block"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <header className="fixed inset-x-0 top-0 z-[100] bg-[#050505]/80 backdrop-blur-md">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-14">

          <div className="relative flex h-[100px] items-center justify-between border-b border-white/[0.08]">

            {/* LOGO */}

            <button
              onClick={() => scrollTo("inicio")}
              className="relative z-10 flex items-center"
              aria-label="Voltar ao início"
            >
              <div className="relative h-[58px] w-[150px]">
                <Image
                  src="/logo/emanuah-logo-recortado.png"
                  alt="Emanuàh Group"
                  fill
                  priority
                  sizes="150px"
                  className="object-contain object-left"
                />
              </div>
            </button>

            {/* MENU DESKTOP */}

            <nav className="hidden items-center gap-10 lg:flex">

              <button
                onClick={() => scrollTo("artistas")}
                className="nav-link"
              >
                ARTISTAS
              </button>

              <button
                onClick={() => scrollTo("servicos")}
                className="nav-link"
              >
                SERVIÇOS
              </button>

              <button
                onClick={() => scrollTo("experiencias")}
                className="nav-link"
              >
                EXPERIÊNCIAS
              </button>

              <button
                onClick={() => scrollTo("sobre")}
                className="nav-link"
              >
                SOBRE
              </button>

            </nav>

            {/* AGENDAR DESKTOP */}

            <a
              href={WHATSAPP_NAV}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-[42px] items-center gap-3 border border-white/20 px-5 text-[11px] font-semibold tracking-[0.18em] transition-all duration-300 hover:border-white hover:bg-white hover:text-black lg:flex"
            >
              AGENDAR

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
              />
            </a>

            {/* MENU MOBILE */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50 flex h-11 w-11 items-center justify-center border border-white/10 lg:hidden"
              aria-label={
                menuOpen
                  ? "Fechar menu"
                  : "Abrir menu"
              }
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>

          </div>
        </div>

        {/* MENU MOBILE */}

        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="absolute left-0 right-0 top-[100px] border-b border-white/10 bg-[#050505]/95 backdrop-blur-xl lg:hidden"
          >

            <div className="flex flex-col px-6 py-8">

              <button
                onClick={() =>
                  scrollTo("artistas")
                }
                className="mobile-nav-link"
              >
                ARTISTAS
              </button>

              <button
                onClick={() =>
                  scrollTo("servicos")
                }
                className="mobile-nav-link"
              >
                SERVIÇOS
              </button>

              <button
                onClick={() =>
                  scrollTo("experiencias")
                }
                className="mobile-nav-link"
              >
                EXPERIÊNCIAS
              </button>

              <button
                onClick={() => scrollTo("sobre")}
                className="mobile-nav-link"
              >
                SOBRE
              </button>

              <a
                href={WHATSAPP_NAV}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="mt-6 flex items-center justify-center gap-2 bg-white px-5 py-4 text-xs font-semibold tracking-[0.18em] text-black"
              >
                AGENDAR

                <ArrowUpRight size={15} />
              </a>

            </div>
          </motion.div>
        )}

      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        id="inicio"
        className="relative min-h-screen overflow-hidden pt-[100px]"
      >

        {/* GRID */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.055]" />

          <div className="absolute left-[50%] top-0 h-full w-px bg-white/[0.035]" />

          <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.055]" />

        </div>

        {/* LUZ */}

        <div className="pointer-events-none absolute right-[12%] top-[25%] h-[550px] w-[550px] rounded-full bg-white/[0.035] blur-[130px]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-100px)] max-w-[1400px] flex-col px-5 lg:flex-row lg:px-14">

          {/* TEXTO */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative z-20 flex w-full flex-col justify-center pb-28 lg:w-[58%]"
          >

            <div className="mb-8 flex items-center gap-4">

              <span className="h-px w-10 bg-white/40" />

              <span className="text-[10px] font-medium tracking-[0.35em] text-white/55">
                GESTÃO • MÚSICA • EXPERIÊNCIAS
              </span>

            </div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="font-serif text-[clamp(3.8rem,17vw,6rem)] font-medium leading-[0.94] tracking-[-0.065em] lg:text-[clamp(5rem,10vw,9.8rem)]"
            >

              <motion.span
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ] as const,
                    },
                  },
                }}
                className="block hero-word"
              >
                TALENTO
              </motion.span>

              <motion.span
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ] as const,
                    },
                  },
                }}
                className="block hero-word"
              >
                <em className="font-serif font-normal">
                  ganha
                </em>
              </motion.span>

              <motion.span
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ] as const,
                    },
                  },
                }}
                className="block hero-word"
              >
                DIREÇÃO.
              </motion.span>

            </motion.h1>

            <div className="mt-14 max-w-[430px]">

              <p className="text-[14px] leading-7 text-white/45">
  A Emanuàh Group atua com assessoria artística, gestão de talentos,
  booking e produção de eventos, conectando artistas a projetos,
  eventos e experiências.
</p>

            </div>

            <button
              onClick={() => scrollTo("sobre")}
              className="group mt-10 flex w-fit items-center gap-4 border-b border-white/20 pb-3 text-[10px] font-semibold tracking-[0.28em] transition-colors hover:border-white"
            >
              CONHECER A EMANUAH

              <ArrowDown
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </button>

          </motion.div>

          {/* CARROSSEL DO HERO */}

          <div className="relative mt-10 h-[560px] w-full lg:mt-0 lg:h-[88vh] lg:w-[52%]">

            <AnimatePresence mode="sync">

              <motion.div
                key={`background-${currentSlide}`}
                initial={{
                  opacity: 0,
                  scale: 1.08,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 1.1,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ] as const,
                }}
                className="absolute inset-0 overflow-hidden"
              >

                <Image
                  src={
                    carouselArtists[
                      currentSlide
                    ].image
                  }
                  alt={`Emanuàh Group - ${carouselArtists[currentSlide].name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="scale-110 object-cover object-center opacity-35 blur-2xl"
                />

                <div className="absolute inset-0 bg-[#050505]/60" />

              </motion.div>

            </AnimatePresence>

            <div className="absolute inset-0 border border-white/[0.08] bg-white/[0.01]" />

            <AnimatePresence mode="wait">

              <motion.div
                key={
                  carouselArtists[
                    currentSlide
                  ].name
                }
                initial={{
                  opacity: 0,
                  x: 45,
                  scale: 1.015,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                }}
                transition={{
                  duration: 0.75,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ] as const,
                }}
                className="absolute inset-0 overflow-hidden"
              >

                <Image
                  src={
                    carouselArtists[
                      currentSlide
                    ].image
                  }
                  alt={`Emanuàh Group - ${carouselArtists[currentSlide].name}`}
                  fill
                  priority={currentSlide === 0}
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/10" />

                <div className="absolute inset-0 bg-black/10" />

              </motion.div>

            </AnimatePresence>

            {/* INFORMAÇÕES */}

            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8 lg:p-10">

              <div className="flex items-end justify-between gap-6">

                <AnimatePresence mode="wait">

                  <motion.div
                    key={`info-${currentSlide}`}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                  >

                    <p className="mb-2 text-[9px] tracking-[0.3em] text-white/55">
                      {
                        carouselArtists[
                          currentSlide
                        ].role
                      }
                    </p>

                    <h2 className="max-w-[430px] font-serif text-[clamp(2rem,9vw,3.5rem)] leading-[0.9] tracking-[-0.05em] lg:text-[clamp(2.5rem,5vw,5rem)]">
                      {
                        carouselArtists[
                          currentSlide
                        ].name
                      }
                    </h2>

                    <p className="mt-4 text-[9px] tracking-[0.25em] text-white/45">
                      {
                        carouselArtists[
                          currentSlide
                        ].description.toUpperCase()
                      }
                    </p>

                  </motion.div>

                </AnimatePresence>

                <div className="flex shrink-0 flex-col items-end gap-4">

                  <span className="text-[10px] tracking-[0.25em] text-white/50">
                    {
                      carouselArtists[
                        currentSlide
                      ].number
                    }{" "}
                    / 07
                  </span>

                  <div className="flex gap-2">

                    <button
                      type="button"
                      onClick={previousSlide}
                      aria-label="Artista anterior"
                      className="flex h-10 w-10 items-center justify-center border border-white/20 bg-black/20 text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-white hover:text-white"
                    >
                      <ArrowLeft
                        size={15}
                        strokeWidth={1.5}
                      />
                    </button>

                    <button
                      type="button"
                      onClick={nextSlide}
                      aria-label="Próximo artista"
                      className="flex h-10 w-10 items-center justify-center border border-white/20 bg-black/20 text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-white hover:text-white"
                    >
                      <ArrowRight
                        size={15}
                        strokeWidth={1.5}
                      />
                    </button>

                  </div>

                </div>

              </div>

              {/* INDICADORES */}

              <div className="mt-6 flex items-center gap-2">

                {carouselArtists.map(
                  (artist, index) => (
                    <button
                      key={artist.name}
                      type="button"
                      onClick={() =>
                        setCurrentSlide(index)
                      }
                      aria-label={`Ir para ${artist.name}`}
                      className="group flex h-5 items-center"
                    >
                      <span
                        className={`block h-px transition-all duration-500 ${
                          index === currentSlide
                            ? "w-10 bg-white"
                            : "w-5 bg-white/25 group-hover:bg-white/60"
                        }`}
                      />
                    </button>
                  )
                )}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          MANIFESTO
      ========================================================= */}

      <section
  ref={manifestoRef}
  id="sobre"
  className="relative min-h-[680px] w-full max-w-full overflow-hidden border-t border-white/[0.08] sm:min-h-[750px] lg:min-h-[850px]"
>

        <motion.div
          initial={{
            opacity: 0,
            scale: 1.04,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.4,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ] as const,
          }}
          className="absolute inset-0"
        >

          <Image
            src="/experiencia.jpg"
            alt="Emanuàh Group - gestão artística, eventos e experiências"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-[0.55]"
          />

        </motion.div>

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/45 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/75 via-transparent to-[#050505]/75" />

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.06]" />

          <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.04]" />

        </div>

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1400px] items-center px-6 sm:min-h-[750px] lg:min-h-[850px] lg:px-14">

          <div className="w-full">

            <div className="mb-10 flex items-center gap-4">

              <span className="h-px w-10 bg-white/30" />

              <span className="text-[10px] tracking-[0.35em] text-white/40">
                EMANUAH GROUP
              </span>

            </div>

            {/* TEXTO DO MANIFESTO */}

            <div className="w-full max-w-[1200px] min-w-0 overflow-hidden">

              <p
                aria-label={manifestoText}
                className="font-serif text-[clamp(2.8rem,12vw,5rem)] font-medium leading-[0.92] tracking-[-0.055em] lg:text-[clamp(3.2rem,6.5vw,7rem)]"
              >

                {manifestoText
                  .split("")
                  .map(
                    (
                      character,
                      index
                    ) => (
                      <ManifestoCharacter
                        key={`${character}-${index}`}
                        character={character}
                        index={index}
                        total={
                          manifestoText.length
                        }
                        progress={
                          manifestoProgress
                        }
                      />
                    )
                  )}

                <motion.span
                  className="ml-1 inline-block h-[0.8em] w-[2px] translate-y-[0.08em] bg-white/70"
                  style={{
                    opacity:
                      cursorOpacity,
                  }}
                />

              </p>

            </div>

            {/* DESCRIÇÃO */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mt-10 max-w-[620px] lg:mt-14"
            >

              <p className="text-[14px] leading-8 text-white/45">
                A Emanuah trabalha na
                interseção entre gestão,
                arte e experiência.
                Criamos direção para
                artistas e projetos que
                precisam transformar
                potencial em presença.
              </p>

            </motion.div>

            {/* ASSINATURA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              className="mt-10 flex items-center gap-4"
            >

              <span className="h-px w-16 bg-white/30" />

              <span className="text-[9px] tracking-[0.3em] text-white/35">
                GESTÃO • ARTE • EXPERIÊNCIA
              </span>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =========================================================
          ARTISTAS
      ========================================================= */}

      <section
  id="artistas"
  aria-labelledby="artistas-title"
  className="relative overflow-hidden border-t border-white/[0.08] py-32 lg:py-44"
>

        <div className="mx-auto max-w-[1400px] px-6 lg:px-14">

          <div className="mb-16 flex items-end justify-between">

            <div>

              <span className="text-[10px] tracking-[0.35em] text-white/35">
                02 / ARTISTAS
              </span>

              <h2
  id="artistas-title"
  className="mt-5 font-serif text-[clamp(3.5rem,7vw,7rem)] leading-none tracking-[-0.05em]"
>
  ROSTER
</h2>

            </div>

            <div className="hidden items-center gap-2 md:flex">

              <button
                onClick={() =>
                  scrollArtists("left")
                }
                aria-label="Artistas anteriores"
                className="flex h-12 w-12 items-center justify-center border border-white/15 text-xl text-white/50 transition-all duration-300 hover:border-white hover:text-white"
              >
                ←
              </button>

              <button
                onClick={() =>
                  scrollArtists("right")
                }
                aria-label="Próximos artistas"
                className="flex h-12 w-12 items-center justify-center border border-white/15 text-xl text-white/50 transition-all duration-300 hover:border-white hover:text-white"
              >
                →
              </button>

            </div>

          </div>

          <div
            id="artists-carousel"
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-8"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >

            {artists.map(
              (artist, index) => (
                <motion.article
                  key={artist.name}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.07,
                  }}
                  className="artist-card group relative min-w-[82vw] snap-start overflow-hidden bg-[#101010] sm:min-w-[55vw] lg:min-w-[430px]"
                >

                  <div className="relative aspect-[3/4] overflow-hidden">

                    <div className="artist-card-light pointer-events-none absolute left-0 top-0 z-20 h-px w-full" />

                    <Image
                      src={artist.image}
                      alt={`Emanuàh Group - ${artist.name}`}
                      fill
                      sizes="(max-width: 640px) 82vw, (max-width: 1024px) 55vw, 430px"
                      className={`${artist.imageClass} artist-card-image transition-transform duration-700 group-hover:scale-[1.045]`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-7">

                      <p className="mb-2 text-[9px] tracking-[0.3em] text-white/55">
                        {artist.role}
                      </p>

                      <h3 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[0.95] tracking-[-0.04em]">
                        {artist.name}
                      </h3>

                      <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">

                        <span className="text-[10px] tracking-[0.18em] text-white/55">
                          {artist.description.toUpperCase()}
                        </span>

                        <ArrowUpRight
                          size={18}
                          strokeWidth={1}
                          className="text-white/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                        />

                      </div>

                    </div>

                  </div>

                </motion.article>
              )
            )}

          </div>

          <div className="mt-4 flex items-center gap-3 md:hidden">

            <span className="h-px w-10 bg-white/30" />

            <span className="text-[9px] tracking-[0.25em] text-white/30">
              DESLIZE PARA EXPLORAR
            </span>

          </div>

        </div>

      </section>

      {/* =========================================================
          SERVIÇOS
      ========================================================= */}

      <section
  id="servicos"
  aria-labelledby="servicos-title"
  className="relative border-t border-white/[0.08] py-32 lg:py-44"
>

        <div className="mx-auto max-w-[1400px] px-6 lg:px-14">

          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">

            <div>

              <span className="text-[10px] tracking-[0.35em] text-white/35">
                03 / SERVIÇOS
              </span>

              <h2
  id="servicos-title"
  className="mt-5 max-w-[500px] font-serif text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em]"
>

                TUDO QUE
                <br />

                <span className="text-white/40">
                  SUSTENTA
                </span>

                <br />

                O TALENTO.

              </h2>

            </div>

            <div className="border-t border-white/10">

              {services.map(
                (service, index) => (
                  <motion.div
                    key={service.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.1,
                    }}
                    variants={fadeUp}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="group grid gap-6 border-b border-white/10 py-8 md:grid-cols-[60px_1fr_1fr_auto] md:items-start"
                  >

                    <span className="text-[10px] tracking-[0.2em] text-white/30">
                      {service.number}
                    </span>

                    <h3 className="font-serif text-3xl tracking-[-0.025em]">
                      {service.title}
                    </h3>

                    <p className="max-w-[330px] text-[13px] leading-6 text-white/40">
                      {service.text}
                    </p>

                    <ArrowUpRight
                      size={19}
                      strokeWidth={1}
                      className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />

                  </motion.div>
                )
              )}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          EXPERIÊNCIAS
      ========================================================= */}

      <section
  id="experiencias"
  aria-labelledby="experiencias-title"
  className="relative border-t border-white/[0.08] py-32 lg:py-44"
>

        <div className="mx-auto max-w-[1400px] px-6 lg:px-14">

          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <span className="text-[10px] tracking-[0.35em] text-white/35">
                04 / EXPERIÊNCIAS
              </span>

              <h2
  id="experiencias-title"
  className="mt-5 font-serif text-[clamp(3.5rem,7vw,7rem)] leading-none tracking-[-0.05em]"
>
  MOMENTOS
</h2>

            </div>

            <p className="max-w-[350px] text-[13px] leading-6 text-white/40">
              Cada evento é pensado para
              criar presença, conexão e uma
              experiência que continua depois
              que as luzes se apagam.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="group relative aspect-[4/5] overflow-hidden bg-[#101010]"
            >

              <div className="absolute inset-0 flex items-end p-8">

                <div>

                  <span className="text-[9px] tracking-[0.3em] text-white/30">
                    EXPERIÊNCIA 01
                  </span>

                  <h3 className="mt-3 font-serif text-3xl">
                    Produção & Eventos
                  </h3>

                </div>

              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="group relative aspect-[4/5] overflow-hidden bg-[#101010] md:mt-24"
            >

              <div className="absolute inset-0 flex items-end p-8">

                <div>

                  <span className="text-[9px] tracking-[0.3em] text-white/30">
                    EXPERIÊNCIA 02
                  </span>

                  <h3 className="mt-3 font-serif text-3xl">
                    Artistas & Palco
                  </h3>

                </div>

              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            </motion.div>

          </div>

        </div>

      </section>

      {/* =========================================================
          AGENDAMENTOS
      ========================================================= */}

      <section
  id="agendamento"
  aria-labelledby="agendamento-title"
  className="relative overflow-hidden border-t border-white/[0.08] bg-[#050505]"
>

        <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-white/[0.04]" />

        <div className="pointer-events-none absolute -right-20 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full border border-white/[0.04]" />

        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-24">

            {/* LADO ESQUERDO */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <div className="mb-8 flex items-center gap-4">

                <span className="h-px w-10 bg-white/40" />

                <span className="text-[10px] font-medium tracking-[0.35em] text-white/50">
                  AGENDAMENTOS
                </span>

              </div>

              <h2
  id="agendamento-title"
  className="max-w-[800px] text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.88] tracking-[-0.06em] text-white"
>

                Seu próximo
                <br />

                <span className="text-white/35">
                  evento começa
                </span>

                <br />

                aqui.

              </h2>

              <p className="mt-10 max-w-[560px] text-[15px] leading-7 text-white/55 sm:text-base">
                Conectamos seu evento ao talento
                certo. Artistas e ministros preparados
                para shows, congressos, cultos,
                apresentações e experiências que
                precisam de presença, propósito e
                profissionalismo.
              </p>

              <div className="mt-12 grid max-w-[600px] grid-cols-1 gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">

                <div className="bg-[#050505] p-5">

                  <span className="text-[9px] tracking-[0.25em] text-white/35">
                    01
                  </span>

                  <h3 className="mt-5 text-sm font-medium tracking-wide text-white">
                    ARTISTAS
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Shows, apresentações e participações.
                  </p>

                </div>

                <div className="bg-[#050505] p-5">

                  <span className="text-[9px] tracking-[0.25em] text-white/35">
                    02
                  </span>

                  <h3 className="mt-5 text-sm font-medium tracking-wide text-white">
                    MINISTRAÇÕES
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Cultos, congressos e eventos.
                  </p>

                </div>

                <div className="bg-[#050505] p-5">

                  <span className="text-[9px] tracking-[0.25em] text-white/35">
                    03
                  </span>

                  <h3 className="mt-5 text-sm font-medium tracking-wide text-white">
                    EVENTOS
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Presença artística e produção.
                  </p>

                </div>

              </div>

            </motion.div>

            {/* LADO DIREITO */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="relative"
            >

              <div className="relative overflow-hidden border border-white/[0.10] bg-[#0b0b0b] p-8 sm:p-10 lg:p-12">

                <div className="absolute left-0 top-0 h-px w-full bg-white/20" />

                <span className="text-[9px] tracking-[0.3em] text-white/35">
                  FALE COM A EMANUAH
                </span>

                <h3 className="mt-8 max-w-[420px] text-3xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-4xl">

                  Tem um evento
                  <br />

                  <span className="text-white/40">
                    em mente?
                  </span>

                </h3>

                <p className="mt-6 max-w-[420px] text-sm leading-6 text-white/45">
                  Conte um pouco sobre o seu projeto
                  e vamos conversar sobre
                  disponibilidade, artistas e
                  possibilidades para o seu evento.
                </p>

                <a
                  href={WHATSAPP_AGENDAMENTO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-10 flex w-full items-center justify-between border border-white/20 bg-white px-6 py-5 text-black transition-all duration-300 hover:bg-white/90"
                >

                  <span className="text-[11px] font-semibold tracking-[0.18em]">
                    SOLICITAR AGENDAMENTO
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center border border-black/20 transition-transform duration-300 group-hover:translate-x-1">

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                    />

                  </span>

                </a>

                <div className="mt-8 flex items-center gap-3 border-t border-white/[0.08] pt-6">

                  <span className="h-1.5 w-1.5 rounded-full bg-white/60" />

                  <span className="text-[9px] tracking-[0.2em] text-white/30">
                    ATENDIMENTO VIA WHATSAPP
                  </span>

                </div>

              </div>

              <div className="mt-5 flex justify-end">

                <span className="text-[8px] tracking-[0.35em] text-white/20">
                  EMANUAH GROUP
                </span>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-white/[0.08]">

        <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-14">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

            {/* LOGO */}

            <div className="relative h-[55px] w-[95px]">

              <Image
                src="/logo/emanuah-logo-recortado.png"
                alt="Emanuàh Group"
                fill
                sizes="95px"
                className="object-contain object-left"
              />

            </div>

            {/* LINKS */}

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 md:flex-nowrap md:gap-8">

              <button
                onClick={() =>
                  scrollTo("inicio")
                }
                className="text-[9px] tracking-[0.25em] text-white/35 transition-colors hover:text-white"
              >
                VOLTAR AO TOPO
              </button>

              <a
                href="https://www.instagram.com/emanuahoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] tracking-[0.25em] text-white/35 transition-colors hover:text-white"
              >
                INSTAGRAM
              </a>

              <a
                href={WHATSAPP_NAV}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] tracking-[0.25em] text-white/35 transition-colors hover:text-white"
              >
                WHATSAPP
              </a>

            </div>

          </div>

          <div className="mt-10 border-t border-white/[0.08] pt-6">

            <p className="text-[9px] tracking-[0.2em] text-white/20">
              © {new Date().getFullYear()} EMANUAH GROUP.
              TODOS OS DIREITOS RESERVADOS.
            </p>

          </div>

        </div>

      </footer>

      {/* =========================================================
          ESTILOS
      ========================================================= */}

      <style jsx global>{`

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #050505;
        }

        .nav-link {
          position: relative;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.25em;
          color: rgba(255, 255, 255, 0.5);
          transition: color 300ms ease;
        }

        .nav-link:hover {
          color: rgba(255, 255, 255, 1);
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 1px;
          background: white;
          transition: width 300ms ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-nav-link {
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 20px 0;
          text-align: left;
          font-size: 12px;
          letter-spacing: 0.25em;
          color: rgba(255, 255, 255, 0.65);
          transition: color 300ms ease;
        }

        .mobile-nav-link:hover {
          color: white;
        }

        ::selection {
          background: white;
          color: black;
        }

        ::-webkit-scrollbar {
          width: 3px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.35);
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.7);
        }

        .hero-word {
          position: relative;
          text-shadow:
            0 0 0 rgba(255, 255, 255, 0),
            0 0 24px rgba(255, 255, 255, 0.08);
          transition:
            text-shadow 0.5s ease,
            transform 0.5s ease;
        }

        .hero-word:hover {
          text-shadow:
            0 0 20px rgba(255, 255, 255, 0.12),
            0 0 45px rgba(255, 255, 255, 0.06);
          transform: translateX(3px);
        }

        .artist-card {
          transition:
            transform 500ms ease,
            border-color 500ms ease,
            box-shadow 500ms ease;
          border: 1px solid transparent;
        }

        .artist-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 255, 255, 0.14);
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.35),
            0 0 35px rgba(255, 255, 255, 0.025);
        }

        .artist-card-image {
          transition:
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 700ms ease;
        }

        .artist-card:hover .artist-card-image {
          filter: brightness(1.05);
        }

        .artist-card-light {
          opacity: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.55),
            transparent
          );
          transform: translateX(-100%);
          transition:
            opacity 300ms ease,
            transform 800ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .artist-card:hover .artist-card-light {
          opacity: 1;
          transform: translateX(100%);
        }

      `}</style>

    </main>
  );
}
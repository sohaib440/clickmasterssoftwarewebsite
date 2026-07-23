"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import CardSwap, { Card } from "@/components/landing/card-swap";
import {
  btnOutlineDark,
  container,
  overline,
  projectPath,
  sectionPad,
} from "@/lib/landing/constants";
import {
  projectDetailPath,
  showcaseProjects,
  type ShowcaseProject,
} from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectsSectionProps = {
  projects?: ShowcaseProject[];
  overlineText?: string;
  title?: React.ReactNode;
  showViewAll?: boolean;
  id?: string;
};

const PROJECT_FADE_MS = 700;
const SLIDE_FADE_MS = 500;

type CardSwapDimensions = {
  width: number;
  height: number;
  cardDistance: number;
  verticalDistance: number;
  containerHeight: number;
  imageSizes: string;
};

function getCardSwapDimensions(viewportWidth: number): CardSwapDimensions {
  if (viewportWidth < 480) {
    return {
      width: 268,
      height: 214,
      cardDistance: 50,
      verticalDistance: 64,
      containerHeight: 360,
      imageSizes: "(max-width: 480px) 90vw, 268px",
    };
  }

  if (viewportWidth < 640) {
    return {
      width: 300,
      height: 240,
      cardDistance: 56,
      verticalDistance: 72,
      containerHeight: 400,
      imageSizes: "(max-width: 640px) 90vw, 300px",
    };
  }

  if (viewportWidth < 1024) {
    return {
      width: 360,
      height: 288,
      cardDistance: 64,
      verticalDistance: 82,
      containerHeight: 480,
      imageSizes: "(max-width: 1024px) 80vw, 360px",
    };
  }

  if (viewportWidth < 1536) {
    return {
      width: 400,
      height: 320,
      cardDistance: 72,
      verticalDistance: 92,
      containerHeight: 560,
      imageSizes: "(max-width: 1536px) 45vw, 400px",
    };
  }

  return {
    width: 520,
    height: 416,
    cardDistance: 90,
    verticalDistance: 112,
    containerHeight: 700,
    imageSizes: "(min-width: 1536px) 520px, 400px",
  };
}

function useCardSwapDimensions() {
  const [dimensions, setDimensions] = useState<CardSwapDimensions>(() =>
    getCardSwapDimensions(1280)
  );

  useEffect(() => {
    const update = () => {
      setDimensions(getCardSwapDimensions(window.innerWidth));
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return dimensions;
}

export function ProjectsSection({
  projects = showcaseProjects,
  overlineText = "Our work",
  title = (
    <>
      Recent <span className="italic">projects</span>
    </>
  ),
  showViewAll = true,
  id = "projects",
}: ProjectsSectionProps) {
  const cardDimensions = useCardSwapDimensions();
  const [activeProject, setActiveProject] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [projectVisible, setProjectVisible] = useState(true);
  const [slideVisible, setSlideVisible] = useState(true);

  const project = projects[activeProject] ?? projects[0];
  const slide = project?.slides[activeSlide] ?? project?.slides[0];

  const selectProject = useCallback(
    (index: number) => {
      if (index === activeProject || !projectVisible) return;

      setProjectVisible(false);
      setSlideVisible(false);

      window.setTimeout(() => {
        setActiveProject(index);
        setActiveSlide(0);
        setProjectVisible(true);
        setSlideVisible(true);
      }, PROJECT_FADE_MS);
    },
    [activeProject, projectVisible]
  );

  const goNextProject = () => {
    selectProject((activeProject + 1) % projects.length);
  };

  const goPrevProject = () => {
    selectProject((activeProject - 1 + projects.length) % projects.length);
  };

  const handleFrontChange = useCallback(
    (index: number) => {
      if (index === activeSlide) return;

      setSlideVisible(false);
      window.setTimeout(() => {
        setActiveSlide(index);
        setSlideVisible(true);
      }, SLIDE_FADE_MS);
    },
    [activeSlide]
  );

  if (!project || !slide) return null;

  return (
    <section id={id} className="w-full overflow-hidden bg-black text-white">
      <div className={cn(container, sectionPad)}>
        <div className="mb-6 md:mb-8">
          <p className={cn(overline, "text-white/60")}>{overlineText}</p>
          <h2 className="mt-3 font-heading text-3xl font-normal leading-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>
        </div>

        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-16 2xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]">
          <div className="order-2 min-h-0 lg:order-1 lg:min-h-[420px] 2xl:min-h-[500px]">
            <div
              className={cn(
                "transition-all duration-700 ease-in-out",
                projectVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              )}
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-primary">
                {project.category}
              </p>
              <h3 className="mt-3 font-heading text-2xl font-normal leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                <Link
                  href={projectDetailPath(project.slug)}
                  className="transition-colors hover:text-primary"
                >
                  {project.title}
                </Link>
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:mt-5 sm:text-base md:text-lg">
                {project.description}
              </p>

              {project.highlights.length > 0 ? (
                <ul className="mt-5 space-y-2 sm:mt-6">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/80 before:size-1.5 before:shrink-0 before:rounded-full before:bg-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}

              <Link
                href={projectDetailPath(project.slug)}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-primary"
              >
                View case study
                <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </div>

            <div
              className={cn(
                "mt-6 border-t border-white/10 pt-5 transition-all duration-500 ease-in-out sm:mt-8 sm:pt-6",
                slideVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              )}
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">
                Current view
              </p>
              <p className="mt-2 font-heading text-lg text-white sm:text-xl md:text-2xl">{slide.label}</p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/65">{slide.caption}</p>
            </div>
          </div>

          <div
            className={cn(
              "relative order-1 mx-auto w-full max-w-[min(100%,560px)] transition-opacity duration-700 ease-in-out lg:order-2 lg:mx-0 lg:max-w-none 2xl:max-w-[720px] 2xl:justify-self-end",
              projectVisible ? "opacity-100" : "opacity-0"
            )}
            style={{ height: cardDimensions.containerHeight }}
          >
            <CardSwap
              key={`${project.slug}-${cardDimensions.width}`}
              swapKey={project.slug}
              width={cardDimensions.width}
              height={cardDimensions.height}
              cardDistance={cardDimensions.cardDistance}
              verticalDistance={cardDimensions.verticalDistance}
              delay={2500}
              pauseOnHover
              skewAmount={5}
              easing="power"
              onFrontChange={handleFrontChange}
            >
              {project.slides.map((item, index) => (
                <Card key={`${project.slug}-${index}`} className="relative overflow-hidden">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    className="h-full w-full object-cover object-top transition-opacity duration-700 ease-in-out"
                    sizes={cardDimensions.imageSizes}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/80 p-4 sm:p-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-white/80 sm:text-sm">{item.caption}</p>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 sm:mt-10 sm:pt-8">
          <div className="flex flex-col gap-4 sm:gap-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/45">
              Browse projects
            </p>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={goPrevProject}
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-horizon-navy sm:size-10"
                aria-label="Previous project"
              >
                <ChevronLeft className="size-4" />
              </button>

              <div className="-mx-1 flex flex-1 items-center gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {projects.map((item, index) => (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => selectProject(index)}
                    className={cn(
                      "shrink-0 rounded-full border px-3 py-2 text-left text-xs font-medium transition-all duration-500 ease-in-out sm:px-4 sm:text-sm",
                      index === activeProject
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-white/15 bg-transparent text-white/70 hover:border-white/35 hover:text-white"
                    )}
                  >
                    <span className="mr-1.5 text-[10px] tracking-[0.2em] text-inherit opacity-70 sm:mr-2">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="hidden min-[420px]:inline">{item.title}</span>
                    <span className="min-[420px]:hidden">{item.title.split(" ")[0]}</span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={goNextProject}
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-horizon-navy sm:size-10"
                aria-label="Next project"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          {showViewAll ? (
            <div className="mt-8 flex justify-center sm:mt-10">
              <Link href={projectPath} className={btnOutlineDark}>
                View all projects
                <ArrowUpRight className="ml-2 size-4" aria-hidden />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

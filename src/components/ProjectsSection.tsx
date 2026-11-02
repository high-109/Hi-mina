import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from './LiveProjectButton';
import { ExternalLink, Eye, X } from 'lucide-react';

interface ProjectData {
  num: string;
  name: string;
  category: string;
  col1Top: string;
  col1Bottom: string;
  col2: string;
  link: string;
}

const PROJECTS: ProjectData[] = [
  {
    num: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1Top:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Bottom:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    link: 'https://nextlevelstudio.design'
  },
  {
    num: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1Top:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Bottom:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    link: 'https://aurabrand.art'
  },
  {
    num: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1Top:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Bottom:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    link: 'https://solarisdigital.io'
  }
];

function ProjectCard({
  project,
  index,
  totalCards,
  onImagePreview
}: {
  project: ProjectData;
  index: number;
  totalCards: number;
  onImagePreview: (src: string, title: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[600px] flex items-start justify-center sticky top-24 md:top-32 w-full mb-12 sm:mb-20"
      style={{
        top: `calc(clamp(5rem, 8vh, 8rem) + ${index * 28}px)`
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]"
      >
        {/* Top Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D7E2EA]/20 pb-5">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none tracking-tighter"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
                {project.category}
              </span>
              <h3
                className="font-medium text-[#D7E2EA] uppercase tracking-wide leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.8rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton
            label="Live Project"
            onClick={() => onImagePreview(project.col2, project.name)}
          />
        </div>

        {/* Bottom Row: 2-column image grid */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full">
          {/* Left Column (40% width) - 2 stacked images */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
            <div
              onClick={() => onImagePreview(project.col1Top, `${project.name} - View 1`)}
              className="relative group overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/15 bg-[#141414] cursor-pointer"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Top}
                alt={`${project.name} render 1`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
            </div>

            <div
              onClick={() => onImagePreview(project.col1Bottom, `${project.name} - View 2`)}
              className="relative group overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/15 bg-[#141414] cursor-pointer"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Bottom}
                alt={`${project.name} render 2`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Right Column (60% width) - 1 tall image */}
          <div
            onClick={() => onImagePreview(project.col2, `${project.name} - Hero Render`)}
            className="w-full md:w-[60%] relative group overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/15 bg-[#141414] cursor-pointer"
            style={{ minHeight: 'clamp(300px, 40vw, 594px)' }}
          >
            <img
              src={project.col2}
              alt={`${project.name} main showcase`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Eye className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const [preview, setPreview] = useState<{ src: string; title: string } | null>(null);

  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32 text-[#D7E2EA]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading: "Project" (singular) using .hero-heading gradient */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '50px', amount: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28 select-none"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </motion.h2>

        {/* 3 Stacking Cards */}
        <div className="relative w-full">
          {PROJECTS.map((proj, i) => (
            <ProjectCard
              key={proj.num}
              project={proj}
              index={i}
              totalCards={PROJECTS.length}
              onImagePreview={(src, title) => setPreview({ src, title })}
            />
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-[#121212] rounded-3xl border border-[#D7E2EA]/20 p-4 sm:p-6 flex flex-col items-center overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-[#D7E2EA]/10">
              <span className="font-medium text-[#D7E2EA] uppercase tracking-wider text-sm sm:text-base">
                {preview.title}
              </span>
              <button
                type="button"
                onClick={() => setPreview(null)}
                className="p-1 rounded-full text-[#D7E2EA] hover:bg-white/10 transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <img
              src={preview.src}
              alt={preview.title}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}

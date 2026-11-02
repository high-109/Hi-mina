import ContactButton from './ContactButton';
import Magnet from './Magnet';

interface FooterProps {
  onContactClick?: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative w-full bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-6 sm:px-10 py-16 text-[#D7E2EA] z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="hero-heading font-black text-2xl sm:text-3xl uppercase tracking-tight">
            Mina
          </span>
          <p className="text-xs sm:text-sm text-[#D7E2EA]/60 uppercase tracking-widest mt-1">
            3D Creator & Visual Designer
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs sm:text-sm uppercase tracking-wider text-[#D7E2EA]/70">
          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => scrollTo('services')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Projects
          </button>
        </div>

        <Magnet strength={4} padding={20}>
          <ContactButton onClick={onContactClick} />
        </Magnet>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[#D7E2EA]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7E2EA]/40">
        <p>© {new Date().getFullYear()} Mina. All rights reserved.</p>
        <p className="tracking-wide">Crafted with React, WebGL & Framer Motion</p>
      </div>
    </footer>
  );
}

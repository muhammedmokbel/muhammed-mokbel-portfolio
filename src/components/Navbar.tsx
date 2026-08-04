import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Compact mode + glass effect trigger
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 z-10 origin-left"
        style={{ width: progressWidth }}
      />

      {/* Navbar body — animates on scroll */}
      <motion.div
        animate={{
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          backgroundColor: scrolled ? 'rgba(5,8,22,0.85)' : 'rgba(5,8,22,0)',
          borderBottomWidth: scrolled ? 1 : 0,
          boxShadow: scrolled
            ? '0 4px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04)'
            : 'none',
        }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between"
          style={{ paddingTop: scrolled ? '10px' : '16px', paddingBottom: scrolled ? '10px' : '16px', transition: 'padding 0.35s ease' }}
        >
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            animate={{ scale: scrolled ? 0.92 : 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 group"
            onClick={() => setActive('')}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Code2 size={18} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-purple-300 transition-colors">
              MM<span className="text-purple-400">.</span>
            </span>
          </motion.a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <motion.a
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleNav(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    active === link.href
                      ? 'text-white bg-white/5'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-400"
                    />
                  )}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a
            href="#contact"
            animate={{ scale: scrolled ? 0.92 : 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: scrolled ? 0.97 : 1.05, boxShadow: '0 0 20px rgba(124,58,237,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-semibold shadow-lg shadow-purple-500/25 transition-all duration-200"
          >
            Hire Me
          </motion.a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{ backdropFilter: 'blur(20px)', backgroundColor: 'rgba(5,8,22,0.92)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleNav(link.href)}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                      active === link.href ? 'text-white bg-white/8' : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-center rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-semibold"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

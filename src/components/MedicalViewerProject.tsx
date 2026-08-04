import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Play, Maximize2, X } from 'lucide-react';
import SEECProject from './SEECProject';
import VoyanceProject from './VoyanceProject';
import ClassfitProject from './ClassfitProject';

const screenshots = [
  {
    src: '/viewer_1.webp',
    caption: 'C-Spine analysis with lateral cervical angle measurements',
  },
  {
    src: '/viewer_2.webp',
    caption: 'Lumbar spine & pelvis with multi-point measurement overlay',
  },
  {
    src: '/viewer_3.webp',
    caption: 'Cervical spine lateral view with vertebral annotation tools',
  },
  {
    src: '/viewer_4.webp',
    caption: 'Advanced angle & length annotation on cervical X-ray',
  },
  {
    src: '/viewer_5.webp',
    caption: 'Multi-cell view: side-by-side DICOM image comparison',
  },
];

const features = [
  { icon: '🔬', title: 'DICOM Rendering', desc: 'Full DICOM standard support with pixel-perfect image rendering and metadata parsing.' },
  { icon: '📐', title: 'Advanced Annotations', desc: 'Length, angle, arrow, and shape tools with persistent overlays on medical images.' },
  { icon: '⚡', title: 'Window Leveling', desc: 'Real-time brightness/contrast adjustments for optimal diagnostic clarity.' },
  { icon: '🖥️', title: 'Multi-Cell Layout', desc: 'Side-by-side comparison view for progressive or bilateral study analysis.' },
  { icon: '🎬', title: 'Cine Mode', desc: 'Frame-by-frame playback for multi-frame DICOM series and CT/MRI stacks.' },
  { icon: '🧩', title: 'Micro Frontend', desc: 'Architected as an independently deployable micro-frontend module.' },
];

const techStack = [
  'React', 'TypeScript', 'Redux', 'Micro Frontend', 'Material UI',
  'Bootstrap', 'DICOM', 'Google Healthcare APIs', 'Firebase', 'PWA',
];

export default function MedicalViewerProject() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((p) => (p + 1) % screenshots.length);
    }, 3500);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const go = (dir: 1 | -1) => {
    stopAutoPlay();
    setActiveSlide((p) => (p + dir + screenshots.length) % screenshots.length);
    startAutoPlay();
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-purple-600/8 blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Featured Work</span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-2 tracking-tight">
            Projects <span className="gradient-text">Showcase</span>
          </h2>
        </motion.div>

        {/* ── PROJECT CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="gradient-border rounded-3xl bg-white/[0.02] overflow-hidden"
        >
          {/* Project hero banner */}
          <div className="relative bg-gradient-to-r from-[#0a0a1a] via-[#0d0d2b] to-[#050816] px-8 pt-10 pb-0 border-b border-white/5">
            <div className="max-w-3xl mb-8">
              {/* Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 uppercase tracking-wider">
                  Medical SaaS · Healthcare Tech
                </span>
                <span className="flex items-center gap-1.5 text-xs text-green-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Live in Production
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
                Medical Viewer — <span className="gradient-text">DICOM Imaging Platform</span>
              </h3>
              <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
                A professional-grade web-based DICOM viewer built for the medical community. Displays DICOM images
                with advanced diagnostic tools — annotations, measurements, window leveling, multi-cell layouts,
                and cine playback — powering the Voyance Cloud PACS (VCP) platform.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <motion.a
                  href="https://vpax.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-semibold shadow-lg shadow-purple-500/25"
                >
                  <ExternalLink size={15} />
                  View Live App
                </motion.a>
                <motion.button
                  onClick={() => setShowDemo(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm font-semibold hover:border-purple-500/40 hover:bg-purple-500/10 transition-all"
                >
                  <Play size={15} className="text-purple-300" />
                  Interactive Demo
                </motion.button>
              </div>
            </div>

            {/* Floating tech pills row */}
            <div className="flex flex-wrap gap-2 pb-8">
              {techStack.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/8 text-gray-400">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── SCREENSHOT GALLERY ── */}
          <div className="p-6 md:p-8 border-b border-white/5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Screenshots</h4>
              <div className="flex items-center gap-2">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { stopAutoPlay(); setActiveSlide(i); startAutoPlay(); }}
                    className={`transition-all rounded-full ${
                      i === activeSlide ? 'w-6 h-2 bg-purple-400' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden cursor-zoom-in group bg-[#0a0a14]"
              style={{ maxHeight: '420px', height: '55vw' }}
              onClick={() => setLightboxOpen(true)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSlide}
                  src={screenshots[activeSlide].src}
                  alt={screenshots[activeSlide].caption}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <Maximize2 size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Nav arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); go(-1); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-black/70 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); go(1); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-black/70 transition-all"
              >
                <ChevronRight size={18} />
              </button>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-3 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs text-gray-300">{screenshots[activeSlide].caption}</p>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="grid grid-cols-5 gap-2 mt-3">
              {screenshots.map((s, i) => (
                <button
                  key={i}
                  onClick={() => { stopAutoPlay(); setActiveSlide(i); startAutoPlay(); }}
                  className={`relative rounded-xl overflow-hidden aspect-video transition-all ${
                    i === activeSlide
                      ? 'ring-2 ring-purple-400 ring-offset-2 ring-offset-[#050816]'
                      : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={s.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* ── ARCADE INTERACTIVE DEMO ── */}
          <div className="p-6 md:p-8 border-b border-white/5">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-2">
                <Play size={16} className="text-purple-400" />
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Interactive Demo</h4>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-500/15 text-purple-300 border border-purple-500/25">
                Powered by Arcade
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-[#0a0a1a] border border-white/5" style={{ aspectRatio: '16/9' }}>
              {!iframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
                  <div className="w-12 h-12 rounded-full border-2 border-purple-500/30 border-t-purple-400 animate-spin" />
                  <span className="text-sm text-gray-500">Loading interactive demo…</span>
                </div>
              )}
              <iframe
                src="https://app.arcade.software/share/q4hFLOMTWoS91IqHQNMX"
                title="Medical Viewer Interactive Demo"
                allow="fullscreen"
                className={`w-full h-full border-0 transition-opacity duration-500 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIframeLoaded(true)}
              />
            </div>
            <p className="text-xs text-gray-600 mt-3 text-center">
              Click through the interactive walkthrough to explore the viewer's features.
            </p>
          </div>

          {/* ── FEATURE GRID ── */}
          <div className="p-6 md:p-8">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Key Features</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                  className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/25 hover:bg-white/[0.05] transition-all group"
                >
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <h5 className="text-sm font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">
                      {f.title}
                    </h5>
                    <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── SECOND PROJECT ── */}
        <VoyanceProject />

        {/* ── THIRD PROJECT ── */}
        <SEECProject />

        {/* ── FOURTH PROJECT ── */}
        <ClassfitProject />
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
              onClick={() => setLightboxOpen(false)}
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-4 w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => go(-1)} className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white flex-shrink-0 transition-all">
                <ChevronLeft size={22} />
              </button>
              <div className="flex-1">
                <motion.img
                  key={activeSlide}
                  src={screenshots[activeSlide].src}
                  alt={screenshots[activeSlide].caption}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full rounded-2xl shadow-2xl"
                />
                <p className="text-center text-sm text-gray-400 mt-3">{screenshots[activeSlide].caption}</p>
              </div>
              <button onClick={() => go(1)} className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white flex-shrink-0 transition-all">
                <ChevronRight size={22} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── DEMO MODAL (full-screen arcade) ── */}
      <AnimatePresence>
        {showDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white font-semibold text-sm">Medical Viewer — Interactive Demo</span>
              </div>
              <button
                onClick={() => setShowDemo(false)}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex-1">
              <iframe
                src="https://app.arcade.software/share/q4hFLOMTWoS91IqHQNMX"
                title="Medical Viewer Demo Fullscreen"
                allow="fullscreen"
                className="w-full h-full border-0"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

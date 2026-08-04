import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, Quote, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    image: `${import.meta.env.BASE_URL}whatapp_1.jpg`,
    quote:
      "I never wanted to miss a single session — every class was invaluable. When I get stuck at work, I take a deep breath and think the way you taught me to think. Sessions with you were impossible to skip and worth every minute.",
    role: 'Bootcamp Student',
    stars: 5,
  },
  {
    image: `${import.meta.env.BASE_URL}whatapp_2.jpg`,
    quote:
      "Everything I know in frontend, I owe to you. Your effort in the course is deeply appreciated. Your hard work paid off — I just landed my first freelance project on Fiverr right after the course!",
    role: 'Bootcamp Student',
    stars: 5,
  },
  {
    image: `${import.meta.env.BASE_URL}whatapp_3.jpg`,
    quote:
      "Thank you so much, Engineer — we'll miss you dearly! I already built a project and submitted it to Fiverr and got accepted. All the credit goes back to you, naturally.",
    role: 'Bootcamp Student',
    stars: 5,
  },
  {
    image: `${import.meta.env.BASE_URL}whatapp_4.jpg`,
    quote:
      "I'm so proud to have met you. Your teaching technique is outstanding — I'm now studying Angular on my own because you gave me the confidence to tackle anything. Genuinely happy to have known you.",
    role: 'Bootcamp Student',
    stars: 5,
  },
];

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-[200px]">
      {/* Phone shell */}
      <div className="relative rounded-[2rem] border-[6px] border-white/10 bg-black shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-10" />
        <img src={src} alt={alt} className="w-full object-cover" />
      </div>
      {/* Glow */}
      <div className="absolute inset-0 rounded-[2rem] pointer-events-none"
        style={{ boxShadow: '0 0 40px rgba(37,211,102,0.15)' }} />
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-emerald-600/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan-600/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            {/* WhatsApp icon */}
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}>
              <MessageCircle size={18} className="text-white" />
            </div>
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">
              Student Feedback · WhatsApp
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            What My <span className="gradient-text">Students Say</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg">
            Real messages from students I mentored during the 2019–2020 frontend bootcamp.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative rounded-2xl p-6 bg-white/[0.03] border border-white/8 hover:border-emerald-500/25 hover:bg-white/[0.05] transition-all duration-300 flex gap-5"
            >
              {/* Subtle green glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at top left, rgba(37,211,102,0.06), transparent 70%)' }} />

              {/* Phone thumbnail — clickable */}
              <button
                onClick={() => setLightbox(t.image)}
                className="flex-shrink-0 relative"
                title="View original message"
              >
                <PhoneFrame src={t.image} alt={`Student feedback ${i + 1}`} />
                <div className="absolute inset-0 flex items-center justify-center rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                  <span className="text-white text-xs font-semibold bg-black/60 px-3 py-1 rounded-full">
                    View original
                  </span>
                </div>
              </button>

              {/* Quote content */}
              <div className="flex flex-col justify-between flex-1 min-w-0">
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <span key={s} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>

                {/* Quote */}
                <div className="relative flex-1">
                  <Quote size={20} className="text-emerald-500/40 mb-2 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center gap-2">
                  {/* WhatsApp verified badge */}
                  <div className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}>
                    <MessageCircle size={13} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">{t.role}</p>
                    <p className="text-xs text-emerald-400">Verified via WhatsApp</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-sm w-full"
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X size={14} />
              </button>
              <img
                src={lightbox}
                alt="Original WhatsApp message"
                className="w-full rounded-2xl shadow-2xl object-contain max-h-[85vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

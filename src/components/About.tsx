import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Layers, Users } from 'lucide-react';

const stats = [
  { value: '6+', label: 'Years Experience', icon: Calendar },
  { value: '5', label: 'Companies', icon: MapPin },
  { value: '4', label: 'Production Projects', icon: Layers },
  { value: '50+', label: 'Team Members Led', icon: Users },
];

const traits = [
  { title: 'Clean Code', desc: 'Writing maintainable, scalable, and well-documented code.' },
  { title: 'Performance First', desc: 'Optimizing for speed, responsiveness, and user experience.' },
  { title: 'Team Player', desc: 'Leading, mentoring, and collaborating across cross-functional squads.' },
  { title: 'Always Learning', desc: 'Staying current with modern web technologies and best practices.' },
];

function StatCard({ value, label, icon: Icon, index }: { value: string; label: string; icon: React.ElementType; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="gradient-border rounded-2xl p-6 bg-white/[0.03] hover:bg-white/[0.06] transition-all group"
    >
      <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-3 group-hover:bg-purple-500/20 transition-colors">
        <Icon size={20} className="text-purple-400" />
      </div>
      <div className="text-3xl font-black gradient-text mb-1">{value}</div>
      <div className="text-sm text-gray-400 font-medium">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Get to know me</span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-2 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — avatar + stats */}
          <div>
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative mb-10"
            >
              <div className="gradient-border rounded-3xl overflow-hidden w-full max-w-sm mx-auto lg:mx-0 aspect-square bg-[#0a0a1a] flex items-center justify-center relative">
                {/* Rotating gradient ring behind photo */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div
                    className="absolute inset-[-40%] animate-spin"
                    style={{
                      animationDuration: '8s',
                      background: 'conic-gradient(from 0deg, #7c3aed, #06b6d4, #7c3aed, transparent, transparent)',
                      opacity: 0.5,
                    }}
                  />
                  <div className="absolute inset-[2px] rounded-3xl bg-[#0a0a1a]" />
                </div>

                {/* Actual photo */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden z-10">
                  <img
                    src="/muhammedmokbel.jpeg"
                    alt="Muhammed Mokbel"
                    className="w-full h-full object-cover object-top"
                    style={{ filter: 'brightness(1.05) contrast(1.05) saturate(1.1)' }}
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-900/40 to-transparent" />
                </div>

                {/* Floating tech badges */}
                {[
                  { label: '⚛️ React',   pos: 'top-3 right-3',    delay: '0s'   },
                  { label: '🔷 TS',      pos: 'top-20 right-3',   delay: '0.6s' },
                  { label: '▲ Next.js',  pos: 'bottom-20 right-3',delay: '1.2s' },
                  { label: '🅰️ Angular', pos: 'bottom-4 right-3', delay: '1.8s' },
                  { label: '🗄️ Redux',   pos: 'top-3 left-3',     delay: '0.3s' },
                  { label: '🟢 Node.js', pos: 'top-20 left-3',    delay: '0.9s' },
                  { label: '🔄 Saga',    pos: 'bottom-20 left-3', delay: '1.5s' },
                  { label: '🌐 PWA',     pos: 'bottom-4 left-3',  delay: '2.1s' },
                ].map(({ label, pos, delay }) => (
                  <div
                    key={label}
                    className={`absolute ${pos} px-2.5 py-1 rounded-lg glass border border-white/20 text-[11px] font-bold text-white shadow-lg animate-float z-20 whitespace-nowrap`}
                    style={{ animationDelay: delay }}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} {...stat} index={i} />
              ))}
            </div>
          </div>

          {/* Right — bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              <p>
                I'm a <span className="text-white font-semibold">Senior Frontend Engineer</span> based in Cairo, Egypt, 
                with over <span className="text-purple-300 font-semibold">6 years of professional experience</span> building 
                high-performance web applications for companies across Egypt and Saudi Arabia.
              </p>
              <p>
                I specialize in <span className="text-white font-semibold">React, TypeScript, and Next.js</span> with a 
                strong eye for architecture — from micro-frontends to PWAs. I care deeply about code quality, 
                maintainability, and delivering real business value through great engineering.
              </p>
              <p>
                Beyond shipping features, I've led and mentored engineering teams, defined development standards, and 
                collaborated across product, design, and backend disciplines to deliver impactful products.
              </p>
            </div>

            {/* Location & contact */}
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
                <MapPin size={14} className="text-purple-400" />
                Cairo, Egypt
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Remote
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Hybrid
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                Relocation
              </span>
            </div>

            {/* Traits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {traits.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-all group"
                >
                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {t.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

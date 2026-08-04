import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const features = [
  { icon: '📅', title: 'Booking Calendar', desc: 'Fully customisable booking calendar that integrates directly into any website for seamless class scheduling.' },
  { icon: '💳', title: 'Payments via Stripe', desc: 'Secure online payment processing powered by Stripe — memberships, class packs, and one-off sessions.' },
  { icon: '📱', title: 'Branded Mobile Apps', desc: 'Custom white-label iOS & Android apps with studio logo, colours and domain — built for client loyalty.' },
  { icon: '📋', title: 'Memberships & Packages', desc: 'Flexible membership tiers, class packs, pass types, and digital waivers managed in one place.' },
  { icon: '👥', title: 'Client Management', desc: 'Full client history, profile management, waitlists, check-in, and automated communication tools.' },
  { icon: '🧘', title: 'Multi-Studio Support', desc: 'Unlimited locations, unlimited team members — built for growing fitness and wellness businesses.' },
];

const techStack = [
  { label: 'React.js', color: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25' },
  { label: 'JavaScript', color: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/25' },
  { label: 'Material UI', color: 'bg-blue-500/15 text-blue-300 border-blue-500/25' },
  { label: 'Bootstrap', color: 'bg-purple-500/15 text-purple-300 border-purple-500/25' },
  { label: 'Stripe', color: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25' },
  { label: 'HTML & CSS', color: 'bg-orange-500/15 text-orange-300 border-orange-500/25' },
];

const stats = [
  { value: '2,000+', label: 'Studios Trusted', icon: '🏋️' },
  { value: '$10M+', label: 'Payments Processed / yr', icon: '💰' },
  { value: '96%', label: 'Client Satisfaction', icon: '⭐' },
  { value: '4.8/5', label: 'Studio Owner Rating', icon: '🎯' },
];

const migration = [
  {
    side: 'before',
    label: 'Before',
    badge: 'Legacy Stack',
    color: 'border-red-500/30 bg-red-500/5',
    badgeColor: 'bg-red-500/15 text-red-300 border-red-500/25',
    items: [
      { icon: '⚠️', text: 'jQuery DOM manipulation' },
      { icon: '⚠️', text: 'Vanilla JavaScript (no modules)' },
      { icon: '⚠️', text: 'Tightly coupled UI & logic' },
      { icon: '⚠️', text: 'No component reusability' },
      { icon: '⚠️', text: 'Hard to test & maintain' },
    ],
  },
  {
    side: 'after',
    label: 'After',
    badge: 'Modern Stack',
    color: 'border-orange-500/30 bg-orange-500/5',
    badgeColor: 'bg-orange-500/15 text-orange-300 border-orange-500/25',
    items: [
      { icon: '✅', text: 'React component architecture' },
      { icon: '✅', text: 'Modular, reusable components' },
      { icon: '✅', text: 'Unidirectional data flow' },
      { icon: '✅', text: 'Material UI design system' },
      { icon: '✅', text: 'Testable, maintainable codebase' },
    ],
  },
];

function BrowserMockup() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1e1e2e] border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 mx-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0d0d1a] border border-white/10 text-xs text-gray-400">
          <div className="w-3 h-3 rounded-full border border-green-400/50 flex items-center justify-center flex-shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          </div>
          <span className="truncate">classfit.com/branded-apps</span>
        </div>
        <div className="text-gray-600 text-xs">↻</div>
      </div>

      {/* Viewport with scroll-on-hover */}
      <div className="relative overflow-hidden bg-white" style={{ height: '420px' }}>
        <motion.img
          src={import.meta.env.BASE_URL + 'classfit-fullpage.png'}
          alt="ClassFit Branded Apps — Full Page"
          className="w-full block"
          style={{ transformOrigin: 'top center' }}
          animate={{ y: isHovered ? '-58%' : '0%' }}
          transition={{ duration: 5.5, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/70 to-transparent pointer-events-none"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 text-xs text-white font-medium pointer-events-none whitespace-nowrap"
          animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? 8 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <span>↕</span> Hover to scroll full page
        </motion.div>
      </div>
    </div>
  );
}

export default function ClassfitProject() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="mt-10 gradient-border rounded-3xl bg-white/[0.02] overflow-hidden"
    >
      {/* ── HERO BANNER ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a0e00] via-[#1c1000] to-[#050816] px-8 pt-10 pb-8 border-b border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-600/12 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-1/4 w-64 h-64 rounded-full bg-amber-600/8 blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/15 text-orange-300 border border-orange-500/25 uppercase tracking-wider">
              🏋️ FitTech · Studio SaaS
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/25 uppercase tracking-wider">
              jQuery → React Migration
            </span>
            <span className="flex items-center gap-1.5 text-xs text-green-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live in Production
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
            ClassFit —{' '}
            <span style={{ background: 'linear-gradient(135deg, #fb923c, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Fitness Studio Platform
            </span>
          </h3>

          <p className="text-gray-400 text-base leading-relaxed max-w-2xl mb-6">
            ClassFit is a SaaS scheduling and management platform trusted by{' '}
            <span className="text-white font-semibold">2,000+ fitness studios</span> worldwide.
            The core engineering challenge was a full codebase migration from{' '}
            <span className="text-red-300 font-semibold">jQuery + vanilla JavaScript</span> to a
            modern <span className="text-orange-300 font-semibold">React.js</span> component
            architecture — improving maintainability, scalability, and developer experience while
            preserving all existing features and user flows.
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href="https://app.classfit.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white shadow-lg"
              style={{ background: 'linear-gradient(135deg, #ea580c, #d97706)', boxShadow: '0 8px 24px rgba(234,88,12,0.35)' }}
            >
              <ExternalLink size={15} />
              Open App
            </motion.a>
            <motion.a
              href="https://classfit.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm font-semibold hover:border-orange-500/40 hover:bg-orange-500/10 transition-all"
            >
              <ExternalLink size={15} />
              Marketing Site
            </motion.a>
          </div>
        </div>

        <div className="relative flex flex-wrap gap-2 mt-8">
          {techStack.map((t) => (
            <span key={t.label} className={`px-3 py-1 rounded-lg text-xs font-semibold border ${t.color}`}>
              {t.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── BROWSER MOCKUP ── */}
      <div className="p-6 md:p-8 border-b border-white/5">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-base">📱</span>
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Branded Apps Page</h4>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-500/15 text-orange-300 border border-orange-500/25">
            Hover to Scroll
          </span>
        </div>
        <BrowserMockup />
      </div>

      {/* ── TECH MIGRATION STORY ── */}
      <div className="p-6 md:p-8 border-b border-white/5">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-base">⚙️</span>
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Tech Migration</h4>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/25">
            Legacy → Modern
          </span>
        </div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-stretch">
          {migration.map((col, idx) => (
            <div key={col.side}>
              <div className={`h-full rounded-2xl border p-5 ${col.color}`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${col.badgeColor}`}>
                    {col.badge}
                  </span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{col.label}</span>
                </div>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item.text} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <span className="text-base flex-shrink-0">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              {idx === 0 && <div />}
            </div>
          ))}

          {/* Arrow in the middle */}
          <div className="hidden md:flex items-center justify-center">
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                <ArrowRight size={18} className="text-white" />
              </div>
              <span className="text-xs text-gray-600 font-medium text-center">Refactor</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── PLATFORM STATS ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/5">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.08 }}
            className={`px-6 py-5 text-center ${i < 3 ? 'border-r border-white/5' : ''}`}
          >
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-xl font-black mb-0.5" style={{ background: 'linear-gradient(135deg, #fb923c, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {s.value}
            </div>
            <div className="text-xs text-gray-500">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* ── FEATURES ── */}
      <div className="p-6 md:p-8">
        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Platform Features</h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
              className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-orange-500/25 hover:bg-white/[0.05] transition-all group"
            >
              <span className="text-2xl flex-shrink-0">{f.icon}</span>
              <div>
                <h5 className="text-sm font-bold text-white mb-1 group-hover:text-orange-300 transition-colors">
                  {f.title}
                </h5>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

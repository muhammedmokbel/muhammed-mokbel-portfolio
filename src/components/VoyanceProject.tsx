import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ExternalLink, Search, Zap, TrendingUp } from 'lucide-react';

const features = [
  { icon: '🔍', title: 'SEO-First Architecture', desc: 'Server-side rendering with Next.js ensures every page is fully crawlable, with optimized meta tags, Open Graph, and structured data.' },
  { icon: '⚡', title: 'Core Web Vitals Optimised', desc: 'Achieved top LCP, FID, and CLS scores through image optimization, code splitting, and critical CSS inlining.' },
  { icon: '🚀', title: 'Performance Engineering', desc: 'Aggressive caching strategies, lazy loading, and prefetching patterns reduce time-to-interactive by over 60%.' },
  { icon: '🎯', title: 'Product Demo Access', desc: 'Smooth in-site product demo flows with deep-linked navigation to guide prospects directly to trial CTAs.' },
  { icon: '🔥', title: 'Firestore Integration', desc: 'Real-time Firestore backend powers dynamic content sections — blog, FAQs, and contact form submissions.' },
  { icon: '�️', title: 'Pixel-Perfect Responsive', desc: 'Fully responsive across all breakpoints, tested across devices with meticulous attention to spacing and typography.' },
];

const techStack = [
  { label: 'Next.js', color: 'bg-white/10 text-white border-white/20' },
  { label: 'TypeScript', color: 'bg-blue-500/15 text-blue-300 border-blue-500/25' },
  { label: 'JavaScript', color: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/25' },
  { label: 'Firestore', color: 'bg-orange-500/15 text-orange-300 border-orange-500/25' },
  { label: 'Express', color: 'bg-gray-400/15 text-gray-300 border-gray-400/25' },
  { label: 'Node.js', color: 'bg-green-500/15 text-green-300 border-green-500/25' },
  { label: 'HTML & CSS', color: 'bg-red-500/15 text-red-300 border-red-500/25' },
  { label: 'SEO', color: 'bg-sky-500/15 text-sky-300 border-sky-500/25' },
];

const vitals = [
  { label: 'LCP', value: '< 2.0s', sub: 'Largest Contentful Paint', color: 'text-blue-300', bg: 'bg-blue-500/10 border-blue-500/20' },
  { label: 'FID', value: '< 50ms', sub: 'First Input Delay', color: 'text-blue-300', bg: 'bg-blue-500/10 border-blue-500/20' },
  { label: 'CLS', value: '< 0.05', sub: 'Cumulative Layout Shift', color: 'text-blue-300', bg: 'bg-blue-500/10 border-blue-500/20' },
];

function BrowserMockup() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Browser chrome bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1e1e2e] border-b border-white/10 flex-shrink-0">
        {/* Traffic lights */}
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        {/* Address bar */}
        <div className="flex-1 mx-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0d0d1a] border border-white/10 text-xs text-gray-400">
          <div className="w-3 h-3 rounded-full border border-green-400/50 flex items-center justify-center flex-shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          </div>
          <span className="truncate">voyance.health</span>
        </div>
        {/* Reload icon hint */}
        <div className="text-gray-600 text-xs">↻</div>
      </div>

      {/* Viewport — fixed height, image scrolls on hover */}
      <div className="relative overflow-hidden bg-white" style={{ height: '420px' }}>
        <motion.img
          src={import.meta.env.BASE_URL + 'voyance-fullpage.png'}
          alt="Voyance Health — Full Page Screenshot"
          className="w-full block"
          style={{ transformOrigin: 'top center' }}
          animate={{ y: isHovered ? '-62%' : '0%' }}
          transition={{ duration: 6, ease: 'easeInOut', repeat: isHovered ? 0 : 0 }}
        />

        {/* Scroll hint gradient — fades on hover to reveal content */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 to-transparent pointer-events-none"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Hover label */}
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

export default function VoyanceProject() {
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
      <div className="relative overflow-hidden bg-gradient-to-br from-[#06091a] via-[#080d1f] to-[#050816] px-8 pt-10 pb-8 border-b border-white/5">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-600/12 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-1/4 w-64 h-64 rounded-full bg-indigo-600/8 blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/15 text-blue-300 border border-blue-500/25 uppercase tracking-wider">
              🏥 HealthTech · Medical Imaging
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/15 text-indigo-300 border border-indigo-500/25 uppercase tracking-wider">
              SEO Optimised · Live
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
            Voyance{' '}
            <span style={{ background: 'linear-gradient(135deg, #60a5fa, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Company Website
            </span>
          </h3>

          <p className="text-gray-400 text-base leading-relaxed max-w-2xl mb-6">
            The official website for{' '}
            <span className="text-white font-semibold">Voyance Technology</span> — a healthcare
            technology company. Built with Next.js for maximum SEO reach, the site showcases all
            products and gives visitors seamless access to product demos. Heavy focus on{' '}
            <span className="text-teal-300 font-semibold">Core Web Vitals</span>, performance
            optimisation (caching, lazy loading), and organic search visibility.
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href="https://voyance.health"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white shadow-lg"
              style={{ background: 'linear-gradient(135deg, #2563eb, #4f46e5)', boxShadow: '0 8px 24px rgba(37,99,235,0.35)' }}
            >
              <ExternalLink size={15} />
              Visit voyance.health
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
          <TrendingUp size={16} className="text-blue-400" />
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Full Page Preview</h4>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/15 text-blue-300 border border-blue-500/25">
            Hover to Scroll
          </span>
        </div>
        <BrowserMockup />
      </div>

      {/* ── CORE WEB VITALS ── */}
      <div className="p-6 md:p-8 border-b border-white/5">
        <div className="flex items-center gap-3 mb-5">
          <Zap size={16} className="text-yellow-400" />
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Core Web Vitals</h4>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/15 text-blue-300 border border-blue-500/25">
            All Green
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {vitals.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`p-5 rounded-2xl border text-center ${v.bg}`}
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{v.label}</span>
              </div>
              <div className={`text-2xl font-black ${v.color} mb-1`}>{v.value}</div>
              <div className="text-xs text-gray-500">{v.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* SEO stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            { icon: <Search size={15} />, label: 'PageSpeed Score', value: '95+', color: 'text-blue-300' },
            { icon: <Zap size={15} />, label: 'TTI', value: '< 1.8s', color: 'text-blue-300' },
            { icon: '📦', label: 'Bundle Size', value: 'Optimised', color: 'text-blue-300' },
            { icon: '🔗', label: 'Next.js SSG/SSR', value: 'Hybrid', color: 'text-blue-300' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 + i * 0.07 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/25 transition-all"
            >
              <span className="text-blue-400">{s.icon}</span>
              <div>
                <div className={`text-sm font-bold ${s.color}`}>{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <div className="p-6 md:p-8">
        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Key Features</h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
              className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-500/25 hover:bg-white/[0.05] transition-all group"
            >
              <span className="text-2xl flex-shrink-0">{f.icon}</span>
              <div>
                <h5 className="text-sm font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
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

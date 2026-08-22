import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ExternalLink, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';

const features = [
  { icon: '⚡', title: 'Energy Dashboard', desc: 'Real-time consumption monitoring, KPI tracking, and facility-level energy analytics across the Kingdom.' },
  { icon: '📚', title: 'Learning Management (LMS)', desc: 'Integrated LMS platform for energy efficiency training programs and certification management.' },
  { icon: '🔐', title: 'OAuth 2.0 Authentication', desc: 'Enterprise-grade OAuth integration with government SSO — secure, role-based access control.' },
  { icon: '📊', title: 'Advanced Reporting', desc: 'Interactive charts, exportable reports, and benchmarking tools for energy performance indicators.' },
  { icon: '🌐', title: 'Multi-Language Support', desc: 'Full Arabic/English RTL-aware interface built for Saudi government standards and accessibility.' },
  { icon: '⚙️', title: 'Redux State Architecture', desc: 'Scalable Redux store managing complex dashboard state, async API flows, and real-time updates.' },
];

const techStack = [
  { label: 'Next.js 14', color: 'bg-white/10 text-white border-white/20' },
  { label: 'TypeScript', color: 'bg-blue-500/15 text-blue-300 border-blue-500/25' },
  { label: 'React', color: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25' },
  { label: 'Redux', color: 'bg-purple-500/15 text-purple-300 border-purple-500/25' },
  { label: 'Tailwind CSS', color: 'bg-teal-500/15 text-teal-300 border-teal-500/25' },
  { label: 'OAuth 2.0', color: 'bg-green-500/15 text-green-300 border-green-500/25' },
  { label: 'JavaScript', color: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/25' },
  { label: 'REST APIs', color: 'bg-orange-500/15 text-orange-300 border-orange-500/25' },
];

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [ended, setEnded] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); setEnded(false); }
    else { v.pause(); setPlaying(false); }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const restart = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play();
    setPlaying(true);
    setEnded(false);
  };

  const handleFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else v.requestFullscreen();
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    v.currentTime = pct * v.duration;
  };

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden bg-black group cursor-pointer"
      style={{ aspectRatio: '16/9' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={import.meta.env.BASE_URL + 'screen-capture.webm'}
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-contain"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setDuration(videoRef.current?.duration ?? 0)}
        onEnded={() => { setPlaying(false); setEnded(true); }}
      />

      {/* Big play button — shown when paused */}
      <motion.div
        animate={{ opacity: !playing ? 1 : hovered ? 0.7 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-20 h-20 rounded-full bg-black/50 border-2 border-white/30 flex items-center justify-center backdrop-blur-sm">
          {ended
            ? <RotateCcw size={32} className="text-white" />
            : <Play size={32} className="text-white ml-1" fill="white" />
          }
        </div>
      </motion.div>

      {/* Gradient overlay for controls area */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-10 pb-3 px-4 transition-opacity duration-300 ${hovered || !playing ? 'opacity-100' : 'opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Progress bar */}
        <div
          className="w-full h-1.5 bg-white/20 rounded-full mb-3 cursor-pointer group/bar"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-gradient-to-r from-green-400 to-teal-400 rounded-full relative transition-all"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow opacity-0 group-hover/bar:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={ended ? restart : togglePlay}
              className="w-8 h-8 flex items-center justify-center text-white hover:text-green-300 transition-colors"
            >
              {ended ? <RotateCcw size={18} /> : playing ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
            </button>
            <button
              onClick={toggleMute}
              className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
            </button>
            {duration > 0 && isFinite(duration) && (
              <span className="text-xs text-white/60 font-mono tabular-nums">
                {fmt((progress / 100) * duration)} / {fmt(duration)}
              </span>
            )}
          </div>
          <button
            onClick={handleFullscreen}
            className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <Maximize size={16} />
          </button>
        </div>
      </div>

      {/* BETA badge overlay */}
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500/80 text-white text-xs font-bold backdrop-blur-sm border border-amber-400/30">
        BETA · Production
      </div>
    </div>
  );
}

export default function SEECProject() {
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
      {/* ── PROJECT HERO BANNER ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0a1a0e] via-[#061a12] to-[#050816] px-8 pt-10 pb-8 border-b border-white/5">
        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-green-600/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-60 h-60 rounded-full bg-teal-600/8 blur-3xl pointer-events-none" />

        {/* Saudi/Gov pattern hint */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #00a651 0, #00a651 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />

        <div className="relative max-w-3xl">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500/15 text-green-300 border border-green-500/25 uppercase tracking-wider">
              🏛️ Government · Energy Sector
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/25 uppercase tracking-wider">
              Beta · In Production
            </span>
            <span className="flex items-center gap-1.5 text-xs text-green-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Jun 2025 — Present
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
            Saudi Energy Efficiency Center —{' '}
            <span style={{ background: 'linear-gradient(135deg, #4ade80, #14b8a6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              EMS &amp; LMS Platform
            </span>
          </h3>

          <p className="text-gray-400 text-base leading-relaxed max-w-2xl mb-6">
            Enterprise-grade Energy Management System and Learning Management System for{' '}
            <span className="text-white font-semibold">SEEC</span> — the Saudi government body
            responsible for driving energy efficiency across the Kingdom. Built with Next.js 14, OAuth 2.0,
            and Redux, the platform delivers real-time energy dashboards, KPI monitoring, and
            a full learning portal for energy efficiency certification programs.
          </p>

          {/* CTA links */}
          <div className="flex flex-wrap gap-3">
            <motion.a
              href="https://www.enms.seec.gov.sa/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white shadow-lg"
              style={{ background: 'linear-gradient(135deg, #16a34a, #0d9488)', boxShadow: '0 8px 24px rgba(22,163,74,0.3)' }}
            >
              <ExternalLink size={15} />
              ENMS Live
            </motion.a>
            <motion.a
              href="https://lms.enms.seec.gov.sa/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm font-semibold hover:border-green-500/40 hover:bg-green-500/10 transition-all"
            >
              <ExternalLink size={15} />
              LMS Live
            </motion.a>
          </div>
        </div>

        {/* Tech stack pills */}
        <div className="relative flex flex-wrap gap-2 mt-8">
          {techStack.map((t) => (
            <span key={t.label} className={`px-3 py-1 rounded-lg text-xs font-semibold border ${t.color}`}>
              {t.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── VIDEO PLAYER ── */}
      <div className="p-6 md:p-8 border-b border-white/5">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Platform Walkthrough</h4>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-500/15 text-teal-300 border border-teal-500/25">
            Screen Recording
          </span>
        </div>
        <VideoPlayer />
        <p className="text-xs text-gray-600 mt-3 text-center">
          Live screen recording of the SEEC Energy Management System — dashboards, data views, and navigation.
        </p>
      </div>

      {/* ── STATS ROW ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/5">
        {[
          { value: '2', label: 'Platforms', sub: 'EMS + LMS' },
          { value: 'KSA', label: 'Market', sub: 'Saudi Arabia' },
          { value: 'OAuth', label: 'Auth System', sub: 'Enterprise SSO' },
          { value: 'Next.js', label: 'Framework', sub: 'App Router · SSR' },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.08 }}
            className={`px-6 py-5 text-center ${i < 3 ? 'border-r border-white/5' : ''}`}
          >
            <div className="text-xl font-black text-white mb-0.5" style={{ background: 'linear-gradient(135deg, #4ade80, #14b8a6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {s.value}
            </div>
            <div className="text-sm font-semibold text-gray-300">{s.label}</div>
            <div className="text-xs text-gray-600 mt-0.5">{s.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* ── FEATURES GRID ── */}
      <div className="p-6 md:p-8">
        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Key Features</h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
              className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-green-500/25 hover:bg-white/[0.05] transition-all group"
            >
              <span className="text-2xl flex-shrink-0">{f.icon}</span>
              <div>
                <h5 className="text-sm font-bold text-white mb-1 group-hover:text-green-300 transition-colors">
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

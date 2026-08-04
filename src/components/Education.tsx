import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: "Master's — Computer & Information Science",
    institution: 'Ain Shams University',
    location: 'Cairo, Egypt',
    period: 'Feb 2024',
    icon: GraduationCap,
    type: 'masters',
    desc: 'Advanced studies in computer science, research, and information systems at one of Egypt\'s leading universities.',
    color: 'from-purple-600 to-cyan-500',
  },
  {
    degree: "Bachelor's — Computer & Information Science",
    institution: 'Ain Shams University',
    location: 'Cairo, Egypt',
    period: 'Jul 2016 — Jul 2020',
    icon: BookOpen,
    type: 'bachelor',
    desc: 'Four-year undergraduate program covering algorithms, data structures, software engineering, databases, and modern computing fundamentals.',
    color: 'from-violet-600 to-purple-400',
  },
];

const certHighlights = [
  { label: 'React Ecosystem', icon: '⚛️' },
  { label: 'TypeScript Expert', icon: '🔷' },
  { label: 'System Architecture', icon: '🏗️' },
  { label: 'Micro Frontend', icon: '🧩' },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cyan-600/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Academic Background</span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-2 tracking-tight">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education cards — takes 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {education.map((edu, i) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="gradient-border rounded-2xl p-8 bg-white/[0.03] hover:bg-white/[0.05] transition-all group"
                >
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} p-0.5 flex-shrink-0`}>
                      <div className="w-full h-full rounded-[14px] bg-[#050816] flex items-center justify-center">
                        <Icon size={22} className="text-purple-300" />
                      </div>
                    </div>

                    <div className="flex-1">
                      {/* Badge */}
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                        edu.type === 'masters'
                          ? 'bg-purple-500/15 text-purple-300 border border-purple-500/25'
                          : 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/25'
                      }`}>
                        {edu.type === 'masters' ? "Master's Degree" : "Bachelor's Degree"}
                      </span>

                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors leading-snug">
                        {edu.degree}
                      </h3>

                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-4">
                        <span className="font-semibold gradient-text">{edu.institution}</span>
                        <span className="text-gray-600">·</span>
                        <span>{edu.location}</span>
                        <span className="text-gray-600">·</span>
                        <span>{edu.period}</span>
                      </div>

                      <p className="text-sm text-gray-500 leading-relaxed">{edu.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right column — expertise & languages */}
          <div className="space-y-6">
            {/* Core expertise */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="gradient-border rounded-2xl p-6 bg-white/[0.03]"
            >
              <div className="flex items-center gap-3 mb-5">
                <Award size={18} className="text-purple-400" />
                <h3 className="font-bold text-white">Core Expertise</h3>
              </div>
              <div className="space-y-3">
                {certHighlights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.07 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-all"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-300">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="gradient-border rounded-2xl p-6 bg-white/[0.03]"
            >
              <h3 className="font-bold text-white mb-5">Languages</h3>
              <div className="space-y-4">
                {[
                  { lang: 'Arabic', level: 'Native', pct: 100 },
                  { lang: 'English', level: 'Professional', pct: 85 },
                ].map((l) => (
                  <div key={l.lang}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-gray-300">{l.lang}</span>
                      <span className="text-gray-500">{l.level}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${l.pct}%` } : {}}
                        transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-purple-600 to-cyan-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

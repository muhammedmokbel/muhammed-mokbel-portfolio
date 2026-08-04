import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Skill {
  name: string;
  level: number; // 0-100
}

interface Category {
  title: string;
  emoji: string;
  color: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: 'Frontend Core',
    emoji: '🎨',
    color: 'from-purple-600 to-pink-500',
    skills: [
      { name: 'React', level: 98 },
      { name: 'TypeScript', level: 92 },
      { name: 'JavaScript', level: 97 },
      { name: 'HTML & CSS', level: 97 },
      { name: 'Next.js', level: 90 },
    ],
  },
  {
    title: 'UI & Styling',
    emoji: '✨',
    color: 'from-cyan-600 to-blue-500',
    skills: [
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Material UI', level: 92 },
      { name: 'Ant Design', level: 85 },
      { name: 'Bootstrap', level: 88 },
      { name: 'Responsive Design', level: 97 },
    ],
  },
  {
    title: 'State & Architecture',
    emoji: '⚙️',
    color: 'from-violet-600 to-purple-400',
    skills: [
      { name: 'Redux / RTK', level: 92 },
      { name: 'RTK Query', level: 88 },
      { name: 'Micro Frontend', level: 85 },
      { name: 'PWA', level: 82 },
      { name: 'Angular 2+', level: 78 },
    ],
  },
  {
    title: 'Testing',
    emoji: '🧪',
    color: 'from-green-600 to-emerald-400',
    skills: [
      { name: 'Jest', level: 82 },
      { name: 'React Testing Library', level: 80 },
    ],
  },
  {
    title: 'Backend & Infra',
    emoji: '🔧',
    color: 'from-orange-600 to-amber-400',
    skills: [
      { name: 'Node.js', level: 78 },
      { name: 'Express.js', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'SQL', level: 68 },
    ],
  },
  {
    title: 'Tools & Practices',
    emoji: '🛠️',
    color: 'from-rose-600 to-pink-400',
    skills: [
      { name: 'Git', level: 94 },
      { name: 'System Design', level: 82 },
      { name: 'SEO', level: 84 },
      { name: 'Agile / Scrum', level: 90 },
      { name: 'Code Review', level: 92 },
    ],
  },
];

function SkillBar({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{name}</span>
        <span className="text-xs font-bold text-gray-500">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.34, 1.56, 0.64, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

function CategoryCard({ cat, cardIndex }: { cat: Category; cardIndex: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: cardIndex * 0.08 }}
      className="gradient-border rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.05] transition-all h-full"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg shadow-lg`}>
          {cat.emoji}
        </div>
        <h3 className="font-bold text-white">{cat.title}</h3>
      </div>
      <div className="space-y-4">
        {cat.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={cardIndex * 0.05 + i * 0.06}
            color={cat.color}
          />
        ))}
      </div>
    </motion.div>
  );
}

const tagSkills = [
  'React', 'TypeScript', 'Next.js', 'Redux', 'RTK Query', 'Micro Frontend',
  'PWA', 'Node.js', 'Express', 'MongoDB', 'SQL', 'Jest', 'React Testing Library',
  'Git', 'Material UI', 'Tailwind', 'Angular', 'SEO', 'System Design', 'Agile',
  'Microservices', 'JavaScript', 'HTML/CSS', 'Ant Design', 'Responsive Design',
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">What I work with</span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-2 tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Tag cloud — quick overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {tagSkills.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.03 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/8 text-sm text-gray-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all cursor-default font-medium"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} cardIndex={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

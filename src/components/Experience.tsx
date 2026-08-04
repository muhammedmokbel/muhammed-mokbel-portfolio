import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'current' | 'senior' | 'mid' | 'instructor';
  isConsultant?: boolean;
  bullets: string[];
  tags: string[];
  link?: string;
}

const jobs: Job[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Rubikal',
    location: 'Egypt (Remote)',
    period: 'Jun 2025 — Present',
    type: 'current',
    bullets: [
      'Develop and maintain end-to-end web applications covering frontend, backend services, and integrations.',
      'Design and consume RESTful APIs with proper validation, error handling, and versioning.',
      'Build reusable, modular components following clean architecture and best practices.',
      'Apply security best practices including authentication, authorization, and secure data handling.',
      'Contribute through code reviews, Git workflows, and Agile ceremonies.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'REST APIs', 'Agile'],
  },
  {
    role: 'Senior Frontend Engineer',
    company: 'Watania Solutions Co',
    location: 'Saudi Arabia (Remote)',
    period: 'Oct 2023 — Apr 2026',
    type: 'senior',
    bullets: [
      'Developed a micro-frontend architecture that improved system modularity and reduced inter-component dependencies.',
      'Maintained high code quality standards across the team and contributed to coding guidelines.',
      'Cooperated with multiple squads to ensure cohesive delivery.',
      'Improved React, JavaScript, and CSS implementations to enhance UX and functionality.',
    ],
    tags: ['React', 'Micro Frontend', 'JavaScript', 'CSS', 'TypeScript'],
  },
  {
    role: 'Senior Frontend Engineer',
    company: 'Voyance Technology',
    location: 'Cairo, Egypt',
    period: 'Sept 2021 — Oct 2023',
    type: 'senior',
    bullets: [
      'Led and mentored engineering teams in both soft and technical skills.',
      'Set up development plans and processes for the frontend team.',
      'Reviewed proposed UI/UX designs for technical feasibility collaborating with backend teams.',
      'Designed accessible, responsive user-friendly software.',
      'Developed web applications using Agile and continuous delivery processes.',
      'Optimized websites for backward and cross-browser compatibility.',
    ],
    tags: ['React', 'Next.js', 'Redux', 'PWA', 'Team Lead', 'SEO'],
    link: 'https://voyance.health',
  },
  {
    role: 'Senior Frontend Engineer',
    company: 'Munjz',
    location: 'Saudi Arabia (Remote)',
    period: 'Feb 2023 — May 2023',
    type: 'senior',
    isConsultant: true,
    bullets: [
      'Developed web applications using Agile and continuous delivery processes.',
      'Improved coding of JavaScript and CSS to enhance user experience and functionality.',
    ],
    tags: ['React', 'JavaScript', 'RTK Query', 'Material UI'],
    link: 'https://marafeq.munjz.com',
  },
  {
    role: 'Frontend Engineer',
    company: 'Venture Appital',
    location: 'Alexandria, Egypt',
    period: 'Apr 2020 — May 2021',
    type: 'mid',
    bullets: [
      'Designed user-friendly software to improve accessibility and responsiveness.',
      'Optimized websites for backward and cross-browser compatibility.',
      'Created scalable, highly available software to withstand heavy user traffic.',
      'Improved JavaScript and CSS to enhance user experience and functionality.',
    ],
    tags: ['React', 'JavaScript', 'CSS', 'Bootstrap'],
  },
  {
    role: 'Frontend Instructor',
    company: 'Private Frontend Bootcamp',
    location: 'Cairo, Egypt',
    period: 'Jun 2019 — Jul 2020',
    type: 'instructor',
    bullets: [
      'Taught HTML, CSS, JavaScript, and React to 50+ students in a structured bootcamp.',
      'Developed curriculum, exercises, and real-world projects for hands-on learning.',
      'Mentored students 1-on-1, guiding many to land their first freelance clients.',
      'Received outstanding student feedback praised for clarity, patience, and problem-solving approach.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Teaching', 'Mentoring'],
  },
];

const typeColor = {
  current: 'from-purple-500 to-cyan-500',
  senior: 'from-purple-600 to-purple-400',
  mid: 'from-cyan-600 to-cyan-400',
  instructor: 'from-emerald-600 to-teal-400',
};

function JobCard({ job, index }: { job: Job; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`relative grid md:grid-cols-2 gap-8 mb-12 ${isEven ? '' : ''}`}>
      {/* Timeline dot */}
      <div className="absolute left-1/2 top-8 -translate-x-1/2 hidden md:flex flex-col items-center z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`w-5 h-5 rounded-full bg-gradient-to-br ${typeColor[job.type]} shadow-lg`}
          style={{ boxShadow: job.type === 'current' ? '0 0 16px rgba(124,58,237,0.7)' : undefined }}
        />
      </div>

      {/* Card — alternating side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`${isEven ? 'md:col-start-1' : 'md:col-start-2'} gradient-border rounded-2xl p-6 bg-white/[0.03] hover:bg-white/[0.05] transition-all group`}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {job.type === 'current' && (
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-green-500/15 text-green-400 border border-green-500/20">
                  Current
                </span>
              )}
              {job.isConsultant && (
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-500/15 text-amber-400 border border-amber-500/25">
                  Consultant
                </span>
              )}
              {job.type === 'instructor' && (
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                  Instructor
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
              {job.role}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className={`font-semibold text-sm gradient-text`}>{job.company}</span>
              {job.link && (
                <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors">
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${typeColor[job.type]} p-0.5 flex-shrink-0`}>
            <div className="w-full h-full rounded-[10px] bg-[#050816] flex items-center justify-center">
              <Briefcase size={16} className="text-purple-300" />
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
          <span>{job.period}</span>
          <span className="text-gray-600">·</span>
          <span>{job.location}</span>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mb-5">
          {job.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/60 flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Empty column for timeline layout */}
      <div className={isEven ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'} />
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-cyan-600/8 blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Career Journey</span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-2 tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/30 to-transparent hidden md:block" />

          {jobs.map((job, i) => (
            <JobCard key={`${job.company}-${i}`} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

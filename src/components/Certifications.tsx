import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const badges = [
  {
    name: 'Node and Express Essentials',
    issuer: 'Coursera',
    issued: 'Jul 2026',
    image: 'https://images.credly.com/images/43eabfbc-06d4-4633-9be0-0f56cfbdb607/image.png',
    url: 'https://www.credly.com/users/mohamed-mokbel.d857596a',
  },
  {
    name: 'Front-end Development with React V2',
    issuer: 'Coursera',
    issued: 'Jul 2026',
    image: 'https://images.credly.com/images/e747147a-9300-4795-8b38-704a133bed88/Coursera_20Front_20end_20Development_20with_20React_20V2.png',
    url: 'https://www.credly.com/users/mohamed-mokbel.d857596a',
  },
  {
    name: 'Git and GitHub Essentials',
    issuer: 'Coursera',
    issued: 'Jul 2026',
    image: 'https://images.credly.com/images/9a0255eb-a47d-4f3a-9611-243bfe3eb9e4/image.png',
    url: 'https://www.credly.com/users/mohamed-mokbel.d857596a',
  },
  {
    name: 'Introduction to Cloud Computing',
    issuer: 'Coursera',
    issued: 'Jul 2026',
    image: 'https://images.credly.com/images/a9d0fe89-a11c-4266-8940-9eca7762b294/image.png',
    url: 'https://www.credly.com/users/mohamed-mokbel.d857596a',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-purple-600/8 blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Verified Credentials</span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-2 tracking-tight">
            Certifi<span className="gradient-text">cations</span>
          </h2>
          <p className="text-gray-400 mt-4 text-base max-w-xl">
            Verified badges issued via{' '}
            <a
              href="https://www.credly.com/users/mohamed-mokbel.d857596a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-2"
            >
              Credly
            </a>
            .
          </p>
        </motion.div>

        {/* Badge grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <motion.a
              key={badge.name}
              href={badge.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-purple-500/40 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 40%, rgba(124,58,237,0.12), transparent 70%)' }}
              />

              {/* Badge image */}
              <div className="relative mb-5">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />
                <img
                  src={badge.image}
                  alt={badge.name}
                  className="w-28 h-28 object-contain drop-shadow-xl relative z-10 group-hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.6)] transition-all duration-300"
                />
              </div>

              {/* Info */}
              <h3 className="text-sm font-bold text-white leading-snug mb-2 group-hover:text-purple-200 transition-colors">
                {badge.name}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                <Award size={11} className="text-cyan-500" />
                <span>{badge.issuer}</span>
              </div>
              <span className="text-xs text-gray-600">{badge.issued}</span>

              {/* View link */}
              <div className="flex items-center gap-1 mt-3 text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span>View credential</span>
                <ExternalLink size={11} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

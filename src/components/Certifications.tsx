import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const badges = [
  {
    name: 'Python for Data Science and AI',
    issuer: 'Coursera',
    issued: 'Oct 2026',
    image: 'https://images.credly.com/images/40bee502-a5b3-4365-90e7-57eed5067594/image.png',
    url: 'https://www.credly.com/badges/371ef132-1ab2-47bd-afa5-a1d777e1b68f/public_url',
  },
  {
    name: 'MongoDB Schema Design Optimization Skill Badge',
    issuer: 'MongoDB',
    issued: 'Oct 2026',
    image: 'https://images.credly.com/images/9aa3a2f5-20ad-4ba3-b7ac-dbc13f4db5db/blob',
    url: 'https://www.credly.com/badges/c7b59b98-08c1-40af-bff3-2de5940420c5/public_url',
  },
  {
    name: 'MongoDB Advanced Schema Design Patterns and Anti-patterns Skill Badge',
    issuer: 'MongoDB',
    issued: 'Oct 2026',
    image: 'https://images.credly.com/images/592afcf7-1323-4dc4-af0d-0c3cad726e95/blob',
    url: 'https://www.credly.com/badges/725bb809-4ba1-4deb-b588-65e53b6ec62c/public_url',
  },
  {
    name: 'MongoDB Schema Design Patterns and Anti-patterns Skill Badge',
    issuer: 'MongoDB',
    issued: 'Oct 2026',
    image: 'https://images.credly.com/images/71a08fbf-178b-4342-9b17-a5239942846c/blob',
    url: 'https://www.credly.com/badges/98eddd72-aa4c-4181-be9a-8e1299a09f41/public_url',
  },
  {
    name: 'From Relational Model (SQL) to MongoDBs Document Model',
    issuer: 'MongoDB',
    issued: 'Sep 2026',
    image: 'https://images.credly.com/images/234edfc5-0177-46e7-a61a-071f060af2f6/blob',
    url: 'https://www.credly.com/badges/217a340e-7b97-4c26-bda3-0cd719de3117/public_url',
  },
  {
    name: 'MongoDB Associate Developer',
    issuer: 'MongoDB',
    issued: 'Sep 2026',
    image: 'https://images.credly.com/images/650ebdbe-d526-4b47-b186-c1ab516b5a7c/image.png',
    url: 'https://www.credly.com/badges/989ef1ec-7910-433e-8e1b-7fd396ef3119/public_url',
  },
  {
    name: 'CRUD Operations in MongoDB',
    issuer: 'MongoDB',
    issued: 'Sep 2026',
    image: 'https://images.credly.com/images/d8f7a9d6-dad9-40cc-b389-a343d2d72a9e/blob',
    url: 'https://www.credly.com/badges/f8a5222f-5089-45c0-a136-9a2d5fb27983/public_url',
  },
  {
    name: 'MongoDB Indexing Design Fundamentals',
    issuer: 'MongoDB',
    issued: 'Sep 2026',
    image: 'https://images.credly.com/images/27213be6-415d-411f-a69a-0171ca2c89f5/blob',
    url: 'https://www.credly.com/badges/3fbbc891-7bcd-452c-af0c-06fdb1a15093/public_url',
  },
  {
    name: 'Node and Express Essentials',
    issuer: 'Coursera',
    issued: 'Jul 2026',
    image: 'https://images.credly.com/images/43eabfbc-06d4-4633-9be0-0f56cfbdb607/image.png',
    url: 'https://www.credly.com/badges/356005d4-e754-4988-b2a9-ce084b464818/public_url',
  },
  {
    name: 'Front-end Development with React V2',
    issuer: 'Coursera',
    issued: 'Jul 2026',
    image: 'https://images.credly.com/images/e747147a-9300-4795-8b38-704a133bed88/Coursera_20Front_20end_20Development_20with_20React_20V2.png',
    url: 'https://www.credly.com/badges/2971cfb6-27cb-42cb-8a3a-140c4f2df2ad/public_url',
  },
  {
    name: 'Git and GitHub Essentials',
    issuer: 'Coursera',
    issued: 'Jul 2026',
    image: 'https://images.credly.com/images/9a0255eb-a47d-4f3a-9611-243bfe3eb9e4/image.png',
    url: 'https://www.credly.com/badges/7655e588-e3d0-46e2-a354-ec4d2c640e57/public_url',
  },
  {
    name: 'Introduction to Cloud Computing',
    issuer: 'Coursera',
    issued: 'Jul 2026',
    image: 'https://images.credly.com/images/a9d0fe89-a11c-4266-8940-9eca7762b294/image.png',
    url: 'https://www.credly.com/badges/7f926849-4b7c-4826-8796-33b2b4640869/public_url',
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

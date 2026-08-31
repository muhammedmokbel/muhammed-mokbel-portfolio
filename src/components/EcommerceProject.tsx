import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, ShoppingCart, Package, CreditCard, CheckCircle, ArrowRight, Play, X } from 'lucide-react';
import GithubIcon from './GithubIcon';

const techStack = [
  { label: 'Node.js', color: 'bg-green-500/15 text-green-300 border-green-500/25' },
  { label: 'Express.js', color: 'bg-gray-500/15 text-gray-300 border-gray-500/25' },
  { label: 'MongoDB', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25' },
  { label: 'React', color: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25' },
  { label: 'Stripe', color: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25' },
  { label: 'JWT', color: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/25' },
  { label: 'Joi', color: 'bg-orange-500/15 text-orange-300 border-orange-500/25' },
  { label: 'Mongoose', color: 'bg-red-500/15 text-red-300 border-red-500/25' },
];

const orderFlow = [
  { icon: ShoppingCart, label: 'Login', sub: 'JWT auth' },
  { icon: Package, label: 'Browse & Cart', sub: 'Add / remove items' },
  { icon: CreditCard, label: 'Checkout', sub: 'Stripe session' },
  { icon: CheckCircle, label: 'Order Success', sub: 'Webhook confirmed' },
];

const architectureHighlights = [
  {
    icon: '🏗️',
    title: 'Modular Monolith',
    desc: 'Each domain (auth, products, carts, orders, payments) is a self-contained module — clear boundaries today, microservice-ready tomorrow.',
  },
  {
    icon: '🔁',
    title: 'Strict Layered Architecture',
    desc: 'Every feature follows Routes → Controller → Service → Repository. No layer skips another. Controllers hold zero business logic.',
  },
  {
    icon: '💳',
    title: 'Stripe Webhook Lifecycle',
    desc: 'Checkout sessions are created from live cart data. Webhooks drive the entire order state machine — pending → completed or canceled.',
  },
  {
    icon: '⚛️',
    title: 'Atomic Transactions',
    desc: 'Order creation and inventory reservation happen in a single MongoDB transaction. If payment fails, stock is automatically released.',
  },
  {
    icon: '🛡️',
    title: 'Webhook Signature Verification',
    desc: "Raw body is preserved exclusively for the payment route. Stripe's signature middleware validates every event before it reaches the controller.",
  },
  {
    icon: '🧰',
    title: 'Zero-Boilerplate Utilities',
    desc: 'catchAsync, validate (Joi), APIFeatures (chainable filter/sort/paginate), and a global error handler eliminate repetition across all routes.',
  },
];

export default function EcommerceProject() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-emerald-600/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-600/6 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Personal project badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/25">
              ✦ Personal Project
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
              Full Stack
            </span>
          </div>

          {/* Title + subtitle */}
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
            Storly —{' '}
            <span className="gradient-text">E-Commerce Platform</span>
          </h3>
          <p className="text-gray-400 text-base max-w-2xl mb-6">
            A production-grade full-stack e-commerce app built from scratch. Modular monolith backend
            with layered architecture, atomic inventory management, and a complete Stripe checkout
            + webhook lifecycle.
          </p>

          {/* GitHub links */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="https://github.com/muhammedmokbel/backend-ecommerce-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:border-purple-500/40 hover:bg-white/8 transition-all"
            >
              <GithubIcon size={15} />
              Backend Repo
              <ExternalLink size={12} className="text-gray-500" />
            </a>
            <a
              href="https://github.com/muhammedmokbel/frontend-ecommerce-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:text-white hover:border-cyan-500/40 hover:bg-white/8 transition-all"
            >
              <GithubIcon size={15} />
              Frontend Repo
              <ExternalLink size={12} className="text-gray-500" />
            </a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — video + order flow */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Demo video thumbnail */}
            <div
              className="relative rounded-2xl overflow-hidden border border-white/8 bg-black cursor-pointer group"
              onClick={() => setVideoOpen(true)}
            >
              <video
                src={`${import.meta.env.BASE_URL}ecommerce-app.webm`}
                className="w-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
                muted
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-2xl shadow-purple-500/40"
                >
                  <Play size={24} className="text-white ml-1" fill="white" />
                </motion.div>
                <span className="text-sm font-semibold text-white/80">Watch Order Flow Demo</span>
              </div>
            </div>

            {/* Order flow steps */}
            <div className="gradient-border rounded-2xl p-5 bg-white/[0.02]">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Order Flow</p>
              <div className="flex items-center gap-1 flex-wrap">
                {orderFlow.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-1">
                    <div className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/8 min-w-[80px] text-center">
                      <step.icon size={16} className="text-purple-400" />
                      <span className="text-xs font-bold text-white">{step.label}</span>
                      <span className="text-[10px] text-gray-500">{step.sub}</span>
                    </div>
                    {i < orderFlow.length - 1 && (
                      <ArrowRight size={14} className="text-gray-600 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span
                    key={t.label}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${t.color}`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — architecture highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {architectureHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/8 hover:border-purple-500/30 hover:bg-white/[0.05] transition-all group"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="text-sm font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lightbox video player */}
      {videoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setVideoOpen(false)}
          >
            <X size={20} />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={`${import.meta.env.BASE_URL}ecommerce-app.webm`}
              className="w-full"
              controls
              autoPlay
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

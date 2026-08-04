import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mohamedmokbel97@gmail.com',
    href: 'mailto:mohamedmokbel97@gmail.com',
    color: 'from-purple-600 to-purple-400',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+20 101 870 8353',
    href: 'tel:+201018708353',
    color: 'from-cyan-600 to-cyan-400',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Cairo, Egypt',
    href: null,
    color: 'from-violet-600 to-violet-400',
  },
];

const socials = [
  { icon: GithubIcon, href: 'https://github.com/muhammedmokbel', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/muhammed-mokbel-33573a140/', label: 'LinkedIn' },
];

const inputBase =
  'w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-gray-600 focus:outline-none transition-all';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<FormValues>({ mode: 'onChange' });

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 1400));
    reset();
    toast.success('Message sent!', {
      description: "Thanks for reaching out � I'll get back to you shortly.",
      duration: 5000,
    });
  };

  const fieldClass = (name: keyof FormValues) =>
    `${inputBase} ${
      errors[name]
        ? 'border-red-500/60 focus:border-red-500'
        : touchedFields[name]
        ? 'border-green-500/50 focus:border-green-500/60'
        : 'border-white/10 focus:border-purple-500/60'
    }`;

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Let's work together</span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-2 tracking-tight">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left � info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-4 p-5 gradient-border rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] transition-all group">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} p-0.5 flex-shrink-0`}>
                    <div className="w-full h-full rounded-[10px] bg-[#050816] flex items-center justify-center">
                      <Icon size={18} className="text-purple-300" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium mb-0.5">{item.label}</div>
                    <div className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                      {item.value}
                    </div>
                  </div>
                </div>
              );
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {item.href ? <a href={item.href} className="block">{content}</a> : content}
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="p-5 gradient-border rounded-2xl bg-white/[0.03]"
            >
              <p className="text-xs text-gray-500 font-medium mb-4 uppercase tracking-wider">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all text-sm font-medium"
                  >
                    <Icon size={16} />
                    {label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right � form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="gradient-border rounded-2xl p-8 bg-white/[0.03] space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className={fieldClass('name')}
                    {...register('name', {
                      required: 'Name is required',
                      minLength: { value: 2, message: 'At least 2 characters' },
                    })}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className={fieldClass('email')}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                    })}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry / Job Opportunity"
                  className={fieldClass('subject')}
                  {...register('subject', {
                    required: 'Subject is required',
                    minLength: { value: 4, message: 'At least 4 characters' },
                  })}
                />
                {errors.subject && <p className="mt-1.5 text-xs text-red-400">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${fieldClass('message')} resize-none`}
                  {...register('message', {
                    required: 'Message is required',
                    minLength: { value: 20, message: 'Please write at least 20 characters' },
                  })}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: '0 0 30px rgba(124,58,237,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-base shadow-lg shadow-purple-500/25 disabled:opacity-60 transition-all"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                ) : (
                  <Send size={18} />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

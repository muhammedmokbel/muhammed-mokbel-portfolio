import { Mail, Code2, Heart } from 'lucide-react';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-bold text-white">
              MM<span className="text-purple-400">.</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 flex items-center gap-2">
            © {year} Muhammed Mokbel. Built with
            <Heart size={12} className="text-purple-400 inline" fill="currentColor" />
            using React & Tailwind.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: GithubIcon, href: 'https://github.com/muhammedmokbel', label: 'GitHub' },
              { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/muhammed-mokbel-33573a140/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:mohamedmokbel97@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight">
            a<sup className="text-accent-1 text-xs relative -top-1">3</sup>
          </span>
          <span className="text-sm text-text-muted">aCubed AI</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
          <a
            href="#services"
            className="text-sm text-text-muted hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="#process"
            className="text-sm text-text-muted hover:text-white transition-colors"
          >
            Process
          </a>
          <a
            href="#results"
            className="text-sm text-text-muted hover:text-white transition-colors"
          >
            Results
          </a>
          <a
            href="#about"
            className="text-sm text-text-muted hover:text-white transition-colors"
          >
            About
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} aCubed AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

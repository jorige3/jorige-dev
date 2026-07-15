import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/90 dark:border-slate-800 dark:bg-slate-950/90 backdrop-blur transition-colors duration-300">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-cyan-600 dark:text-cyan-400 transition-colors duration-300">
          jorige.dev
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions Container */}
        <div className="flex items-center gap-3">
          {/* Always-visible Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-lg border border-slate-300 text-slate-800 hover:border-cyan-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 px-3 py-2 transition-colors duration-300 cursor-pointer"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="text-3xl text-slate-800 dark:text-white md:hidden transition-colors duration-300 cursor-pointer"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 md:hidden transition-colors duration-300"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 text-slate-600 hover:bg-slate-100 hover:text-cyan-600 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-cyan-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition ${
        active ? "bg-sarikaPurple/10 text-sarikaPurple" : "text-slate-700 hover:text-sarikaPurple"
      }`}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  return (
    <header className="backdrop-blur-sm sticky top-0 z-30 bg-white/60 dark:bg-slate-900/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div layout className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sarikaPurple to-sarikaGold flex items-center justify-center text-white font-bold">
            S
          </div>
          <div>
            <div className="text-lg font-semibold">Sarika</div>
            <div className="text-xs text-slate-500 -mt-1">UI/UX • Frontend • Figma</div>
          </div>
        </motion.div>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <a
            
            href={process.env.PUBLIC_URL + "/assets/S-Resume.pdf"}
            download
            className="ml-3 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-sarikaPurple text-white text-sm font-medium shadow hover:opacity-95"
          >
            Download Resume
          </a>
        </nav>

        {/* Mobile menu (simple) */}
        <div className="md:hidden">
          <Link to="/projects" className="px-3 py-2 rounded-md text-sm font-medium bg-sarikaPurple text-white">Projects</Link>
        </div>
      </div>
    </header>
  );
}

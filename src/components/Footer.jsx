import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} Sarika — Designing • Building • Learning • Evolving</div>
        <div className="flex items-center gap-4 text-slate-600">
          <a href="https://github.com/Sarikasubramaniyan" target="_blank" rel="noreferrer" className="hover:text-sarikaPurple">GitHub</a>
          <a href="https://www.linkedin.com/in/sarikasubramaniyan" target="_blank" rel="noreferrer" className="hover:text-sarikaPurple">LinkedIn</a>
          <a href="mailto:sarikasubramaniyan7@gmail.com" className="hover:text-sarikaPurple">Email</a>
        </div>
      </div>
    </footer>
  );
}

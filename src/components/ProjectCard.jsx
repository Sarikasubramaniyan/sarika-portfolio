import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div whileHover={{ y: -6 }} className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100">
        <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{project.short}</p>
            </div>
            <div className="flex items-center gap-2">
              {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100"><FiExternalLink /></a>}
              {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100"><FiGithub /></a>}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-slate-400">Stack: {project.stack.slice(0,3).join(", ")}{project.stack.length>3 ? "..." : ""}</div>
            <button onClick={() => setOpen(true)} className="text-sm font-medium px-3 py-1 rounded-md bg-sarikaPurple text-white">Case Study</button>
          </div>
        </div>
      </motion.div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setOpen(false)}>
          <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.16 }} className="bg-white dark:bg-slate-900 max-w-3xl w-full rounded-2xl p-6 relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 p-2 rounded-md hover:bg-slate-100"><FiX /></button>
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-slate-600 mt-2">{project.long}</p>
            <div className="mt-4">
              <div className="text-sm font-medium">Stack</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map(s => <span key={s} className="px-2 py-1 text-xs rounded bg-slate-100">{s}</span>)}
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm font-medium">Highlights</div>
              <ul className="list-disc list-inside mt-2 text-slate-600">
                {project.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
            </div>
            <div className="mt-6 flex gap-3">
              {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border">Open demo</a>}
              {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border">View code</a>}
              <button onClick={() => setOpen(false)} className="ml-auto px-4 py-2 rounded-md bg-sarikaPurple text-white">Close</button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
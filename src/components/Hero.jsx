import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <motion.h1 initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.06 }} className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="text-sarikaPurple">Sarika</span> — crafting thoughtful UI & front-end experiences.
          </motion.h1>
          <motion.p initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }} className="mt-6 text-slate-600 max-w-xl">
            Final-year MCA student and a passionate creator who loves translating ideas into interactive designs, simple solutions, and user-friendly applications.
            <br/> Explore my projects, skills, and the work I’ve been learning and building along the way.
          </motion.p>

          <motion.div className="mt-8 flex gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }}>
            <Link to="/projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-sarikaPurple text-white font-semibold shadow hover:opacity-95">
              View Projects
            </Link>
            <a href="/assets/Resume.pdf" download className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-200 text-slate-700 font-medium">
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
  className="w-full md:w-3/5 flex justify-center"
  initial={{ scale: 0.98, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.2 }}
>
  <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden">
    <img
      src="/assets/myimg.jpg"
      alt="My Image"
      className="w-full h-80 object-cover" // increased height
    />
  </div>
</motion.div>

      </div>
    </section>
  );
}

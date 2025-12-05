import React from "react";
import projects from "../data/Projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-slate-600 mt-2">Case studies and small demos — click a card for a quick case study.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      
    </section>
  );
}

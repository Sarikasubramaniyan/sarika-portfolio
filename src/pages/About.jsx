import React from "react";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-4 text-slate-600 leading-relaxed">
       I’m Sarika, an enthusiastic learner and emerging developer who enjoys creating clean interfaces, structured workflows, and simple digital solutions. My journey in tech began with curiosity and continues to grow through hands-on projects across UI/UX and web development.<br/>
       I’ve built several projects — each helping me understand design, responsiveness, and user-centred thinking. I love exploring new tools and improving how people interact with digital products.<br/>
       Beyond technical skills, I’ve strengthened my professional foundation through Naandi Foundation’s Employability soft-skill training, basic machine learning exposure with KGiSL MicroCollege, and various online programs from Infosys Springboard, ICT Academy , Inlustro and Coursera.<br/>
       I’m disciplined, adaptable, and comfortable working independently or in teams. With every project and learning experience, I’m working towards becoming a confident and well-rounded IT professional.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold">Skills</h3>
          <ul className="mt-2 text-slate-600">
            <li>React • JavaScript </li>
            <li>HTML & CSS • Tailwind</li>
            <li>Figma • UI/UX</li>
            <li>Zoho Creator • Github </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Education & Goals</h3>
          <p className="mt-2 text-slate-600">I come from a Computer Applications background with strong foundations in programming and problem-solving.<br/>
           My projects and internship experiences have shaped my practical understanding of development.<br/>
           Right now, I’m focused on strengthening my skills through continuous learning and real-world practice.<br/>
           My goal is to grow into a versatile IT professional who creates reliable and meaningful digital solutions.</p>
        </div>
      </div>
    </section>
  );
}

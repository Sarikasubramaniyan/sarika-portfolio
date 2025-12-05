import React from "react";

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="text-slate-600 mt-2">I’m always open to building meaningful connections and exploring what we can create together.</p>

       <p className="text-slate-600 mt-2">
        Available for internships, full-time opportunities, and collaborative projects, and<br/> 
        I would be glad to discuss how I can contribute or provide further details about my qualifications.
       
      </p>

      <div className="mt-6 grid gap-3 text-slate-700">
        <p>
          <span className="font-medium">Email:</span>{" "}
          <a href="mailto:sarikasubramaniyan7@gmail.com" className="text-sarikaPurple">
            sarikasubramaniyan7@gmail.com
          </a>
        </p>

        <p>
          <span className="font-medium">Location:</span> Trichy,Tamil Nadu, India
        </p>

     
  </div>
    </section>
  );
}


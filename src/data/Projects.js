const projects = [
  {
    id: "pfm",
    title: "Personal Finance Manager",
    short: "Expense tracker with charts and toggle themes.",
    long:
      "A responsive React app that helps users track income & expenses, visualize spending via charts, and switch themes. Built with an emphasis on accessibility and UX flows.",
    stack: ["React", "Chart.js", "localStorage", "Tailwind"],
    highlights: ["Animated charts", "Vercel", "Mobile-first UI"],
    github: " https://github.com/Sarikasubramaniyan/personal-finance-app.git",
    demo: "http://personal-finance-c1ja92vxd-sarikas-projects-5ed3929b.vercel.app/",
    image:  process.env.PUBLIC_URL +"/assets/pfm.PNG"
  },
  {
    id: "smarthome",
    title: "Smart Home Dashboard",
    short: "Device control UI with toggle theme and quick actions.",
    long:
      "Clean dashboard UI for home automation. Mock UI driven state and neat micro-interactions to simulate real device control.",
    stack: ["HTML", "CSS (Flexbox & Grid)", "JavaScript"],
    highlights: ["Device controls", "toggles", "Responsive dashboard"],
    github: "https://github.com/Sarikasubramaniyan/smart-home-dashboard.git",
    demo: "https://gleaming-florentine-f42044.netlify.app/",
    image:  process.env.PUBLIC_URL +"/assets/smarthome.PNG"
  },
  {
    id: "temple",
    title: "Srirangam Temple Site",
    short: "Culturally-themed site with donation & events.",
    long:
      "A careful design for a temple site focused on accessibility, donation flow , and event/galleries. Emphasis on cultural aesthetics.",
    stack: ["React.js", "node.js", "MongoDb"],
    highlights: ["Donation form", "Events", "Gallery"],
    github: "https://github.com/Sarikasubramaniyan/temple-website.git",
    demo: "https://temple-website-zeta.vercel.app/",
    image:  process.env.PUBLIC_URL +"/assets/temple.PNG"
  },
  {
    id: "bortiq",
    title: "BortiQ",
    short: "Elegant e-commerce front-end for a South-Indian boutique.",
    long:
      "Pixel-perfect UI for boutique collections, filter flows and animated product grid. Designed for conversion and delightful browsing.",
    stack: ["React", "Github Pages", "Tailwind"],
    highlights: ["Three-column hero", "Hover animations", "Responsive grids"],
    github: " https://github.com/Sarikasubramaniyan/boutique.git",
    demo: "https://sarikasubramaniyan.github.io/boutique/",
    image:  process.env.PUBLIC_URL +"/assets/botique.PNG"
  }
];

export default projects;
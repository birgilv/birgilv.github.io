// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const nav = document.getElementById("site-nav");
const toggle = document.querySelector(".nav-toggle");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (!id || id === "#") return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

// ---- Simple project data (edit this!) ----
const PROJECTS = [
  {
    title: "Scalable Dashboard",
    description:
      "Modular dashboard with role-based widgets, persisted layouts, and real-time data.",
    tags: ["TypeScript", "React", "Tailwind"],
    links: [{ label: "Case Study", href: "#" }],
  },
  {
    title: "Chessboard DnD + Engine",
    description:
      "React chessboard with algebraic move input and animated coordinates (chess.ts).",
    tags: ["React", "TypeScript", "Framer Motion"],
    links: [{ label: "Repo", href: "#" }],
  },
  {
    title: "Rails + Docker CI Pipeline",
    description:
      "Containerized Rails app with GitHub Actions and multi-service Compose.",
    tags: ["Rails", "Docker", "PostgreSQL"],
    links: [{ label: "Write-up", href: "#" }],
  },
];

// Render project cards
const list = document.getElementById("projects-list");
function projectCard(p) {
  const div = document.createElement("article");
  div.className = "card";
  div.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <div class="tags">
      ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
    </div>
    <div class="links">
      ${p.links.map(l => `<a href="${l.href}" target="_blank" rel="noreferrer">${l.label}</a>`).join("")}
    </div>
  `;
  return div;
}
PROJECTS.forEach(p => list.appendChild(projectCard(p)));

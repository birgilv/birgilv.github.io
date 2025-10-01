<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Birgir L. Valdimarsson · Portfolio</title>
  <meta name="description" content="Birgir's lightweight portfolio: projects, skills, contact." />
  <meta property="og:title" content="Birgir L. Valdimarsson · Portfolio" />
  <meta property="og:description" content="Projects, skills, contact, and links." />
  <meta property="og:type" content="website" />
  <meta name="color-scheme" content="light dark" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👋</text></svg>">
  <style>
    :root{
      --bg: #0b0c10;
      --panel: #111217;
      --text: #e6e6e6;
      --muted: #a5a5a5;
      --accent: #62d0ff;
      --accent-2: #9b79ff;
      --ring: #2b2f3a;
      --shadow: 0 10px 30px rgba(0,0,0,.25);
      --radius: 16px;
    }
    @media (prefers-color-scheme: light){
      :root{ --bg:#fbfbfd; --panel:#ffffff; --text:#1a1a1a; --muted:#6b7280; --ring:#e5e7eb; }
    }
    *{ box-sizing:border-box }
    html,body{ margin:0; padding:0; font:16px/1.6 system-ui, -apple-system, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif; background:var(--bg); color:var(--text);}
    a{ color:inherit; text-decoration:none }
    a:hover{ text-decoration:underline }
    .container{ max-width:1080px; margin:0 auto; padding:24px }
    header{ position:sticky; top:0; backdrop-filter:saturate(180%) blur(8px); background:color-mix(in oklab, var(--bg) 75%, transparent); border-bottom:1px solid var(--ring); z-index:20 }
    nav{ display:flex; align-items:center; justify-content:space-between; gap:16px }
    nav .brand{ display:flex; align-items:center; gap:12px; font-weight:700 }
    nav .brand .dot{ width:10px; height:10px; border-radius:50%; background:linear-gradient(45deg, var(--accent), var(--accent-2)); box-shadow:0 0 30px color-mix(in oklab, var(--accent) 70%, transparent) }
    nav ul{ display:flex; list-style:none; gap:16px; padding:0; margin:0 }
    nav a{ padding:8px 12px; border-radius:10px }
    nav a:focus-visible{ outline:2px solid var(--accent); outline-offset:2px }

    .hero{ display:grid; grid-template-columns:1.2fr .8fr; gap:28px; align-items:center; padding:48px 0 }
    .card{ background:var(--panel); border:1px solid var(--ring); border-radius:var(--radius); box-shadow:var(--shadow) }
    .hero .intro{ padding:28px }
    .kicker{ display:inline-block; font-size:.85rem; color:var(--muted); letter-spacing:.08em; text-transform:uppercase; border:1px solid var(--ring); padding:6px 10px; border-radius:999px }
    h1{ font-size:clamp(28px, 4vw, 44px); line-height:1.2; margin:16px 0 12px }
    .lead{ font-size:1.05rem; color:var(--muted); margin:0 0 18px }
    .cta{ display:flex; gap:12px; flex-wrap:wrap; margin-top:8px }
    .btn{ display:inline-flex; align-items:center; gap:10px; padding:10px 14px; border-radius:12px; border:1px solid var(--ring); background:var(--panel); cursor:pointer; transition: transform .06s ease }
    .btn.primary{ background:linear-gradient(45deg, color-mix(in oklab, var(--accent) 80%, #fff), color-mix(in oklab, var(--accent-2) 80%, #fff)); color:#0a0a0a; border:none }
    .btn:hover{ transform: translateY(-1px) }
    .btn:focus-visible{ outline:2px solid var(--accent); outline-offset:2px }

    .hero .aside{ padding:0; overflow:hidden; aspect-ratio: 16/11 }
    .mesh{ width:100%; height:100%; background:radial-gradient(1000px 400px at 0% 100%, color-mix(in oklab, var(--accent) 50%, transparent), transparent), radial-gradient(1000px 400px at 100% 0%, color-mix(in oklab, var(--accent-2) 50%, transparent), transparent); border-radius:var(--radius); border:1px solid var(--ring) }

    section{ padding:12px 0 8px }
    .section-title{ display:flex; align-items:center; gap:10px; margin:26px 0 8px; font-weight:700 }
    .section-title .bar{ width:8px; height:22px; border-radius:8px; background:linear-gradient(45deg, var(--accent), var(--accent-2)) }

    .grid{ display:grid; gap:16px }
    .projects{ grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); }
    .project{ display:flex; flex-direction:column; min-height:220px; padding:18px }
    .project h3{ margin:0 0 6px; font-size:1.05rem }
    .project p{ margin:0 0 12px; color:var(--muted); font-size:.95rem }
    .project .links{ margin-top:auto; display:flex; gap:10px; flex-wrap:wrap }

    .skills{ grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); }
    .skill{ padding:16px }
    .skill h4{ margin:0 0 6px; font-size:1rem }
    .tags{ display:flex; gap:8px; flex-wrap:wrap }
    .tag{ font-size:.85rem; padding:6px 10px; border-radius:999px; border:1px dashed var(--ring); color:var(--muted) }

    .footer{ padding:32px 0 16px; color:var(--muted); text-align:center; font-size:.95rem }
    .socials{ display:flex; gap:10px; justify-content:center; margin-top:8px }

    /* small screens */
    @media (max-width: 820px){
      .hero{ grid-template-columns:1fr; }
      .hero .aside{ order:-1; aspect-ratio: 16/9 }
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <nav aria-label="Primary">
        <div class="brand"><span class="dot" aria-hidden="true"></span> <span>Birgir L. Valdimarsson</span></div>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a class="btn" href="https://github.com/birgilv" target="_blank" rel="noopener">GitHub ↗</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="container">
    <section class="hero">
      <div class="intro card">
        <span class="kicker">Hi, I'm Birgir</span>
        <h1>Data engineering student & developer focused on clean, scalable front‑ends and practical systems.</h1>
        <p class="lead">I enjoy TypeScript, React/Vue, and Python—building dashboards, small tools, and learning-driven projects. Here's a compact snapshot of my work.</p>
        <div class="cta">
          <a class="btn primary" href="#projects">See projects</a>
          <a class="btn" href="mailto:hello@birgilv.dev">Email me</a>
          <a class="btn" href="/resume.pdf">Resume</a>
        </div>
      </div>
      <div class="aside">
        <div class="mesh card" role="img" aria-label="Abstract gradient background"></div>
      </div>
    </section>

    <section id="projects">
      <div class="section-title"><span class="bar"></span><span>Projects</span></div>
      <div class="grid projects">
        <!-- Example project cards. Replace links and text as you like. -->
        <article class="project card">
          <h3><a href="https://github.com/birgilv" target="_blank" rel="noopener">Chess Tournament Visualizer</a></h3>
          <p>Front-end interface for real-time tournament visualization with camera-based input and live updates.</p>
          <div class="links">
            <a class="btn" href="#" aria-disabled="true">Live Demo</a>
            <a class="btn" href="https://github.com/birgilv" target="_blank" rel="noopener">Source</a>
          </div>
        </article>
        <article class="project card">
          <h3><a href="https://github.com/birgilv" target="_blank" rel="noopener">AKS Delivery Pipeline</a></h3>
          <p>Infrastructure-as-code demo: CI/CD
            for a containerized app on Azure Kubernetes Service with health checks and rollbacks.</p>
          <div class="links">
            <a class="btn" href="#" aria-disabled="true">Write‑up</a>
            <a class="btn" href="https://github.com/birgilv" target="_blank" rel="noopener">Source</a>
          </div>
        </article>
        <article class="project card">
          <h3><a href="https://github.com/birgilv" target="_blank" rel="noopener">Trace Module @ Solwr</a></h3>
          <p>Contributions to a scalable front‑end dashboard as part of a student team—focus on UX and data flows.</p>
          <div class="links">
            <a class="btn" href="#" aria-disabled="true">Case Study</a>
            <a class="btn" href="https://github.com/birgilv" target="_blank" rel="noopener">Source</a>
          </div>
        </article>
      </div>
    </section>

    <section id="skills">
      <div class="section-title"><span class="bar"></span><span>Skills</span></div>
      <div class="grid skills">
        <div class="skill card">
          <h4>Front‑end</h4>
          <div class="tags">
            <span class="tag">TypeScript</span>
            <span class="tag">React</span>
            <span class="tag">Vue</span>
            <span class="tag">Tailwind</span>
            <span class="tag">Vite</span>
          </div>
        </div>
        <div class="skill card">
          <h4>Back‑end & Data</h4>
          <div class="tags">
            <span class="tag">Node</span>
            <span class="tag">Python</span>
            <span class="tag">Postgres</span>
            <span class="tag">REST</span>
            <span class="tag">CI/CD</span>
          </div>
        </div>
        <div class="skill card">
          <h4>Tools</h4>
          <div class="tags">
            <span class="tag">Docker</span>
            <span class="tag">GitHub Actions</span>
            <span class="tag">AKS</span>
            <span class="tag">Rails</span>
            <span class="tag">Scrum</span>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="section-title"><span class="bar"></span><span>Contact</span></div>
      <div class="card" style="padding:18px">
        <p>Open to chats about internships, side projects, and interesting data‑driven UI work.</p>
        <div class="socials">
          <a class="btn" href="mailto:hello@birgilv.dev">Email</a>
          <a class="btn" href="https://github.com/birgilv" target="_blank" rel="noopener">GitHub</a>
          <a class="btn" href="https://www.linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>© <span id="year"></span> Birgir L. Valdimarsson • Built with vanilla HTML/CSS • <a href="#top">Back to top</a></p>
    </footer>
  </main>

  <script>
    // minimal enhancements
    document.getElementById('year').textContent = new Date().getFullYear();
    // smooth scroll (no external libs)
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
      });
    });
  </script>
</body>
</html>

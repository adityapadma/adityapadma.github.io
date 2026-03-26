import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { getAllProjects, type ProjectMeta } from "../utils/projects";

// ── Hero gallery images (matches NID index.html order) ──────────────────────

const heroImages = [
  { src: "/portfolio/media/IndiaHCI23_1.png", alt: "KaavadBits",                  caption: "KaavadBits" },
  { src: "/portfolio/media/IndiaHCI23_3.jpg", alt: "Future Work",                  caption: "Future Work" },
  { src: "/portfolio/media/IndiaHCI23_2.jpg", alt: "VR Lagori",                    caption: "VR Lagori" },
  { src: "/portfolio/media/IndiaHCI23_5.jpg", alt: "Indian Vernacular Artefacts",  caption: "Indian Vernacular Artefacts" },
  { src: "/portfolio/media/IndiaHCI23_4.jpg", alt: "UDXR Sandbox",                 caption: "UDXR Sandbox" },
  { src: "/portfolio/media/IndiaHCI23_6.jpg", alt: "Exhibition View",              caption: "Exhibition View" },
  { src: "/portfolio/media/IndiaHCI23_7.jpg", alt: "Interaction Detail",           caption: "Interaction Detail" },
  { src: "/portfolio/media/TEI24_1.jpg",      alt: "Tangible Interaction",         caption: "Tangible Interaction" },
];

// ── Chip colour map ──────────────────────────────────────────────────────────

const CHIP_COLORS: Record<string, string> = {
  "Case Study":    "#f6e2cf",
  "Research":      "#f0e8f8",
  "XR Prototype":  "#e8f4e8",
  "Speculative XR":"#e8eef8",
};

function chipColor(tag: string) {
  return CHIP_COLORS[tag] ?? "#f6e2cf";
}

// ── Hero draggable gallery ───────────────────────────────────────────────────

function HeroGallery() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track   = trackRef.current;
    if (!wrapper || !track) return;

    // Triple the items for seamless infinite loop
    const originals = Array.from(track.children) as HTMLElement[];
    [1, 2].forEach(() => {
      originals.forEach(item => {
        const clone = item.cloneNode(true) as HTMLElement;
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
      });
    });

    const singleSetWidth = () => track.scrollWidth / 3;
    wrapper.scrollLeft = singleSetWidth();

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let animId: number;
    const speed = 0.8;

    const autoScroll = () => {
      if (!isDown) {
        wrapper.scrollLeft += speed;
        if (wrapper.scrollLeft >= singleSetWidth() * 2) wrapper.scrollLeft -= singleSetWidth();
        if (wrapper.scrollLeft <= 0) wrapper.scrollLeft += singleSetWidth();
      }
      animId = requestAnimationFrame(autoScroll);
    };

    animId = requestAnimationFrame(autoScroll);

    const onDown = (x: number) => { isDown = true; startX = x - wrapper.offsetLeft; scrollLeft = wrapper.scrollLeft; cancelAnimationFrame(animId); };
    const onUp   = () => { isDown = false; animId = requestAnimationFrame(autoScroll); };
    const onMove = (x: number) => { if (!isDown) return; wrapper.scrollLeft = scrollLeft - (x - wrapper.offsetLeft - startX) * 1.5; };

    const md = (e: MouseEvent) => onDown(e.pageX);
    const mm = (e: MouseEvent) => { e.preventDefault(); onMove(e.pageX); };
    const ts = (e: TouchEvent) => onDown(e.touches[0].pageX);
    const tm = (e: TouchEvent) => onMove(e.touches[0].pageX);

    wrapper.addEventListener("mousedown",  md);
    wrapper.addEventListener("mousemove",  mm);
    wrapper.addEventListener("mouseup",    onUp);
    wrapper.addEventListener("mouseleave", onUp);
    wrapper.addEventListener("touchstart", ts, { passive: true });
    wrapper.addEventListener("touchmove",  tm, { passive: true });
    wrapper.addEventListener("touchend",   onUp);

    return () => {
      cancelAnimationFrame(animId);
      wrapper.removeEventListener("mousedown",  md);
      wrapper.removeEventListener("mousemove",  mm);
      wrapper.removeEventListener("mouseup",    onUp);
      wrapper.removeEventListener("mouseleave", onUp);
      wrapper.removeEventListener("touchstart", ts);
      wrapper.removeEventListener("touchmove",  tm);
      wrapper.removeEventListener("touchend",   onUp);
    };
  }, []);

  return (
    <section style={{ paddingTop: "2.6rem", paddingBottom: "2rem", borderBottom: "1px solid #cdc7be", overflow: "hidden" }}>
      <div ref={wrapperRef} style={{ overflow: "hidden", cursor: "grab", userSelect: "none", scrollbarWidth: "none" }}>
        <div ref={trackRef} style={{ display: "flex", alignItems: "flex-start", flexWrap: "nowrap", gap: "1rem", width: "max-content", padding: "0 1rem" }}>
          {heroImages.map((img) => (
            <div
              key={img.src}
              style={{ position: "relative", borderRadius: "12px", overflow: "hidden", background: "#f2e8e5", flexShrink: 0, transition: "box-shadow 300ms" }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
            >
              <img
                src={img.src}
                alt={img.alt}
                draggable={false}
                style={{ display: "block", width: "auto", height: "auto", maxHeight: "280px", pointerEvents: "none", transition: "transform 300ms ease" }}
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)")}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "rgba(255,255,255,0.95)", color: "#1f1f1f",
                padding: "0.75rem 1rem", fontSize: "0.85rem", fontWeight: 500,
                borderTop: "1px solid rgba(0,0,0,0.1)",
                opacity: 0, transform: "translateY(100%)", transition: "opacity 200ms, transform 200ms",
                pointerEvents: "none",
              }}
                className="bubble"
              >
                {img.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Project card (Selected Work) ─────────────────────────────────────────────

function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <a
      href={project.pageUrl}
      style={{
        gridColumn: "span 6",
        border: "1px solid rgba(31,31,31,0.1)",
        background: "#fbf9f6",
        borderRadius: "16px",
        padding: "1.2rem",
        textDecoration: "none",
        color: "inherit",
        transition: "transform 200ms ease, box-shadow 240ms ease, border-color 240ms ease",
        display: "grid",
        gap: "0.55rem",
        minHeight: "176px",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = "translateY(-4px)";
        el.style.borderColor = "rgba(229,112,27,0.45)";
        el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = "";
        el.style.borderColor = "rgba(31,31,31,0.1)";
        el.style.boxShadow = "none";
      }}
    >
      <span style={{
        justifySelf: "start",
        fontSize: "0.71rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#71431b",
        background: chipColor(project.tags[0] ?? ""),
        border: "1px solid #e7bf9a",
        borderRadius: "999px",
        padding: "0.23rem 0.62rem",
        fontWeight: 700,
        fontFamily: "Manrope, sans-serif",
      }}>
        {project.tags[0] ?? project.status}
      </span>
      <h3 style={{ margin: 0, fontFamily: '"Cormorant Garamond", serif', fontSize: "1.85rem", fontWeight: 600, lineHeight: 1.1 }}>
        {project.title}
      </h3>
      <p style={{ margin: 0, color: "#4f4b46", lineHeight: 1.5, fontSize: "0.98rem", fontFamily: "Manrope, sans-serif" }}>
        {project.excerpt}
      </p>
    </a>
  );
}

// ── Main Portfolio component ─────────────────────────────────────────────────

export function Portfolio() {
  const projects = getAllProjects();

  return (
    <>
      {/* Inject Google Fonts + base styles matching NID index.html */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap');

        .nid-root {
          background: #f6f4f1;
          color: #1f1f1f;
          min-height: 100vh;
          font-family: "Manrope", sans-serif;
          background-image:
            radial-gradient(circle at 15% 10%, rgba(229,112,27,0.08), transparent 35%),
            radial-gradient(circle at 92% 0%,  rgba(31,31,31,0.06),   transparent 24%),
            repeating-linear-gradient(0deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02) 1px, transparent 1px, transparent 3px);
        }
        .nid-shell   { max-width: 1180px; margin: 0 auto; padding: 0 1.2rem; }
        .nid-section { padding: 2.2rem 0; border-top: 1px solid rgba(31,31,31,0.08); }
        .nid-section-title {
          margin: 0 0 1rem;
          font-family: "Manrope", sans-serif;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #5e5951;
          font-size: 0.78rem;
          font-weight: 700;
        }
        .nid-accent { color: #e5701b; text-decoration: underline; text-decoration-color: #f1b37e; text-decoration-thickness: 2px; text-underline-offset: 4px; font-weight: 600; }
        .nid-projects { display: grid; grid-template-columns: repeat(12, minmax(0,1fr)); gap: 1rem; }
        .nid-cv-card  { background: rgba(255,255,255,0.58); border: 1px solid rgba(31,31,31,0.1); border-radius: 14px; padding: 1rem; display: grid; gap: 0.6rem; }
        .nid-cv-head  { display: flex; justify-content: space-between; align-items: baseline; gap: 0.8rem; flex-wrap: wrap; }
        .nid-cv-head h3 { margin: 0; font-family: "Cormorant Garamond", serif; font-size: 1.45rem; line-height: 1.1; color: #25221d; }
        .nid-cv-meta  { color: #6b665f; font-size: 0.82rem; letter-spacing: 0.04em; text-transform: uppercase; font-weight: 700; }
        .nid-cv-sub   { color: #3d3933; font-weight: 600; margin: 0; }
        .nid-cv-list  { margin: 0; padding-left: 1rem; display: grid; gap: 0.45rem; }
        .nid-cv-list li { color: #433f38; line-height: 1.5; }
        .nid-cv-inline { margin: 0; color: #47433d; line-height: 1.55; }
        .nid-story-section { display: grid; gap: 1rem; }
        .nid-story-card { background: rgba(255,255,255,0.62); border: 1px solid rgba(31,31,31,0.1); border-left: 4px solid rgba(229,112,27,0.55); border-radius: 12px; padding: 0.95rem; display: grid; gap: 0.5rem; }
        .nid-story-sidebar h2 { margin: 0; font-family: "Cormorant Garamond", serif; font-size: 2rem; color: #35291f; line-height: 1.05; border-bottom: 1px solid rgba(229,112,27,0.2); padding-bottom: 0.45rem; }
        .nid-story-kicker { margin: 0; color: #6b665f; font-size: 0.76rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700; }
        .nid-contact-card { background: rgba(255,255,255,0.6); border: 1px solid rgba(31,31,31,0.1); border-radius: 14px; padding: 1rem; display: grid; gap: 0.85rem; }
        .nid-contact-links { margin: 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: 0.7rem 1rem; color: #4a453f; }
        .nid-contact-links li { display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.94rem; }
        .nid-contact-links a { color: #3d2f24; text-decoration: none; border-bottom: 1px solid rgba(229,112,27,0.35); }
        .nid-contact-links a:hover { color: #8a4615; border-bottom-color: rgba(229,112,27,0.75); }
        .nid-reveal { opacity: 0; transform: translateY(16px); animation: nidRise 640ms ease forwards; }
        .nid-d1 { animation-delay: 120ms; }
        .nid-d2 { animation-delay: 220ms; }
        .nid-d3 { animation-delay: 320ms; }
        @keyframes nidRise { to { opacity: 1; transform: translateY(0); } }
        .bubble { opacity: 0; transform: translateY(100%); transition: opacity 200ms, transform 200ms; }
        .nid-gallery-item:hover .bubble { opacity: 1 !important; transform: translateY(0) !important; }
        .nid-skills-grid { display: grid; grid-template-columns: repeat(12, minmax(0,1fr)); gap: 1rem; }
        .nid-skills-grid .nid-cv-card { grid-column: span 6; }
        @media (max-width: 900px) {
          .nid-projects .nid-project-card-wrap { grid-column: span 12 !important; }
          .nid-story-section { grid-template-columns: 1fr !important; }
          .nid-story-sidebar { position: static !important; }
          .nid-skills-grid .nid-cv-card { grid-column: span 12; }
          .nid-intro { grid-template-columns: 1fr !important; }
          .nid-intro-portrait { max-width: 220px; }
        }
        @media (min-width: 1024px) {
          .nid-story-section { grid-template-columns: repeat(12, minmax(0,1fr)); gap: 1.2rem; }
          .nid-story-sidebar { grid-column: span 3; position: sticky; top: 80px; align-self: start; }
          .nid-story-main { grid-column: span 9; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="nid-root">

        {/* ── Sticky topbar (matching NID index.html) ── */}
        <header style={{
          position: "sticky", top: 0, zIndex: 20,
          backdropFilter: "blur(8px)",
          background: "rgba(246,244,241,0.88)",
          borderBottom: "1px solid rgba(31,31,31,0.1)",
        }}>
          <div className="nid-shell" style={{ minHeight: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
            {/* Signature / logo */}
            <h1 style={{ margin: 0, fontFamily: "Manrope, sans-serif", display: "inline-flex", alignItems: "center", gap: "0.55rem", fontSize: "1.1rem", fontWeight: 600, letterSpacing: "0.02em", whiteSpace: "nowrap", color: "#333" }}>
              <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem", color: "inherit", textDecoration: "none" }}>
                <img src="/portfolio/media/me.png" alt="" style={{ width: "22px", height: "22px", borderRadius: "999px", objectFit: "cover", border: "1px solid rgba(31,31,31,0.15)", flexShrink: 0 }} />
                Aditya Padmagirwar
              </Link>
            </h1>
            {/* Nav links */}
            <nav aria-label="Portfolio navigation" style={{ display: "flex", gap: "clamp(0.7rem, 1.4vw, 1.8rem)", alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }}>
              {[
                { label: "← Home",       href: "/",                   isRouter: true  },
                { label: "Work",          href: "#work",               isRouter: false },
                { label: "About",         href: "#about",              isRouter: false },
                { label: "Publications",  href: "#publications",       isRouter: false },
              ].map(link => (
                link.isRouter ? (
                  <Link key={link.label} to={link.href} style={{ textDecoration: "none", fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, color: "#64615d", transition: "color 180ms ease" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#e5701b")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#64615d")}
                  >{link.label}</Link>
                ) : (
                  <a key={link.label} href={link.href} style={{ textDecoration: "none", fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, color: "#64615d", transition: "color 180ms ease" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#e5701b")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#64615d")}
                  >{link.label}</a>
                )
              ))}
            </nav>
          </div>
        </header>

        {/* ── Hero gallery ── */}
        <HeroGallery />

        <main className="nid-shell">

          {/* ── About / Intro ── */}
          <section id="about" className="nid-section nid-reveal nid-d1" aria-label="Introduction">
            <div className="nid-intro" style={{ display: "grid", gridTemplateColumns: "minmax(140px,220px) minmax(0,1fr)", alignItems: "center", gap: "1.4rem" }}>
              <figure style={{ margin: 0, borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(31,31,31,0.12)", background: "#efeae3" }}>
                <img src="/portfolio/media/me.png" alt="Portrait of Aditya Padmagirwar" style={{ display: "block", width: "100%", height: "auto" }} />
              </figure>
              <p style={{ margin: 0, fontFamily: '"Cormorant Garamond", serif', fontSize: "clamp(1.45rem, 2.8vw, 2.35rem)", lineHeight: 1.25, letterSpacing: "0.01em", color: "#252525" }}>
                My name is Aditya Padmagirwar,
                I design immersive narratives and interactive systems that solve difficult communication problems.
                I <span className="nid-accent">research</span>, <span className="nid-accent">prototype</span> and <span className="nid-accent">build</span> experiences across XR, cultural storytelling, and speculative urban futures.
              </p>
            </div>
          </section>

          {/* ── Education ── */}
          <section className="nid-section nid-reveal nid-d1" aria-label="Education">
            <h2 className="nid-section-title">Education</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              <article className="nid-cv-card">
                <div className="nid-cv-head">
                  <h3>Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)</h3>
                  <span className="nid-cv-meta">New Delhi, India</span>
                </div>
                <p className="nid-cv-sub">B.Tech in Computer Science and Social Science</p>
              </article>
            </div>
          </section>

          {/* ── Work Experience ── */}
          <section className="nid-section nid-reveal nid-d2" aria-label="Work experience">
            <div className="nid-story-section">
              <div className="nid-story-sidebar">
                <p className="nid-story-kicker">Career Snapshot</p>
                <h2>Work Experience</h2>
              </div>
              <div className="nid-story-main" style={{ display: "grid", gap: "0.9rem" }}>
                {[
                  { title: "AdiNex.AI, Startup | Product Manager", period: "Jun 2025 - Current", points: ["Led end-to-end delivery of AI/ML products from experimentation to production with cross-functional teams.", "Owned technical planning, GitHub workflows, testing pipelines, and cloud deployments, translating business goals into sprint-ready roadmaps."] },
                  { title: "Creative Interfaces Lab, IIIT Delhi | Undergraduate Researcher", period: "May 2023 - Current", points: ["Led R&D on tangible storytelling systems using LLMs as narrative agents.", "Designed prototypes and ran user evaluations focused on South Asian and non-Western storytelling in XR and tangible interfaces."] },
                  { title: "IWay Plus, IIT Delhi | UX Researcher", period: "Sep 2024 - Dec 2024", points: ["Researched accessibility and navigation behaviors and translated findings into LLM-enabled UX solutions.", "Mapped IRCH-AIIMS patient journeys (1,500+ daily outpatients), proposing interventions that could reduce waiting time by 20-30% and improve clinical throughput."] },
                  { title: "IMXD Lab, IDC School of Design, IIT Bombay | Research Intern", period: "May 2024 - Jul 2024", points: ["Conducted immersive media research and built a Unity VR prototype for contemporary art translation.", "Developed a Rhino-Grasshopper to G-code workflow for 4D printing and co-authored research on affordances in shape-changing interfaces."] },
                ].map(exp => (
                  <article key={exp.title} className="nid-story-card">
                    <div className="nid-cv-head">
                      <h3 style={{ margin: 0, fontFamily: '"Cormorant Garamond", serif', fontSize: "1.45rem", lineHeight: 1.1 }}>{exp.title}</h3>
                      <span className="nid-cv-meta">{exp.period}</span>
                    </div>
                    <ul className="nid-cv-list">{exp.points.map(p => <li key={p}>{p}</li>)}</ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ── Publications ── */}
          <section id="publications" className="nid-section nid-reveal nid-d3" aria-label="Publications">
            <h2 className="nid-section-title">Publications</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              <article className="nid-cv-card">
                <ol className="nid-cv-list">
                  <li>Aditya Padmagirwar (2026). Playing, Watching, Telling: Design Research into Digital Reinterpretation of Indian Vernacular Artefacts. Conference Proceedings of ACM Creativity and Cognition 2026. Accepted for publication in July.</li>
                  <li>Saumik S., <strong>Aditya Padmagirwar</strong>, Shivoy A., Anmol S. (2024). KaavadBits: Exploring Branching Narratives for Tangible Interactive Storytelling Through a Kaavad-inspired Diegetic Installation. Conference Proceedings of <strong>ACM TEI'24</strong> | <a href="https://dl.acm.org/doi/10.1145/3623509.3635251" target="_blank" rel="noopener noreferrer" style={{ color: "#e5701b" }}>DOI › 10.1145/3623509.3635251</a>.</li>
                  <li>Saumik S., <strong>Aditya Padmagirwar</strong>, Shivoy A., Anmol S. (2024). KaavadBits: An Interactive Art Installation for a New Narrative Experience. Conference Proceedings of <strong>Arts Track at IndiaHCI 2023</strong> | <a href="https://link.springer.com/chapter/10.1007/978-981-97-4335-3_11" target="_blank" rel="noopener noreferrer" style={{ color: "#e5701b" }}>Link</a>. <strong>Won the Special Mention Award for the presentation.</strong></li>
                </ol>
              </article>
            </div>
          </section>

          {/* ── Skills ── */}
          <section className="nid-section nid-reveal" aria-label="Skills">
            <h2 className="nid-section-title">Skills</h2>
            <div className="nid-skills-grid">
              {[
                { title: "Technical Skills", body: "Design Thinking, User Research and Testing, Study Design, Data Analysis, Rapid Design and Prototyping, Programming." },
                { title: "Programming",      body: "HTML/CSS, Python, C/C++, SQL, Processing (P5.js), C#, R, oTree, LaTeX." },
                { title: "Tools",            body: "Unity, Figma/Adobe XD, Arduino IDE, Rhino Grasshopper, Linux/Unix Shell, Git Workflow, TouchDesigner." },
                { title: "Libraries",        body: "Rhino3dm, rhinoscriptsyntax, ARKit, pandas, NumPy, Matplotlib, 3js, scikit, PsychoPy." },
              ].map(s => (
                <article key={s.title} className="nid-cv-card">
                  <div className="nid-cv-head"><h3>{s.title}</h3></div>
                  <p className="nid-cv-inline">{s.body}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ── Selected Work (from .md files) ── */}
          <section id="work" className="nid-section nid-reveal nid-d2" aria-label="Selected work">
            <h2 className="nid-section-title">Selected Work</h2>
            <div className="nid-projects">
              {projects.map(project => (
                <div key={project.id} style={{ gridColumn: "span 6" }} className="nid-project-card-wrap">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </section>

          {/* ── Contact ── */}
          <section id="contact" className="nid-section nid-reveal" aria-label="Contact">
            <h2 className="nid-section-title">Contact Me</h2>
            <div className="nid-contact-card">
              <ul className="nid-contact-links">
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>
                  Email: <a href="mailto:adityapadmagirwar@outlook.com">adityapadmagirwar@outlook.com</a>
                </li>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8.36 22.9c.58.11.79-.25.79-.56v-2.16c-3.2.7-3.87-1.54-3.87-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.72-1.55-2.56-.29-5.25-1.28-5.25-5.72 0-1.26.45-2.3 1.2-3.11-.13-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.19a11.02 11.02 0 0 1 5.82 0c2.2-1.5 3.2-1.2 3.2-1.2.63 1.58.24 2.74.12 3.03.75.81 1.2 1.84 1.2 3.11 0 4.45-2.7 5.42-5.28 5.71.42.36.78 1.06.78 2.15v3.18c0 .31.2.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
                  GitHub: <a href="https://github.com/adityapadma" target="_blank" rel="noopener noreferrer">github.com/adityapadma</a>
                </li>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM8.5 9.7H5.4V19h3.1V9.7Zm4.9 0h-3V19h3v-4.9c0-2.73 3.52-2.95 3.52 0V19H20V13c0-4.68-5.34-4.5-6.6-2.2V9.7Z"/></svg>
                  LinkedIn: <a href="https://linkedin.com/in/adityapadma" target="_blank" rel="noopener noreferrer">linkedin.com/in/adityapadma</a>
                </li>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20"/><path d="M12 2a15 15 0 0 0 0 20"/></svg>
                  Website: <a href="https://adityapadma.github.io" target="_blank" rel="noopener noreferrer">adityapadma.github.io</a>
                </li>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.12.9.34 1.78.66 2.62a2 2 0 0 1-.45 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.45c.84.32 1.72.54 2.62.66A2 2 0 0 1 22 16.9z"/></svg>
                  Phone: <a href="tel:+917558209279">+91 75582 09279</a>
                </li>
              </ul>
            </div>
          </section>

        </main>

        <footer style={{ borderTop: "1px solid rgba(31,31,31,0.1)", marginTop: "2rem", padding: "1.3rem 0 2rem", display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", color: "#5f5c57", fontSize: "0.86rem", maxWidth: "1180px", margin: "0 auto", paddingLeft: "1.2rem", paddingRight: "1.2rem" }}>
          <span>Portfolio · Aditya Padmagirwar</span>
          <span>Last updated March 2026</span>
        </footer>

      </div>
    </>
  );
}

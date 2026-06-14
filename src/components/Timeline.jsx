import { useRef } from "react";

const data = [
  {
    year: "2018 – 2020",
    name: "Class 10 Completed",
    desc: "Mahatma JF Public School, Varanasi — Scored 93.50%",
    dc: "#4F46E5", 
    lbg: "linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%)", 
    lb: "#A5B4FC", dt: "#312E81",
    icon: "ti-school", stat: "93.50%", statLabel: "Board Score",
    tags: ["Mathematics", "Science", "English", "Top 5% Class"],
  },
  {
    year: "2020 – 2022",
    name: "Class 12 Completed",
    desc: "Tulsi Vidya Niketan, Varanasi — Science Stream (PCM)",
    dc: "#9333EA", 
    lbg: "linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)", 
    lb: "#D6BCFA", dt: "#5B21B6",
    icon: "ti-certificate", stat: "88.60%", statLabel: "Board Score",
    tags: ["Physics", "Chemistry", "Mathematics", "Science Stream"],
  },
  {
    year: "2023 – Present",
    name: "B.Tech in IT",
    desc: "Dr. A.P.J. Abdul Kalam Technical University — Active engineering track.",
    dc: "#DB2777", 
    lbg: "linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 100%)", 
    lb: "#F472B6", dt: "#9D174D",
    icon: "ti-building-community", stat: "8.67", statLabel: "Current CGPA",
    tags: ["Data Structures", "DBMS", "OS", "OOP", "Web Dev"],
  },
  {
    year: "2024",
    name: "Freelancing & Internships",
    desc: "Real-world web apps delivered for clients across India.",
    dc: "#EA580C", 
    lbg: "linear-gradient(135deg, #FFEDD5 0%, #FED7AA 100%)", 
    lb: "#FDBA74", dt: "#7C2D12",
    icon: "ti-briefcase", stat: "8+", statLabel: "Projects Delivered",
    tags: ["React", "JavaScript", "Client Work", "Freelancing"],
  },
  {
    year: "2025",
    name: "Frontend Mastery",
    desc: "Deep expertise in React.js, Tailwind CSS, Git & modern UI architectures.",
    dc: "#0D9488", 
    lbg: "linear-gradient(135deg, #CCFBF1 0%, #99F6E4 100%)", 
    lb: "#5EEAD4", dt: "#115E59",
    icon: "ti-layout-dashboard", stat: "10+", statLabel: "UI Projects",
    tags: ["React.js", "Tailwind CSS", "Git", "Vite", "REST APIs"],
  },
  {
    year: "2026",
    name: "Full Stack — MERN",
    desc: "Node.js, Express, MongoDB & highly scalable production backends.",
    dc: "#2563EB", 
    lbg: "linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)", 
    lb: "#93C5FD", dt: "#1E40AF",
    icon: "ti-server", stat: "15+", statLabel: "APIs Built",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Deployment"],
  },
  {
    year: "2026",
    name: "AI & Full Stack Projects",
    desc: "CodeScan AI, Cold Email Gen, Real-Time Chat, MERN Portfolio Ecosystem.",
    dc: "#D97706", 
    lbg: "linear-gradient(135deg, #FEF08A 0%, #FDE68A 100%)", 
    lb: "#FCD34D", dt: "#78350F",
    icon: "ti-robot", stat: "4+", statLabel: "AI Apps Shipped",
    tags: ["AI/LLM APIs", "Socket.io", "OpenAI", "MERN", "Docker"],
  },
];

export default function ProfessionalTimeline() {
  return (
    <section style={{ fontFamily: "'Inter', sans-serif", padding: "5rem 2rem" }}>
      {/* Tabler Icons CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
      />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
        <span
          style={{
            display: "inline-block",
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "3px",
            textTransform: "uppercase",
            padding: "5px 18px",
            borderRadius: "50px",
            background: "#E0E7FF",
            color: "#4F46E5",
            border: "1px solid #C7D2FE",
            marginBottom: "1rem",
          }}
        >
          Timeline
        </span>
        <h2
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3rem)",
            fontWeight: 900,
            color: "#0f172a",
            lineHeight: 1.15,
            letterSpacing: "-1px",
            marginBottom: "0.6rem",
          }}
        >
          My Professional{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #4F46E5, #7C3AED, #DB2777)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Journey
          </span>
        </h2>
        <p style={{ fontSize: "15px", color: "#64748b", maxWidth: "500px", margin: "0 auto", lineHeight: 1.6 }}>
          Academic achievements, technical growth, and professional milestones mapped over the years.
        </p>
      </div>

      {/* Layout Grid Container */}
      <div className="tl-container">
        {data.map((e, i) => (
          <div key={i} className="tl-row">
            
            {/* Left Card: Details */}
            <div
              className="tl-card left-card"
              style={{
                background: e.lbg,
                border: `2px solid ${e.lb}`,
                boxShadow: `0 10px 25px -5px ${e.dc}20`,
              }}
            >
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                {/* Visual Accent Colored Node */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "5px" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: e.dc,
                      boxShadow: `0 0 0 4px ${e.dc}15`,
                    }}
                  />
                </div>
                
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: e.dt, marginBottom: "4px" }}>
                    {e.year}
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0f172a", marginBottom: "6px", lineHeight: 1.3, letterSpacing: "-0.2px" }}>
                    {e.name}
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#1e293b",安全: "clean", lineHeight: 1.55, fontWeight: "500" }}>
                    {e.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Timeline Line Node (Desktop Only) */}
            <div className="tl-center-node">
              <div style={{ width: "4px", height: "100%", background: `linear-gradient(180deg, ${e.dc}, ${data[i+1]?.dc || e.dc})`, opacity: 0.25, position: "absolute", zIndex: 1 }} />
              <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#fff", border: `4px solid ${e.dc}`, boxShadow: `0 4px 10px ${e.dc}20`, zIndex: 2, position: "relative" }} />
            </div>

            {/* Right Card: Stats & Badges */}
            <div
              className="tl-card right-card"
              style={{
                background: e.lbg,
                border: `2px solid ${e.lb}`,
                boxShadow: `0 10px 25px -5px ${e.dc}20`,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", gap: "12px" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: e.dc,
                        boxShadow: `0 4px 8px ${e.dc}25`,
                      }}
                    >
                      <i className={`ti ${e.icon}`} style={{ color: "#fff", fontSize: "17px" }} />
                    </div>
                    <div style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", color: e.dt }}>
                      {e.statLabel}
                    </div>
                  </div>

                  <div style={{ fontSize: "2.1rem", fontWeight: 900, color: e.dt, lineHeight: 1, marginBottom: "2px", letterSpacing: "-0.5px" }}>
                    {e.stat}
                  </div>
                </div>

                {/* Tags Container */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {e.tags.map((t, ti) => (
                    <span
                      key={ti}
                      style={{
                        fontSize: "10.5px",
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: "6px",
                        background: "#ffffff",
                        color: e.dt,
                        border: `1px solid ${e.lb}`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Embedded Spacing & Layout CSS */}
      <style>{`
        .tl-container {
          max-w: 740px; /* Reduced width by ~20% to grant fantastic desktop side margins */
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .tl-row {
          display: grid;
          grid-template-columns: 1fr 50px 1fr;
          align-items: stretch;
        }
        .tl-card {
          border-radius: 20px;
          padding: 1.5rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .tl-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px -8px rgba(0, 0, 0, 0.1) !important;
        }
        .tl-center-node {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        
        /* Mobile Breakpoint System Updates */
        @media (max-width: 800px) {
          .tl-container {
            gap: 1.5rem;
            padding: 0;
          }
          .tl-row {
            grid-template-columns: 1fr !important;
            gap: 0px;
          }
          .tl-center-node {
            display: none !important;
          }
          .tl-card {
            padding: 1.25rem !important;
          }
          .left-card {
            border-radius: 20px 20px 0 0 !important;
            border-bottom: none !important;
          }
          .right-card {
            border-radius: 0 0 20px 20px !important;
            border-top: 1px dashed rgba(0, 0, 0, 0.1) !important;
            padding-top: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
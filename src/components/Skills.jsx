import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiSocketdotio,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 size={48} className="text-orange-500" />,
    lbg: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)",
    lb: "#FED7AA",
    glow: "rgba(249, 115, 22, 0.15)"
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt size={48} className="text-blue-500" />,
    lbg: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
    lb: "#BFDBFE",
    glow: "rgba(59, 130, 246, 0.15)"
  },
  {
    name: "JavaScript",
    icon: <FaJs size={48} className="text-amber-500" />,
    lbg: "linear-gradient(135deg, #FEFCE8 0%, #FEF9C3 100%)",
    lb: "#FEF08A",
    glow: "rgba(245, 158, 11, 0.15)"
  },
  {
    name: "React",
    icon: <FaReact size={48} className="text-cyan-500" />,
    lbg: "linear-gradient(135deg, #ECFEFF 0%, #CFFAFE 100%)",
    lb: "#A5F3FC",
    glow: "rgba(6, 182, 212, 0.15)"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={48} className="text-sky-500" />,
    lbg: "linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)",
    lb: "#BAE6FD",
    glow: "rgba(14, 165, 233, 0.15)"
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={48} className="text-emerald-600" />,
    lbg: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
    lb: "#A7F3D0",
    glow: "rgba(5, 150, 105, 0.15)"
  },
  {
    name: "Express.js",
    icon: <SiExpress size={48} className="text-slate-700" />,
    lbg: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
    lb: "#E2E8F0",
    glow: "rgba(71, 85, 105, 0.1)"
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={48} className="text-green-600" />,
    lbg: "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)",
    lb: "#BBF7D0",
    glow: "rgba(22, 163, 74, 0.15)"
  },
  {
    name: "Git",
    icon: <FaGitAlt size={48} className="text-orange-600" />,
    lbg: "linear-gradient(135deg, #FFF5F5 0%, #FED7D7 100%)",
    lb: "#FEB2B2",
    glow: "rgba(221, 107, 32, 0.15)"
  },
  {
    name: "GitHub",
    icon: <FaGithub size={48} className="text-slate-800" />,
    lbg: "linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)",
    lb: "#CBD5E1",
    glow: "rgba(15, 23, 42, 0.1)"
  },
  {
    name: "Postman",
    icon: <SiPostman size={48} className="text-orange-500" />,
    lbg: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)",
    lb: "#FED7AA",
    glow: "rgba(249, 115, 22, 0.15)"
  },
  {
    name: "Socket.IO",
    icon: <SiSocketdotio size={48} className="text-slate-700" />,
    lbg: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
    lb: "#E2E8F0",
    glow: "rgba(100, 116, 139, 0.1)"
  },
];

export default function Skills() {
  return (
    <section className="py-16 bg-transparent" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* Uniform Header Section */}
        <div className="mb-12 text-center">
          <span
            style={{
              display: "inline-block",
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "3px",
              textTransform: "uppercase",
              padding: "5px 16px",
              borderRadius: "50px",
              background: "#E0E7FF",
              color: "#4F46E5",
              border: "1px solid #C7D2FE",
              marginBottom: "1rem",
            }}
          >
            Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            My{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #4F46E5, #7C3AED, #DB2777)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Skills
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-semibold mt-1.5 max-w-md mx-auto leading-relaxed">
            Technologies and tools I use to build robust, modern web applications
          </p>
        </div>

        {/* Next-Level 4-Column Grid System Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -6, 
                scale: 1.02,
                boxShadow: `0 15px 30px -5px ${skill.glow}`
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer relative group overflow-hidden"
              style={{
                background: skill.lbg,
                border: `2px solid ${skill.lb}`,
                minHeight: "140px"
              }}
            >
              {/* Internal decorative mini-ring node */}
              <div 
                className="absolute right-[-10px] top-[-10px] w-12 h-12 rounded-full opacity-10 pointer-events-none group-hover:scale-125 transition-transform duration-500" 
                style={{ backgroundColor: skill.lb }}
              />

              {/* Animated Icon Wrap */}
              <div className="mb-3.5 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              {/* Skill Description Title */}
              <h3 className="text-xs sm:text-sm font-extrabold text-slate-800 text-center tracking-tight uppercase">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
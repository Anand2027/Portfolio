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
    icon: <FaHtml5 size={55} className="text-orange-500" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt size={55} className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs size={55} className="text-yellow-400" />,
  },
  {
    name: "React",
    icon: <FaReact size={55} className="text-cyan-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={55} className="text-sky-500" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={55} className="text-green-600" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={55} className="text-gray-500" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={55} className="text-green-500" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt size={55} className="text-orange-600" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub size={55} className="text-gray-600" />,
  },
  {
    name: "Postman",
    icon: <SiPostman size={55} className="text-orange-500" />,
  },
  {
    name: "Socket.IO",
    icon: <SiSocketdotio size={55} className="text-gray-500" />,
  },
];

export default function Skills() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">
          My Skills
        </h2>

        <p className="text-center mb-14 text-lg">
          Technologies and tools I use to build modern web applications
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-white/10
                backdrop-blur-sm
                rounded-3xl
                shadow-md
                hover:shadow-2xl
                border border-gray-200
                p-8
                flex flex-col items-center justify-center
                transition-all duration-300
                hover:-translate-y-3
                hover:scale-105
                cursor-pointer
              "
            >
              <div className="mb-4">{skill.icon}</div>

              <h3 className="text-lg font-semibold text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
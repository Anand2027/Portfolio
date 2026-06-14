import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ProfessionalTimeline() {
  const events = [
    {
      year: "2018-2020",
      title: "Class 10 Completed",
      desc: "Mahatma JF Public School, Varanasi - Scored 95%",
    },
    {
      year: "2020-2022",
      title: "Class 12 Completed",
      desc: "Tulsi Vidya Niketan, Varanasi - Scored 88.6%",
    },
    {
      year: "2023",
      title: "Started B.Tech (IT)",
      desc: "Dr. A.P.J. Abdul Kalam Technical University - CGPA: 8.885",
    },
    {
      year: "2024",
      title: "Freelancing & Projects",
      desc: "Built web projects like 'How to Grow Crop', Amazon & Netflix Landing Pages, BMI Calculator, Stopwatch, Bubble Game",
    },
    {
      year: "2025",
      title: "Frontend Developer Skills",
      desc: "Proficient in React.js, MySQL, Git; prepared for internships & placements",
    },
  ];

  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const cardColors = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-indigo-500",
    "from-pink-500 to-rose-500",
    "from-teal-500 to-emerald-500",
    "from-orange-500 to-amber-500",
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
        My Professional Journey
      </h2>

      <div ref={timelineRef} className="relative max-w-5xl mx-auto">
        {/* Timeline Line */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-3 md:left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top h-full"
        />

        {events.map((event, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              className={`relative mb-16 w-full md:w-1/2 ${
                isLeft
                  ? "md:left-0 md:pr-10"
                  : "md:left-1/2 md:pl-10"
              }`}
              initial={{
                opacity: 0,
                x: isLeft ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
              }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-3 w-6 h-6 rounded-full bg-white border-4 border-blue-500 shadow-lg z-10 ${
                  isLeft
                    ? "md:-right-3 left-0"
                    : "md:-left-3 left-0"
                }`}
              />

              {/* Card */}
              <div
                className={`bg-gradient-to-br ${
                  cardColors[idx % cardColors.length]
                } rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300`}
              >
                <time className="text-white/80 text-sm font-medium">
                  {event.year}
                </time>

                <h3 className="text-xl font-bold text-white mt-2">
                  {event.title}
                </h3>

                <p className="text-white/90 mt-3 leading-relaxed">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
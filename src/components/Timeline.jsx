import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ProfessionalTimeline() {
// Ensure the container for useScroll has a non-static position
// Add 'relative' to the timeline container's className below

const events = [
    { 
        year: "2018-2020", 
        title: "Class 10 Completed", 
        desc: "Mahatma JF Public School, Varanasi - Scored 95%" 
    },
    { 
        year: "2020-2022", 
        title: "Class 12 Completed", 
        desc: "Tulsi Vidya Niketan, Varanasi - Scored 88.6%" 
    },
    { 
        year: "2023", 
        title: "Started B.Tech (IT)", 
        desc: "Dr. A.P.J. Abdul Kalam Technical University - CGPA: 8.885" 
    },
    { 
        year: "2024", 
        title: "Freelancing & Projects", 
        desc: "Built web projects like 'How to Grow Crop', Amazon & Netflix Landing Pages, BMI Calculator, Stopwatch, Bubble Game" 
    },
    { 
        year: "2025", 
        title: "Frontend Developer Skills", 
        desc: "Proficient in React.js, MySQL, Git; prepared for internships & placements" 
    },
];


  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

return (
    <div className="w-full px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-20 text-gray-900 dark:text-gray-900">
            My Professional Journey
        </h2>

        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
            {/* Vertical timeline line */}
            <motion.div
                style={{ scaleY }}
                className="absolute left-3 md:left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top h-full"
            />

            {events.map((event, idx) => {
                const isLeft = idx % 2 === 0;

                // Color palette for cards
                const cardColors = [
                    "from-blue-400 to-blue-600",
                    "from-purple-400 to-purple-600",
                    "from-pink-400 to-pink-600",
                    "from-teal-400 to-teal-600",
                ];
                const cardGradient = cardColors[idx % cardColors.length];

                return (
                    <motion.div
                        key={idx}
                        className={`relative mb-16 w-full md:w-1/2 ${
                            isLeft ? "md:left-0 md:pr-10" : "md:left-1/2 md:pl-10"
                        }`}
                        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Timeline dot */}
                        <div
                            className={`absolute top-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 border-2 border-white flex items-center justify-center text-white font-semibold z-10 ${
                                isLeft ? "md:-right-3 left-0" : "md:-left-3 left-0"
                            }`}
                        >
                            {idx + 1}
                        </div>

                        {/* Card */}
                        <div className={`bg-gradient-to-br ${cardGradient} shadow-xl rounded-2xl p-6 w-full transition-all hover:shadow-2xl hover:scale-105`}>
                            <time className="text-sm text-white/80">
                                {event.year}
                            </time>
                            <h3 className="text-xl font-semibold mt-1 text-white">
                                {event.title}
                            </h3>
                            <p className="text-white/90 mt-2">
                                {event.desc}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    </div>
);
}

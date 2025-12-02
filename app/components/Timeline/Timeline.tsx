"use client";
import { motion } from "framer-motion";
import { GraduationCap, Code, Briefcase, Award } from "lucide-react";
import timelineData from "@/data/timeline.json";

const iconMap: any = {
  education: GraduationCap,
  project: Code,
  work: Briefcase,
  achievement: Award,
};

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">My Journey</h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My path through education, projects, and professional growth
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-gold via-accent-purple to-accent-blue" />

          {/* Timeline Items */}
          {timelineData.map((item, index) => {
            const Icon = iconMap[item.type];
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${
                    isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                  } ml-16 md:ml-0`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass p-6 rounded-2xl"
                  >
                    <span className="text-xs font-semibold text-accent-gold uppercase tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400 mb-2">{item.organization}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 glass rounded-full flex items-center justify-center border-4 border-primary z-10"
                  style={{
                    backgroundColor: item.color + "20",
                    borderColor: item.color,
                  }}
                >
                  <Icon size={24} style={{ color: item.color }} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

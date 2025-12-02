"use client";
import { motion } from "framer-motion";
import SkillBar from "./SkillBar";
import skillsData from "@/data/skills.json";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-primary-light relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-gold/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Backend & Core */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-accent-gold mb-6 flex items-center gap-3">
              <span className="text-3xl">🐍</span>
              Backend & Core
            </h3>
            <div className="space-y-6">
              {skillsData.backend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Frontend & Modern Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-accent-purple mb-6 flex items-center gap-3">
              <span className="text-3xl">⚛️</span>
              Frontend & Modern Stack
            </h3>
            <div className="space-y-6">
              {skillsData.frontend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Data & AI */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-accent-blue mb-6 flex items-center gap-3">
              <span className="text-3xl">🤖</span>
              Data & AI
            </h3>
            <div className="space-y-6">
              {skillsData.data.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Tools & Others */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-accent-gold mb-6 flex items-center gap-3">
              <span className="text-3xl">🛠️</span>
              Tools & Others
            </h3>
            <div className="space-y-6">
              {skillsData.tools.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

export default function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-white font-semibold">{skill.name}</span>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: isVisible ? `${skill.level}%` : 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="h-full rounded-full relative"
          style={{ 
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
            boxShadow: `0 0 10px ${skill.color}80`
          }}
        >
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

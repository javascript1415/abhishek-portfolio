"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projects.json";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "Python/Django", "Full-Stack", "AI/ML", "E-Commerce"];
  
  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing my best work in Python, Django, React, and AI
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? "bg-accent-gold text-primary glow-effect"
                  : "glass hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

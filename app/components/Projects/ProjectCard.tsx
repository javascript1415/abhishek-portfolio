"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import ProjectModal from "./ProjectModal";

interface Project {
  id: number;
  title: string;
  description: string;
  problem: string;
  solution: string;
  results: string;
  category: string;
  tech: string[];
  github?: string;
  live?: string;
  image: string;
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="glass rounded-2xl overflow-hidden cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-accent-gold/20 to-accent-purple/20">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold opacity-20">{project.title.charAt(0)}</div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60" />
          <div className="absolute top-4 right-4 flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 glass rounded-full hover:bg-accent-gold hover:text-primary transition-all"
              >
                <Github size={20} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 glass rounded-full hover:bg-accent-gold hover:text-primary transition-all"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <span className="text-xs font-semibold text-accent-gold uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold mt-2 mb-3 group-hover:text-accent-gold transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-accent-purple/20 text-accent-purple rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, AlertCircle, CheckCircle, TrendingUp } from "lucide-react";

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

export default function ProjectModal({ 
  project, 
  isOpen, 
  onClose 
}: { 
  project: Project; 
  isOpen: boolean; 
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 glass rounded-3xl z-50 overflow-y-auto"
          >
            <div className="p-6 md:p-10">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <span className="text-xs font-semibold text-accent-gold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold gradient-text mt-2">
                    {project.title}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 glass rounded-full hover:bg-accent-gold hover:text-primary transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex gap-4 mb-8">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-accent-gold text-primary font-semibold rounded-full hover:bg-accent-purple hover:text-white transition-all"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/10 transition-all"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </div>

              {/* Case Study: Problem → Solution → Results */}
              <div className="space-y-8">
                {/* Problem */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass p-6 rounded-2xl border-l-4 border-red-500"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <AlertCircle className="text-red-500" size={28} />
                    <h3 className="text-2xl font-bold text-red-500">Problem</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{project.problem}</p>
                </motion.div>

                {/* Solution */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass p-6 rounded-2xl border-l-4 border-blue-500"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="text-blue-500" size={28} />
                    <h3 className="text-2xl font-bold text-blue-500">Solution</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">{project.solution}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-accent-blue/20 text-accent-blue rounded-full font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Results */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="glass p-6 rounded-2xl border-l-4 border-green-500"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="text-green-500" size={28} />
                    <h3 className="text-2xl font-bold text-green-500">Results</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{project.results}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

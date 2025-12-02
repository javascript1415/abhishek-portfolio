"use client";
import { motion } from "framer-motion";
import { Code2, Database, Sparkles, Users } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";

export default function About() {
  const stats = [
    { icon: <Code2 size={32} />, value: "5+", label: "Projects Delivered" },
    { icon: <Database size={32} />, value: "3+", label: "Years Learning" },
    { icon: <Sparkles size={32} />, value: "AI/ML", label: "Focused" },
    { icon: <Users size={32} />, value: "Team", label: "Player" },
  ];

  return (
    <section id="about" className="py-20 bg-primary-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #f59e0b 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-accent-gold">Who I Am</h3>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              I'm a <span className="text-accent-purple font-semibold">Python developer</span> with strong proficiency in data structures & algorithms, specializing in building scalable web applications. From Django REST backends to React frontends, I deliver complete solutions.
            </p>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Currently pursuing <span className="text-accent-gold font-semibold">BSc CSIT</span> at Amrit Science Campus (ASCOL), Kathmandu, Nepal. My experience spans fintech systems (movie finance management), AI-powered RAG applications, and e-commerce platforms with integrated payment systems.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I love working with teams, playing chess ♟️, and building innovative solutions with <span className="text-accent-blue font-semibold">Python & Django</span>. Whether solo or leading teams, I bring projects from concept to deployment.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass p-6 rounded-xl text-center"
                >
                  <div className="text-accent-gold mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* GitHub Activity */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-accent-purple">GitHub Activity</h3>
            <GitHubCalendar
              username="javascript1415"
              colorScheme="dark"
              blockSize={12}
              fontSize={14}
              theme={{
                dark: ['#0f172a', '#f59e0b'],
              }}
            />
            <p className="text-sm text-gray-400 mt-4 text-center">
              Contributions from the last year
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

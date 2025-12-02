"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useMemo } from "react";  


export default function Hero() {
  const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com/javascript1415", label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/abhishek-acharya-b34404222/", label: "LinkedIn" },
    { icon: <Twitter size={24} />, href: "https://x.com/Abhisek18600551", label: "Twitter" },
    { icon: <Mail size={24} />, href: "mailto:javascript1415@gmail.com", label: "Email" },
    { icon: <Phone size={24} />, href: "tel:+9779848005936", label: "Phone" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background - SIMPLIFIED (NO HYDRATION ISSUES) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
          }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* REST OF YOUR HERO COMPONENT STAYS THE SAME */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-accent-gold mb-4"
            >
              Hello, I'm
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            >
              Abhishek Acharya
            </motion.h1>

            <div className="text-2xl md:text-4xl mb-8 h-20">
              <TypeAnimation
                sequence={[
                  "Python Developer",
                  2000,
                  "Django Expert",
                  2000,
                  "Full-Stack Developer",
                  2000,
                  "AI Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-accent-purple font-semibold"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Crafting scalable web applications with Django, React & AI — specializing in fintech, RAG systems, and data-driven solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 mb-8"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-accent-gold text-primary font-semibold rounded-full hover:bg-accent-purple hover:text-white transition-all duration-300 glow-effect"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 glass border-2 border-accent-gold rounded-full hover:bg-accent-gold hover:text-primary transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass rounded-full hover:bg-accent-gold hover:text-primary transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-accent-gold via-accent-purple to-accent-blue opacity-20 blur-3xl"
            />
            <img
              src="/images/profile.jpg"
              alt="Abhishek Acharya"
              className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl border-4 border-accent-gold glow-effect"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-accent-gold rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-accent-gold rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

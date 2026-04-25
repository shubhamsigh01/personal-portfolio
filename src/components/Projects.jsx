import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Expense Tracker with AI Insights',
    description: 'A full-stack web application to track daily expenses with real-time analytics and data visualization using AI insights.',
    impact: 'Built end-to-end: React frontend → Node.js API → MongoDB — deployed and live with 0 downtime.',
    image: '/expense.webp',
    live: 'https://expense-tracker-bay-ten-67.vercel.app',
    github: 'https://github.com/shubhamsigh01/expense-tracker',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    featured: true,
  },
  {
    title: 'Researcher-Agent',
    description: 'An autonomous AI research agent that searches the web, synthesizes information, and generates comprehensive research reports on any topic.',
    impact: 'Agentic pipeline using LangChain — reduces manual research time from hours to seconds.',
    image: '/sentiment.webp',
    live: 'https://researcher-agent-inky.vercel.app',
    github: 'https://github.com/shubhamsigh01/researcher-agent',
    tags: ['Python', 'LangChain', 'FastAPI', 'React'],
    featured: false,
  },
  {
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio built with React, Tailwind CSS, and Framer Motion — designed for performance and recruiter impact.',
    impact: 'Scored 90+ Lighthouse performance with lazy loading, code splitting, and full SEO.',
    image: '/portfolio.webp',
    live: null,
    github: 'https://github.com/shubhamsigh01',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const Projects = () => (
  <section id="projects" className="py-24 bg-[#0d0d0d]" aria-label="Featured projects">
    <div className="max-w-7xl mx-auto px-6">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto" />
        <p className="text-gray-400 mt-4 max-w-lg mx-auto">
          Things I've built — each one solving a real problem.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden card-hover flex flex-col"
            aria-label={`Project: ${project.title}`}
          >
            <div className="relative h-56 overflow-hidden group">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                loading="lazy"
                width={640}
                height={224}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />

              {project.featured && (
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg">
                  ✦ Featured
                </span>
              )}
            </div>

            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed text-sm">{project.description}</p>

              <div className="flex items-start space-x-2 mb-6 p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                <Zap size={14} className="text-cyan-400 mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-xs text-cyan-300 leading-relaxed">{project.impact}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-5 mt-auto pt-2 border-t border-white/5">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-sm font-semibold text-white hover:text-purple-400 transition-colors"
                  >
                    <Github size={16} aria-hidden="true" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

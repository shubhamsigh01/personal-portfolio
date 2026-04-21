import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Expense Tracker with AI Insights',
    description: 'A full-stack web application to track daily expenses with real-time analytics and data visualization using AI insights.',
    image: '/expense.png',
    live: 'https://expense-tracker-bay-ten-67.vercel.app',
    github: 'https://github.com/shubhamsigh01/expense-tracker',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js']
  },
  {
    title: 'Researcher-Agent',
    description: 'Built using advanced NLP techniques and XGBoost for high-accuracy sentiment classification of text data.',
    image: '/sentiment.png',
    live: 'https://researcher-agent-inky.vercel.app',
    github: 'https://github.com/shubhamsigh01/researcher-agent',
    tags: ['Python', 'NLP', 'Scikit-Learn', 'XGBoost']
  },
  {
    title: 'Portfolio',
    description: 'A modern, responsive web application designed to showcase my projects, skills, and experience to potential employers and collaborators.',
    image: '/portfolio.png',
    live: '#',
    github: '#',
    tags: ['React', 'Tailwind CSS', 'Framer Motion']
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#0d0d0d]">
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
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-3xl overflow-hidden card-hover"
            >
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm font-semibold text-white hover:text-purple-400 transition-colors"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

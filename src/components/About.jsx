import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-3xl"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am a Software Engineer with a strong interest in Machine Learning and intelligent systems. I am passionate about leveraging data to build meaningful solutions and creating clean, efficient code that enhances user experiences.</p>
            <p className="text-lg text-gray-300 leading-relaxed">With a solid foundation in Computer Science, I enjoy working at the intersection of theory and practical application, transforming ideas into scalable and impactful systems. I am continuously learning and exploring new technologies to adapt to the rapidly evolving tech landscape.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Location', value: 'India' },
                { label: 'Role', value: 'SDE | ML' },
                { label: 'Education', value: 'MCA (AI/ML)' },
                { label: 'Interests', value: 'AI, Web, Data' }
              ].map((item) => (
                <div key={item.label} className="glass p-6 rounded-2xl border-white/5">
                  <p className="text-sm text-cyan-400 mb-1">{item.label}</p>
                  <p className="text-xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            {/* GitHub Stats */}
            <div className="glass p-6 rounded-2xl border-white/5 w-full overflow-hidden">
              <p className="text-sm text-cyan-400 mb-4">GitHub Activity</p>
              <div className="flex flex-col space-y-4 items-center">
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=shubhamsigh01&theme=react&show_icons=true&hide_border=true&bg_color=0a0a0a&title_color=22d3ee&icon_color=c084fc&text_color=e5e7eb" 
                  alt="GitHub Stats" 
                  className="w-full max-w-[400px] h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

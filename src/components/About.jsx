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
              I am a passionate Software Engineer and Machine Learning Enthusiast based in India. My journey in technology is driven by a deep curiosity about how data can be leveraged to build intelligent systems and how clean code can create impactful user experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in Computer Science and a focus on AI/ML, I enjoy bridging the gap between theoretical models and practical, scalable applications. I'm constantly learning and exploring new technologies to stay at the forefront of the evolving tech landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

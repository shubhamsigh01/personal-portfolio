import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-sm font-medium text-cyan-400">Open for Opportunities</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Shubham Kumar</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            Aspiring Software Engineer & Machine Learning Enthusiast. 
            Crafting elegant solutions to complex problems through code and data.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#projects" className="btn-primary flex items-center justify-center group">
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="#contact" className="btn-secondary flex items-center justify-center">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />
            <div className="relative glass p-8 rounded-3xl border-white/20 w-80 h-96 flex flex-col items-center justify-center space-y-6">
              <div className="w-24 h-24 rounded-2xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                <Code className="text-cyan-400" size={48} />
              </div>
              <div className="w-24 h-24 rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                <Brain className="text-purple-400" size={48} />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-1 font-mono">&lt;coding /&gt;</p>
                <p className="text-sm text-gray-400 font-mono">model.fit(data)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

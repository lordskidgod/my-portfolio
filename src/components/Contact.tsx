import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };
  return <section id="contact" className="relative min-h-screen w-full bg-slate-950 px-6 py-20 overflow-hidden">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something
            amazing. Feel free to reach out through any of the following
            channels.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="space-y-8">
            <div className="grid gap-6">
              <div className="group bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email</h3>
                    <a href="mailto:janindu@example.com" className="text-gray-400 hover:text-purple-500 transition-colors">
                      janindu@example.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="group bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <Phone className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Phone</h3>
                    <a href="tel:+94701234567" className="text-gray-400 hover:text-purple-500 transition-colors">
                      +94 70 123 4567
                    </a>
                  </div>
                </div>
              </div>
              <div className="group bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <MapPin className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Location</h3>
                    <p className="text-gray-400">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <h3 className="text-white font-medium mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/lordskidgod" target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors group">
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/janindu-karunathilaka" target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors group">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
                </a>
                <a href="#" className="p-3 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors group">
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input type="text" id="name" placeholder="Your name" className="w-full p-4 bg-gray-900/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-800 hover:border-purple-500/50 transition-all duration-300" required />
                <label htmlFor="name" className="absolute left-4 -top-2.5 bg-slate-950 px-2 text-sm text-gray-400">
                  Name
                </label>
              </div>
              <div className="relative">
                <input type="email" id="email" placeholder="Your email" className="w-full p-4 bg-gray-900/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-800 hover:border-purple-500/50 transition-all duration-300" required />
                <label htmlFor="email" className="absolute left-4 -top-2.5 bg-slate-950 px-2 text-sm text-gray-400">
                  Email
                </label>
              </div>
              <div className="relative">
                <textarea id="message" placeholder="Your message" rows={4} className="w-full p-4 bg-gray-900/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-800 hover:border-purple-500/50 transition-all duration-300" required></textarea>
                <label htmlFor="message" className="absolute left-4 -top-2.5 bg-slate-950 px-2 text-sm text-gray-400">
                  Message
                </label>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 group disabled:opacity-50">
                {isSubmitting ? <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </> : showSuccess ? <>
                    Message Sent!
                    <ExternalLink className="w-5 h-5" />
                  </> : <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};
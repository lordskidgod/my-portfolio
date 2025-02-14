import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
export const Contact = () => {
  return <section id="contact" className="min-h-screen w-full bg-black px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Get in <span className="text-purple-500">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-purple-500 w-6 h-6" />
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-gray-400">hello@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-purple-500 w-6 h-6" />
                <div>
                  <h3 className="text-white font-medium">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-purple-500 w-6 h-6" />
                <div>
                  <h3 className="text-white font-medium">Location</h3>
                  <p className="text-gray-400">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 bg-gray-900/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <input type="email" placeholder="Email" className="w-full p-3 bg-gray-900/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <textarea placeholder="Message" rows={4} className="w-full p-3 bg-gray-900/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
            <button className="w-full py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>;
};
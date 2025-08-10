import React from 'react';
import { Heart, Users, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="gradient-text">Qarīn</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">What does "Qarīn" mean?</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                In Arabic, "Qarīn" (قرين) means a close companion - someone you're paired with all the time. 
                It represents the intimate relationship between you and your AI agent, always there to assist 
                and understand your needs.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                We believe AI agents should be accessible to everyone, not just large corporations. 
                Qarīn democratizes AI by removing coding barriers and giving you complete control 
                over your intelligent systems.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="p-3 bg-gradient-to-br from-red-600 to-pink-600 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Open Source</h4>
                <p className="text-gray-300 text-sm">
                  Built by the community, for the community. Transparent, secure, and always improving.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Community Driven</h4>
                <p className="text-gray-300 text-sm">
                  Every feature is shaped by real user needs and community feedback.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Privacy First</h4>
                <p className="text-gray-300 text-sm">
                  Your data stays on your infrastructure. No tracking, no vendor lock-in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
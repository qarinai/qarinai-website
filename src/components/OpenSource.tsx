import React from 'react';
import { Github, Star, GitFork, Users } from 'lucide-react';

const OpenSource = () => {
  return (
    <section id="open-source" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="gradient-text">Open Source</span> & Community
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our growing community of developers and contributors building the future of AI agents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 neon-border">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Apache 2.0 License</h3>
            <p className="text-gray-300 text-sm">
              Free to use, modify, and distribute. Enterprise-friendly with patent protection.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 neon-border">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">
                <GitFork className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Contributions Welcome</h3>
            <p className="text-gray-300 text-sm">
              Submit PRs, report issues, or suggest features. Everyone can contribute.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 neon-border">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Active Community</h3>
            <p className="text-gray-300 text-sm">
              Join discussions, get help, and share your AI agent creations.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://github.com/qarinai/qarinai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
          >
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <Star className="w-4 h-4" />
              <span>Star</span>
            </div>
          </a>

          <a
            href="https://github.com/qarinai/qarinai/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
          >
            <span>Contribution Guide</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
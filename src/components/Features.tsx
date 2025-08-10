import React from 'react';
import { Code, Database, Cpu, Zap, Globe, MessageCircle, Pocket as Docker, Layers } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'No Coding Needed',
      description: 'Build powerful AI agents without writing a single line of code. Our intuitive interface handles everything.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Supports RAG & MCP',
      description: 'Advanced Retrieval-Augmented Generation and Model Context Protocol support for enhanced AI capabilities.'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Any OpenAI-Compatible LLM',
      description: 'Works with OpenAI, self-hosted llama.cpp, Ollama, and any OpenAI-compatible language model.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'REST APIs to MCP',
      description: 'Convert existing REST APIs into MCP servers with just a few clicks. No backend modifications needed.'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Native Vector Storage',
      description: 'Built-in vector storage with per-store MCP for efficient knowledge retrieval and context management.'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Simple Chat Widget',
      description: 'Drop-in chat bubble widget that embeds instantly into any website or application.'
    },
    {
      icon: <Docker className="w-6 h-6" />,
      title: 'Easy Deployment',
      description: 'Simple Docker and Kubernetes deployment options for any infrastructure setup.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Self-Hosted Control',
      description: 'Complete control over your data and AI agents. Host anywhere you want, no vendor lock-in.'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Features for <span className="gradient-text">Modern AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to build, deploy, and manage intelligent AI agents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 neon-border"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg group-hover:from-blue-500 group-hover:to-cyan-500 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import React from 'react';
import { Lightbulb, Settings, Cpu, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Connect Your LLM',
      description: 'Link to any OpenAI-compatible LLM - from OpenAI to self-hosted Ollama or llama.cpp.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Define Your Idea',
      description: 'Start with your AI agent concept. What should it do? What knowledge should it have?'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Configure & Setup',
      description: 'Use our no-code interface to set up your agent, connect data sources, and configure behavior.'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Deploy Anywhere',
      description: 'Launch with Docker/Kubernetes and embed the chat widget into your website instantly.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From concept to deployment in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[50%] w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent z-0"></div>
              )}
              
              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white animate-glow">
                    {step.icon}
                  </div>
                </div>
                
                <div className="mb-2">
                  <span className="inline-block bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                    Step {index + 1}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
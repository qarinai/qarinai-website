import React from 'react';
import { Building2, Code2, Users, ShoppingCart } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      category: 'Business',
      icon: <Building2 className="w-8 h-8" />,
      title: 'Customer Support Automation',
      description: 'Embed intelligent agents into customer portals and dashboards for 24/7 support.',
      examples: [
        'Help desk automation',
        'Product recommendation engines',
        'FAQ and troubleshooting bots'
      ]
    },
    {
      category: 'E-commerce',
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Sales & Product Discovery',
      description: 'Guide customers through product catalogs with personalized AI shopping assistants.',
      examples: [
        'Product recommendation chatbots',
        'Order tracking assistance',
        'Personalized shopping guides'
      ]
    },
    {
      category: 'Development',
      icon: <Code2 className="w-8 h-8" />,
      title: 'API Integration Made Easy',
      description: 'Convert REST APIs into MCP servers without backend modifications.',
      examples: [
        'Legacy system modernization',
        'Third-party API abstraction',
        'Microservices communication'
      ]
    },
    {
      category: 'Enterprise',
      icon: <Users className="w-8 h-8" />,
      title: 'Internal Knowledge Systems',
      description: 'Create intelligent knowledge bases for employee self-service and training.',
      examples: [
        'HR policy assistants',
        'Technical documentation bots',
        'Training and onboarding guides'
      ]
    }
  ];

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Real-World <span className="gradient-text">Use Cases</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how businesses and developers are using Qarīn.ai to solve real problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 neon-border group"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl group-hover:from-blue-500 group-hover:to-cyan-500 transition-colors duration-300">
                  {useCase.icon}
                </div>
                <div>
                  <span className="inline-block bg-gray-700 text-cyan-400 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                    {useCase.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>

              <div className="ml-20">
                <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
                  Examples:
                </h4>
                <ul className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
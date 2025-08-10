import React, { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';

const Installation = () => {
  const [copiedDocker, setCopiedDocker] = useState(false);
  const [copiedKubernetes, setCopiedKubernetes] = useState(false);

//   const dockerCommand = `# Quick start with Docker Compose
// docker run -d \\
//   --name qarin-ai \\
//   -p 8080:8080 \\
//   -v qarin-data:/app/data \\
//   qarinai/qarinai:latest`;
  const dockerCommand = `# Quick start with Docker Compose
[command will be available soon]`;

  const kubernetesCommand = `# Deploy with Kubernetes
kubectl apply -f https://raw.githubusercontent.com/qarinai/qarinai/main/deploy/kubernetes.yaml`;

  const copyToClipboard = (text: string, setter: (value: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <section id="installation" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Quick <span className="gradient-text">Installation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get started in seconds with Docker Compose
          </p>
        </div>

        <div className="space-y-8">
          {/* Docker Installation */}
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 neon-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">Docker Compose</h3>
              <button
                onClick={() => copyToClipboard(dockerCommand, setCopiedDocker)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200"
              >
                {copiedDocker ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedDocker ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-green-400">{dockerCommand}</code>
            </pre>
          </div>

          {/* Kubernetes Installation */}
          {/* <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 neon-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">Kubernetes</h3>
              <button
                onClick={() => copyToClipboard(kubernetesCommand, setCopiedKubernetes)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200"
              >
                {copiedKubernetes ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedKubernetes ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="text-green-400">{kubernetesCommand}</code>
            </pre>
          </div> */}

          {/* Documentation Link */}
          <div className="text-center">
            <a
              href="https://github.com/qarinai/qarinai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 neon-glow"
            >
              <span>Full Documentation</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;
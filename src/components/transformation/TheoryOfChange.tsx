import { useState } from "react";

const TheoryOfChange = () => {
  const [activeTab, setActiveTab] = useState('pooling');

  const tabs = [
    { id: 'pooling', label: 'Pooling of Resources', color: '#FE0000' },
    { id: 'capital', label: 'Bundled Capital', color: '#0000FE' },
    { id: 'outcome', label: 'Outcome-Driven', color: '#FEB81C' },
    { id: 'network', label: 'Network Effects', color: '#007848' }
  ];

  return (
    <section id="theory" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Theory of Change
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Four interconnected pillars drive systemic transformation
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium text-white transition-all ${
                  activeTab === tab.id ? 'opacity-100' : 'opacity-60'
                }`}
                style={{ backgroundColor: tab.color }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg">
            {activeTab === 'pooling' && (
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#FE0000' }}>Pooling of Resources</h3>
                <p className="text-gray-700 text-lg mb-6">
                  The Fund consolidates fragmented BEE spend, corporate social investment, and government resources into one coordinated platform, maximizing efficiency and impact.
                </p>
              </div>
            )}
            {activeTab === 'capital' && (
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0000FE' }}>Bundled Capital Approach</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Rather than offering isolated interventions, the Fund provides bundled support: capital, capability, and market access working together to create sustainable businesses.
                </p>
              </div>
            )}
            {activeTab === 'outcome' && (
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#FEB81C' }}>Outcome-Driven Approach</h3>
                <p className="text-gray-700 text-lg mb-6">
                  Success is measured not by compliance, but by real outcomes: jobs created, businesses sustained, wealth distributed, and communities transformed.
                </p>
              </div>
            )}
            {activeTab === 'network' && (
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#007848' }}>Network Effects</h3>
                <p className="text-gray-700 text-lg mb-6">
                  The Fund leverages the power of ecosystems, creating connections between beneficiaries, corporates, government, and civil society that multiply impact.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheoryOfChange;
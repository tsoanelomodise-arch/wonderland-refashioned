const WhySection = () => {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why the Transformation Fund?
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            South Africa's transformation efforts have been fragmented, compliance-driven, and insufficient to address systemic inequality. The Transformation Fund represents a bold shift: a coordinated, outcome-focused mechanism that engineers inclusive growth at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 card-hover">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">The Problem</h3>
            <p className="text-gray-700">
              Decades of transformation initiatives have failed to create meaningful economic participation for black South Africans, women, youth, and rural communities.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 card-hover">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">The Opportunity</h3>
            <p className="text-gray-700">
              By pooling resources and creating network effects, we can achieve systemic impact that individual efforts cannot match.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 card-hover">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">The Solution</h3>
            <p className="text-gray-700">
              A national platform that bundles capital, capability, and market access to engineer inclusive economic growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
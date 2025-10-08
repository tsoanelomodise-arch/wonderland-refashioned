const ValueProposition = () => {
  return (
    <section id="value" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Value Proposition</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white text-gray-900 p-10 rounded-lg">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">For Government & Policy Makers</h3>
            <p className="text-gray-700">A platform to consolidate fragmented initiatives into one credible vehicle.</p>
          </div>

          <div className="bg-white text-gray-900 p-10 rounded-lg">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl font-bold text-white">R</span>
            </div>
            <h3 className="text-xl font-bold mb-4">For Private Sector & Investors</h3>
            <p className="text-gray-700">A mechanism to align BEE spend with scalable and sustainable transformation.</p>
          </div>

          <div className="bg-white text-gray-900 p-10 rounded-lg">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">For Labour, Communities & Society</h3>
            <p className="text-gray-700">A transparent fund that creates jobs, broadens ownership, and strengthens social stability.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
const OperatingModel = () => {
  return (
    <section id="operating-model" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Operating Model</h2>
          <p className="text-xl text-gray-700">The Fund's design revolves around:</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-white p-8 rounded-lg">
            <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">R</span>
            </div>
            <h3 className="font-bold mb-3 text-gray-900 text-lg">Access to Capital</h3>
            <p className="text-sm text-gray-600">Grant, debt, equity, quasi-equity</p>
          </div>

          <div className="text-center bg-white p-8 rounded-lg">
            <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 className="font-bold mb-3 text-gray-900 text-lg">Access to Capability</h3>
            <p className="text-sm text-gray-600">Training, mentorship, incubation</p>
          </div>

          <div className="text-center bg-white p-8 rounded-lg">
            <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 3H5L3 1m4 12v6a1 1 0 001 1h1m0 0h4m-5 0a1 1 0 001 1h2a1 1 0 001-1m-6 0V9a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1m-6 0H9m0 0H7m0 0v-1a1 1 0 011-1h2a1 1 0 011 1v1"></path>
              </svg>
            </div>
            <h3 className="font-bold mb-3 text-gray-900 text-lg">Access to Markets</h3>
            <p className="text-sm text-gray-600">Supply chains, export markets, localisation</p>
          </div>

          <div className="text-center bg-white p-8 rounded-lg">
            <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 className="font-bold mb-3 text-gray-900 text-lg">Transformation Index</h3>
            <p className="text-sm text-gray-600">Data-driven accountability</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700">Governance is underpinned by partnerships with government, DFIs, corporates, and civil society.</p>
        </div>
      </div>
    </section>
  );
};

export default OperatingModel;
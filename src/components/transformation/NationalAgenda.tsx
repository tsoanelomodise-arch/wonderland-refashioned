const NationalAgenda = () => {
  return (
    <section id="national-agenda" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <div className="bg-green-50 p-12 rounded-lg border-2 border-primary">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">
              Advancing the National Agenda
            </h2>
            <p className="text-xl text-center mb-12 text-gray-700">
              The Fund supports South Africa's core policy priorities:
            </p>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-900 font-medium text-lg">Entrepreneurship and SMME development</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-900 font-medium text-lg">Job creation and poverty reduction</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-900 font-medium text-lg">Broadening black ownership and participation</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-900 font-medium text-lg">Strengthening social protection and economic resilience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationalAgenda;
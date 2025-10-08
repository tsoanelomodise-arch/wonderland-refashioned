const ImplementationPlan = () => {
  return (
    <section id="implementation" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Implementation Plan</h2>
          <p className="text-xl mb-16">The Fund will roll out in phases:</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Pre-Launch</h3>
            <p>Public consultation and design</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Activation</h3>
            <p>Establish governance and anchor pledges</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Scale-Up</h3>
            <p>Expand across key sectors and value chains</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">4</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Institutionalisation</h3>
            <p>Embed the Fund as a permanent feature</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationPlan;
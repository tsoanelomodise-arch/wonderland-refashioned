import { X } from "lucide-react";

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
}

const AboutModal = ({ open, onClose }: AboutModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-primary">About Us</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Building a Future for All South Africans</h3>
              <p className="text-gray-700 leading-relaxed">
                The Transformation Fund is South Africa's national platform for inclusive economic transformation. 
                We pool resources from government, corporates, and development finance institutions to create 
                systemic impact that individual efforts cannot achieve.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A South Africa where economic opportunity is accessible to all, regardless of race, gender, 
                location, or socioeconomic background. Where black entrepreneurs, women, youth, and rural 
                communities are not just participants in the economy, but drivers of its growth.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To engineer inclusive economic growth through coordinated, bundled support that provides 
                capital, capability, and market access to historically disadvantaged South Africans. We 
                measure our success not in compliance, but in jobs created, businesses sustained, and 
                communities transformed.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why This Matters</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Despite decades of transformation efforts, South Africa remains one of the most unequal 
                societies in the world. Fragmented initiatives, compliance-driven approaches, and lack of 
                coordination have failed to create meaningful economic participation for the majority of 
                our citizens.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The Transformation Fund represents a fundamental shift: from fragmentation to coordination, 
                from compliance to outcomes, from individual efforts to systemic impact. This is not just 
                about economic justice – it's about creating the stable, prosperous society that all South 
                Africans deserve.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
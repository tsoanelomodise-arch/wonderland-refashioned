import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

interface FAQModalProps {
  open: boolean;
  onClose: () => void;
}

const FAQModal = ({ open, onClose }: FAQModalProps) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);

  if (!open) return null;

  const faqs = [
    {
      question: "What is the Transformation Fund?",
      answer: "The Transformation Fund is a national platform designed to pool resources and create systemic impact for inclusive economic growth in South Africa. It represents a bold shift from fragmented, compliance-driven transformation efforts to a coordinated approach that engineers inclusive growth at scale."
    },
    {
      question: "How does the Fund work?",
      answer: "The Fund operates on a bundled support model providing three key pillars: Access to Capital (grants, debt, equity, quasi-equity), Access to Capability (training, mentorship, incubation), and Access to Markets (supply chains, export markets, localisation). All interventions are monitored through the Transformation Index for data-driven accountability."
    },
    {
      question: "Who can participate in the Fund?",
      answer: "The Fund supports black entrepreneurs, SMMEs, women-owned businesses, youth entrepreneurs, and businesses in rural communities. We also welcome participation from corporates, development finance institutions, government entities, and civil society organizations who want to contribute to systemic transformation."
    },
    {
      question: "How is this different from existing BEE initiatives?",
      answer: "Unlike fragmented, compliance-driven BEE initiatives, the Transformation Fund creates a coordinated national platform that pools resources, provides bundled support (capital + capability + markets), and measures success through outcomes rather than compliance. This systemic approach creates impact at scale that individual efforts cannot achieve."
    },
    {
      question: "How can my organization get involved?",
      answer: "Organizations can participate as funders (contributing capital), capability partners (providing training and mentorship), market access partners (creating supply chain opportunities), or beneficiaries (receiving bundled support). Contact us to discuss partnership opportunities tailored to your organization's goals and capabilities."
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-primary">Frequently Asked Questions</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-primary pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQModal;
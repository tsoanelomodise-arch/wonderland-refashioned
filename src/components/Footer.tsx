import logoDtic from "@/assets/logo-dtic.png";
import logoNef from "@/assets/logo-nef.png";
import logoSeda from "@/assets/logo-seda.png";
import logoIdc from "@/assets/logo-idc.png";

const Footer = () => {
  const partners = [
    {
      name: "The Department of Trade, Industry and Competition (the dtic)",
      logo: logoDtic
    },
    {
      name: "National Empowerment Fund",
      logo: logoNef
    },
    {
      name: "Small Enterprise Development and Finance Agency",
      logo: logoSeda
    },
    {
      name: "The Industrial Development Corporation of South Africa Ltd (IDC)",
      logo: logoIdc
    }
  ];

  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Our Strategic Partners
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Working together with leading government agencies and development finance institutions 
            to drive economic transformation across South Africa
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white/95 backdrop-blur p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 w-full max-w-48 h-32 flex items-center justify-center"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Transformation Fund. All rights reserved. | Building an inclusive economy for all South Africans.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
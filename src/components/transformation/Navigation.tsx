import { useState } from "react";
import { Menu, X } from "lucide-react";
import AboutModal from "./modals/AboutModal";
import StoriesModal from "./modals/StoriesModal";
import ContactsModal from "./modals/ContactsModal";
import FAQModal from "./modals/FAQModal";
import logoImage from "@/assets/transfund-logo.jpg";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [storiesOpen, setStoriesOpen] = useState(false);
  const [contactsOpen, setContactsOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white fixed w-full top-0 z-50 shadow-sm" role="navigation">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div className="flex items-center">
              <button onClick={() => scrollToSection('home')} className="cursor-pointer">
                <img 
                  src={logoImage} 
                  alt="Transformation Fund Logo" 
                  className="h-12 lg:h-16 w-auto transition-all"
                />
              </button>
            </div>
            
            <div className="hidden lg:flex items-center space-x-1">
              <button onClick={() => scrollToSection('home')} className="nav-link px-4 py-2 text-gray-700 hover:text-primary font-bold transition-colors">Home</button>
              <button onClick={() => setAboutOpen(true)} className="nav-link px-4 py-2 text-gray-700 hover:text-primary font-bold transition-colors">About</button>
              <a href="#why" className="nav-link px-4 py-2 text-gray-700 hover:text-primary font-bold transition-colors">Why</a>
              <button onClick={() => setStoriesOpen(true)} className="nav-link px-4 py-2 text-gray-700 hover:text-primary font-bold transition-colors">Stories</button>
              <button onClick={() => setFaqOpen(true)} className="nav-link px-4 py-2 text-gray-700 hover:text-primary font-bold transition-colors">FAQ</button>
              <button onClick={() => setContactsOpen(true)} className="nav-link px-4 py-2 text-gray-700 hover:text-primary font-bold transition-colors">Contacts</button>
              <a 
                href="https://nefonlineportal-ckbydma2ace2hkdq.southafricanorth-01.azurewebsites.net/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary text-white px-6 py-2 rounded-sm text-sm font-medium hover:opacity-90 transition-all ml-4"
              >
                Portal Login
              </a>
            </div>
            
            <div className="lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-primary focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-primary px-3 py-2 text-base font-bold">Home</button>
              <button onClick={() => { setAboutOpen(true); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-primary px-3 py-2 text-base font-bold">About</button>
              <a href="#why" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-primary px-3 py-2 text-base font-bold">Why</a>
              <button onClick={() => { setStoriesOpen(true); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-primary px-3 py-2 text-base font-bold">Stories</button>
              <button onClick={() => { setFaqOpen(true); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-primary px-3 py-2 text-base font-bold">FAQ</button>
              <button onClick={() => { setContactsOpen(true); setMobileMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-primary px-3 py-2 text-base font-bold">Contacts</button>
              <a 
                href="https://nefonlineportal-ckbydma2ace2hkdq.southafricanorth-01.azurewebsites.net/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block bg-primary text-white px-3 py-2 text-base font-bold hover:opacity-90 transition-all"
              >
                Portal Login
              </a>
            </div>
          </div>
        )}
      </nav>

      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
      <StoriesModal open={storiesOpen} onClose={() => setStoriesOpen(false)} />
      <ContactsModal open={contactsOpen} onClose={() => setContactsOpen(false)} />
      <FAQModal open={faqOpen} onClose={() => setFaqOpen(false)} />
    </>
  );
};

export default Navigation;
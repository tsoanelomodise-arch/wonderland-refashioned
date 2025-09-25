import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FundingPrograms = () => {
  const programs = [
    {
      id: "startup-grants",
      title: "Startup and Informal Business Grants",
      description: "Startup grants or \"vouchers\" for early-stage and informal enterprises",
      badge: "POPULAR",
      badgeColor: "bg-accent text-accent-foreground",
      features: [
        "Seed capital to entrepreneurs who lack initial funding or collateral",
        "Tailored to businesses that cannot navigate complex loan applications", 
        "Easy-access grants with minimal paperwork"
      ],
      ctaText: "Apply Now",
      footerNote: "No application fees"
    },
    {
      id: "growth-loans",
      title: "Growth and Expansion Loans",
      description: "Patient, concessionary loans for scaling up established MSMEs, delivered with flexible terms and performance-based disbursements.",
      badge: "RECOMMENDED", 
      badgeColor: "bg-primary text-primary-foreground",
      features: [
        "Enable growing firms to invest in capacity (new equipment, larger facilities, hiring staff)",
        "Fulfill large contracts that require upfront capital",
        "Aimed at businesses that have outgrown micro-finance but are not served by commercial banks"
      ],
      ctaText: "Apply Now",
      footerNote: "Fast-track available"
    },
    {
      id: "equity-investment",
      title: "Equity and Co-Investment Instruments", 
      description: "Equity funding for larger-scale ventures and high-growth companies, particularly in priority sectors.",
      badge: "EQUITY",
      badgeColor: "bg-blue-600 text-white",
      features: [
        "Support black industrialists and innovative startups needing substantial capital injections",
        "Addresses enterprises that are beyond the scope of small loans",
        "Strategic investor with development mandate"
      ],
      ctaText: "Apply Now",
      footerNote: "Pitch deck required"
    },
    {
      id: "blended-finance",
      title: "Blended Finance and Guarantees",
      description: "Blended financing solutions that combine public and private capital",
      badge: "SECURE",
      badgeColor: "bg-emerald-600 text-white", 
      features: [
        "Encourage commercial banks and other investors to extend finance to target segments",
        "Reduce risk through partial credit guarantees and risk-sharing facilities",
        "Aimed at situations where obstacle is risk perception and cost, not absolute absence of capital"
      ],
      ctaText: "Apply Now",
      footerNote: "Due diligence required"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-primary/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transformation Fund suite of funding programmes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive funding solutions tailored to support transformation, innovation, and sustainable economic development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program) => (
            <Card key={program.id} className="group hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 hover:-translate-y-2 border-0 shadow-[var(--card-shadow)]">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <Badge className={program.badgeColor}>
                    {program.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t">
                  <Button variant="cta" className="w-full mb-3">
                    {program.ctaText}
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    {program.footerNote}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary to-primary-dark p-8 rounded-lg text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Platform Advantages Over Traditional Approaches</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Coordination at Scale</h4>
              <p className="text-white/90">Overcomes fragmentation and information failures that plague traditional MSME development programs.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Evidence-Based Iteration</h4>
              <p className="text-white/90">Telemetry-driven platform enables real-time adjustment and continuous improvement based on actual outcomes.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Sustainable Economics</h4>
              <p className="text-white/90">Network effects and shared infrastructure create sustainable unit economics and long-term viability.</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="text-2xl font-bold mb-4">Not sure which program fits your needs?</h4>
            <p className="text-white/90 mb-6 text-lg">
              Our funding specialists will help you choose the perfect program and guide you through the application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" onClick={() => (document.getElementById('assessment-modal') as HTMLDialogElement)?.showModal()}>Take Assessment Quiz</Button>
              <Button variant="hero-secondary" onClick={() => (document.getElementById('consultation-modal') as HTMLDialogElement)?.showModal()}>Schedule Consultation</Button>
            </div>
          </div>
          
          <Button variant="hero-secondary" className="mb-4">
            Learn About Platform Architecture  →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FundingPrograms;
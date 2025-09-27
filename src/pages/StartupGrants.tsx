import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import startupGrantsHeader from "@/assets/startup-grants-header.jpg";
import Footer from "@/components/Footer";

const StartupGrants = () => {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${startupGrantsHeader})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Startup and Informal Business Grants
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Capability vouchers designed to provide seed capital for early-stage and informal enterprises
            </p>
            <Button size="lg" variant="cta">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Program Overview
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">
                Instrument
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Small startup grants or convertible "vouchers" for early-stage and informal enterprises.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">
                Target Businesses
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Township shopkeepers, youth-led tech enterprises, entrepreneurs building prototypes, and informal businesses seeking formalization.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">
                Product–Market Fit
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Tailored to micro and informal businesses that cannot navigate complex loan applications with minimal paperwork.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium">
              Learn About Program Details →
            </Button>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Use Case
            </h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Provide seed capital to entrepreneurs who lack initial funding or collateral – for example, 
                  a township shopkeeper expanding into a formal storefront, or a youth-led tech micro-enterprise 
                  building a prototype.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product-Market Fit Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Product–Market Fit
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">Register Business</h4>
                <p className="text-slate-600 leading-relaxed">Complete business registration process</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">Complete Training</h4>
                <p className="text-slate-600 leading-relaxed">Finish required capability training</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">Hit Sales Target</h4>
                <p className="text-slate-600 leading-relaxed">Achieve first sales milestone</p>
              </div>
            </div>

            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <p className="text-slate-600 text-lg leading-relaxed">
                  Tailored to micro and informal businesses that cannot navigate complex loan applications. 
                  These grants would be easy-access (minimal paperwork) and disbursed in tranches linked 
                  to developmental milestones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Overcoming Bureaucratic Failures Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Overcoming Bureaucratic Failures
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Traditional Approach</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Lengthy application forms</li>
                    <li>• Significant delays</li>
                    <li>• Complex compliance requirements</li>
                    <li>• Money without capacity building</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Our Solution</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Streamlined digital platform</li>
                    <li>• Focus on outcomes, not paperwork</li>
                    <li>• Conditional grants with capability requirements</li>
                    <li>• Embedded technical support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <Card className="mt-8">
              <CardContent className="p-8">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The grant can be conditional on the enterprise adopting certain capability enhancements 
                  (e.g. basic bookkeeping on the Fund's platform), which both simplifies reporting and 
                  improves the business's chance of survival. Embedding these conditions addresses a common 
                  failure of past schemes where money alone was given without improving the recipient's capacity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Apply for Startup Grants?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the seed capital and capability support you need to formalize and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta">
                Start Application
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default StartupGrants;
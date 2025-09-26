import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Requirements from "./pages/Requirements";
import StartupGrants from "./pages/StartupGrants";
import Navigation from "./components/Navigation";
import Modal from "@/components/Modal";
import AssessmentQuiz from "@/components/AssessmentQuiz";
import ScheduleConsultation from "@/components/ScheduleConsultation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/startup-grants" element={<StartupGrants />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Global Modals */}
        <Modal id="assessment-modal">
          <AssessmentQuiz />
        </Modal>
        
        <Modal id="consultation-modal">
          <ScheduleConsultation />
        </Modal>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

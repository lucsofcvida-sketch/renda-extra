import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { SocialProofSection } from './components/SocialProofSection';
import { OfferSection } from './components/OfferSection';
import { FAQSection, Footer } from './components/FAQSection';
import { FloatingElements } from './components/FloatingElements';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a brief loading sequence for a premium feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-dark-900 flex flex-col items-center justify-center"
          >
            <div className="loader mb-6" />
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gold-500 font-medium tracking-widest uppercase text-sm"
            >
              Preparando seu acesso...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <main className="min-h-screen bg-dark-900 font-sans selection:bg-gold-500/30 selection:text-gold-100">
          <HeroSection />
          <FeaturesSection />
          <SocialProofSection />
          <OfferSection />
          <FAQSection />
          <Footer />
          <FloatingElements />
        </main>
      )}
    </>
  );
}

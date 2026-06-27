import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';

export function FloatingElements() {
  const [showMobileBar, setShowMobileBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show mobile bar after scrolling past 400px
      if (window.scrollY > 400) {
        setShowMobileBar(true);
      } else {
        setShowMobileBar(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.a 
        href="https://wa.me/5541998237709?text=Quero%20aumentar%20a%20minha%20renda." 
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed z-50 bottom-24 md:bottom-8 right-4 md:right-8 bg-green-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform hover-glow flex items-center justify-center"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>

      {/* Mobile Sticky CTA Bar */}
      <AnimatePresence>
        {showMobileBar && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="md:hidden fixed bottom-0 left-0 w-full bg-dark-900 border-t border-gold-500/30 p-4 z-40 shadow-2xl flex items-center justify-between gap-4"
          >
            <div>
              <p className="text-xs text-gray-400">Por apenas</p>
              <p className="text-lg font-black gold-text-gradient leading-none">R$ 19,90</p>
            </div>
            <a 
              href="https://pay.kiwify.com.br/ML7BYLU" 
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient text-dark-900 font-bold px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm whitespace-nowrap shadow-lg active:scale-95 transition-transform"
            >
              GARANTIR E-BOOK.
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

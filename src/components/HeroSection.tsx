import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Simple Header */}
      <div className="absolute top-0 left-0 w-full p-4 md:p-6 flex justify-center md:justify-end z-20">
        <a 
          href="https://pay.kiwify.com.br/ML7BYLU" 
          target="_blank"
          rel="noopener noreferrer"
          className="glass text-gold-500 font-bold px-6 py-2.5 rounded-full hover:bg-gold-500/10 transition-colors text-sm uppercase tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
        >
          Compre Agora
        </a>
      </div>

      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full border border-gold-500/30 text-gold-400 text-sm font-semibold mb-8 glass tracking-wide">
            ⚠️ Vagas com Desconto Limitadas
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"
        >
          Comece hoje com 12 estratégias práticas para <span className="gold-text-gradient">transformar sua renda</span> e descobrir como alcançar ganhos de R$ 10 mil por mês ou mais.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light"
        >
          Aprenda 12 métodos simples, validado e direto ao ponto que pode ser aplicado usando <strong className="text-white font-medium">apenas um celular e acesso à internet</strong>.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <a 
            href="https://pay.kiwify.com.br/ML7BYLU" 
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient hover-glow text-dark-900 font-bold text-lg md:text-xl px-8 py-5 rounded-xl w-full md:w-auto flex items-center justify-center gap-2 uppercase tracking-wide transition-all"
          >
            Quero Começar Agora
            <ArrowRight className="w-6 h-6" />
          </a>
          <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
            <ShieldCheck className="w-4 h-4 text-green-400" />
            <span>Compra 100% Segura. Acesso Imediato.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

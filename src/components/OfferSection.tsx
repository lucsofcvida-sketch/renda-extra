import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, ArrowRight, Lock } from 'lucide-react';

const deliverables = [
  "Curso Completo em Vídeo Aulas (Passo a Passo)",
  "Atualizações Constantes do Método",
  "Acesso ao Grupo VIP de Alunos",
  "Suporte Individual Especializado",
  "Bônus Exclusivos de Escala de Ganhos"
];

export function OfferSection() {
  return (
    <section id="oferta" className="py-24 px-4 relative bg-dark-800 border-y border-gold-500/20">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Tudo o que você precisa para <span className="gold-text-gradient">começar hoje</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Deliverables */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">O que você recebe:</h3>
            <ul className="space-y-4">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pricing Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 relative border-gold-500/50 shadow-[0_0_40px_rgba(212,175,55,0.15)] text-center"
          >
            {/* Guarantee Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 gold-gradient px-4 py-1.5 rounded-full text-dark-900 font-bold text-sm shadow-lg flex items-center gap-2 whitespace-nowrap">
              <ShieldCheck className="w-4 h-4" />
              Garantia Incondicional de 7 Dias
            </div>

            <p className="text-gray-400 mb-2 mt-4 font-medium">De <span className="line-through decoration-red-500/70">R$ 97,90</span> por apenas:</p>
            
            <div className="mb-2">
              <span className="text-xl font-medium text-gray-300">Por apenas </span>
              <span className="text-6xl font-black gold-text-gradient tracking-tighter">R$19,90</span>
            </div>
            
            <p className="text-gray-400 mb-8 text-sm">à vista</p>

            <a 
              href="https://pay.kiwify.com.br/ML7BYLU" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full gold-gradient hover-glow text-dark-900 font-bold text-xl px-8 py-5 rounded-xl flex items-center justify-center gap-2 uppercase tracking-wide transition-all mb-4"
            >
              Quero Acessar Agora
              <ArrowRight className="w-6 h-6" />
            </a>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Lock className="w-4 h-4" />
              <span>Ambiente 100% Seguro</span>
            </div>
          </motion.div>
        </div>

        {/* Guarantee Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto border-2 border-gold-500/40 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 bg-gold-500/5"
        >
          <div className="bg-gold-500 text-dark-900 p-4 rounded-full shrink-0">
            <ShieldCheck className="w-12 h-12" />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-gold-400 mb-2">Risco Zero Absoluto</h4>
            <p className="text-gray-300 text-sm md:text-base">
              Você possui garantia incondicional de 7 dias. Se você aplicar o método e achar que não é para você, basta enviar um único e-mail e devolveremos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Globe, TrendingUp, Smartphone, ListOrdered, PiggyBank, Headset, PlayCircle, CheckCircle, Rocket } from 'lucide-react';

const benefits = [
  { icon: Globe, title: "Trabalhe de onde quiser", desc: "Liberdade geográfica total. Faça seus próprios horários." },
  { icon: TrendingUp, title: "Sem experiência", desc: "Método desenhado para iniciantes. Comece do zero absoluto." },
  { icon: Smartphone, title: "Apenas celular", desc: "Você não precisa de um computador potente para começar." },
  { icon: ListOrdered, title: "Método passo a passo", desc: "Instruções claras: clique a clique, sem enrolação." },
  { icon: PiggyBank, title: "Baixo investimento", desc: "Estratégias para começar com o mínimo possível ou zero." },
  { icon: Headset, title: "Suporte completo", desc: "Equipe preparada para tirar todas as suas dúvidas." },
];

const steps = [
  { icon: CheckCircle, title: "1. Faça sua inscrição", desc: "Garanta seu acesso agora mesmo com o desconto especial." },
  { icon: PlayCircle, title: "2. leia o e-book.", desc: "Acesse o material e leia o conteúdo direto ao ponto." },
  { icon: Rocket, title: "3. Comece a aplicar", desc: "Coloque em prática e veja os primeiros resultados surgirem." },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 relative bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        
        {/* Benefits */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Por que esse método é <span className="gold-text-gradient">diferente de tudo</span>?
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Descubra as vantagens exclusivas de aplicar a nossa metodologia validada.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:border-gold-500/50 transition-colors group"
            >
              <div className="bg-dark-700/50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500/10 transition-colors">
                <item.icon className="w-7 h-7 text-gold-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Como funciona na <span className="gold-text-gradient">prática</span>?
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">O caminho mais curto entre você e seus primeiros resultados.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gold-500/20 -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 glass p-8 rounded-2xl text-center bg-dark-900 border-gold-500/20"
            >
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <step.icon className="w-8 h-8 text-dark-900" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gold-400">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Star, TrendingUp, Wallet } from 'lucide-react';

const testimonials = [
  { name: "Carlos Silva", city: "São Paulo, SP", text: "Eu achava que era mais uma daquelas promessas falsas, mas apliquei o passo a passo e na primeira semana já fiz R$ 800. Mudou minha visão completamente!" },
  { name: "Amanda Costa", city: "Belo Horizonte, MG", text: "Trabalho o dia todo e uso só meu horário de almoço e a noite para aplicar. Esse mês consegui tirar mais de R$ 2.500 só com o celular. Gratidão!" },
  { name: "Ricardo Mendes", city: "Curitiba, PR", text: "O suporte é sensacional e as aulas vão direto ao ponto. Não tem enrolação. Recomendo para qualquer um que queira uma renda extra de verdade." }
];

export function SocialProofSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Results Showcase */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              O que é possível <span className="gold-text-gradient">alcançar</span>?
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Resultados típicos de alunos que aplicam o método com consistência (imagens ilustrativas).</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl flex items-center justify-between border-l-4 border-l-green-500"
            >
              <div>
                <p className="text-sm text-gray-400 mb-1">Ganhos últimos 7 dias</p>
                <p className="text-3xl font-bold text-white">R$ 2.450<span className="text-gray-500 text-xl">,00</span></p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-full">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl flex items-center justify-between border-l-4 border-l-gold-500"
            >
              <div>
                <p className="text-sm text-gray-400 mb-1">Saldo Disponível</p>
                <p className="text-3xl font-bold text-white">R$ 8.940<span className="text-gray-500 text-xl">,50</span></p>
              </div>
              <div className="bg-gold-500/20 p-4 rounded-full">
                <Wallet className="w-8 h-8 text-gold-500" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Histórias de <span className="gold-text-gradient">Sucesso</span>
          </motion.h2>
          <p className="text-gray-400">Pessoas reais que deram o primeiro passo e mudaram de vida.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass p-8 rounded-2xl relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-dark-700 flex items-center justify-center text-gold-500 font-bold text-xl border border-gold-500/30">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

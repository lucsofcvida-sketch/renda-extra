import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  { q: "Preciso ter experiência anterior?", a: "Não! O método foi desenhado desde o zero para pessoas comuns. Mostramos clique a clique tudo o que você precisa fazer." },
  { q: "Preciso de um computador potente?", a: "Não. 100% do método pode ser aplicado usando apenas o seu celular com acesso à internet." },
  { q: "Em quanto tempo vejo resultados?", a: "Os resultados variam de pessoa para pessoa, dependendo da sua dedicação. No entanto, temos alunos que já conseguiram lucrar nos primeiros dias." },
  { q: "E se eu tiver dúvidas?", a: "Temos uma equipe de suporte completa e dedicada para te ajudar, além de acesso exclusivo ao grupo VIP de alunos." },
  { q: "Como recebo acesso?", a: "Assim que o pagamento for aprovado (Pix e Cartão são imediatos), você receberá o link de acesso no seu e-mail cadastrado." }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Perguntas <span className="gold-text-gradient">Frequentes</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-5 flex items-center justify-between font-medium text-lg hover:bg-white/5 transition-colors"
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 text-gold-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 pt-0 text-gray-400 border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-gold-500/20 pt-16 pb-24 md:pb-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-black tracking-widest text-white mb-8 uppercase">
          MÉTODO <span className="text-gold-500">RENDA EXTRA</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium text-gray-400">
          <a href="/politica-de-privacidade.html" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Política de Privacidade</a>
          <a href="/termos-de-uso.html" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Termos de Uso</a>
          <a href="https://wa.me/5541998237709?text=Quero%20aumentar%20a%20minha%20renda." target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Contato</a>
          <a href="#" className="hover:text-gold-400 transition-colors">Instagram</a>
          <a href="https://wa.me/5541998237709?text=Quero%20aumentar%20a%20minha%20renda." target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">WhatsApp</a>
        </div>
        
        <p className="text-xs text-gray-600 max-w-2xl leading-relaxed mb-4">
          Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site não é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial independente da FACEBOOK, Inc. Os resultados podem variar de pessoa para pessoa.
        </p>
        
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Método Renda Extra. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

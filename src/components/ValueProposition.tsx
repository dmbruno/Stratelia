import { motion } from "framer-motion";
import { TrendingUp, Lightbulb } from "lucide-react";

const ValueProposition = () => {
  return (
    <section id="propuesta" className="py-24 md:py-32 bg-surface text-surface-foreground">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary tracking-widest uppercase">
              Nuestra filosofía
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
              No vendemos tecnología,{" "}
              <br />
              vendemos{" "}
              <span className="font-accent text-primary">crecimiento</span>
            </h2>
            <p className="text-surface-foreground/70 text-lg leading-relaxed mb-8">
              La inteligencia artificial no es un fin, es el medio. Combinamos la sabiduría de los datos 
              con la magia de la innovación para crear soluciones que transforman tu empresa 
              desde adentro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Lightbulb size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">El Sabio</h4>
                  <p className="text-surface-foreground/60 text-sm">Datos, análisis y estrategia rigurosa como base de cada decisión.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">El Mago</h4>
                  <p className="text-surface-foreground/60 text-sm">Innovación y creatividad para convertir lo complejo en algo simple y poderoso.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg bg-surface-foreground/5 border border-surface-foreground/10 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="text-7xl md:text-8xl font-accent text-primary mb-4">∞</div>
                <p className="text-surface-foreground/50 text-sm uppercase tracking-widest">Posibilidades ilimitadas</p>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg bg-primary/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

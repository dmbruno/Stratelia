import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-primary tracking-widest uppercase mb-6">
              Agencia de Inteligencia Artificial
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            Democratizando la IA{" "}
            <br className="hidden sm:block" />
            para{" "}
            <span className="font-accent text-primary">
              escalar tu negocio
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            No vendemos tecnología, vendemos{" "}
            <span className="font-accent text-foreground text-xl md:text-2xl">crecimiento</span>.
            Transformamos empresas con soluciones de IA que generan resultados reales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity group"
            >
              Agenda una llamada
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-lg border border-border text-foreground px-8 py-4 text-base font-medium hover:bg-secondary transition-colors"
            >
              Descubre más
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

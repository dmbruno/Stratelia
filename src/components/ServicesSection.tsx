import { motion } from "framer-motion";
import { Eye, Zap, Shield, Rocket, Flame } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Claridad",
    description: "Diagnosticamos tu negocio para identificar exactamente dónde la IA puede generar el mayor impacto.",
  },
  {
    icon: Zap,
    title: "Impacto",
    description: "Implementamos soluciones que multiplican resultados: automatización, análisis predictivo y optimización.",
  },
  {
    icon: Shield,
    title: "Confianza",
    description: "Procesos transparentes, datos seguros y resultados medibles. Sin cajas negras, sin promesas vacías.",
  },
  {
    icon: Rocket,
    title: "Velocidad",
    description: "De la idea al prototipo en semanas, no meses. Metodología ágil aplicada a la transformación digital.",
  },
  {
    icon: Flame,
    title: "Audacia",
    description: "No seguimos tendencias, las creamos. Estrategias disruptivas para quienes quieren liderar su industria.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Nuestro enfoque
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Cinco pilares para{" "}
            <span className="font-accent text-primary">transformar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Cada proyecto comienza con un principio y termina con resultados tangibles.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group relative rounded-lg border border-border bg-background p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

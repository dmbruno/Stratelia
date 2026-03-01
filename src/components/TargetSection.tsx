import { motion } from "framer-motion";
import { Building2, Rocket, ArrowRight } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Dueños de Empresas",
    subtitle: "Que buscan escalar con inteligencia",
    points: [
      "Automatización de procesos operativos",
      "Análisis predictivo para tomar decisiones",
      "Reducción de costos sin perder calidad",
      "Integración de IA en flujos existentes",
    ],
  },
  {
    icon: Rocket,
    title: "Startups",
    subtitle: "Que quieren crecer más rápido",
    points: [
      "MVPs potenciados con inteligencia artificial",
      "Escalabilidad desde el día uno",
      "Ventaja competitiva tecnológica",
      "Iteración rápida basada en datos",
    ],
  },
];

const TargetSection = () => {
  return (
    <section id="target" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            ¿Para quién es esto?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Construido para{" "}
            <span className="font-accent text-primary">visionarios</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Si estás aquí, es porque sabes que el futuro no se espera — se construye.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-lg border border-border bg-background p-8 md:p-10 hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <audience.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{audience.title}</h3>
              <p className="text-muted-foreground font-accent text-lg mb-6">{audience.subtitle}</p>
              <ul className="space-y-3">
                {audience.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ArrowRight size={16} className="text-primary shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetSection;

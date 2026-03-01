import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 15, suffix: "+", label: "Empresas transformadas" },
  { value: 60, suffix: "+", label: "Procesos automatizados" },
  { value: 97, suffix: "%", label: "Satisfacción de clientes" },
  { value: 300, suffix: "K+", label: "Horas ahorradas" },
];

function AnimatedCounter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const StatsSection = () => {
  return (
    <section className="py-20 bg-surface text-surface-foreground">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-surface-foreground/70 max-w-xl mx-auto">
            Números reales de empresas que confiaron en nosotros para transformar sus operaciones.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base text-surface-foreground/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

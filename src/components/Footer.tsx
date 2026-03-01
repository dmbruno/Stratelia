import { motion } from "framer-motion";
import { Mail, Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="py-16 md:py-24 bg-surface text-surface-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ¿Listo para{" "}
            <span className="font-accent text-primary">transformar</span>
            {" "}tu negocio?
          </h2>
          <p className="text-surface-foreground/60 text-lg mb-8">
            El primer paso es una conversación. Sin compromiso, sin letra chica.
          </p>
          <a
            href="mailto:stratelia.sla@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            stratelia.sla@gmail.com
          </a>
        </motion.div>

        <div className="border-t border-surface-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div
            className="flex justify-center md:justify-start items-baseline gap-0 text-3xl md:text-4xl italic font-normal tracking-tight"
            style={{ fontFamily: '"Times New Roman MT", "Times New Roman", serif' }}
          >
            <span>Stratel</span>
            <span className="text-[rgb(0,82,201)]">ia</span>
          </div>

          {/* Contacto + redes + derechos */}
          <div className="flex flex-col items-center md:items-end gap-3 text-sm text-surface-foreground/70">
            {/* Instagram */}
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com/stratelia.sla"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-surface-foreground/5 flex items-center justify-center text-surface-foreground/50 hover:text-primary hover:bg-primary/10 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://instagram.com/stratelia.sla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-surface-foreground/60 hover:text-primary transition-colors"
              >
                @stratelia.sla
              </a>
            </div>

            {/* Email */}
            <a
              href="mailto:stratelia.sla@gmail.com"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={14} />
              <span>stratelia.sla@gmail.com</span>
            </a>

            {/* Teléfonos */}
            <div className="flex flex-col md:flex-row gap-1 md:gap-4">
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-surface-foreground/50" />
                <span className="text-surface-foreground/40">Emilio:</span>
                <span>+54 9 3875 13-3478</span>
              </span>
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-surface-foreground/50" />
                <span className="text-surface-foreground/40">Diego:</span>
                <span>+54 9 3875 05-1112</span>
              </span>
            </div>

            {/* Derechos */}
            <p className="text-xs text-surface-foreground/40">
              © {new Date().getFullYear()} Stratelia. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

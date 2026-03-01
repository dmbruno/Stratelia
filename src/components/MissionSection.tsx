import { motion } from "framer-motion";
import { Eye, Rocket, User } from "lucide-react";

const team = [
	{
		name: "Emilio Galli",
		role: "Especialista en IA",
	},
	{
		name: "Diego Bruno",
		role: "FullStack Developer",
	},
];

const MissionSection = () => {
	return (
		<section id="mision" className="py-20 md:py-32 bg-background">
			<div className="container">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="text-primary text-sm font-semibold tracking-widest uppercase">
						Quiénes somos
					</span>
					<h2 className="text-3xl md:text-5xl font-heading font-bold mt-4">
						Nuestra{" "}
						<em className="font-accent not-italic text-primary italic">
							esencia
						</em>
					</h2>
				</motion.div>

				{/* Mission & Vision Cards */}
				<div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="bg-surface text-surface-foreground rounded-xl p-8 md:p-10"
					>
						<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 mb-6">
							<Rocket className="w-6 h-6 text-primary" />
						</div>
						<h3 className="text-2xl font-heading font-bold mb-4">Misión</h3>
						<p className="text-surface-foreground/70 leading-relaxed">
							Ser el brazo tecnológico de nuestros clientes: diseñamos,
							implementamos y acompañamos soluciones de IA que generan resultados
							reales en su negocio.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.15 }}
						className="bg-surface text-surface-foreground rounded-xl p-8 md:p-10"
					>
						<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 mb-6">
							<Eye className="w-6 h-6 text-primary" />
						</div>
						<h3 className="text-2xl font-heading font-bold mb-4">Visión</h3>
						<p className="text-surface-foreground/70 leading-relaxed">
							Que cada empresa con la que trabajemos sienta que tiene un equipo
							de tecnología de punta dentro de casa, sin necesidad de construirlo
							desde cero.
						</p>
					</motion.div>
				</div>

				{/* Team */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<h3 className="text-2xl md:text-3xl font-heading font-bold">
						El equipo detrás de{" "}
						<span
							className="ml-1 italic font-normal text-3xl md:text-4xl tracking-tight"
							style={{ fontFamily: '"Times New Roman MT", "Times New Roman", serif' }}
						>
							<span>Stratel</span>
							<span className="text-[rgb(0,82,201)]">ia</span>
						</span>
					</h3>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
					{team.map((member, i) => (
						<motion.div
							key={member.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: i * 0.15 }}
							className="flex flex-col items-center text-center"
						>
							{/* Photo placeholder */}
							<div className="w-40 h-40 md:w-48 md:h-48 rounded-xl bg-secondary border-2 border-border flex items-center justify-center mb-5 overflow-hidden">
								<User className="w-16 h-16 text-muted-foreground/40" />
							</div>
							<h4 className="text-lg font-heading font-bold">{member.name}</h4>
							<p className="text-sm text-muted-foreground mt-1">
								{member.role}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MissionSection;

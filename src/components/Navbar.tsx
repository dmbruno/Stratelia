import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
	{ label: "Servicios", href: "#servicios" },
	{ label: "Nosotros", href: "#propuesta" },
	{ label: "Para quién", href: "#target" },
	{ label: "Contacto", href: "#contacto" },
];

const Logo = () => (
	<a
		href="#"
		className="flex items-baseline gap-0 text-3xl md:text-4xl italic tracking-tight text-[rgb(10,10,10)]"
		style={{ fontFamily: '"Times New Roman MT", "Times New Roman", serif' }}
	>
		<span>Stratel</span>
		<span className="text-[rgb(0,82,201)]">ia</span>
	</a>
);

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<motion.nav
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
		>
			<div className="container flex items-center justify-between h-16 md:h-20">
				<Logo />

				{/* Desktop */}
				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
						>
							{link.label}
						</a>
					))}
					<a
						href="#contacto"
						className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
					>
						Hablemos
					</a>
				</div>

				{/* Mobile toggle */}
				<button
					onClick={() => setOpen(!open)}
					className="md:hidden p-2 text-foreground"
					aria-label="Menu"
				>
					{open ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden overflow-hidden bg-background border-b border-border"
					>
						<div className="container flex flex-col gap-4 py-6">
							{navLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									onClick={() => setOpen(false)}
									className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
								>
									{link.label}
								</a>
							))}
							<a
								href="#contacto"
								onClick={() => setOpen(false)}
								className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
							>
								Hablemos
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
};

export default Navbar;

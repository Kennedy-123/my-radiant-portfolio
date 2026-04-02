import { motion } from "framer-motion";
import { Globe, Bot, Smartphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web apps built with performance and scalability in mind.",
  },
  {
    icon: Bot,
    title: "Automation Bots",
    description: "Build bots to automate tasks like scraping, monitoring, or testing.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Design and build high-quality mobile apps for Android and iOS that deliver seamless experiences.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-2">
          My <span className="text-gradient">Services</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-primary rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group bg-gradient-card rounded-xl border border-border/50 p-8 text-center hover:border-primary/30 hover:shadow-glow transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
              <service.icon size={28} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

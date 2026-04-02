import { motion } from "framer-motion";

import webDevImg from "@/assets/web-development.jpeg";
import automationImg from "@/assets/automation-banner.webp";
import mobileDevImg from "@/assets/mobile-development.jpg";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web apps built with performance and scalability in mind.",
    image: webDevImg,
  },
  {
    title: "Automation Bots",
    description: "Build bots to automate tasks like scraping, monitoring, or testing.",
    image: automationImg,
  },
  {
    title: "App Development",
    description: "Design and build high-quality mobile apps for Android and iOS that deliver seamless experiences.",
    image: mobileDevImg,
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
            className="group bg-gradient-card rounded-xl border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-glow transition-all duration-500"
          >
            <div className="w-full h-40 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={400}
                height={200}
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

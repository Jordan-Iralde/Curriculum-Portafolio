// components/Servicios.tsx
import styles from "./services.module.css";
import Contacto from "../home/contact/contact"
const services = [
  {
    icon: "💻",
    title: "Desarrollo Web",
    description: "Sitios y aplicaciones modernas con React, Next.js, TypeScript y más.",
  },
  {
    icon: "📱",
    title: "Apps Mobile",
    description: "Aplicaciones móviles híbridas eficientes con React Native o Expo.",
  },
  {
    icon: "🚀",
    title: "MVP para Startups",
    description: "Te ayudo a lanzar un MVP funcional para validar ideas rápido.",
  }
];

const Servicios = () => {
  return (
    <section id="servicios" className={styles.servicesSection}>
      <h2 className={styles.title}>Servicios que ofrezco</h2>
      <p className={styles.subtitle}>
        Desarrollo soluciones de software eficientes y personalizadas para personas, negocios y startups.
      </p>

      <div className={styles.cardsContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
      <Contacto />
      <div className={styles.ctaContainer}>
        <a
          href="https://wa.me/5493548576775" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Hablemos por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Servicios;

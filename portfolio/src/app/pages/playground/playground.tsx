// components/Servicios.tsx
import styles from "./playground.module.css";

const Servicios = () => {
  return (
    <section id="playground" className={styles.servicesSection}>
        <h2 className={styles.title}>Playground</h2>
        <p className={styles.subtitle}>
            Aquí encontrarás proyectos y experimentos personales que reflejan mi pasión por la tecnología y el desarrollo web.
        </p>
    
        <div className={styles.cardsContainer}>
            <div className={styles.card}>
            <div className={styles.icon}>🛠️</div>
            <h3 className={styles.cardTitle}>Proyecto 1</h3>
            <p className={styles.cardDescription}>Descripción breve del proyecto 1.</p>
            </div>
            <div className={styles.card}>
            <div className={styles.icon}>🧪</div>
            <h3 className={styles.cardTitle}>Proyecto 2</h3>
            <p className={styles.cardDescription}>Descripción breve del proyecto 2.</p>
            </div>
            <div className={styles.card}>
            <div className={styles.icon}>🚀</div>
            <h3 className={styles.cardTitle}>Proyecto 3</h3>
            <p className={styles.cardDescription}>Descripción breve del proyecto 3.</p>
            </div>
        </div>
    </section>
  );
};

export default Servicios;

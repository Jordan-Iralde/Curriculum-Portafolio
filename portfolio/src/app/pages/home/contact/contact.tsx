// components/Contacto.tsx
import styles from "./contacto.module.css";

export default function Contacto() {
  return (
    <section id="contacto" className={styles.contactSection}>
      <h1 className={styles.title}>Contáctame para colaborar en proyectos innovadores</h1>
      <p className={styles.subtitle}>
        Estoy aquí para ayudarte en tus necesidades de desarrollo web.
      </p>

      <div className={styles.contactContainer}>
        <form className={styles.form}>
          <label>Tu nombre completo</label>
          <input type="text" placeholder="Ingresa tu nombre aquí" />

          <label>Tu correo electrónico*</label>
          <input type="email" placeholder="Ingresa tu email aquí" required />

          <label>Tu mensaje*</label>
          <textarea placeholder="Escribe tu mensaje aquí" required></textarea>

          <button type="submit">Enviar mensaje</button>
        </form>

        <div className={styles.imageContainer}>
          <img src="/contacto-preview.jpg" alt="Proyectos en pantalla" />
        </div>
      </div>
    </section>
  );
}

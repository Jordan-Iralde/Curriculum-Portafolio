// components/Contacto.tsx
import styles from "./contact.module.css";

export default function Contacto() {
  return (
    <section id="contacto" className={styles.contactSection}>
      <h1 className={styles.title}>Contáctame para colaborar en proyectos innovadores</h1>
      <p className={styles.subtitle}>
        Estoy aquí para ayudarte en tus necesidades de desarrollo web.
      </p>

      <div className={styles.contactContainer}>
        <form className={styles.form} action="https://formsubmit.co/18cc390f79386eb1939a8beb10a76f96" method="POST">
          <label>Tu nombre completo</label>
          <input type="text" placeholder="Ingresa tu nombre aquí" />

          <label>Tu correo electrónico*</label>
          <input type="email" placeholder="Ingresa tu email aquí" required />

          <label>Tu mensaje*</label>
          <textarea placeholder="Escribe tu mensaje aquí" required></textarea>

          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}

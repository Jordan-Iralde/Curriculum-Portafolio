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
        <form
          className={styles.form}
          onSubmit={async (e) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
              name: { value: string };
              email: { value: string };
              message: { value: string };
            };

            const res = await fetch("https://mailer-service-mpvd.onrender.com/send-email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                to: "iraldejordan10@gmail.com", // aquí recibís los mails
                subject: `Nuevo mensaje de ${target.name.value} Desde Portafolio`,
                body: `<p><strong>Nombre:</strong> ${target.name.value}</p>
                      <p><strong>Email:</strong> ${target.email.value}</p>
                      <p><strong>Mensaje:</strong> ${target.message.value}</p>`,
              }),
            });

            const data = await res.json();
            if (data.success) alert("Mensaje enviado!");
            else alert("Error enviando mensaje");
          }}
        >
          <label>Tu nombre completo</label>
          <input type="text" placeholder="Ingresa tu nombre aquí" name="name" />

          <label>Tu correo electrónico*</label>
          <input type="email" placeholder="Ingresa tu email aquí" required name="email" />

          <label>Tu mensaje*</label>
          <textarea placeholder="Escribe tu mensaje aquí" required name="message"></textarea>

          <button type="submit">Enviar mensaje</button>
        </form>


      </div>
    </section>
  );
}

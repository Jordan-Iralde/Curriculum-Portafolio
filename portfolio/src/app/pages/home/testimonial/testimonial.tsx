// components/Testimonials.tsx
import styles from "./testimonial.module.css";

const testimonios = [
  {
    stars: 5,
    text: "Subir app a playstore.",
    name: "Orlando",
    location: "Republica Dominicana",
    avatar: "clientes.png",
  },
  {
    stars: 5,
    text: "Clon de Pagina Web en poco tiempo.",
    name: "Austin",
    location: "Peru",
    avatar: "clientes.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonialSection}>
      <div className={styles.testimonialContainer}>
        <h1 className={styles.testimonialTitle}>Opiniones de Clientes</h1>
        <h2 className={styles.subtitle}>
          Opiniones sobre <strong>Jordán Iralde</strong>,
          en Workana
        </h2>

        <div className={styles.testimonialList}>
          {testimonios.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.stars}>{"★".repeat(testimonial.stars)}</div>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.clientInfo}>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className={styles.avatar}
                />
                <div>
                  <p className={styles.clientName}>{testimonial.name}</p>
                  <p className={styles.clientLocation}>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

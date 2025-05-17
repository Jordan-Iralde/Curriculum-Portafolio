import styles from "./experience.module.css";

export default function Experiencia() {
  return (
    <div className={styles.mainContainer}>
    {/* Imagen */}
    <div className={styles.imageWrapper}>
        <img
        src="codetlab.jpeg"
        alt="Monitor con código y libreta"
        />
    </div>

    {/* Texto */}
    <div className={styles.textSection}>
        <h2>Experiencia Profesional</h2>
        <p>
        Soy un programador full stack con un enfoque en la innovación y la
        creatividad, listo para enfrentar nuevos desafíos...
        </p>

        <h3>Experiencia</h3>

        <div>
            <h4>Desarrollo de Proyectos</h4>
                <p>
                    He trabajado en diversas aplicaciones, optimizando la experiencia del usuario.
                </p>
            </div>

            <div>
                <h4>Colaboraciones Creativas</h4>
                <p>
                    Con diseño intuitivo e interfaces amigables, tu sitio cautivará visitantes.
                </p>
            </div>
        </div>
    </div>

  );
}

import styles from "./experience.module.css";

export default function Experiencia() {
  return (
    <div className={styles.mainContainer}>
      {/* Imagen */}
      <a href="https://github.com/CodetLab" target="_blank" rel="noopener noreferrer">
        <div className={styles.imageWrapper}>
          <img
            src="codetlab.jpeg"
            alt="Monitor con código y libreta"
          />
        </div>
      </a>

      {/* Texto */}
      <div className={styles.textSection}>
        <h2>Experiencia.</h2>

        <p>
          Soy desarrollador full stack con foco en resultados. Actualmente aporto en <strong>Code't Lab</strong>, donde convertimos ideas en soluciones funcionales y escalables.
        </p>

        <h3>Qué he logrado</h3>
        <ul className={styles.bulletList}>
          <li>🧠 Diseñé y desarrollé aplicaciones full stack con foco en performance y UX.</li>
          <li>🤝 Colaboré con diseñadores y fundadores para transformar ideas en MVPs funcionales.</li>
          <li>🚀 Implementé mejoras que optimizaron el tiempo de carga y la conversión de usuarios.</li>
        </ul>
        <h3>Tecnologías que domino</h3>
        <ul className={styles.techList}>
            <li>🔧 HTML, CSS, JavaScript, Typescript</li>
            <li>⚙️ TypeScript, React, Angular, Bootstrap</li>
            <li>🚀 MySQL, MongoDB</li>
            <li>🐍 Python, C#</li>
            <li>🛠️ Git, GitHub</li>
        </ul>

        <div className={styles.cvLinks}>
          <a className={styles.cvButton} href="/CV_Espanol.pdf" download>📄 CV  Español</a>
          <a className={styles.cvButton} href="/CV_Ingles.pdf" download>📄 CV  English</a>
        </div>
      </div>
    </div>
  );
}

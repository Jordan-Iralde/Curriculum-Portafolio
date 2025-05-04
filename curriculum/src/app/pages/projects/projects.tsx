import styles from "./projects.module.css";

export default function projects() {
  return (
    <section id="projects" className={styles.projectSection}>
      <div className={styles.projectContainer}>
        <h2 className={styles.projectTitle}>Proyectos</h2>
        <div className={styles.projectList}>
          <div className={styles.projectCard}>
            <img src="/project1.png" alt="Proyecto 1" className={styles.projectImage} />
            <h3 className={styles.projectName}>Proyecto 1</h3>
            <p className={styles.projectDescription}>Descripción del proyecto 1.</p>
          </div>
          <div className={styles.projectCard}>
            <img src="/project2.png" alt="Proyecto 2" className={styles.projectImage} />
            <h3 className={styles.projectName}>Proyecto 2</h3>
            <p className={styles.projectDescription}>Descripción del proyecto 2.</p>
          </div>
          {/* Agrega más proyectos aquí */}
        </div>
      </div>
    </section>
  );
}

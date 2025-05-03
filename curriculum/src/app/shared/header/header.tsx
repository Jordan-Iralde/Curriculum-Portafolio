import styles from "./header.module.css";

export default function header() {
  return (
    <header className={styles.header}>
        <nav className={styles.navHeader}>
            <div className={styles.logo}>
                <img src="/logo.png" alt="Logo" className={styles.logoImg} />
            </div>
            <div className={styles.navLinks}>
                <a href="#about" className={styles.navLink}>Inicio</a>
                <a href="#skills" className={styles.navLink}>Proyectos</a>
                <a href="#projects" className={styles.navLink}>Sobre mí</a>
                <a href="#contact" className={styles.navLink}>Servicios</a>
            </div>
            <select name="Dropdown" id="Lenguaje" className={styles.select}>
                <option value="es">Español</option>
                <option value="en">English</option>
            </select>
        </nav>
    </header>
  );
}

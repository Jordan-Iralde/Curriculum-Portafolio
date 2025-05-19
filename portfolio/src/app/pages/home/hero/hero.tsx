import styles from "./hero.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>
            Portafolio Digital <br />
            de Jordán Iralde.<br />
            <span className={styles.gradient}>Desarrollador Full Stack.</span>
          </h1>
          <p>Descubre, explora y colabora con Jordán.</p>
          <div className={styles.buttons}>
            <button>
              <a href="#projects" className={styles.primaryBtn}>Proyectos</a>
              </button>
            <div className={styles.icons}>
               <a href="https://www.linkedin.com/in/jordanir/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Jordan-Iralde" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.workana.com/freelancer/0a3b780aa3a364064d20a49f9950ae63" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

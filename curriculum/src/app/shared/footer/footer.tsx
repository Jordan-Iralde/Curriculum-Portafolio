import styles from "./footer.module.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function footer() {
  return (
    <footer className={styles.footer}>
        
        <div className={styles.footercontainer}>
            <div className={styles.footersection}>
                <h2>Contacto</h2>
                <p>¿Tenés un proyecto en mente? Hablemos.</p>
                <div className={styles.socialicons}>
                    <a href="https://www.linkedin.com/in/jordanir/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Jordan-Iralde" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.workana.com/freelancer/0a3b780aa3a364064d20a49f9950ae63" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope />
                    </a>
                    <a href="https://wa.me/5493548576775" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>

            <div className={styles.footersection}>
                <h3>SOBRE MÍ</h3>
                <p>+5493548576775</p>
                <p>iraldejordan10@gmail.com</p>
            </div>


            <div className={styles.footersection}>
                <h3>SERVICIOS</h3>
                <p>Ingresa tu correo electrónico</p>
                <form>
                <input type="email" placeholder="Tu correo aquí por favor"></input>
                <button type="submit">Enviar mi información ahora</button>
                </form>
            </div>
        </div>


        <div className={styles.footerbottom}>
            © 2025. All rights reserved.
        </div>
    </footer>
  );
}

import styles from "./footer.module.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function footer() {
  return (
    <footer className={styles.footer}>
        
        <div className={styles.footercontainer}>
            <div className={styles.footersection}>
                <h3>Contacto</h3>
                <p>¿Tenés un proyecto en mente?</p>
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
        </div>


        <div className={styles.footerbottom}>
            © 2025. All rights reserved.
        </div>
    </footer>
  );
}

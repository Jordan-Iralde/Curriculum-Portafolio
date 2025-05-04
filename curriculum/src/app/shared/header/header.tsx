import { useState } from "react";
import styles from "./header.module.css";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

type Props = {
  setSection: (section: "home" | "projects" | "about" | "services") => void;
};

export default function Header({ setSection }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
        <nav className={styles.navHeader}>
            <div 
                className={styles.logo}>
                <h1>P R O G R A M A T E</h1>
            </div>
            <button
                className={styles.menuToggle}
                aria-label="Abrir menú"
                onClick={() => setMenuOpen((prev) => !prev)}>
                &#9776;
            </button>
            
            <div className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
                <button 
                    onClick={() => setSection("home")} 
                    className={styles.navLink}>
                    Inicio
                </button>
                <button
                    onClick={() => setSection("projects")}
                    className={styles.navLink}>
                    Proyectos
                </button>
                <button 
                    onClick={() => setSection("about")} 
                    className={styles.navLink}>
                    Sobre mi
                </button>
                <button
                    onClick={() => setSection("services")}
                    className={styles.navLink}>
                    Servicios
                </button>

                <div className={`${styles.socialIcons} ${menuOpen ? styles.showMenu : ""}`}>
                    <a href="https://www.linkedin.com/in/jordanir/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/Jordan-Iralde" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    
                    <a href="https://wa.me/5493548576775" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
            
            
        </nav>
    </header>
  );
}

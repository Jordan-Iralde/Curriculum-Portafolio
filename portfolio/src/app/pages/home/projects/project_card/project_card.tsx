import React from "react";
import styles from "./project_card.module.css";

type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveDemoUrl?: string;
  repoUrl?: string;
};

export const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  image,
  liveDemoUrl,
  repoUrl,
}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.techList}>
          {technologies.map((tech) => (
            <span key={tech} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {liveDemoUrl && (
            <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
              🌐 Demo
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              💻 Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

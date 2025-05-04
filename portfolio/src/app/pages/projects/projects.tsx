import styles from "./projects.module.css";
import { ProjectCard } from "./project_card/project_card";

export default function projects() {

	return (
		<section id="projects" className={styles.projectSection}>
		<div className={styles.projectContainer}>
			<h1 className={styles.projectTitle}>Proyectos Destacados</h1>
			<h2>Explora mis proyectos innovadores y creativos en desarrollo web.</h2>
			<div className={styles.projectList}>
				<div className={styles.projectCard}>
					<ProjectCard
					title="JarvisAI"
					description="Asistente de IA personalizado que automatiza tareas técnicas mediante lenguaje natural."
					technologies={["Python", "Tkinter", "Tensorflow", "MongoDB"]}
					image="/images/jarvisai.png"
					liveDemoUrl="https://jordan-iralde.github.io/ProBestoJarvisAI/PaginaJarvis/"
					repoUrl="https://github.com/Jordan-Iralde/ProBestoJarvisAI"
					/>

				</div>
				<div className={styles.projectCard}>
					<ProjectCard
						title="Agenda Magica"
						description="Agenda mágica que organiza tareas y eventos con IA para mejorar la productividad."
						technologies={["React", "Tkinter", "OpenAI API"]}
						image="proyectos/enConstruccion.png"
						repoUrl="https://github.com/Jordan-Iralde/AGENDA_MAGICA"
					/>
				</div>
				<div className={styles.projectCard}>
					<ProjectCard
						title="MagicianGround"
						description="Magician Ground mide el suelo con IA para mejorar la calidad de la producción agrícola."
						technologies={["Angular", "Tkinter", "Python", "GitHub Actions"]}
						image="/images/jarvisai.png"
						liveDemoUrl="bisque-eland-737804.hostingersite.com"
						repoUrl="https://github.com/Jordan-Iralde/MagicianGround"
					/>
				</div>
				<div className={styles.projectCard}>
					<ProjectCard
						title="Gestor de Ventas"
						description="Asistente de IA personalizado que automatiza tareas técnicas mediante lenguaje natural."
						technologies={["Java", "Angular", "MySQL"]}
						image="proyectos/enConstruccion.png"
						repoUrl="https://github.com/Jordan-Iralde/BackendGestionVentas"
					/>
				</div>
			</div>
		</div>
		<a href="https://github.com/Jordan-Iralde" target="_blank"><h2>GitHub seguir viendo.</h2></a>
		</section>
	);
}

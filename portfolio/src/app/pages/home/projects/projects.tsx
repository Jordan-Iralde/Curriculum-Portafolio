import styles from "./projects.module.css";
import { ProjectCard } from "./project_card/project_card";

export default function Projects() {

	return (
		<section className={styles.projectSection} id="projects">
		<div className={styles.projectContainer}>
			<h1 className={styles.projectTitle}>Proyectos Destacados</h1>
			<h2>Explora mis proyectos innovadores y creativos en desarrollo web.</h2>
			<div className={styles.projectList}>
					<div className={styles.destacado}>
					
					<a href="https://jordan-iralde.github.io/ProBestoJarvisAI/PaginaJarvis/" target="_blank" rel="noopener noreferrer">
					<ProjectCard
						title="JarvisAI"
						description="Asistente de IA personalizado que automatiza tareas técnicas mediante lenguaje natural."
						technologies={["Python", "Tkinter", "Tensorflow", "MongoDB"]}
						image="proyectos/jarvis.jpg"
						liveDemoUrl="https://jordan-iralde.github.io/ProBestoJarvisAI/PaginaJarvis/"
						repoUrl="https://github.com/Jordan-Iralde/ProBestoJarvisAI"
						
					/>
					</a>
					
					</div>

					<ProjectCard
						title="Agenda Magica"
						description="Agenda mágica que organiza tareas y eventos con IA para mejorar la productividad."
						technologies={["React", "Tkinter", "OpenAI API"]}
						image="proyectos/enConstruccion.png"
						repoUrl="https://github.com/Jordan-Iralde/AGENDA_MAGICA"
					/>


					<ProjectCard
						title="MagicianGround"
						description="Magician Ground mide el suelo con IA para mejorar la calidad de la producción agrícola."
						technologies={["Angular", "Tkinter", "Python", "GitHub Actions"]}
						image="proyectos/magicianground.png"
						liveDemoUrl="bisque-eland-737804.hostingersite.com"
						repoUrl="https://github.com/Jordan-Iralde/MagicianGround"
					/>

					<ProjectCard
						title="Gestor de Ventas"
						description="Asistente de IA personalizado que automatiza tareas técnicas mediante lenguaje natural."
						technologies={["Java", "Angular", "MySQL"]}
						image="proyectos/enConstruccion.png"
						repoUrl="https://github.com/Jordan-Iralde/BackendGestionVentas"
					/>

					<ProjectCard
						title="PRoAWeb"
						description="Pagina institucional de la escuela PRoA La Falda."
					
						technologies={["NextJs", "React", "CSS"]}
						image="proyectos/enConstruccion.png"
						repoUrl="#"
					/>

					<ProjectCard
						title="Code't Lab"
						description="Code't Lab es una agencia de desarrollo de software a medida."
						technologies={["Angular", "NodeJs", "MongoDB"]}
						image="codetlab.jpeg"
						liveDemoUrl="https://codetlab.vercel.app/"
						repoUrl="https://github.com/Jordan-Iralde/MagicianGround"
					/>

			</div>
		</div>
		<a href="https://github.com/Jordan-Iralde" target="_blank"><h2>GitHub</h2></a>
		</section>
	);
}

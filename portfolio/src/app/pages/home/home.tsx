import Experiencia from "./experience/experience";
import Jarvis from "./jarvis_project/jarvis_project";
import Projects from "./projects/projects";
import Testimonials from "./testimonial/testimonial";
import Contacto from "./contact/contact";
import Hero from "./hero/hero";

export default function home() {
  return (
    <main>
        <Hero />
        <Experiencia />
        <Jarvis/>
        <Projects />
        
        <Testimonials />
        <Contacto />
    </main>
  );
}


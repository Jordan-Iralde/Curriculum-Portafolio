import Experiencia from "./experience/experience";
import Projects from "./projects/projects";
import Testimonials from "./testimonial/testimonial";
import Contacto from "./contact/contact";
import Hero from "./hero/hero";

export default function home() {
  return (
    <main>
        <Hero />
        <Projects />
        <Experiencia />
        <Testimonials />
        <Contacto />
    </main>
  );
}


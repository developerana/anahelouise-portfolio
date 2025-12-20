import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Sistema de Gestão Acadêmica",
    description:
      "Aplicação web para gerenciamento de notas, frequência e informações de alunos. Desenvolvido como projeto de conclusão de curso.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-commerce Responsivo",
    description:
      "Loja virtual com carrinho de compras, filtros de produtos e integração com API de pagamentos. Foco em UX e performance.",
    tags: ["TypeScript", "React", "Redux", "Styled Components"],
    github: "#",
    demo: "#",
  },
  {
    title: "Dashboard de Analytics",
    description:
      "Painel administrativo com gráficos interativos, relatórios e visualização de métricas em tempo real.",
    tags: ["React", "Chart.js", "API REST", "CSS Modules"],
    github: "#",
    demo: "#",
  },
  {
    title: "App de Tarefas",
    description:
      "Aplicativo de produtividade com funcionalidades de criação, edição e organização de tarefas por categorias.",
    tags: ["JavaScript", "LocalStorage", "CSS3", "HTML5"],
    github: "#",
    demo: "#",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(174,72%,56%,0.05),transparent_50%)]" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-3">
            Projetos <span className="gradient-text">Selecionados</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Uma seleção de projetos acadêmicos e pessoais que demonstram minhas
            habilidades técnicas e capacidade de resolver problemas reais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover group p-6 lg:p-8 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Ver código no GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Ver demonstração"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              Ver mais no GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Linguagens & Frameworks",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3 / Sass", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "React", level: 80 },
    ],
  },
  {
    title: "Ferramentas & Tecnologias",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Node.js", level: 65 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Trabalho em Equipe", level: 95 },
      { name: "Comunicação", level: 90 },
      { name: "Resolução de Problemas", level: 85 },
      { name: "Organização", level: 90 },
      { name: "Aprendizado Contínuo", level: 95 },
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-secondary/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Competências
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-3">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="font-heading font-semibold text-lg mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

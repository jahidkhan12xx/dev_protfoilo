"use client";

import { motion, Variants } from "framer-motion";
import { skills } from "@/lib/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to build robust applications.
          </p>
        </motion.div>

        <TooltipProvider delayDuration={0}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto"
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className="group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-background border shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-default"
                      style={{
                        ["--skill-color" as any]: skill.color,
                      }}
                    >
                      <skill.icon
                        className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground group-hover:scale-110 transition-transform duration-300"
                        style={{ color: skill.color }}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="font-medium">
                    <p>{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </motion.div>
        </TooltipProvider>
      </div>
    </section>
  );
}

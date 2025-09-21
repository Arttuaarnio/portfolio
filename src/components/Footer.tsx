import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function Footer() {
  return (
    <footer className="bg-background/70 backdrop-blur-md py-6">
      <motion.div
        className="flex justify-between items-center max-w-3xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p className="text-muted-foreground" variants={itemVariants}>
          © {new Date().getFullYear()} Arttu Aarnio
        </motion.p>
        <motion.div className="flex gap-4" variants={itemVariants}>
          <a
            href="https://www.linkedin.com/in/arttu-aarn-io"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Linkedin className="w-6 h-6" />
            </Button>
          </a>

          <a
            href="https://github.com/arttuaarnio"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="w-6 h-6" />
            </Button>
          </a>

          <a href="mailto:arttueino@gmail.com">
            <Button variant="ghost" size="icon">
              <Mail className="w-6 h-6" />
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </footer>
  );
}

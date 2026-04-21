import { motion } from "framer-motion";
import AboutSection from "../sections/AboutSection";
import AchievementsSection from "../sections/AchievementsSection";
import ContactSection from "../sections/ContactSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedSection({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      transition={{ duration: 0.55 }}
    >
      {children}
    </motion.div>
  );
}

function PortfolioLayout({ skills, projects, achievements, contactLinks }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.65 }}
      >
        <HeroSection contactLinks={contactLinks} />
      </motion.div>

      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection>
        <SkillsSection skills={skills} />
      </AnimatedSection>

      <AnimatedSection>
        <ProjectsSection projects={projects} />
      </AnimatedSection>

      <AnimatedSection>
        <AchievementsSection achievements={achievements} />
      </AnimatedSection>

      <AnimatedSection>
        <ContactSection contactLinks={contactLinks} />
      </AnimatedSection>
    </main>
  );
}

export default PortfolioLayout;

/**
 * HERO COMPONENT
 * 
 * Section d'accueil principale du portfolio
 * 
 * Fonctionnalités :
 * - Titre principal avec police monospace (tech style)
 * - Sous-titre descriptif avec police display
 * - Bouton CTA avec animations hover/tap
 * - Indicateur de scroll animé en boucle
 * - Animations d'apparition séquentielles (stagger effect)
 * 
 * Animations Framer Motion :
 * - Fade in + slide up pour chaque élément
 * - Délais progressifs (0.2s, 0.4s, 0.6s)
 * - Hover effects sur le bouton
 * - Scroll indicator en boucle infinie
 * 
 * Style :
 * - Plein écran (min-h-screen)
 * - Centré verticalement et horizontalement
 * - Responsive (text size adapté mobile/desktop)
 */
import { motion } from 'framer-motion' // eslint-disable-line
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" id="home">
      <div className="text-center z-10 px-8 max-w-5xl mx-auto">
        {/* Main Title avec gradient et espacement amélioré */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide font-mono">
            <span className="text-gray-200">HELLO, I'M </span>
            <span className="text-blue-400">GREGORY GAUCI</span>
          </h1>
        </motion.div>

        {/* Subtitle avec meilleure hiérarchie */}
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-display font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <span className="text-blue-400 font-medium">Fullstack Web Developer</span> passionate about creating 
          modern web applications and bringing ideas to life through code
        </motion.p>

        {/* CTA Button avec design moderne */}
        <motion.a
          href="#projects"
          className="inline-block px-8 py-3 border-2 border-blue-400 text-blue-400 hover:text-white hover:bg-blue-400 rounded-lg font-semibold font-display tracking-wide shadow-lg shadow-blue-400/20 hover:shadow-blue-400/40 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          View My Work
        </motion.a>

      </div>
    </section>
  )
}

export default Hero
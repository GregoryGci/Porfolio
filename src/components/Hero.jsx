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
    <section className="min-h-screen flex items-center justify-center relative" id="home">
      <div className="text-center z-10 px-6">
        {/* Main Title with Glitch Effect */}
        <motion.h1 
          className="text-4xl md:text-7xl font-bold mb-6 tracking-wider font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block">HELLO,</span>
          <span className="block text-blue-800">I'M DEVELOPER</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-display"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I spend my days (and often nights) painting the Internet canvas with 
          <span className="text-blue-700"> Projects </span> and lines of code
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="bg-blue-900 hover:bg-blue-700 cursor-pointer px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} className="text-gray-400" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
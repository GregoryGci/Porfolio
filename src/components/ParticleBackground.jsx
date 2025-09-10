/**
 * PARTICLE BACKGROUND COMPONENT
 * 
 * Ajoute des particules animées subtiles au background
 * 
 * Fonctionnalités :
 * - Particules flottantes animées avec Framer Motion
 * - Différentes tailles et opacités
 * - Mouvement aléatoire et fluide
 * - Performance optimisée
 */
import { motion } from 'framer-motion' // eslint-disable-line

const ParticleBackground = () => {
  // Génère des particules avec propriétés aléatoires
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 20
  }))

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() > 0.5 ? 50 : -50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

export default ParticleBackground
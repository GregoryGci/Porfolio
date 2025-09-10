/**
 * ABOUT COMPONENT
 * 
 * Section à propos du développeur
 */
import { motion } from 'framer-motion' // eslint-disable-line

const About = () => {
  return (
    <section className="py-20 px-8" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-mono">
            About me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed font-display max-w-2xl mx-auto">
            Hi, I'm Gregory Gauci, a passionate <span className="text-blue-400 font-medium">Fullstack Web Developer</span> with 
            expertise in modern web technologies. I specialize in building responsive, user-friendly applications 
            using both frontend and backend technologies. I love turning complex problems into simple, 
            elegant solutions and bringing creative ideas to life through clean, efficient code.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
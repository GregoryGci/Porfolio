/**
 * CONTACT COMPONENT
 * 
 * Section de contact avec liens vers réseaux sociaux
 */
import { motion } from 'framer-motion' // eslint-disable-line
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:gregorygauci@outlook.com",
      color: "text-red-400"
    },
    {
      name: "GitHub", 
      icon: Github,
      href: "https://github.com/gregorygci",
      color: "text-gray-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin, 
      href: "https://linkedin.com",
      color: "text-blue-400"
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      color: "text-cyan-400"
    }
  ]

  return (
    <section className="py-20 px-8" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-mono">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg mb-12 font-display max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects.
            Let's connect and build something amazing together!
          </p>

          <div className="flex justify-center space-x-8">
            {socialLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-lg border border-gray-700 hover:border-gray-500 ${link.color} hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                  style={{
                    filter: 'drop-shadow(0 0 0px currentColor)',
                  }}
                  whileHover={{ 
                    y: -3,
                    filter: 'drop-shadow(0 0 10px currentColor)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * socialLinks.indexOf(link) }}
                >
                  <IconComponent size={24} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
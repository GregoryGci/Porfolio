/**
 * TYPING EFFECT COMPONENT
 * 
 * Effet de machine à écrire animé
 */
import { motion } from 'framer-motion' // eslint-disable-line
import { useState, useEffect } from 'react'

const TypingEffect = ({ text, speed = 100, className = "" }) => {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        setIsTyping(false)
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return (
    <span className={className}>
      {displayText}
      {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-blue-400"
        >
          |
        </motion.span>
      )}
    </span>
  )
}

export default TypingEffect
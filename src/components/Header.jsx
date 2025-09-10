/**
 * HEADER COMPONENT
 * 
 * Navigation principale du portfolio
 * 
 * Fonctionnalités :
 * - Logo personnalisé avec hover effects
 * - Menu desktop responsive
 * - Menu mobile avec toggle (burger menu)
 * - Navigation smooth vers les sections
 * - Header transparent fixe en haut
 * 
 * État :
 * - isOpen : contrôle l'ouverture/fermeture du menu mobile
 * 
 * Animations :
 * - Logo : scale au hover + tap
 * - Links desktop : mouvement vertical au hover
 * - Menu mobile : fade in/out avec height animation
 */
import { motion } from "framer-motion"; // eslint-disable-line
import { Menu, Pointer, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  // État pour contrôler l'ouverture du menu mobile
  const [isOpen, setIsOpen] = useState(false);

  // Items de navigation
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="h-12 w-12 flex items-center justify-center hover:cursor-pointer"
            whileHover={{scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/assets/logo.svg"
              alt="Gregory Gauci"
              className="h-full w-full object-contain"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

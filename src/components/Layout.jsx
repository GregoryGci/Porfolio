/**
 * LAYOUT COMPONENT
 * 
 * Composant principal qui wrapp toute l'application
 * 
 * Fonctionnalités :
 * - Background image fixe avec filtres CSS stylisés
 * - Container principal pour tout le contenu (z-10)
 * - Gestion du z-index pour superposition correcte
 * 
 * Structure :
 * - Background : fixed, z-0 (derrière tout)
 * - Content : relative, z-10 (par-dessus le background)
 */
const Layout = ({ children }) => {
  return (
    <>
      {/* Background Image avec filtres CSS pour effet stylé */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/src/assets/bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover brightness-75 contrast-125 saturate-150 hue-rotate-15"
          style={{filter: 'sepia(0.2) brightness(0.9) contrast(1.2)'}}
        />
      </div>
      
      {/* Container principal pour tout le contenu */}
      <div className="min-h-screen text-white relative z-10">
        {children}
      </div>
    </>
  )
}

export default Layout
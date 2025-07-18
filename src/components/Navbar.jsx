import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-background/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-montserrat font-bold text-assesium-primary dark:text-assesium-accent"
            >
              Assesium
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-opensans font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-assesium-accent border-b-2 border-assesium-accent'
                    : 'text-foreground hover:text-assesium-primary dark:hover:text-assesium-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-foreground hover:text-assesium-primary dark:hover:text-assesium-accent"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost"
                className="text-foreground hover:text-assesium-primary dark:hover:text-assesium-accent font-montserrat font-medium"
                asChild
              >
                <Link to="/login">Login</Link>
              </Button>
              <Button 
                className="bg-assesium-accent hover:bg-assesium-accent/90 text-white font-montserrat font-semibold px-6 py-2 rounded-lg transition-all duration-200"
                asChild
              >
                <Link to="/register">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-foreground hover:text-assesium-primary dark:hover:text-assesium-accent"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-assesium-primary dark:hover:text-assesium-accent transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-opensans font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-assesium-accent bg-muted'
                      : 'text-foreground hover:text-assesium-primary dark:hover:text-assesium-accent hover:bg-muted'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button 
                  variant="ghost"
                  className="w-full justify-start text-foreground hover:text-assesium-primary dark:hover:text-assesium-accent font-montserrat font-medium"
                  asChild
                >
                  <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                </Button>
                <Button 
                  className="w-full bg-assesium-accent hover:bg-assesium-accent/90 text-white font-montserrat font-semibold py-2 rounded-lg"
                  asChild
                >
                  <Link to="/register" onClick={() => setIsOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar


import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Code, Sparkles } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Escape key & window resize
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };

    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Track active section for highlighting (only on home page)
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['hero', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavigation = (link) => {
    if (link.isRoute) {
      navigate(link.href);
      setIsOpen(false);
    } else {
      // For scroll-to-section links
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(link.sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(link.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsOpen(false);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsOpen(false);
  };

  const links = [
    { name: "Home", href: "/", sectionId: "hero", isRoute: true },
    { name: "Skills", href: "#skills", sectionId: "skills", isRoute: false },
    { name: "Projects", href: "#projects", sectionId: "projects", isRoute: false },
    { name: "Experience", href: "#experience", sectionId: "experience", isRoute: false },
    { name: "Education", href: "#education", sectionId: "education", isRoute: false },
    { name: "Contact", href: "#contact", sectionId: "contact", isRoute: false },
  ];

  const isActive = (link) => {
    if (link.isRoute) {
      return location.pathname === link.href;
    } else {
      return location.pathname === '/' && activeSection === link.sectionId;
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-sm border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button 
              onClick={handleLogoClick}
              className="text-xl font-medium text-black hover:text-gray-600 transition-colors duration-300"
            >
              Manikanta Vaddi
            </button>

            {/* Desktop Links */}
            <ul className="hidden md:flex space-x-8">
              {links.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link)}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isActive(link)
                        ? 'text-black'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center w-8 h-8 text-gray-600 hover:text-black transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-black">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-500 hover:text-black transition-colors duration-200"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 p-6">
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link)}
                    className={`w-full text-left py-3 text-sm font-medium transition-colors duration-300 ${
                      isActive(link)
                        ? 'text-black'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              © 2024 Manikanta Vaddi
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

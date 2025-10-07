import React, { useState, useEffect } from 'react'
import { useScrollAnimations } from '../hooks/useScrollAnimation'
import { 
  ChevronDown, 
  Mail, 
  Code, 
  Database, 
  Globe, 
  GitBranch, 
  Monitor,
  Server,
  Shield,
  ExternalLink, 
  Github, 
  Linkedin, 
  Calendar,
  ArrowRight,
  MapPin,
  Send,
  Building,
  MessageCircle,
  Download,
  Phone,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { sendContactEmail } from '../services/emailService'
import profileImage from '../assets/Manikanta-Vaddi Photo.jpg'
import portfolio from '../assets/portfolio.png'
import hotelManagementImage from '../assets/Hotel-management-system.png'
import resumePDF from '../assets/Manikanta_vaddi_Resume.pdf'
import btechLogo from '../assets/B.tech.png'
import gdetLogo from '../assets/G.D.E.T.M.CH.School.png'
import ethnusLogo from '../assets/Ethnus.png'
import sriGayatriLogo from '../assets/sri-gayatri-academy-narayanguda-hyderabad-educational-institutes-ryat9ow56t-250.avif'

function Home() {
  const [hoveredElement, setHoveredElement] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentText, setCurrentText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  
  // Use the new scroll animation system
  const visibleSections = useScrollAnimations()
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Typewriter effect
  useEffect(() => {
    if (!isLoaded) return
    
    const texts = [
      'Full Stack Developer',
      'React Specialist', 
      'Node.js Expert',
      'MERN Stack Developer',
      'Tech Enthusiast'
    ]
    
    const typewriterTimer = setTimeout(() => {
      const currentTextToShow = texts[textIndex]
      if (currentText.length < currentTextToShow.length) {
        setCurrentText(currentTextToShow.slice(0, currentText.length + 1))
      } else {
        setTimeout(() => {
          if (currentText.length === currentTextToShow.length) {
            setTimeout(() => {
              setCurrentText('')
              setTextIndex((prev) => (prev + 1) % texts.length)
            }, 2000)
          }
        }, 1000)
      }
    }, 100)

    return () => clearTimeout(typewriterTimer)
  }, [currentText, textIndex, isLoaded])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Contact form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await sendContactEmail(formData)
      
      if (result.success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const skillsData = [
    {
      id: 'frontend',
      title: 'Front-End Development',
      icon: Monitor,
      color: 'blue',
      skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
      description: 'Creating responsive and interactive user interfaces'
    },
    {
      id: 'backend',
      title: 'Back-End Development',
      icon: Server,
      color: 'green',
      skills: ['Node.js', 'Express.js', 'RESTful APIs'],
      description: 'Building robust server-side applications and APIs'
    },
    {
      id: 'api',
      title: 'API Development & Integration',
      icon: Globe,
      color: 'purple',
      skills: ['Real-time APIs', 'WhatsApp API', 'Cloud Integration'],
      description: 'Creating and managing real-time APIs and integrations'
    },
    {
      id: 'database',
      title: 'Database Management',
      icon: Database,
      color: 'orange',
      skills: ['MongoDB', 'Firebase', 'MySQL (basic)'],
      description: 'Designing and managing efficient database systems'
    },
    {
      id: 'version',
      title: 'Version Control & Cloud',
      icon: GitBranch,
      color: 'indigo',
      skills: ['Git', 'GitHub', 'AWS (EC2 basics)'],
      description: 'Managing code repositories and cloud deployments'
    }
  ]

  const projectsData = [
    {
      id: 'portfolio-website',
      title: 'Personal Portfolio Website',
      type: 'Frontend Web Application',
      image: portfolio,
      description: 'A modern, responsive portfolio website showcasing my skills, projects, and experience. Built with React.js and Tailwind CSS for optimal performance and user experience.',
      features: [
        'Responsive design optimized for all devices',
        'Modern UI/UX with smooth animations and transitions',
        'Interactive sections for projects, skills, and experience',
        'Contact form with email integration',
        'SEO optimized for better visibility',
        'Fast loading with optimized assets'
      ],
      technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'Nodemailer'],
      githubLink: 'https://github.com/Manikanta-81/my-portfolio',
      liveLink: 'https://manikanta-vaddi-portfolio.vercel.app',
      status: 'Completed',
      duration: '1 month',
      category: 'Frontend'
    },
    {
      id: 'hotel-management',
      title: 'Hotel Management System',
      type: 'Full-Stack Web Application',
      image: hotelManagementImage,
      description: 'Designed and developed a Hotel Management System to manage bookings, rooms, and customer information efficiently using MERN stack.',
      features: [
        'Developed using MERN stack (MongoDB, Express.js, React, Node.js)',
        'Role-based access control using JWT tokens',
        'CRUD operations for rooms and bookings',
        'Customer management and feedback collection',
        'Structured database design'
      ],
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'MERN Stack'],
      githubLink: 'https://github.com/Manikanta-81/hotel-management-system',
      liveLink: 'https://hotel-management-system-vert-eight.vercel.app/home',
      status: 'Completed',
      duration: '3 months',
      category: 'Full-Stack'
    },
    {
      id: 'laxmi-hospitality',
      title: 'Laxmi Hospitality Services',
      type: 'Freelance Project',
      image: null, // Will use placeholder
      description: 'Developed a responsive, SEO-friendly React.js SPA with enhanced UI/UX, improving user engagement and navigation.',
      features: [
        'Responsive design for all devices',
        'SEO optimization for better visibility',
        'Enhanced UI/UX design',
        'Seamless customer communication',
        'Efficient form handling with Nodemailer'
      ],
      technologies: ['React.js', 'JavaScript', 'CSS', 'Node.js', 'Express.js', 'Nodemailer'],
      githubLink: 'https://github.com/Manikanta-81/laxmi-hospitality',
      liveLink: 'https://laxmihospitality.in',
      status: 'Completed',
      duration: '2 months',
      category: 'Frontend'
    },
    {
      id: 'future-forbes',
      title: 'Future Forbes Pvt Ltd',
      type: 'Freelance Project',
      image: null, // Will use placeholder
      description: 'Developed a responsive, SEO-friendly React.js SPA with enhanced UI/UX, improving user engagement and navigation.',
      features: [
        'Responsive design for all devices',
        'SEO optimization for better visibility',
        'Enhanced UI/UX design',
        'Seamless customer communication',
        'Efficient form handling with Nodemailer'
      ],
      technologies: ['React.js', 'JavaScript', 'CSS', 'Node.js', 'Express.js', 'Nodemailer'],
      githubLink: 'https://github.com/Manikanta-81/future-forbes',
      liveLink: 'https://futureforbes.in',
      status: 'Completed',
      duration: '2 months',
      category: 'Frontend'
    }
  ]


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-200 rounded-full animate-pulse opacity-30"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-gray-300 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-gray-200 rounded-full animate-pulse opacity-20" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Mobile: Profile Image First, Desktop: Content First */}
            <div className="order-1 lg:order-2">
              {/* Right Content - Profile Image */}
              <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] group">
                  {/* Floating Animation Ring */}
                  <div className="absolute inset-0 rounded-lg border-2 border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <img 
                      src={profileImage} 
                      alt="Vaddi Manikanta" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Floating Dots */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-black rounded-full animate-bounce opacity-60"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gray-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
            </div>

            {/* Mobile: Content Second, Desktop: Content First */}
            <div className={`order-2 lg:order-1 space-y-4 sm:space-y-6 md:space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Greeting */}
              <div className="flex items-center space-x-3 mb-4 sm:mb-6 group">
                <div className="w-2 h-2 bg-black rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-xs sm:text-sm font-medium text-gray-500 tracking-wider uppercase group-hover:text-gray-700 transition-colors duration-300">Available for work</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black leading-[1.1] group break-words">
                  Hi, I'm{' '}
                  <span className="font-bold relative inline-block">
                    <span className="relative z-10">Manikanta</span>
                    {/* Underline Animation */}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-700 ease-out"></span>
                  </span>
                </h1>
                
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-gray-600 h-10 sm:h-12 md:h-16 flex items-center">
                  <span className="animate-fade-in">
                    {currentText}
                  </span>
                  <span className="animate-pulse text-black ml-1">|</span>
                </div>
              </div>

              {/* Bio Paragraph */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl font-light hover:text-gray-800 transition-colors duration-500">
                Passionate about creating innovative digital solutions that make a difference. 
                Currently working as a Full Stack Developer at Future Forbes Private Ltd, 
                specializing in MERN stack development and modern web technologies.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-medium hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base overflow-hidden"
                >
                  {/* Button Background Animation */}
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center">
                    <span>View My Work</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 text-gray-700 font-medium hover:border-black hover:text-black transition-all duration-300 text-sm sm:text-base overflow-hidden"
                >
                  {/* Button Background Animation */}
                  <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></span>
                  <span className="relative z-10">Let's Talk</span>
                </button>
                
                <a
                  href={resumePDF}
                  download="Manikanta_Vaddi_Resume.pdf"
                  className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-gray-600 font-medium hover:text-black transition-all duration-300 text-sm sm:text-base"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  <span>Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('skills')}
            className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-black transition-colors duration-300"
          >
            <span className="text-sm font-medium animate-pulse">Scroll</span>
            <div className="relative">
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              {/* Animated Dot */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-black rounded-full opacity-0 group-hover:opacity-100 animate-bounce"></div>
            </div>
          </button>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light text-black mb-6">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              A comprehensive overview of my technical skills and the tools I use to build 
              innovative digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((skill, index) => {
              const IconComponent = skill.icon
              const isVisible = visibleSections.has('skills')
              const isHovered = hoveredElement === skill.id

              return (
                <div
                  key={skill.id}
                  className={`
                    group bg-white p-8 transition-all duration-700 transform relative overflow-hidden
                    ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
                    ${isHovered ? 'shadow-xl scale-105' : 'shadow-sm hover:shadow-lg hover:scale-102'}
                  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredElement(skill.id)}
                  onMouseLeave={() => setHoveredElement(null)}
                >
                  {/* Background Gradient Animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gray-200 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="flex items-center mb-6 relative z-10">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-black group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-medium text-black group-hover:text-gray-800 transition-colors duration-300">
                      {skill.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed font-light group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                    {skill.description}
                  </p>

                  <div className="space-y-3 relative z-10">
                    {skill.skills.map((skillItem, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center text-sm group-hover:text-gray-800 transition-colors duration-300 hover:translate-x-1 transition-transform duration-200"
                      >
                        <div className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-black transition-colors duration-300" />
                        <span className="text-gray-700 font-light">{skillItem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light text-black mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              A showcase of my recent work, featuring full-stack applications, freelance projects, 
              and innovative solutions built with modern technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projectsData.map((project, index) => {
              const isVisible = visibleSections.has('projects')
              const isHovered = hoveredElement === project.id

              return (
                <div
                  key={project.id}
                  className={`
                    group bg-white border border-gray-200 transition-all duration-700 transform
                    ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
                    ${isHovered ? 'shadow-lg' : 'shadow-sm hover:shadow-md'}
                  `}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoveredElement(project.id)}
                  onMouseLeave={() => setHoveredElement(null)}
                >
                  {/* Project Image */}
                  <div className="relative h-64 bg-gray-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="text-6xl text-gray-300">
                          <Code />
                        </div>
                      )}
                    </div>
                    
                    {/* Overlay with Actions */}
                    <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="flex space-x-4">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                          >
                            <Github className="w-6 h-6" />
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                          >
                            <ExternalLink className="w-6 h-6" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-black text-white text-xs font-medium px-3 py-1">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-medium text-black mb-2 group-hover:text-gray-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-light">
                        {project.type}
                      </p>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed font-light">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-black mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-start font-light">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-sm text-gray-500 font-light">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-black mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 font-light"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 font-light">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.duration}
                      </div>
                      <div className="flex space-x-4">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-gray-600 hover:text-black transition-colors duration-300"
                          >
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-gray-600 hover:text-black transition-colors duration-300"
                          >
                            <Globe className="w-4 h-4 mr-1" />
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real-world experience in full-stack development, cloud deployment, and innovative solutions.
            </p>
          </div>
          
          {/* Future Forbes */}
          <div className={`bg-white p-8 rounded-lg shadow-md mb-8 border border-gray-100 transition-all duration-700 transform ${
            visibleSections.has('experience') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Full Stack Web Developer (Contract Based)</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Building className="w-5 h-5 mr-2" />
                  <span>Future Forbes Private Ltd (Remote)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>June 2025 - Present</span>
                </div>
              </div>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li>• Built seamless React.js applications and maintained full-stack functionality.</li>
              <li>• Conducted code reviews and resolved bugs to ensure high-quality, efficient code.</li>
              <li>• Developed SEO-friendly applications to improve web visibility and performance.</li>
              <li>• Optimized application performance and implemented best coding practices.</li>
              <li>• Technologies: React.js, JavaScript, CSS, Node.js, Express.js, Nodemailer</li>
            </ul>
          </div>

          {/* Bluebex Software */}
          <div className={`bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-all duration-700 transform ${
            visibleSections.has('experience') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Full Stack Web Developer Intern</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Building className="w-5 h-5 mr-2" />
                  <span>Bluebex Software Private Ltd</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Bengaluru, Karnataka</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>February 2025 - June 2025</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6 p-6 bg-gray-50 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-600" />
                Secure OTP-Based Authentication System with AWS Deployment
              </h4>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Developed a phone number-based login and registration system using OTP verification and RESTful APIs.</li>
                <li>• Implemented JWT-based authentication with role-based access control for secure API access.</li>
                <li>• Configured AWS ACM with a wildcard SSL certificate and set up an ALB to enable HTTPS for EC2-hosted services.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Express.js</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">JWT</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">AWS EC2</span>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
                WhatsApp Chatbot for Bluebex
              </h4>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Developed a real-time WhatsApp chatbot with interactive list and button messages.</li>
                <li>• Stored chat history in Firebase Realtime Database and automated lead collection for services.</li>
                <li>• Designed and deployed structured message flows, enabling seamless user interaction and dynamic service selection.</li>
                <li>• Implemented backend-triggered notifications using Firebase Cloud Messaging (FCM), activated through real-time database events.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">WhatsApp API</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Firebase</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light text-black mb-6">
              Education
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              My educational background and certifications that have shaped my technical expertise 
              and passion for continuous learning.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* MERN Course */}
            <div className={`bg-white p-8 border border-gray-200 transition-all duration-700 transform ${
              visibleSections.has('education') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-6">
                  <img 
                    src={ethnusLogo} 
                    alt="Ethnus Codemithra Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-black mb-2">MERN Full Stack Development Course</h3>
                  <p className="text-gray-600 font-light">Ethnus Codemithra</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 mb-4">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="font-light">June 2024 – January 2025</span>
              </div>
              <p className="text-gray-600 leading-relaxed font-light">
                Comprehensive training in modern web development technologies including MongoDB, Express.js, React.js, and Node.js. 
                Hands-on projects and real-world applications.
              </p>
            </div>

            {/* Bachelor's Degree */}
            <div className={`bg-white p-8 border border-gray-200 transition-all duration-700 transform ${
              visibleSections.has('education') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-6">
                  <img 
                    src={btechLogo} 
                    alt="Andhra Loyola Institute Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-black mb-2">Bachelor of Engineering in Mechanical Engineering</h3>
                  <p className="text-gray-600 font-light">Andhra Loyola Institute Of Engineering And Technology</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 mb-2">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="font-light">January 2021 - May 2024</span>
              </div>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-light">Vijayawada, Andhra Pradesh</span>
              </div>
              <p className="text-gray-600 leading-relaxed font-light">
                Comprehensive engineering education with focus on problem-solving, analytical thinking, and technical skills. 
                Strong foundation in mathematics, physics, and engineering principles.
              </p>
            </div>

            {/* Intermediate */}
            <div className={`bg-white p-8 border border-gray-200 transition-all duration-700 transform ${
              visibleSections.has('education') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-6">
                  <img 
                    src={sriGayatriLogo} 
                    alt="Sri Gayatri Educational Institutions Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-black mb-2">Intermediate</h3>
                  <p className="text-gray-600 font-light">Sri Gayatri Educational Institutions</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 mb-2">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="font-light">May 2018 - May 2020</span>
              </div>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-light">Vijayawada, Andhra Pradesh</span>
              </div>
              <p className="text-gray-600 leading-relaxed font-light">
                Strong foundation in science and mathematics. Developed critical thinking skills and 
                academic excellence that paved the way for engineering studies.
              </p>
            </div>

            {/* School */}
            <div className={`bg-white p-8 border border-gray-200 transition-all duration-700 transform ${
              visibleSections.has('education') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-6">
                  <img 
                    src={gdetLogo} 
                    alt="G.D.E.T.M.C.HIGH SCHOOL Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-black mb-2">Secondary School Certificate (SSC)</h3>
                  <p className="text-gray-600 font-light">G.D.E.T.M.C.HIGH SCHOOL</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500 mb-2">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="font-light">Passed out in 2018</span>
              </div>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-light">Patamata, Vijayawada, Andhra Pradesh</span>
              </div>
              <p className="text-gray-600 leading-relaxed font-light">
                Foundation years that instilled discipline, curiosity, and a love for learning. 
                Developed strong academic fundamentals and extracurricular interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light text-black mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Ready to collaborate on your next project? Let's discuss how we can work together 
              to bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className={`transition-all duration-700 transform ${
              visibleSections.has('contact') ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-95'
            }`}>
              <h3 className="text-2xl font-medium text-black mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="group flex items-center p-6 border border-gray-200 hover:border-black transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-black">Email</h4>
                    <a href="mailto:vaddimanikanta2002@gmail.com" className="text-gray-600 hover:text-black transition-colors duration-300">
                      vaddimanikanta2002@gmail.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-center p-6 border border-gray-200 hover:border-black transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <Github className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-black">GitHub</h4>
                    <a href="https://github.com/Manikanta-81" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors duration-300">
                      github.com/Manikanta-81
                    </a>
                  </div>
                </div>

                <div className="group flex items-center p-6 border border-gray-200 hover:border-black transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-black">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/manikanta-vaddi-2352b0287" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors duration-300">
                      linkedin.com/in/manikanta-vaddi-2352b0287
                    </a>
                  </div>
                </div>

                <div className="group flex items-center p-6 border border-gray-200 hover:border-black transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-black">Location</h4>
                    <p className="text-gray-600">Vijayawada, Andhra Pradesh, India</p>
                  </div>
                </div>

                <div className="group flex items-center p-6 border border-gray-200 hover:border-black transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-black">Phone</h4>
                    <a href="tel:+919618863286" className="text-gray-600 hover:text-black transition-colors duration-300">
                      +91 - 9618863286
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-700 transform ${
              visibleSections.has('contact') ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'
            }`} style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-medium text-black mb-8">Send a Message</h3>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <p className="text-green-800 font-medium">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                  <p className="text-red-800 font-medium">Failed to send message. Please try again or contact me directly.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or how I can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 font-medium transition-colors duration-300 flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed font-light">
            I'm always excited to work on new projects and collaborate with amazing people. 
            Whether you have a specific project in mind or just want to chat about technology, 
            feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:vaddimanikanta2002@gmail.com"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 mr-3" />
              Send Email
            </a>
            <a
              href="https://github.com/Manikanta-81"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-white font-medium hover:border-white hover:text-white transition-colors duration-300"
            >
              <Github className="w-5 h-5 mr-3" />
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

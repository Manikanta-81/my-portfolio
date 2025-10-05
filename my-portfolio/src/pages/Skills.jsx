import React, { useState, useEffect } from 'react'
import { 
  Code, 
  Database, 
  Cloud, 
  Globe, 
  GitBranch, 
  Zap,
  Monitor,
  Server,
  Smartphone,
  Shield,
  Layers,
  Cpu
} from 'lucide-react'

function Skills() {
  const [visibleSkills, setVisibleSkills] = useState([])
  const [hoveredSkill, setHoveredSkill] = useState(null)

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSkills(skillsData.map(skill => skill.id))
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        border: 'border-blue-200',
        hover: 'hover:bg-blue-100',
        text: 'text-blue-700'
      },
      green: {
        bg: 'bg-green-50',
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        border: 'border-green-200',
        hover: 'hover:bg-green-100',
        text: 'text-green-700'
      },
      purple: {
        bg: 'bg-purple-50',
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
        border: 'border-purple-200',
        hover: 'hover:bg-purple-100',
        text: 'text-purple-700'
      },
      orange: {
        bg: 'bg-orange-50',
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600',
        border: 'border-orange-200',
        hover: 'hover:bg-orange-100',
        text: 'text-orange-700'
      },
      indigo: {
        bg: 'bg-indigo-50',
        iconBg: 'bg-indigo-100',
        iconColor: 'text-indigo-600',
        border: 'border-indigo-200',
        hover: 'hover:bg-indigo-100',
        text: 'text-indigo-700'
      }
    }
    return colorMap[color] || colorMap.blue
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Technical Skills
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise and the tools I use to build 
              innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((skill, index) => {
              const colors = getColorClasses(skill.color)
              const IconComponent = skill.icon
              const isVisible = visibleSkills.includes(skill.id)
              const isHovered = hoveredSkill === skill.id

              return (
                <div
                  key={skill.id}
                  className={`
                    group relative bg-white rounded-xl shadow-lg border-2 transition-all duration-500 transform
                    ${colors.border} ${colors.hover}
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    ${isHovered ? 'scale-105 shadow-xl' : 'hover:scale-102'}
                  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Animated Background */}
                  <div className={`
                    absolute inset-0 rounded-xl transition-opacity duration-300
                    ${colors.bg} ${isHovered ? 'opacity-20' : 'opacity-0'}
                  `} />
                  
                  <div className="relative p-6">
                    {/* Icon and Title */}
                    <div className="flex items-center mb-4">
                      <div className={`
                        w-14 h-14 rounded-xl flex items-center justify-center mr-4 transition-all duration-300
                        ${colors.iconBg} ${isHovered ? 'scale-110' : ''}
                      `}>
                        <IconComponent className={`w-7 h-7 ${colors.iconColor} transition-all duration-300`} />
                      </div>
                      <h3 className={`text-xl font-semibold ${colors.text} transition-colors duration-300`}>
                        {skill.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Skills List */}
                    <div className="space-y-2">
                      {skill.skills.map((skillItem, skillIndex) => (
                        <div
                          key={skillIndex}
                          className={`
                            flex items-center text-sm transition-all duration-300
                            ${isHovered ? 'translate-x-2' : ''}
                          `}
                          style={{ transitionDelay: `${skillIndex * 50}ms` }}
                        >
                          <div className={`
                            w-2 h-2 rounded-full mr-3 transition-all duration-300
                            ${colors.iconBg} ${isHovered ? 'scale-125' : ''}
                          `} />
                          <span className="text-gray-700 font-medium">{skillItem}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hover Effect Indicator */}
                    <div className={`
                      absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center
                      transition-all duration-300
                      ${colors.iconBg} ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
                    `}>
                      <Zap className={`w-4 h-4 ${colors.iconColor}`} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond core development skills, I also work with various tools and technologies 
              to enhance productivity and deliver better solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'JWT Auth', icon: Shield },
              { name: 'Nodemailer', icon: Smartphone },
              { name: '2Factor API', icon: Zap },
              { name: 'SSL Certificates', icon: Shield },
              { name: 'Load Balancers', icon: Layers },
              { name: 'Deployment', icon: Cloud },
              { name: 'Data Modeling', icon: Database },
              { name: 'CRUD Operations', icon: Cpu },
              { name: 'Email Automation', icon: Smartphone },
              { name: 'Real-time Database', icon: Database },
              { name: 'HTTPS Config', icon: Shield },
              { name: 'Role-based Access', icon: Shield }
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <div
                  key={index}
                  className="group bg-gray-50 hover:bg-blue-50 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors duration-300">
                    {item.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills

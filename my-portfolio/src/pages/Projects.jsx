import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Linkedin,
  Calendar,
  Users,
  Code,
  Globe,
  ArrowRight,
  Star,
  Eye,
} from "lucide-react";

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projectsData = [
    {
      id: "portfolio-website",
      title: "Personal Portfolio Website",
      type: "Frontend Web Application",
      image: "/api/placeholder/600/400",
      description:
        "A modern, responsive portfolio website showcasing my skills, projects, and experience. Built with React.js and Tailwind CSS for optimal performance and user experience.",
      features: [
        "Responsive design optimized for all devices",
        "Modern UI/UX with smooth animations and transitions",
        "Interactive sections for projects, skills, and experience",
        "Contact form with email integration",
        "SEO optimized for better visibility",
        "Fast loading with optimized assets",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "Nodemailer",
      ],
      collaborator: "Solo Project",
      collaboratorLinkedIn: "https://www.linkedin.com/in/balajis183/",
      githubLink: "https://github.com/Manikanta-81/my-portfolio",
      liveLink: "https://manikanta-vaddi-portfolio.vercel.app",
      status: "Completed",
      duration: "1 month",
      category: "Frontend",
    },
    {
      id: "hotel-management",
      title: "Hotel Management System",
      type: "Full-Stack Web Application",
      image: "/api/placeholder/600/400",
      description:
        "Designed and developed a Hotel Management System to manage bookings, rooms, and customer information efficiently.",
      features: [
        "Role-based access control using JWT tokens",
        "CRUD operations for rooms and bookings",
        "Customer management and feedback collection",
        "Structured database design",
        "Secure user authentication for staff and customers",
      ],
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "JWT",
        "MERN Stack",
      ],
      collaborator: "Solo Project",
      collaboratorLinkedIn: "https://www.linkedin.com/in/balajis183/",
      githubLink: "https://github.com/Manikanta-81/Hotel-Management-System",
      liveLink: "https://hotel-management-system-vert-eight.vercel.app/home",
      status: "Completed",
      duration: "3 months",
      category: "Full-Stack",
    },
    {
      id: "laxmi-hospitality",
      title: "Laxmi Hospitality Services",
      type: "Freelance Project",
      image: "/api/placeholder/600/400",
      description:
        "Developed a responsive, SEO-friendly React.js SPA with enhanced UI/UX, improving user engagement and navigation.",
      features: [
        "Responsive design for all devices",
        "SEO optimization for better visibility",
        "Enhanced UI/UX design",
        "Seamless customer communication",
        "Efficient form handling with Nodemailer",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "CSS",
        "Node.js",
        "Express.js",
        "Nodemailer",
      ],
      collaborator: "Client: Laxmi Hospitality",
      collaboratorLinkedIn: "https://www.linkedin.com/in/balajis183/",
      githubLink: "https://github.com/yourusername/laxmi-hospitality",
      liveLink: "https://laxmihospitalityservices.in/",
      status: "Completed",
      duration: "2 months",
      category: "Frontend",
    },
    {
      id: "future-forbes",
      title: "Future Forbes Pvt Ltd",
      type: "Freelance Project",
      image: "/api/placeholder/600/400",
      description:
        "Developed a responsive, SEO-friendly React.js SPA with enhanced UI/UX, improving user engagement and navigation.",
      features: [
        "Responsive design for all devices",
        "SEO optimization for better visibility",
        "Enhanced UI/UX design",
        "Seamless customer communication",
        "Efficient form handling with Nodemailer",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "CSS",
        "Node.js",
        "Express.js",
        "Nodemailer",
      ],
      collaborator: "Client: Future Forbes",
      collaboratorLinkedIn: "https://linkedin.com/company/future-forbes",
      githubLink: "https://github.com/yourusername/future-forbes",
      liveLink: "https://futureforbes.in/",
      status: "Completed",
      duration: "2 months",
      category: "Frontend",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleProjects(projectsData.map((project) => project.id));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const getCategoryColor = (category) => {
    const colorMap = {
      "Full-Stack": "bg-blue-100 text-blue-800 border-blue-200",
      Frontend: "bg-green-100 text-green-800 border-green-200",
      Backend: "bg-purple-100 text-purple-800 border-purple-200",
      Mobile: "bg-orange-100 text-orange-800 border-orange-200",
    };
    return colorMap[category] || colorMap["Full-Stack"];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, featuring full-stack applications,
              freelance projects, and innovative solutions built with modern
              technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projectsData.map((project, index) => {
              const isVisible = visibleProjects.includes(project.id);
              const isHovered = hoveredProject === project.id;

              return (
                <div
                  key={project.id}
                  className={`
                    group relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden
                    transition-all duration-500 transform
                    ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }
                    ${isHovered ? "scale-105 shadow-2xl" : "hover:scale-102"}
                  `}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-blue-600/30">
                        <Code />
                      </div>
                    </div>

                    {/* Overlay on Hover */}
                    <div
                      className={`
                      absolute inset-0 bg-black/60 flex items-center justify-center
                      transition-opacity duration-300
                      ${isHovered ? "opacity-100" : "opacity-0"}
                    `}
                    >
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
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full border border-green-200">
                        {project.status}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full border ${getCategoryColor(
                          project.category
                        )}`}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Title and Type */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium">
                        {project.type}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {project.features
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="text-xs text-gray-600 flex items-start"
                            >
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        {project.features.length > 3 && (
                          <li className="text-xs text-blue-600 font-medium">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies
                          .slice(0, 4)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Project Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {project.collaborator}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex space-x-3">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300"
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
                            className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300"
                          >
                            <Globe className="w-4 h-4 mr-1" />
                            Live
                          </a>
                        )}
                      </div>

                      {project.collaboratorLinkedIn && (
                        <a
                          href={project.collaboratorLinkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        >
                          <Linkedin className="w-4 h-4 mr-1" />
                          Collaborator
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect Indicator */}
                  <div
                    className={`
                    absolute top-4 right-4 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center
                    transition-all duration-300
                    ${
                      isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }
                  `}
                  >
                    <Eye className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm always excited to take on new challenges and create innovative
            solutions. Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Get In Touch
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-900 text-gray-900 font-medium rounded-md hover:bg-gray-900 hover:text-white transition-colors duration-200"
            >
              <Github className="w-4 h-4 mr-2" />
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;

import React from 'react'
import { Calendar, MapPin, ExternalLink, MessageCircle, Building, Shield } from 'lucide-react'

function Experience() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Experience & Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real-world experience in full-stack development, cloud deployment, and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Work Experience</h2>
          
          {/* Future Forbes */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
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
              <button className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4 md:mt-0">
                <ExternalLink className="w-4 h-4 mr-2" />
                Project Link
              </button>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li>• Developed and launched a fully responsive, SEO-friendly multi-page website for Future Forbes Private Limited, significantly boosting online visibility and user accessibility.</li>
              <li>• Engineered diverse dynamic elements, including interactive hero sections, animated client carousels, and scroll-triggered animations, to create a highly engaging and modern user experience.</li>
              <li>• Collaborated within a 2-member team to meticulously craft the UI/UX, integrating advanced interactive features like hover effects, accordions, and testimonial sliders for enhanced user interaction.</li>
              <li>• Implemented robust backend functionality with Nodemailer, streamlining form submissions from Careers and Contact Us pages for efficient, direct company communication.</li>
            </ul>
          </div>

          {/* Bluebex Software */}
          <div className="bg-white p-8 rounded-lg shadow-md">
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
            
            {/* Project 1 */}
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

            {/* Project 2 */}
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

      {/* Personal Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Personal Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hotel Management System */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Hotel Management System</h3>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  GitHub
                </button>
              </div>
              <p className="text-gray-600 mb-4">
                Designed and developed a Hotel Management System to manage bookings, rooms, and customer information efficiently.
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Developed using the MERN stack (MongoDB, Express.js, React, Node.js)</li>
                <li>• Enabled role-based access control using JWT tokens</li>
                <li>• Implemented CRUD operations for rooms and bookings</li>
                <li>• Customer management and feedback collection system</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">JWT</span>
              </div>
            </div>

            {/* Laxmi Hospitality Services */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Laxmi Hospitality Services</h3>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </button>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>May 2025 - July 2025</span>
              </div>
              <p className="text-gray-600 mb-4">
                Developed a fully responsive, SEO-friendly Single-Page Application (SPA) for hospitality services.
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Fully responsive, SEO-friendly SPA using React.js</li>
                <li>• Enhanced UI/UX design tailored to client requirements</li>
                <li>• Integrated Nodemailer for direct customer communication</li>
                <li>• Improved user engagement and navigation</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React.js</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Express.js</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Nodemailer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience

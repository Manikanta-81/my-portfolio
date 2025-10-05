import React from 'react'
import { Code, Database, Cloud, Globe, Shield } from 'lucide-react'

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Software developer with practical experience across front-end, back-end, and DevOps, 
              gained through real-time projects and internships.
            </p>
          </div>
        </div>
      </section>

      {/* Career Objective */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Career Objective</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed">
                Software developer with practical experience across front-end, back-end, and DevOps, gained through real-time projects 
                and internships. Proficient in the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js), with a strong grasp of 
                <strong> RESTful APIs</strong>, authentication flows, and email automation using Nodemailer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Front-End Development */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Front-End Development</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• React.js</li>
                <li>• JavaScript</li>
                <li>• HTML, CSS</li>
                <li>• Bootstrap</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>

            {/* Back-End Development */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Back-End Development</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Node.js</li>
                <li>• Express.js</li>
                <li>• RESTful APIs</li>
                <li>• JWT Authentication</li>
                <li>• API Integration</li>
              </ul>
            </div>

            {/* Database Management */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Database Management</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• MongoDB</li>
                <li>• Firebase</li>
                <li>• Realtime Database</li>
                <li>• Data Modeling</li>
                <li>• CRUD Operations</li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Cloud className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Cloud & DevOps</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• AWS EC2</li>
                <li>• AWS ACM</li>
                <li>• SSL Certificates</li>
                <li>• Load Balancers</li>
                <li>• Deployment</li>
              </ul>
            </div>

            {/* API Development */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">API Development</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Real-time APIs</li>
                <li>• WhatsApp API</li>
                <li>• Cloud Integration</li>
                <li>• Nodemailer</li>
                <li>• 2Factor API</li>
              </ul>
            </div>

            {/* Security & Authentication */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Security & Auth</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• JWT Tokens</li>
                <li>• OTP Verification</li>
                <li>• Role-based Access</li>
                <li>• Secure Authentication</li>
                <li>• HTTPS Configuration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

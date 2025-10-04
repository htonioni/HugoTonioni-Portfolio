import { Container, Heading, Paragraph, Highlight } from "@/components";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio built with Next.js 15 and TypeScript, featuring dark/light mode, 3D hover effects, and smooth animations.",
      tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "React 19"],
      status: "In Development",
      features: [
        "🎨 Custom dark/light theme system",
        "📱 Fully responsive design",
        "✨ 3D card hover effects",
        "🔄 Smooth page transitions",
        "💫 Interactive UI components"
      ],
      category: "Personal Project"
    },
    {
      title: "React Task Management App",
      description: "A comprehensive task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "TypeScript", "Redux", "Firebase", "Material-UI"],
      status: "Completed",
      features: [
        "📋 Create, edit, and organize tasks",
        "🎯 Priority levels and categories",
        "👥 Team collaboration",
        "📊 Progress tracking dashboard",
        "🔔 Real-time notifications"
      ],
      category: "Web Application",
      demo: "#",
      github: "#"
    },
    {
      title: "E-commerce Landing Page",
      description: "A high-converting landing page for an e-commerce brand, optimized for mobile devices with focus on user experience and conversion.",
      tech: ["React", "Next.js", "SCSS", "AOS Library"],
      status: "Completed",
      features: [
        "🛍️ Product showcase with animations",
        "💳 Integrated payment gateway mockup",
        "📈 Conversion-optimized design",
        "⚡ Performance optimization",
        "🔍 SEO best practices"
      ],
      category: "Frontend Design",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      tech: ["JavaScript", "HTML5", "CSS3", "Weather API", "Chart.js"],
      status: "Completed",
      features: [
        "🌤️ Real-time weather data",
        "📍 Location-based forecasts",
        "📊 Weather trends visualization",
        "🗺️ Interactive weather maps",
        "📱 Progressive Web App features"
      ],
      category: "Web Application",
      github: "#"
    },
    {
      title: "Blog Platform (Full-Stack)",
      description: "A complete blogging platform with user authentication, content management, and comment system. Currently learning backend implementation.",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
      status: "Learning Project",
      features: [
        "✍️ Rich text editor",
        "👤 User authentication system",
        "💬 Comment and like system",
        "🏷️ Category and tag management",
        "📊 Admin dashboard"
      ],
      category: "Full-Stack Learning"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800";
      case "In Development":
        return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800";
      case "Learning Project":
        return "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Personal Project":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      case "Web Application":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Frontend Design":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300";
      case "Full-Stack Learning":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <Container className="py-8">
      <div className="max-w-6xl">
        <Heading className="text-4xl md:text-5xl font-bold mb-6">
          My <Highlight variant="primary">Projects</Highlight>
        </Heading>
        
        <Paragraph className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
          Here's a showcase of my development journey - from frontend projects that demonstrate my current skills 
          to full-stack applications I'm building as I expand into backend development.
        </Paragraph>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Heading as="h3" className="text-2xl font-bold">
                        {project.title}
                      </Heading>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                    </div>
                    <Paragraph className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </Paragraph>
                  </div>
                  <div className="flex items-center gap-3 mt-4 md:mt-0">
                    <span className={`px-3 py-1 rounded-lg text-sm font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Features:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                {(project.demo || project.github) && (
                  <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {project.demo && (
                      <a 
                        href={project.demo}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
                      >
                        🌐 Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github}
                        className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-600 dark:hover:bg-gray-500 text-white rounded-lg transition-colors duration-200 font-medium"
                      >
                        📂 GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Journey */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl">
          <Heading as="h3" className="text-2xl font-bold mb-4">
            🚀 My Development Journey
          </Heading>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                ✓
              </div>
              <h4 className="font-semibold mb-2">Frontend Mastery</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Proficient in React, Next.js, TypeScript, and modern CSS frameworks
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                📚
              </div>
              <h4 className="font-semibold mb-2">Learning Backend</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Currently expanding skills in Node.js, databases, and server-side development
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                🎯
              </div>
              <h4 className="font-semibold mb-2">Full-Stack Goal</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Working toward becoming a complete full-stack developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
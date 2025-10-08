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
      title: "Gamified Lead Capture Tool - Embraer",
      description: "A gamified lead capture application for corporate events built with Salesforce Experience Cloud, capturing over 200 leads in its first event implementation.",
      tech: ["Salesforce Experience Cloud", "Lightning Web Components", "SLDS", "Apex", "JavaScript"],
      status: "Completed",
      features: [
        "🎮 Gamified user experience for events",
        "📊 Real-time lead capture and analytics", 
        "⚡ Salesforce Experience Cloud integration",
        "🎨 Custom Lightning Web Components",
        "📈 Successfully captured 200+ leads",
        "🔧 Apex backend for data processing"
      ],
      category: "Professional Project",
      company: "Embraer"
    },
    {
      title: "Process Automation Solutions - Embraer",
      description: "Enterprise automation solutions using JavaScript, TypeScript, Node.js, and Salesforce to streamline business processes and improve operational efficiency.",
      tech: ["JavaScript", "TypeScript", "Node.js", "Nest.js", "Salesforce", "Apex", "LWC"],
      status: "Ongoing",
      features: [
        "🔄 Automated business process workflows",
        "📋 Custom Salesforce objects and fields",
        "⚙️ REST API integrations",
        "📊 Custom dashboards and reports",
        "🔧 Lightning Web Components development",
        "💼 Enterprise-level solutions"
      ],
      category: "Professional Project",
      company: "Embraer"
    },
    {
      title: "PiSocial - Social Media Platform",
      description: "A complete social media application with REST API integration, featuring user authentication, posts, and real-time interactions.",
      tech: ["React", "Vite", "REST API", "JavaScript", "CSS3"],
      status: "In Development",
      features: [
        "� User authentication system",
        "📝 Create and manage posts",
        "� Social interactions (likes, comments)",
        "� Real-time data updates",
        "� Responsive mobile design"
      ],
      category: "Full-Stack Study",
      github: "https://github.com/htonioni/Estudos-React/tree/main/pisocial-page-react_rest"
    },
    {
      title: "Organo - Team Organization App",
      description: "A React application for organizing team members by departments, with drag-and-drop functionality and team management features.",
      tech: ["React", "JavaScript", "SCSS", "HTML5"],
      status: "Completed",
      features: [
        "� Team member management",
        "🏢 Department organization",
        "🎨 Interactive UI components",
        "📊 Visual team structure",
        "✨ Smooth animations"
      ],
      category: "React Study",
      github: "https://github.com/htonioni/Estudos-React/tree/main/organo-react"
    },
    {
      title: "Focus Timer - Pomodoro Technique",
      description: "A productivity application implementing the Pomodoro Technique with customizable timers, sound alerts, and task management.",
      tech: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
      status: "Completed",
      features: [
        "⏰ Customizable pomodoro timers",
        "🔊 Sound notifications and alerts",
        "� Task management system",
        "📊 Productivity tracking",
        "🎵 Background soundscapes"
      ],
      category: "Vanilla JS",
      github: "https://github.com/htonioni/Estudos-React/tree/main/Alura/focus-pomodoro-timer"
    },
    {
      title: "Task List Manager",
      description: "A modern task management application built with React and Tailwind CSS, featuring task creation, editing, and organization.",
      tech: ["React", "Tailwind CSS", "Vite", "JavaScript"],
      status: "Completed",
      features: [
        "✅ Create and edit tasks",
        "🏷️ Task categorization",
        "� Due date management",
        "� Search and filter tasks",
        "� Local storage persistence"
      ],
      category: "React Study",
      github: "https://github.com/htonioni/Estudos-React/tree/main/task-list-react"
    },
    {
      title: "Feed Content Platform",
      description: "A content management platform for creating and displaying social media feeds with modern React components and responsive design.",
      tech: ["React", "Vite", "CSS3", "JavaScript"],
      status: "Completed",
      features: [
        "📰 Dynamic content feed",
        "🎨 Modern component design",
        "📱 Mobile-first approach",
        "⚡ Fast loading performance",
        "🔄 Real-time content updates"
      ],
      category: "React Study",
      github: "https://github.com/htonioni/Estudos-React/tree/main/feed-content-react"
    },
    {
      title: "VidFlow - Video Platform",
      description: "A video streaming platform interface with Node.js backend, featuring video upload, categorization, and responsive design.",
      tech: ["Node.js", "HTML5", "CSS3", "JavaScript", "Express.js"],
      status: "Completed",
      features: [
        "🎥 Video upload and streaming",
        "📂 Category management",
        "🔍 Search functionality",
        "📱 Responsive video player",
        "�️ Admin dashboard"
      ],
      category: "Full-Stack Study",
      github: "https://github.com/htonioni/Estudos-React/tree/main/Alura/videoplataform-nodejs"
    },
    {
      title: "ByteBank TypeScript",
      description: "A banking application built with TypeScript focusing on type safety, object-oriented programming, and financial operations.",
      tech: ["TypeScript", "HTML5", "CSS3", "OOP"],
      status: "Completed",
      features: [
        "💰 Account management system",
        "🔒 Type-safe financial operations",
        "📊 Transaction history",
        "🎯 Object-oriented architecture",
        "�️ Input validation and security"
      ],
      category: "TypeScript Study",
      github: "https://github.com/htonioni/Estudos-React/tree/main/Alura/bytebank-typescript"
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
      case "Professional Project":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300";
      case "Personal Project":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      case "Web Application":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Frontend Design":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300";
      case "Full-Stack Study":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300";
      case "React Study":
        return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300";
      case "TypeScript Study":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300";
      case "Vanilla JS":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
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
          From enterprise solutions at Embraer to personal learning projects, here's a showcase of my development journey 
          spanning Salesforce, React, TypeScript, and full-stack applications.
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
                {project.github && (
                  <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a 
                      href={project.github}
                      className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-600 dark:hover:bg-gray-500 text-white rounded-lg transition-colors duration-200 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📂 View on GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Journey */}
        <div className="mt-16 bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 dark:from-emerald-900/20 dark:via-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl">
          <Heading as="h3" className="text-2xl font-bold mb-4">
            🚀 My Professional Journey
          </Heading>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                💼
              </div>
              <h4 className="font-semibold mb-2">Enterprise Solutions</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                2+ years developing Salesforce applications, automation flows, and enterprise web solutions at Embraer
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                ⚙️
              </div>
              <h4 className="font-semibold mb-2">Full-Stack Development</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Proficient in JavaScript, React, TypeScript, Node.js, Nest.js, and Salesforce platform technologies
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                🌐
              </div>
              <h4 className="font-semibold mb-2">International Experience</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Fluent in English with international experience in the US, bringing global perspective to development
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Paragraph className="text-gray-700 dark:text-gray-300">
              <strong>8 completed projects</strong> • <strong>Multiple frameworks</strong> • <strong>Growing expertise</strong> in modern web development
            </Paragraph>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
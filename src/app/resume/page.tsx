import { Container, Heading, Paragraph, Highlight } from "@/components";
import { Timeline } from "@/components/Timeline";
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Resume = () => {
  // Real professional experience and education
  const experiences = [
    {
      title: "IT Intern",
      company: "Embraer",
      period: "April 2023 - December 2024",
      description: [
        "Developed and maintained enterprise Salesforce applications using Lightning Web Components (LWC) and Apex",
        "Built gamified lead capture solution that successfully captured 200+ qualified leads for sales team",
        "Created process automation flows and integrated external APIs to streamline business operations",
        "Collaborated with cross-functional teams using Jira, Confluence, and Bitbucket for project management",
        "Maintained enterprise web applications and provided technical support for business-critical systems"
      ],
      technologies: ["Salesforce", "Lightning Web Components", "Apex", "JavaScript", "HTML/CSS", "REST APIs", "Azure DevOps", "Jira"],
      type: "work" as const
    },
    {
      title: "International Experience",
      company: "United States",
      period: "2022",
      description: [
        "Lived and worked in the United States, developing strong English proficiency and cultural adaptability",
        "Gained international perspective on technology and business practices",
        "Enhanced communication skills working in multicultural environments",
        "Built global network and understanding of international development standards"
      ],
      technologies: ["English Communication", "Cultural Adaptation", "Global Collaboration", "International Business"],
      type: "work" as const
    },
    {
      title: "Computer Science",
      company: "University Studies",
      period: "2021 - Present",
      description: [
        "Pursuing Computer Science degree with focus on software engineering and web development",
        "Strong foundation in programming fundamentals, data structures, and algorithms",
        "Specialized in modern web technologies including React, TypeScript, and Node.js",
        "Active participation in academic projects and coding challenges"
      ],
      technologies: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "Java", "Git", "Database Design"],
      type: "education" as const
    },
    {
      title: "Full-Stack Development Journey",
      company: "Self-Directed Learning & Projects",
      period: "2020 - Present",
      description: [
        "Started web development journey with HTML, CSS, and JavaScript fundamentals",
        "Progressed to modern frameworks including React, Next.js, and backend technologies",
        "Built multiple personal and professional projects showcasing diverse technical skills",
        "Continuously learning new technologies and best practices in software development"
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Nest.js", "MongoDB", "PostgreSQL", "Docker"],
      type: "certification" as const
    }
  ];

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    salesforce: ["Lightning Web Components", "Apex", "Salesforce Platform", "Experience Cloud", "Process Builder"],
    tools: ["Git", "Jira", "Confluence", "Bitbucket", "Azure DevOps", "VSCode", "Figma"],
    backend: ["Node.js", "Nest.js", "REST APIs", "MongoDB", "PostgreSQL"],
    languages: ["English (Fluent)", "Portuguese (Native)", "International Communication"]
  };

  return (
    <Container className="py-8">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Heading className="text-4xl md:text-5xl font-bold mb-4">
            My Professional <Highlight variant="primary">Resume</Highlight>
          </Heading>
          <Paragraph className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer & Salesforce Specialist with enterprise experience at Embraer. 
            Passionate about creating modern digital solutions and automation that drive business results.
          </Paragraph>
          
          {/* Download Button */}
          <div className="flex justify-center mb-8">
            <a
              href="/resume/HugoTonioni-resume.pdf"
              download="Hugo_Tonioni_Resume.pdf"
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <FaDownload size={20} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Email</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">hugotonionidev@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">LinkedIn</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">linkedin.com/in/htonioni</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaGithub className="text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">GitHub</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">github.com/htonioni</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Location</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Brazil (Open to Remote)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <Heading as="h2" className="text-3xl font-bold mb-8 text-center">
            Technical <Highlight variant="secondary">Skills</Highlight>
          </Heading>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">Salesforce</h3>
              <div className="flex flex-wrap gap-2">
                {skills.salesforce.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-400">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((language, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-lg text-sm font-medium">
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-12">
          <Heading as="h2" className="text-3xl font-bold mb-8 text-center">
            Professional Experience & <Highlight variant="primary">Education</Highlight>
          </Heading>
          
          <Timeline items={experiences} />
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
          <Heading as="h3" className="text-2xl font-bold mb-4 text-white">
            Let's work together!
          </Heading>
          <Paragraph className="text-blue-100 mb-6 max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects. 
            Get in touch to discuss how I can contribute to your team with my Salesforce and full-stack expertise!
          </Paragraph>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get In Touch
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Resume;
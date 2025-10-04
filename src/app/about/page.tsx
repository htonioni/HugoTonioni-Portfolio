import { Container, Heading, Paragraph, Highlight } from "@/components";

const About = () => {
  return (
    <Container className="py-8">
      <div className="max-w-4xl">
        <Heading className="text-4xl md:text-5xl font-bold mb-6">
          About <Highlight variant="primary">Hugo Tonioni</Highlight>
        </Heading>
        
        <Heading as="h2" className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Frontend Developer & Software Engineering Student
        </Heading>

        <div className="space-y-6 text-lg leading-relaxed">
          <Paragraph>
            I'm a passionate <Highlight variant="secondary">Frontend Developer</Highlight> currently pursuing 
            Software Engineering, dedicated to creating exceptional digital experiences. My journey in tech 
            started with curiosity and has evolved into a focused career path toward becoming a 
            <Highlight>Full-Stack Developer</Highlight>.
          </Paragraph>

          <Paragraph>
            I specialize in building modern, responsive web applications using <Highlight variant="accent">React, 
            Next.js, and TypeScript</Highlight>. My approach combines clean, maintainable code with 
            user-centered design principles to deliver solutions that not only look great but perform exceptionally.
          </Paragraph>

          <Paragraph>
            Currently expanding my skills in <Highlight>backend technologies</Highlight> including Node.js, 
            MongoDB, and cloud platforms. I believe in continuous learning and staying current with 
            the latest industry trends and best practices.
          </Paragraph>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
            <Paragraph className="text-blue-800 dark:text-blue-200 font-medium">
              💡 "My goal is to bridge the gap between creative design and robust functionality, 
              creating digital experiences that make a real impact."
            </Paragraph>
          </div>
        </div>

        {/* Education & Background */}
        <div className="mt-12">
          <Heading as="h3" className="text-2xl font-semibold mb-6">
            Education & Background
          </Heading>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <Paragraph className="mb-4">
              <strong>Software Engineering Student</strong> - Currently pursuing my degree 
              with focus on modern software development practices, algorithms, and system design.
            </Paragraph>
            <Paragraph>
              My academic journey complements my practical experience, providing a solid foundation 
              in computer science fundamentals while I build real-world applications.
            </Paragraph>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-12">
          <Heading as="h3" className="text-2xl font-semibold mb-6">
            Tech Stack & Skills
          </Heading>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3 text-lg">Frontend (Confident)</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "React", "Next.js", "TypeScript", "JavaScript",
                  "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"
                ].map((tech) => (
                  <div key={tech} className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-center border border-green-200 dark:border-green-800">
                    <span className="font-medium text-green-800 dark:text-green-200">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 text-lg">Backend (Learning)</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Node.js", "MongoDB", "Express.js", "REST APIs"
                ].map((tech) => (
                  <div key={tech} className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-center border border-blue-200 dark:border-blue-800">
                    <span className="font-medium text-blue-800 dark:text-blue-200">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3 text-lg">Tools & Workflow</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Git & GitHub", "VS Code", "Figma", "npm/yarn"
                ].map((tech) => (
                  <div key={tech} className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg text-center border border-purple-200 dark:border-purple-800">
                    <span className="font-medium text-purple-800 dark:text-purple-200">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Learning Goals */}
        <div className="mt-12">
          <Heading as="h3" className="text-2xl font-semibold mb-6">
            Current Learning Focus
          </Heading>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">🎯 Backend Mastery</h4>
              <ul className="space-y-2 text-orange-700 dark:text-orange-300">
                <li>• Advanced Node.js patterns</li>
                <li>• Database design & optimization</li>
                <li>• API development & security</li>
                <li>• Server deployment & DevOps</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 p-6 rounded-lg border border-teal-200 dark:border-teal-800">
              <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-3">🚀 Advanced Frontend</h4>
              <ul className="space-y-2 text-teal-700 dark:text-teal-300">
                <li>• Advanced React patterns</li>
                <li>• Performance optimization</li>
                <li>• Testing strategies</li>
                <li>• Animation & micro-interactions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Personal Touch */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 p-8 rounded-lg">
          <Heading as="h3" className="text-2xl font-semibold mb-4">
            Why I Love Development
          </Heading>
          <Paragraph className="text-lg">
            There's something magical about turning ideas into interactive experiences. Every line of code 
            is a step toward solving real problems and making technology more accessible. I'm driven by 
            the endless possibilities in web development and the constant evolution of the field.
          </Paragraph>
          <Paragraph className="text-lg mt-4">
            When I'm not coding, I'm probably reading about new frameworks, watching tech talks, or 
            planning my next project. The journey from frontend to full-stack is exciting, and I'm 
            enjoying every step of it!
          </Paragraph>
        </div>
      </div>
    </Container>
  );
}

export default About;
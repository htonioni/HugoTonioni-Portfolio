import { Container, Heading, Paragraph, Highlight } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
        
        {/* Hero Content - Left Side */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <Heading className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              I&apos;m <Highlight variant="primary">Hugo Tonioni</Highlight>
            </Heading>
            <Heading as="h2" className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-normal">
              Full-Stack Developer
            </Heading>
          </div>

          <Paragraph className="text-lg md:text-xl leading-relaxed max-w-2xl">
            I build <Highlight variant="secondary">accessible, pixel-perfect digital experiences</Highlight> that 
            blend thoughtful design with robust engineering. My favorite work lies at the intersection 
            of design and development, creating solutions that not only look great but are 
            meticulously built for <Highlight>performance and usability</Highlight>.
          </Paragraph>

          <Paragraph className="text-lg md:text-xl leading-relaxed max-w-2xl">
            Currently focused on building <Highlight variant="accent">modern web applications</Highlight> using 
            React, Next.js, TypeScript, and other cutting-edge technologies to deliver exceptional user experiences.
          </Paragraph>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>

          {/* Tech Stack Preview */}
          <div className="pt-8">
            <Paragraph className="text-sm text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider font-medium">
              Technologies I work with
            </Paragraph>
            <div className="flex flex-wrap gap-3">
              {[
                "React", "Next.js", "TypeScript", "Node.js", 
                "Tailwind CSS", "PostgreSQL", "MongoDB", "AWS"
              ].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Image - Right Side */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:transform hover:scale-105 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-xl overflow-hidden bg-white dark:bg-gray-900">
                <Image
                  src="/images/profile-pic.png"
                  alt="Hugo Tonioni - Full-Stack Developer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}

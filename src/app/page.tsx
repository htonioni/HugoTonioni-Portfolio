import { Container, Heading, Paragraph, Highlight } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function Home() {
  return (
    <Container className="py-8 md:py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-6xl mx-auto">
        
        {/* Hero Content - Left Side */}
        <div className="space-y-6 order-2 lg:order-1">
          <div className="space-y-3">
            <Heading className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <Highlight variant="primary">Hugo</Highlight>
            </Heading>
            <Heading as="h2" className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-normal">
              Frontend Developer
            </Heading>
          </div>

          <Paragraph className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            I'm a passionate frontend developer and Software Engineering student, 
            building modern web applications with <Highlight>React, Next.js, and TypeScript</Highlight>. 
            Currently expanding into full-stack development.
          </Paragraph>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              About Me
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* 3D Profile Image - Right Side */}
        <div className="flex justify-center order-1 lg:order-2">
          <CardContainer className="inter-var">
            <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-black/[0.1] w-auto sm:w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="w-full"
              >
                <div className="w-72 h-72 relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-lg overflow-hidden bg-white dark:bg-gray-900">
                    <Image
                      src="/images/home_profile.JPEG"
                      alt="Hugo Tonioni - Frontend Developer"
                      fill
                      className="object-cover"
                      priority
                      sizes="288px"
                    />
                  </div>
                </div>
              </CardItem>
              
              <div className="flex justify-center">
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-4 dark:text-neutral-300 text-center "
                >
                  Hugo Tonioni de Santana 👨‍💻
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </Container>
  );
}

import { Container, Heading, Paragraph, Highlight } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function Home() {
  return (
    <Container className="flex items-center justify-center px-4 py-6 lg:py-8">
      <div className="w-full max-w-6xl lg:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-center justify-items-center min-h-[70vh] lg:min-h-[75vh] xl:min-h-[80vh]">
          
          {/* Hero Content - Left Side */}
          <div className="space-y-4 lg:space-y-5 xl:space-y-6 text-center lg:text-left order-2 lg:order-1 max-w-2xl lg:max-w-none">
            <div className="space-y-2 lg:space-y-3">
              <Heading className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl desktop:text-7xl font-bold leading-tight">
                Hi, I'm <Highlight variant="primary">Hugo</Highlight>
              </Heading>
              <Heading as="h2" className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl desktop:text-3xl text-gray-600 dark:text-gray-300 font-normal">
                Full-stack Developer
              </Heading>
            </div>

            <Paragraph className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl desktop:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              I'm a passionate full-stack developer and Information Technology student, 
              building modern web applications with <Highlight>React, Next.js, TypeScript and Node</Highlight>. 
              Currently, I'm focusing on deepening my backend skills and growing as a full-stack developer.
            </Paragraph>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-3 lg:pt-4 justify-center lg:justify-start">
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-5 py-2.5 lg:px-6 lg:py-3 xl:px-8 xl:py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl text-sm lg:text-base xl:text-lg"
              >
                About Me
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 lg:px-6 lg:py-3 xl:px-8 xl:py-4 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-300 text-sm lg:text-base xl:text-lg"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* 3D Profile Image - Right Side */}
          <div className="flex justify-center order-1 lg:order-2">
            <CardContainer className="inter-var">
              <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-black/[0.1] w-auto h-auto rounded-xl p-4 lg:p-5 xl:p-6 border">
                <CardItem
                  translateZ="50"
                  className="w-full"
                >
                  <div className="w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-72 lg:h-72 xl:w-80 xl:h-80 desktop:w-96 desktop:h-96 relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1">
                    <div className="w-full h-full rounded-lg overflow-hidden bg-white dark:bg-gray-900">
                      <Image
                        src="/images/home_profile.JPEG"
                        alt="Hugo Tonioni - Full-stack Developer"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 640px) 240px, (max-width: 768px) 256px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
                      />
                    </div>
                  </div>
                </CardItem>
                
                <div >
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-xs sm:text-sm lg:text-xs xl:text-sm max-w-sm mt-3 lg:mt-4 dark:text-neutral-300 text-center"
                  >
                    Hugo Tonioni de Santana 
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </Container>
  );
}

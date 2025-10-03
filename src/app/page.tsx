import { Container, Heading, Paragraph, Highlight } from "@/components";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="text-3xl md:text-4xl lg:text-5xl mb-4">
        Welcome to my portfolio
      </Heading>
      <Paragraph className="text-lg md:text-xl mb-8">
        This is a responsive portfolio with <Highlight>dark and light mode</Highlight> support.
      </Paragraph>
      
      <Paragraph className="text-lg md:text-xl mb-8">
        I&apos;m a full-stack developer passionate about creating{" "}
        <Highlight>amazing digital experiences</Highlight> with modern technologies.
      </Paragraph>
      
      {/* Card de exemplo para testar responsividade */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12">
        {[1, 2, 3].map((item) => (
          <div 
            key={item} 
            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <Heading as="h3" className="text-xl mb-2">
              Card {item}
            </Heading>
            <Paragraph className="text-sm">
              Este é um card de exemplo para testar a responsividade e o dark mode.
            </Paragraph>
          </div>
        ))}
      </div>
    </Container>
  );
}

import { Container, Heading, Paragraph, Highlight } from "@/components";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaClock, FaBriefcase, FaRocket, FaGraduationCap, FaComments, FaStar } from "react-icons/fa";
import { GoLink } from "react-icons/go"

const Contact = () => {
  const contactMethods = [
    {
      title: "E-mail",
      description: "Easiest way to reach me",
      value: "htonioni@outlook.com",
      href: "mailto:htonioni@outlook.com",
      icon: <FaEnvelope className="text-2xl text-gray-600 dark:text-gray-300" />
    },
    {
      title: "LinkedIn",
      description: "Let's connect professionally",
      value: "@Hugo Tonioni",
      href: "https://linkedin.com/in/htonioni",
      icon: <FaLinkedin className="text-2xl text-blue-600" />
    },
    {
      title: "GitHub",
      description: "Check out my projects",
      value: "@htonioni",
      href: "https://github.com/htonioni",
      icon: <FaGithub className="text-2xl text-gray-800 dark:text-gray-200" />
    },
  ];

  const timeZone = {
    location: "São Paulo, Brazil",
    timezone: "UTC-3",
    workingHours: "8:00 AM - 6:00 PM (BRT)"
  };

  return (
    <Container className="py-8">
      <div className="max-w-5xl">
        <Heading className="text-4xl md:text-5xl font-bold mb-6">
          Let's <Highlight variant="primary">Connect</Highlight>
        </Heading>

        <Paragraph className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
          I'm always excited to discuss new opportunities, collaborate on interesting projects,
          or simply chat about technology and development. Feel free to reach out!
        </Paragraph>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="group block p-6 rounded-xl border transition-all duration-300 hover:shadow-lg bg-white border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center">{method.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                      {method.title}
                    </h3>
                    <GoLink className="text-xl text-gray-800 dark:text-gray-200" />
                  </div>
                  <p className="text-sm mb-2 text-gray-600 dark:text-gray-300">
                    {method.description}
                  </p>
                  <p className="font-medium text-gray-800 dark:text-gray-200 group-hover:underline">
                    {method.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Availability */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-xl mb-12">
          <Heading as="h3" className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            🌍 Availability & Location
          </Heading>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                <FaMapMarkerAlt />
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Location</h4>
              <p className="text-gray-600 dark:text-gray-300">{timeZone.location}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                <FaClock />
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Timezone</h4>
              <p className="text-gray-600 dark:text-gray-300">{timeZone.timezone}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                <FaBriefcase />
              </div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">Working Hours</h4>
              <p className="text-gray-600 dark:text-gray-300">{timeZone.workingHours}</p>
            </div>
          </div>
        </div>

        {/* Project Types */}
        <div className="mb-12">
          <Heading as="h3" className="text-2xl font-bold mb-6">
            What I'm Looking For
          </Heading>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-lg mb-3 text-orange-600 dark:text-orange-400 flex items-center gap-2">
                <FaRocket />
                Web Projects
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• React/Next.js applications</li>
                <li>• Landing pages & websites</li>
                <li>• UI/UX implementation</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <FaGraduationCap />
                Learning Opportunities
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Junior developer roles</li>
                <li>• Internship opportunities</li>
                <li>• Mentorship programs</li>
                <li>• Open source collaboration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-50 via-blue-50 to-teal-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-teal-900/20 p-8 rounded-xl">
          <Heading as="h3" className="text-2xl font-bold mb-4">
            Ready to Start Something Great?
          </Heading>
          <Paragraph className="text-lg mb-6 max-w-2xl mx-auto">
            Whether you have a project idea, want to collaborate, or just want to say hello,
            I'd love to hear from you. Let's build something amazing together!
          </Paragraph>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:htonioni@outlook.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <FaEnvelope className="text-lg" />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/htonioni"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-600 dark:hover:bg-gray-500 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <FaLinkedin className="text-lg" />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Response Time */}
        <div className="mt-8 text-center">
          <Paragraph className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
            <FaComments className="text-blue-500" />
            I typically respond within 24 hours
            <span className="mx-2">•</span>
            <FaStar className="text-yellow-500" />
            Always excited for new challenges
          </Paragraph>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
"use client";
import React from "react";
import { Projects } from "../components/data/projects";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Shield,
  Zap,
} from "lucide-react";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import Image from "next/image";

export default function Portfolio() {
  const [activeProject, setActiveProject] = React.useState<number | 0>(0);
  const skills = [
    { name: "Solidity", icon: Code, level: 90 },
    { name: "Web3.js", icon: Database, level: 95 },
    { name: "Smart Contracts", icon: Shield, level: 95 },
    { name: "DeFi Protocols", icon: Zap, level: 90 },
    { name: "React/Next.js", icon: Code, level: 95 },
    { name: "Node.js", icon: Database, level: 95 },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              X_DRAVON
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-blue-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Blockchain Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Building the future of decentralized applications with cutting-edge
            blockchain technology
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Hi👋, I'm Eric Hardin
          </h2>
          <div className="grid md:grid-cols-2 gap-12 ">
            <div>
              <h2 className="text-xl text-gray-300 mb-6 leading-relaxed">
                ☣️ Summary
              </h2>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I’m a Blockchain & Full Stack Developer based in the United
                States. With over 9 years of hands-on experience, I specialize
                in building secure Web3 apps, smart contracts, and scalable
                backend systems. Passionate about learning emerging technologies
                and staying at the forefront of software innovation. Strong in
                both independent problem-solving and collaborative team
                environments. I am happy to answer any questions or discuss your
                project needs.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FaDiscord size={24} />
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FaTelegram size={24} />
                </a>
              </div>
            </div>
            <div className="relative">
              <h2 className="text-xl text-gray-300 mb-6 leading-relaxed">
                🧑‍💻 Core Tech
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                🚀 Blockchain: Ethereum, Solidity, Smart Contracts, Web3.js,
                Ethers.js, NFT Marketplace, Solana, Rust, Anchor<br></br>🚀
                Backend: Node.js, NestJS, Express, Laravel, Django <br></br>🚀
                Frontend: React, Next.js, Vue, Nuxt, Svelte, Angular
                <br></br>🚀 Mobile: Flutter, React Native, Swift, Kotlin
                <br></br>🚀 Database: PostgreSQL, MySQL, MongoDB, Redis
                <br></br>🚀 Cloud & DevOps: AWS, Google Cloud, Azure, Docker,
                Nginx, K8S, CI/CD<br></br>🚀 API: REST, GraphQL, API Integration
                & Development<br></br>🚀 Collaboration : Git, Github, Bitbucket,
                Gitlab, Jira, Jenkins
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="text-blue-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    {skill.level}% Proficiency
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"></div>

        {/* Background Images */}
        {Projects.map((project) => (
          <div
            key={`bg-${project.id}`}
            className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-in-out"
          >
            <Image
              src={project.background || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-opacity duration-700 ease-in-out"
              style={{
                opacity: activeProject === project.id ? 0.5 : 0,
                visibility: activeProject === project.id ? "visible" : "hidden",
                transition: "opacity 150ms ease-in-out",
              }}
            />
          </div>
        ))}

        <div className="relative z-10 max-w-[80%] mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-900 to-white bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Projects List */}
            <div className="space-y-4">
              {Projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group cursor-pointer project-item"
                  data-project={project.id}
                  onMouseOver={() => setActiveProject(project.id)}
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(0)}
                >
                  <div className="border-l-2 border-gray-700 text-black bg-white px-3 py-3 rounded-2xl group-hover:border-blue-500 pl-6 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-sm text-blue-400 font-mono">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.github}
                          className="text-gray-400 hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.live}
                          className="text-gray-400 hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800/50 group-hover:bg-blue-600/20 text-white group-hover:text-blue-400 text-sm rounded border border-gray-700 group-hover:border-blue-600/30 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Preview Info */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border border-gray-800">
                <h3 className="text-lg md:text-[24px] lg:text-[30px] font-semibold mb-4 text-blue-400">
                  {Projects[activeProject]?.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-lg lg:text-[20px] leading-relaxed">
                  {Projects[activeProject]?.description}
                </p>
                <div className="mt-6 p-4 bg-gray-800/50 rounded border border-gray-700 flex flex-wrap">
                  {Projects[activeProject]?.tech.map((tech, index) => (
                    <p
                      key={index}
                      className="px-3 py-1 m-1 bg-gray-800/50 group-hover:bg-blue-600/20 text-white group-hover:text-blue-400 text-sm rounded border border-gray-700 group-hover:border-blue-600/30 transition-all duration-300"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
                <div className="project-image-thumnail">
                  <Image
                    src={Projects[activeProject]?.background}
                    alt="Project Background"
                    className="w-full h-full"
                    width={300}
                    height={300}
                    style={{
                      opacity: 1,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your blockchain project to life? Let's discuss how we
            can work together to create innovative decentralized solutions.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <Mail className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Gmail</h3>
              <p className="text-gray-400">erichardin.xp</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <Github className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">@x-dravon</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <FaDiscord className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Discord</h3>
              <p className="text-gray-400">@x_dravon</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <FaTelegram className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Telegram</h3>
              <p className="text-gray-400">@x_dravon</p>
            </div>
          </div>

          <a
            href="mailto:erichardin.xp@gmail.com"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} BlockchainDev. Built with Next.js and
            Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

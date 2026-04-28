import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Blood Bank & Donor Management System",
      description: "A comprehensive web app to manage donor registrations, blood inventory, and request tracking.",
      technologies: ["HTML", "CSS", "JavaScript", "SQL"],
      github: "https://github.com/archana/blood-bank-system",
      image: "https://images.unsplash.com/photo-1683791895200-201c0c40310f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9vZCUyMGJhbmslMjBtZWRpY2FsJTIwc3lzdGVtfGVufDF8fHx8MTc1NzE2MTcyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      title: "E-Commerce Shopping Platform",
      description: "Modern shopping website with secure payments and order tracking.",
      technologies: ["React", "JavaScript", "Tailwind", "Node.js"],
      github: "https://github.com/archana/ecommerce-platform",
      demo: "#",
      image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NTcxNTg5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description: "A responsive personal portfolio to showcase projects, skills, and freelancing services.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/archana/portfolio-website",
      demo: "#",
      image: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NzEzMjg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 4,
      title: "Library Management System",
      description: "A digital solution for book lending, returns, and catalog management.",
      technologies: ["HTML", "CSS", "JavaScript", "SQL"],
      github: "https://github.com/archana/library-management",
      image: "https://images.unsplash.com/photo-1700683533670-2a9eaf3206dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwbWFuYWdlbWVudCUyMGJvb2tzfGVufDF8fHx8MTc1NzE1ODk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 5,
      title: "Online Food Ordering System",
      description: "A web app for food ordering with real-time tracking and payments.",
      technologies: ["React", "Tailwind", "Firebase"],
      github: "https://github.com/archana/food-ordering-system",
      image: "https://images.unsplash.com/photo-1567199955211-2648518a7730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzU3MTU4OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 6,
      title: "Weather Forecast Application",
      description: "Displays real-time weather using API integration with location search.",
      technologies: ["JavaScript", "API", "HTML", "CSS"],
      github: "https://github.com/archana/weather-app",
      demo: "#",
      image: "https://images.unsplash.com/photo-1705077031869-51b60754302a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwZm9yZWNhc3QlMjBhcHB8ZW58MXx8fHwxNzU3MTU4OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 7,
      title: "Task Manager App",
      description: "A productivity app to manage tasks, deadlines, and priorities.",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/archana/task-manager",
      image: "https://images.unsplash.com/photo-1553968464-754bb963ea49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlciUyMGNoZWNrbGlzdHxlbnwxfHx8fDE3NTcxNjIyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 8,
      title: "Travel Booking Website",
      description: "Website to book flights, hotels, and packages with real-time availability.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      github: "https://github.com/archana/travel-booking",
      image: "https://images.unsplash.com/photo-1719058180672-8242b44254d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwYWlycGxhbmV8ZW58MXx8fHwxNzU3MTYyMjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 9,
      title: "Chat Application",
      description: "Real-time chat platform with user authentication and group messaging.",
      technologies: ["React", "Firebase", "Tailwind"],
      github: "https://github.com/archana/chat-app",
      demo: "#",
      image: "https://images.unsplash.com/photo-1662974770404-468fd9660389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0JTIwYXBwbGljYXRpb24lMjBtZXNzYWdpbmd8ZW58MXx8fHwxNzU3MTYyMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 10,
      title: "Fitness Tracker Dashboard",
      description: "A dashboard to track workouts, calories, and progress visually.",
      technologies: ["React", "Chart.js", "Tailwind"],
      github: "https://github.com/archana/fitness-tracker",
      image: "https://images.unsplash.com/photo-1565328523183-0433877fa15a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tlciUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTcxNjIyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat text-4xl md:text-5xl text-[#1e293b] mb-6">
            Featured Projects
          </h2>
          <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of web development projects showcasing modern technologies, 
            clean code, and user-focused design solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative backdrop-blur-md bg-white/80 border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <ImageWithFallback 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="font-montserrat text-xl text-[#1e293b] mb-3 group-hover:text-[#2563eb] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="font-poppins text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-poppins bg-gradient-to-r from-[#2563eb]/10 to-blue-100/50 text-[#2563eb] border border-[#2563eb]/20 backdrop-blur-sm hover:from-[#2563eb]/20 hover:to-blue-100 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* GitHub Button */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-poppins rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#2563eb]/25 group"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    View on GitHub
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </motion.a>
                </div>

                {/* Glassmorphism Border Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2563eb]/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="backdrop-blur-md bg-white/80 border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="font-montserrat text-2xl text-[#1e293b] mb-4">
              Want to See More Projects?
            </h3>
            <p className="font-poppins text-gray-600 mb-6 max-w-2xl mx-auto">
              These are just a few highlights from my portfolio. I'm always working on new projects 
              and exploring the latest technologies. Let's discuss how I can bring your ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/archana"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1e293b] hover:bg-gray-900 text-white font-poppins rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Github className="w-5 h-5 mr-2" />
                Visit GitHub Profile
              </motion.a>
              <motion.button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white font-poppins rounded-xl transition-all duration-300"
              >
                Start a Project
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
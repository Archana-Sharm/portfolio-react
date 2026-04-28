import React from 'react';
import { motion } from 'motion/react';
import { Code, Database, GitBranch, Mail, Globe, Layers, Terminal, Palette } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      name: 'HTML',
      level: 90,
      icon: <Code className="w-6 h-6" />,
      color: '#E34F26'
    },
    {
      name: 'CSS',
      level: 85,
      icon: <Palette className="w-6 h-6" />,
      color: '#1572B6'
    },
    {
      name: 'JavaScript',
      level: 80,
      icon: <Terminal className="w-6 h-6" />,
      color: '#F7DF1E'
    },
    {
      name: 'React',
      level: 75,
      icon: <Globe className="w-6 h-6" />,
      color: '#61DAFB'
    },
    {
      name: 'Tailwind',
      level: 80,
      icon: <Layers className="w-6 h-6" />,
      color: '#06B6D4'
    },
    {
      name: 'SQL',
      level: 70,
      icon: <Database className="w-6 h-6" />,
      color: '#4479A1'
    },
    {
      name: 'Git',
      level: 75,
      icon: <GitBranch className="w-6 h-6" />,
      color: '#F05032'
    },
    {
      name: 'Email Templates',
      level: 85,
      icon: <Mail className="w-6 h-6" />,
      color: '#EA4335'
    }
  ];

  const CircularProgress = ({ skill, index }: { skill: Skill; index: number }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (skill.level / 100) * circumference;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
      >
        <div className="relative w-24 h-24 mb-4">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#f3f4f6"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke={skill.color}
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset: strokeDashoffset }}
              transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
              viewport={{ once: true }}
            />
          </svg>
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ color: skill.color }}
          >
            {skill.icon}
          </div>
        </div>
        
        <h3 className="text-lg text-gray-900 mb-2">{skill.name}</h3>
        <div className="text-2xl text-blue-600 mb-1">{skill.level}%</div>
        <div className="text-sm text-gray-500">Proficiency</div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I work with modern technologies and tools to create exceptional web experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <CircularProgress key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-lg text-center"
        >
          <h3 className="text-2xl text-gray-900 mb-6">
            Continuous Learning & Innovation
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Technology evolves rapidly, and so do I. I'm constantly learning new frameworks, 
            tools, and best practices to deliver cutting-edge solutions. My commitment to 
            staying current ensures that your projects are built with the latest and most 
            efficient technologies available.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2+', label: 'Years of Experience' },
              { number: '10+', label: 'Projects Completed' },
              { number: '8+', label: 'Technologies Mastered' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
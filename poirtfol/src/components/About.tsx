import React from 'react';
import { motion } from 'motion/react';
import { Code, Coffee, Heart, Zap, MapPin, Calendar, Brackets, Braces, Database, GitBranch, Globe, Terminal } from 'lucide-react';

const About: React.FC = () => {
  // Animated Developer Avatar Component
  const AnimatedDeveloperAvatar = () => {
    const floatingElements = [
      { icon: <Code className="w-4 h-4" />, delay: 0, color: '#3B82F6' },
      { icon: <Brackets className="w-3 h-3" />, delay: 0.5, color: '#10B981' },
      { icon: <Database className="w-3 h-3" />, delay: 1, color: '#8B5CF6' },
      { icon: <GitBranch className="w-4 h-4" />, delay: 1.5, color: '#F59E0B' },
      { icon: <Globe className="w-3 h-3" />, delay: 2, color: '#EF4444' },
      { icon: <Terminal className="w-4 h-4" />, delay: 2.5, color: '#06B6D4' },
    ];

    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Central Avatar */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center relative overflow-hidden"
        >
          {/* Animated code brackets */}
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="text-white text-4xl"
          >
            &lt;/&gt;
          </motion.div>
          
          {/* Pulsing ring */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0 border-4 border-white border-opacity-30 rounded-full"
          />
        </motion.div>

        {/* Floating Tech Icons */}
        {floatingElements.map((element, index) => {
          const radius = 80;
          const angle = (index * 60) * (Math.PI / 180);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                scale: 0,
                x: 0,
                y: 0
              }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                x: x,
                y: y
              }}
              transition={{ 
                duration: 0.8, 
                delay: element.delay,
                ease: "easeOut"
              }}
              animate={{
                y: [y, y - 10, y],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: element.delay
              }}
              viewport={{ once: true }}
              className="absolute"
              style={{ color: element.color }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
              >
                {element.icon}
              </motion.div>
            </motion.div>
          );
        })}

        {/* Orbiting Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute w-48 h-48 border border-blue-200 border-dashed rounded-full opacity-30"
        />
      </div>
    );
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 relative overflow-hidden">
              {/* Profile placeholder - you can replace with actual image */}
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                  <AnimatedDeveloperAvatar />
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl text-gray-900 mb-2">Archana Sharma</h3>
                  <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>Pune, Maharashtra, India</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>2+ Years Experience</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-blue-200 rounded-full opacity-30"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-indigo-200 rounded-full opacity-30"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
              About Me
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Hello! I'm Archana Sharma, a passionate web developer and freelancer based in 
              Pune, India. With over 2 years of hands-on experience in web development, 
              I specialize in creating beautiful, functional, and user-friendly websites 
              and web applications.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My journey began with learning HTML and CSS, and has evolved to include 
              modern technologies like React, JavaScript, Tailwind CSS, and database 
              management with SQL. I'm passionate about writing clean, efficient code 
              and delivering projects that exceed client expectations.
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { icon: <Code className="w-5 h-5" />, title: '2+ Years', desc: 'Experience', color: 'from-blue-50 to-blue-100' },
                { icon: <Heart className="w-5 h-5" />, title: '10+ Projects', desc: 'Completed', color: 'from-red-50 to-red-100' },
                { icon: <Coffee className="w-5 h-5" />, title: 'Always Learning', desc: 'New Tech', color: 'from-yellow-50 to-yellow-100' },
                { icon: <Zap className="w-5 h-5" />, title: 'Fast Delivery', desc: 'On Time', color: 'from-green-50 to-green-100' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${item.color} p-4 rounded-xl`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-blue-600">{item.icon}</div>
                    <span className="text-gray-900">{item.title}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* What I do best */}
            <div className="mb-8">
              <h4 className="text-xl text-gray-900 mb-4">What I Do Best:</h4>
              <div className="space-y-3">
                {[
                  'Responsive Web Design & Development',
                  'React Applications & Components',
                  'E-commerce & Management Systems',
                  'Email Templates & Marketing Materials',
                  'Database Design & Integration',
                  'Website Optimization & SEO'
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                Let's Work Together
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
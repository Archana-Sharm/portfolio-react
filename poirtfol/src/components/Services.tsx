import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  ShoppingCart, 
  FileText, 
  Smartphone, 
  Search, 
  Wrench,
  Mail,
  Code,
  Palette,
  Database
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface Package {
  name: string;
  description: string;
  features: string[];
  price: string;
  recommended?: boolean;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Portfolio & Resume Websites",
      description: "Professional personal websites to showcase your skills and experience",
      features: ["Responsive design", "SEO optimized", "Contact forms", "Portfolio galleries"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Business & Company Websites",
      description: "Corporate websites that establish credibility and drive business growth",
      features: ["Professional design", "CMS integration", "Analytics setup", "Multi-page structure"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Websites",
      description: "Online stores with secure payment processing and inventory management",
      features: ["Shopping cart", "Payment integration", "Product management", "Order tracking"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Landing Pages",
      description: "High-converting landing pages for marketing campaigns and lead generation",
      features: ["Conversion optimization", "A/B testing ready", "Fast loading", "Mobile responsive"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "React & Tailwind UI/UX Development",
      description: "Modern, interactive user interfaces with excellent user experience",
      features: ["Component-based", "Interactive elements", "Modern design", "Performance optimized"]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Templates & Newsletters",
      description: "Marketing-ready HTML email templates that work across all email clients",
      features: ["Cross-client compatibility", "Responsive design", "Brand customization", "Marketing ready"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Website Optimization & SEO",
      description: "Improve your website's performance and search engine rankings",
      features: ["Speed optimization", "SEO audit", "Meta optimization", "Performance monitoring"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Bug Fixing & Maintenance",
      description: "Keep your website running smoothly with ongoing support and updates",
      features: ["Issue resolution", "Security updates", "Performance monitoring", "Regular backups"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "API Integration & Custom Work",
      description: "Connect your website to external services and add custom functionality",
      features: ["Third-party APIs", "Custom features", "Database integration", "Payment gateways"]
    }
  ];

  const packages: Package[] = [
    {
      name: "Basic",
      description: "Perfect for personal portfolios and simple websites",
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Contact form",
        "Basic SEO",
        "1 month support"
      ],
      price: "Starting from ₹15,000"
    },
    {
      name: "Standard",
      description: "Ideal for small businesses and professional websites",
      features: [
        "Up to 10 pages",
        "CMS integration",
        "Advanced SEO",
        "Analytics setup",
        "3 months support",
        "Social media integration"
      ],
      price: "Starting from ₹35,000",
      recommended: true
    },
    {
      name: "Premium",
      description: "For e-commerce sites and complex web applications",
      features: [
        "Unlimited pages",
        "E-commerce functionality",
        "Custom features",
        "Payment integration",
        "6 months support",
        "Performance optimization"
      ],
      price: "Starting from ₹75,000"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">Freelancing Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I offer a comprehensive range of web development services to help your business succeed online
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">My Development Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "Understanding your requirements, goals, and target audience",
                icon: "🔍"
              },
              {
                step: "02", 
                title: "Design & Prototype",
                description: "Creating wireframes and visual designs that match your brand",
                icon: "🎨"
              },
              {
                step: "03",
                title: "Development",
                description: "Building your website with clean, optimized code and best practices",
                icon: "💻"
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Testing, deployment, and ongoing maintenance to keep you running smoothly",
                icon: "🚀"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl mb-4">{process.icon}</div>
                  <div className="text-blue-600 font-bold text-lg mb-2">Step {process.step}</div>
                  <h4 className="text-xl mb-3 text-gray-900">{process.title}</h4>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-blue-200"></div>
                    <div className="w-0 h-0 border-l-4 border-l-blue-200 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl text-center mb-12 text-gray-900">Why Choose Me?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fast Delivery",
                description: "Most projects completed within 1-3 weeks with regular updates",
                icon: "⚡",
                color: "from-yellow-50 to-orange-50"
              },
              {
                title: "100% Satisfaction",
                description: "Unlimited revisions until you're completely happy with the result",
                icon: "✨",
                color: "from-green-50 to-emerald-50"
              },
              {
                title: "Ongoing Support",
                description: "Free support and maintenance for 30 days after project completion",
                icon: "🛠️",
                color: "from-blue-50 to-cyan-50"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${benefit.color} p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl mb-3 text-gray-900">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl mb-6 text-gray-900">Ready to Start Your Project?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free consultation to discuss your requirements and find the perfect solution for your needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
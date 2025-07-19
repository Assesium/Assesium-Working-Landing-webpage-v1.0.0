import { motion } from 'framer-motion'
import { 
  Zap, 
  Brain, 
  BarChart3, 
  Users, 
  Smartphone, 
  Shield,
  Clock,
  MessageSquare,
  TrendingUp,
  FileText,
  Camera,
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const FeaturesPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const featureCategories = [
    {
      title: "AI-Powered Marking",
      description: "Revolutionary technology that understands and evaluates student responses",
      features: [
        {
          icon: Brain,
          title: "Advanced OCR Technology",
          description: "Our state-of-the-art Optical Character Recognition technology accurately reads handwritten text in multiple languages, including English and Kiswahili.",
          benefits: ["99.5% accuracy rate", "Supports multiple handwriting styles", "Works with poor quality scans"]
        },
        {
          icon: Zap,
          title: "Instant Marking",
          description: "Mark thousands of exams in minutes instead of weeks. Our AI processes papers at lightning speed without compromising accuracy.",
          benefits: ["Process 1000+ papers per hour", "Real-time results", "Batch processing capabilities"]
        },
        {
          icon: MessageSquare,
          title: "Intelligent Feedback Generation",
          description: "Generate personalized, constructive feedback for each student based on their specific answers and common misconceptions.",
          benefits: ["Personalized comments", "Targeted improvement suggestions", "Curriculum-aligned feedback"]
        }
      ]
    },
    {
      title: "Analytics & Insights",
      description: "Comprehensive data analysis to drive educational decisions",
      features: [
        {
          icon: BarChart3,
          title: "Performance Analytics",
          description: "Detailed analytics that help teachers understand class performance, identify learning gaps, and track student progress over time.",
          benefits: ["Class performance overview", "Individual student tracking", "Subject-wise analysis"]
        },
        {
          icon: TrendingUp,
          title: "Predictive Insights",
          description: "AI-powered predictions that help identify students at risk and suggest interventions before problems become critical.",
          benefits: ["Early warning system", "Intervention recommendations", "Success probability indicators"]
        },
        {
          icon: FileText,
          title: "Comprehensive Reports",
          description: "Generate detailed reports for teachers, parents, and administrators with actionable insights and recommendations.",
          benefits: ["Automated report generation", "Customizable templates", "Export to multiple formats"]
        }
      ]
    },
    {
      title: "User Experience",
      description: "Designed for ease of use across all stakeholders",
      features: [
        {
          icon: Smartphone,
          title: "Multi-Platform Access",
          description: "Access Assesium from any device - smartphone, tablet, or computer. Our responsive design ensures a seamless experience everywhere.",
          benefits: ["iOS and Android apps", "Web-based platform", "Offline capabilities"]
        },
        {
          icon: Users,
          title: "Role-Based Portals",
          description: "Customized interfaces for teachers, students, parents, and administrators, each designed for their specific needs and workflows.",
          benefits: ["Teacher dashboard", "Student portal", "Parent access", "Admin controls"]
        },
        {
          icon: Camera,
          title: "Easy Scanning",
          description: "Simple, intuitive scanning process that works with any smartphone camera or document scanner.",
          benefits: ["One-tap scanning", "Auto-crop and enhance", "Batch upload support"]
        }
      ]
    },
    {
      title: "Security & Reliability",
      description: "Enterprise-grade security and reliability you can trust",
      features: [
        {
          icon: Shield,
          title: "Data Security",
          description: "Bank-level encryption and security measures to protect sensitive student and institutional data.",
          benefits: ["End-to-end encryption", "GDPR compliant", "Regular security audits"]
        },
        {
          icon: Globe,
          title: "Cloud Infrastructure",
          description: "Reliable, scalable cloud infrastructure that ensures 99.9% uptime and fast performance across Kenya.",
          benefits: ["99.9% uptime guarantee", "Auto-scaling", "Local data centers"]
        },
        {
          icon: Clock,
          title: "24/7 Support",
          description: "Round-the-clock technical support and customer service to ensure smooth operations for your institution.",
          benefits: ["24/7 technical support", "Training and onboarding", "Regular updates"]
        }
      ]
    }
  ]

  const integrations = [
    { name: "Google Classroom", status: "Available" },
    { name: "Microsoft Teams", status: "Available" },
    { name: "Canvas LMS", status: "Coming Soon" },
    { name: "Moodle", status: "Coming Soon" },
    { name: "KNEC Systems", status: "In Development" },
    { name: "School Management Systems", status: "Available" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-assesium-primary to-assesium-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 dark:text-white light: text-black">
              Powerful Features for
              <span className="block text-assesium-accent">Modern Education</span>
            </h1>
            <p className="text-xl md:text-2xl font-opensans max-w-4xl mx-auto leading-relaxed dark:text-white light: text-black">
              Discover the comprehensive suite of AI-powered tools designed to transform 
              how schools handle examinations and student assessment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => (
        <section key={category.title} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-assesium-neutral-light'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-assesium-primary mb-4">
                {category.title}
              </h2>
              <p className="text-xl font-opensans text-assesium-neutral-dark max-w-3xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            <div className="space-y-16">
              {category.features.map((feature, featureIndex) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: featureIndex * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    featureIndex % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={featureIndex % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="w-16 h-16 bg-assesium-accent rounded-lg flex items-center justify-center mb-6">
                      <feature.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-montserrat font-bold text-assesium-primary mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-lg font-opensans text-assesium-neutral-dark mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                          <span className="font-opensans text-assesium-neutral-dark">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={featureIndex % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="bg-gradient-to-br from-assesium-primary/10 to-assesium-accent/10 p-8 rounded-2xl">
                      <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="text-center">
                          <feature.icon className="text-assesium-accent mx-auto mb-4" size={64} />
                          <div className="text-sm font-opensans text-assesium-neutral-dark">
                            Feature Preview
                          </div>
                          <div className="text-lg font-montserrat font-semibold text-assesium-primary mt-2">
                            {feature.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Integrations Section */}
      <section className="py-20 bg-assesium-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl font-opensans max-w-3xl mx-auto">
              Assesium works with your existing tools and platforms to provide a unified educational experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-montserrat font-semibold text-lg">
                    {integration.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-opensans font-medium ${
                    integration.status === 'Available' 
                      ? 'bg-green-500 text-white' 
                      : integration.status === 'Coming Soon'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-blue-500 text-white'
                  }`}>
                    {integration.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-assesium-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-assesium-primary mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl font-opensans text-assesium-neutral-dark max-w-3xl mx-auto">
              Built with cutting-edge technology to ensure reliability, scalability, and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Processing Speed", value: "1000+ papers/hour", icon: Zap },
              { title: "Accuracy Rate", value: "99.5%", icon: CheckCircle },
              { title: "Uptime", value: "99.9%", icon: Globe },
              { title: "Response Time", value: "<2 seconds", icon: Clock }
            ].map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-assesium-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <spec.icon className="text-assesium-accent" size={32} />
                </div>
                <div className="text-2xl font-montserrat font-bold text-assesium-primary mb-2">
                  {spec.value}
                </div>
                <div className="font-opensans text-assesium-neutral-dark">
                  {spec.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-20 bg-gradient-to-r from-assesium-accent to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl font-opensans mb-8 leading-relaxed">
              See Assesium in action and discover how these powerful features can transform 
              your institution's approach to examinations and student assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-assesium-accent hover:bg-gray-100 font-montserrat font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 transform hover:scale-105"
                asChild
              >
                <Link to="/contact">
                  Request a Demo
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-assesium-accent font-montserrat font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200"
                asChild
              >
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section> */}

      <section className="py-20 bg-[#1f2937] text-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-transparent">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
        Ready to Experience These Features?
      </h2>
      <p className="text-xl font-opensans mb-8 leading-relaxed">
        See Assesium in action and discover how these powerful features can transform 
        your institution's approach to examinations and student assessment.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          size="lg"
          className="bg-white text-assesium-accent hover:bg-gray-100 font-montserrat font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-0 border-none shadow-md"
          asChild
        >
          <Link to="/contact">
            Request a Demo
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </Button>
        <Button 
          size="lg"
          variant="outline"
          className="font-montserrat font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 border text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white dark:text-white dark:border-white dark:hover:bg-black dark:hover:text-assesium-accent"
          asChild
        >
          <Link to="/pricing">View Pricing</Link>
        </Button>
      </div>
    </motion.div>
  </div>
</section>

    </div>
  )
}

export default FeaturesPage


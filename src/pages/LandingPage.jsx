import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Clock, 
  Brain, 
  BarChart3, 
  Users, 
  Smartphone, 
  CheckCircle, 
  ArrowRight,
  Upload,
  Zap,
  MessageSquare,
  TrendingUp,
  Star,
  Quote
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const LandingPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const features = [
    {
      icon: Zap,
      title: "Automated Marking",
      description: "Mark thousands of exams in minutes, not weeks. Our AI technology processes handwritten answers with incredible accuracy."
    },
    {
      icon: MessageSquare,
      title: "Intelligent Feedback",
      description: "Personalized comments and revision questions for every student, helping them understand their mistakes and improve."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Identify learning gaps and track progress with data-driven insights that empower teachers to make informed decisions."
    },
    {
      icon: Users,
      title: "Teacher & Parent Portals",
      description: "Empowering all stakeholders with real-time access to student progress and performance data."
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Accessibility",
      description: "Access Assesium anytime, anywhere, on any device. Our platform works seamlessly across all platforms."
    }
  ]

  const howItWorksSteps = [
    {
      step: 1,
      icon: Upload,
      title: "Scan & Upload",
      description: "Students or teachers scan handwritten exams using any smartphone or scanner."
    },
    {
      step: 2,
      icon: Brain,
      title: "AI Marking",
      description: "Our advanced LLM & OCR technology marks exams instantly with high accuracy."
    },
    {
      step: 3,
      icon: MessageSquare,
      title: "Personalized Feedback",
      description: "Students receive detailed comments and revision questions tailored to their performance."
    },
    {
      step: 4,
      icon: TrendingUp,
      title: "Actionable Insights",
      description: "Teachers get comprehensive performance reports and focus areas for improvement."
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Time-Saving",
      description: "Free up teacher time for teaching instead of marking"
    },
    {
      icon: TrendingUp,
      title: "Improved Learning Outcomes",
      description: "Personalized feedback drives student growth and understanding"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Empower educators with actionable insights and analytics"
    },
    {
      icon: Users,
      title: "Scalability",
      description: "Ready for schools of all sizes, from small institutions to large networks"
    },
    {
      icon: CheckCircle,
      title: "Kenyan Context",
      description: "Built specifically for the local educational landscape and curriculum"
    }
  ]

  const testimonials = [
    {
      name: "Dr. Mary Wanjiku",
      role: "Principal, Nairobi Academy",
      content: "Assesium has transformed how we handle examinations. Our teachers now have more time to focus on teaching, and students receive immediate, personalized feedback.",
      rating: 5
    },
    {
      name: "James Kiprotich",
      role: "Mathematics Teacher, Mombasa High School",
      content: "The analytics provided by Assesium help me identify exactly where my students are struggling. It's like having a teaching assistant that never sleeps.",
      rating: 5
    },
    {
      name: "Grace Achieng",
      role: "Parent, Kisumu",
      content: "I can now track my daughter's progress in real-time and understand exactly where she needs help. The detailed feedback is incredibly valuable.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-assesium-primary to-assesium-secondary text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6 leading-tight"
            >
              Revolutionizing Education
              <span className="block text-assesium-accent">AI-Powered Exam Marking</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl font-opensans mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Assesium automates exam marking, provides instant feedback, and delivers actionable analytics, 
              empowering teachers and transforming learning outcomes across Kenya.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg"
                className="bg-assesium-accent hover:bg-assesium-accent/90 text-white font-montserrat font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 transform hover:scale-105"
                asChild
              >
                <Link to="/contact">Request a Demo</Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-assesium-primary font-montserrat font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200"
                asChild
              >
                <Link to="/features">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-assesium-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-assesium-primary mb-6">
                The Challenge in Kenyan Education
              </h2>
              <div className="space-y-4 text-lg font-opensans text-assesium-neutral-dark">
                <p>Traditional exam marking in Kenya faces significant challenges:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Time-consuming manual marking processes
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Delayed feedback to students
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Lack of personalized insights
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Teacher burnout and overwhelm
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-assesium-accent mb-6">
                The Assesium Solution
              </h2>
              <div className="space-y-4 text-lg font-opensans text-assesium-neutral-dark">
                <p>Assesium transforms education through innovative AI technology:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                    Instant, accurate exam marking
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                    Immediate personalized feedback
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                    Data-driven learning insights
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                    Empowered, efficient teachers
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-assesium-primary mb-4">
              How Assesium Works
            </h2>
            <p className="text-xl font-opensans text-assesium-neutral-dark max-w-3xl mx-auto">
              A simple, four-step process that transforms traditional exam marking into an intelligent, 
              data-driven experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-assesium-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="text-white" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-assesium-primary rounded-full flex items-center justify-center text-white font-montserrat font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-assesium-primary mb-3">
                  {step.title}
                </h3>
                <p className="font-opensans text-assesium-neutral-dark">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
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
              Powerful Features for Modern Education
            </h2>
            <p className="text-xl font-opensans text-assesium-neutral-dark max-w-3xl mx-auto">
              Discover the comprehensive suite of tools designed to revolutionize how schools 
              handle examinations and student assessment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-assesium-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="text-assesium-accent" size={32} />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-assesium-primary mb-4">
                  {feature.title}
                </h3>
                <p className="font-opensans text-assesium-neutral-dark leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-assesium-primary mb-4">
              What Educators Are Saying
            </h2>
            <p className="text-xl font-opensans text-assesium-neutral-dark max-w-3xl mx-auto">
              Join thousands of satisfied educators across Kenya who have transformed their 
              teaching experience with Assesium.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-assesium-neutral-light p-8 rounded-xl relative"
              >
                <Quote className="text-assesium-accent mb-4" size={32} />
                <p className="font-opensans text-assesium-neutral-dark mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-assesium-primary">
                    {testimonial.name}
                  </h4>
                  <p className="font-opensans text-sm text-assesium-neutral-dark">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Assesium Section */}
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
              Why Choose Assesium?
            </h2>
            <p className="text-xl font-opensans max-w-3xl mx-auto">
              Experience the unique benefits that make Assesium the preferred choice 
              for forward-thinking educational institutions across Kenya.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-assesium-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-4">
                  {benefit.title}
                </h3>
                <p className="font-opensans leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-assesium-accent to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
              Ready to Transform Your School?
            </h2>
            <p className="text-xl font-opensans mb-8 leading-relaxed">
              Join the educational revolution. Request a demo today and see how Assesium 
              can transform your institution's approach to examinations and student assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-white text-assesium-accent hover:bg-gray-100 font-montserrat font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 transform hover:scale-105"
                asChild
              >
                <Link to="/contact">
                  Request a Demo Today
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle size={16} />
                <span>Free consultation included</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage


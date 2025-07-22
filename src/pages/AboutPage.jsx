import ChooseYourPlatformToggle from '../components/ChooseYourPlatformToggle';
import { motion } from 'framer-motion'
import { 
  Target, 
  Heart, 
  Users, 
  Award, 
  Globe, 
  Lightbulb,
  Shield,
  Zap
} from 'lucide-react'

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our technology to our customer service."
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "We understand the challenges educators face and design solutions with genuine care and understanding."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all our interactions."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible in educational technology."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of working together to achieve extraordinary results."
    },
    {
      icon: Globe,
      title: "Impact",
      description: "We measure our success by the positive impact we create in the lives of students and educators."
    }
  ]

  const teamMembers = [
    {
      name: "Dr. Sarah Kimani",
      role: "CEO & Co-Founder",
      bio: "Former education policy advisor with 15+ years in EdTech innovation.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Ochieng",
      role: "CTO & Co-Founder", 
      bio: "AI researcher and software engineer with expertise in machine learning and OCR technology.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Grace Wanjiru",
      role: "Head of Education",
      bio: "Veteran teacher and curriculum specialist with deep understanding of Kenyan education system.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "David Mwangi",
      role: "Lead Developer",
      bio: "Full-stack developer passionate about creating scalable educational solutions.",
      image: "/api/placeholder/300/300"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-assesium-primary to-assesium-secondary text-white py-17">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 ">
             <span className="block text-assesium-accent">About Assesium</span>
             { /* About Assesium */}
            </h1>
            <p className="text-xl md:text-2xl font-opensans max-w-4xl mx-auto leading-relaxed dark:text-white light: text-black ">
              We're on a mission to revolutionize education in Kenya through innovative AI technology 
              that empowers teachers and transforms student learning experiences.
            </p>
          </motion.div>
          {/* <ChooseYourPlatformToggle/> */}
        </div>
        <ChooseYourPlatformToggle/>
      </section>
      
      {/* Our Story Section */}
      <section className="py-7 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-assesium-primary dark:text-assesium-accent mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg font-opensans text-foreground leading-relaxed">
                <p>
                  Assesium was born from a simple observation: teachers in Kenya were spending countless hours 
                  marking exams instead of focusing on what they do best – teaching. Our founders, a team of 
                  educators and technologists, witnessed firsthand how traditional marking processes were 
                  limiting the potential of both teachers and students.
                </p>
                <p>
                  In 2023, we set out to solve this challenge by combining cutting-edge artificial intelligence 
                  with deep understanding of the Kenyan education system. Our goal was ambitious yet simple: 
                  create a solution that would give teachers their time back while providing students with 
                  better, more personalized feedback.
                </p>
                <p>
                  Today, Assesium serves schools across Kenya, from bustling urban centers to remote rural 
                  communities, democratizing access to advanced educational technology and helping create 
                  a more equitable learning environment for all students.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-muted p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-montserrat font-bold text-assesium-accent mb-2">500+</div>
                    <div className="text-sm font-opensans text-muted-foreground">Schools Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-montserrat font-bold text-assesium-accent mb-2">50K+</div>
                    <div className="text-sm font-opensans text-muted-foreground">Students Impacted</div>
                  </div>
                  <div>
                    <div className="text-3xl font-montserrat font-bold text-assesium-accent mb-2">2M+</div>
                    <div className="text-sm font-opensans text-muted-foreground">Exams Marked</div>
                  </div>
                  <div>
                    <div className="text-3xl font-montserrat font-bold text-assesium-accent mb-2">98%</div>
                    <div className="text-sm font-opensans text-muted-foreground">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-assesium-primary dark:text-assesium-accent mb-4">
              Our Mission & Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border"
            >
              <div className="w-16 h-16 bg-assesium-primary rounded-lg flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-assesium-primary dark:text-assesium-accent mb-4">
                Our Mission
              </h3>
              <p className="text-lg font-opensans text-foreground leading-relaxed">
                To empower educators across Kenya with intelligent technology that automates routine tasks, 
                provides actionable insights, and creates more time for meaningful teaching and learning interactions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border"
            >
              <div className="w-16 h-16 bg-assesium-accent rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-assesium-primary dark:text-assesium-accent mb-4">
                Our Vision
              </h3>
              <p className="text-lg font-opensans text-foreground leading-relaxed">
                To transform Kenya into a global leader in educational innovation, where every student receives 
                personalized, data-driven feedback that accelerates their learning journey and unlocks their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-assesium-primary dark:text-assesium-accent mb-4">
              Our Values
            </h2>
            <p className="text-xl font-opensans text-foreground max-w-3xl mx-auto">
              These core values guide everything we do and shape how we interact with our community, 
              partners, and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-card border border-border"
              >
                <div className="w-16 h-16 bg-assesium-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-assesium-accent" size={32} />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-assesium-primary dark:text-assesium-accent mb-4">
                  {value.title}
                </h3>
                <p className="font-opensans text-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-assesium-primary dark:text-assesium-accent mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl font-opensans text-foreground max-w-3xl mx-auto">
              Our diverse team combines deep educational expertise with cutting-edge technology skills 
              to create solutions that truly understand and serve the needs of Kenyan educators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl shadow-lg text-center border border-border"
              >
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-assesium-primary dark:text-assesium-accent" size={32} />
                </div>
                <h3 className="text-lg font-montserrat font-semibold text-assesium-primary dark:text-assesium-accent mb-2">
                  {member.name}
                </h3>
                <p className="text-assesium-accent font-opensans font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm font-opensans text-foreground leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-assesium-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl font-opensans mb-8 leading-relaxed">
              Ready to be part of the educational transformation? Let's work together to create 
              a brighter future for Kenyan students and educators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                className="bg-assesium-accent hover:bg-assesium-accent/90 text-white font-montserrat font-semibold px-8 py-4 rounded-lg transition-all duration-200 inline-block"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/features"
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[var(--assesium-dark)] font-montserrat font-semibold px-8 py-4 rounded-lg transition-all duration-200 inline-block"

              >
                Explore Features
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage


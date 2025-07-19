import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageSquare,
  Users,
  Calendar
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    role: '',
    message: '',
    requestType: 'demo'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        institution: '',
        role: '',
        message: '',
        requestType: 'demo'
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@assesium.com",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+254 700 123 456",
      description: "Monday to Friday, 8:00 AM to 6:00 PM EAT"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Westlands, Nairobi, Kenya",
      description: "Schedule an appointment to visit our office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 8:00 AM - 6:00 PM",
      description: "Saturday: 9:00 AM - 2:00 PM"
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-700" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600" }
  ]

  const requestTypes = [
    { value: 'demo', label: 'Request a Demo', icon: Calendar },
    { value: 'trial', label: 'Start Free Trial', icon: CheckCircle },
    { value: 'support', label: 'Technical Support', icon: MessageSquare },
    { value: 'partnership', label: 'Partnership Inquiry', icon: Users },
    { value: 'other', label: 'Other', icon: Mail }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-assesium-primary to-assesium-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
              {/* Get in Touch */}
              <span className="block text-assesium-accent">Get in Touch</span>

            </h1>
            <p className="text-xl md:text-2xl font-opensans max-w-4xl mx-auto leading-relaxed dark:text-white light: text-black">
              Ready to transform your institution's approach to examinations? 
              We're here to help you get started with Assesium.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-montserrat font-bold text-assesium-primary mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg font-opensans text-assesium-neutral-dark mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                >
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-montserrat font-bold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700 font-opensans">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Request Type */}
                  <div>
                    <label className="block text-sm font-montserrat font-semibold text-assesium-primary mb-3">
                      What can we help you with?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {requestTypes.map((type) => (
                        <label
                          key={type.value}
                          className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                            formData.requestType === type.value
                              ? 'border-assesium-accent bg-assesium-accent/10'
                              : 'border-gray-300 hover:border-assesium-primary'
                          }`}
                        >
                          <input
                            type="radio"
                            name="requestType"
                            value={type.value}
                            checked={formData.requestType === type.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <type.icon className={`mr-3 ${
                            formData.requestType === type.value ? 'text-assesium-accent' : 'text-gray-400'
                          }`} size={20} />
                          <span className={`font-opensans ${
                            formData.requestType === type.value ? 'text-assesium-primary font-medium' : 'text-gray-700'
                          }`}>
                            {type.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-montserrat font-semibold text-assesium-primary mb-1 ">
                        Full Name *
                      </label>
                      <input
  type="text"
  id="name"
  name="name"
  value={formData.name}
  onChange={handleInputChange}
  required
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 font-opensans text-black dark:text-black bg-white dark:bg-white placeholder-gray-500 dark:placeholder-gray-500 resize-none"
  placeholder="Enter your full name"
/>

                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-montserrat font-semibold text-assesium-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        // className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-assesium-accent focus:border-transparent font-opensans"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 font-opensans text-black dark:text-black bg-white dark:bg-white placeholder-gray-500 dark:placeholder-gray-500 resize-none"
                        // className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-assesium-accent focus:border-orange-500 font-opensans text-black dark:text-black bg-white dark:bg-white placeholder-gray-500 dark:placeholder-gray-500 resize-none"
                        // className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-assesium-accent focus:border-transparent font-opensans text-black dark:text-white bg-white dark:bg-transparent placeholder-gray-500 dark:placeholder-gray-400"

                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-montserrat font-semibold text-assesium-primary mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        // className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-assesium-accent focus:border-transparent font-opensans"
                        // className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-assesium-accent focus:border-orange-500 font-opensans text-black dark:text-black bg-white dark:bg-white placeholder-gray-500 dark:placeholder-gray-500 resize-none"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 font-opensans text-black dark:text-black bg-white dark:bg-white placeholder-gray-500 dark:placeholder-gray-500 resize-none"
                        // className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-assesium-accent focus:border-transparent font-opensans text-black dark:text-white bg-white dark:bg-transparent placeholder-gray-500 dark:placeholder-gray-400"

                        placeholder="+254 700 123 456"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-montserrat font-semibold text-assesium-primary mb-2">
                        Your Role
                      </label>
                      <select
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-black font-opensans focus:outline-none focus:ring-0 focus:border-gray-400 dark:bg-white dark:text-black"
                      >
                        <option value="">Select your role</option>
                        <option value="principal">Principal/Head Teacher</option>
                        <option value="teacher">Teacher</option>
                        <option value="administrator">Administrator</option>
                        <option value="parent">Parent</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="institution" className="block text-sm font-montserrat font-semibold text-assesium-primary mb-2">
                      Institution Name
                    </label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 font-opensans text-black dark:text-black bg-white dark:bg-white placeholder-gray-500 dark:placeholder-gray-500 resize-none"
                      // className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-assesium-accent focus:border-transparent font-opensans"
                      // className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-assesium-accent focus:border-transparent font-opensans text-black dark:text-white bg-white dark:bg-transparent placeholder-gray-500 dark:placeholder-gray-400"

                      // className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-assesium-accent focus:border-orange-500 font-opensans text-black dark:text-black bg-white dark:bg-white placeholder-gray-500 dark:placeholder-gray-500 resize-none"
                      placeholder="Enter your school/institution name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-montserrat font-semibold text-assesium-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      // className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-assesium-accent focus:border-transparent font-opensans resize-none"
                      // className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-assesium-accent focus:border-orange-500 font-opensans text-black dark:text-black bg-white dark:bg-white placeholder-gray-500 dark:placeholder-gray-500 resize-none"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 font-opensans text-black dark:text-black bg-white dark:bg-white placeholder-gray-500 dark:placeholder-gray-500 resize-none"
                      // className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-assesium-accent focus:border-transparent font-opensans text-black dark:text-white bg-white dark:bg-transparent placeholder-gray-500 dark:placeholder-gray-400"

                      placeholder="Tell us more about your needs and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-assesium-accent hover:bg-assesium-accent/90 text-white font-montserrat font-semibold py-4 rounded-lg transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="mr-2" size={20} />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-montserrat font-bold text-assesium-primary mb-6">
                  Contact Information
                </h2>
                <p className="text-lg font-opensans text-assesium-neutral-dark mb-8">
                  We're here to help! Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-assesium-neutral-light transition-colors duration-200"
                  >
                    <div className="w-12 h-12 bg-assesium-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-assesium-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-assesium-primary mb-1">
                        {info.title}
                      </h3>
                      <p className="font-opensans font-medium text-assesium-neutral-dark mb-1">
                        {info.details}
                      </p>
                      <p className="font-opensans text-sm text-gray-600">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="font-montserrat font-semibold text-assesium-primary mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 bg-assesium-neutral-light rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-colors duration-200`}
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-assesium-primary text-white p-6 rounded-xl">
                <h3 className="font-montserrat font-bold text-xl mb-4">
                  Why Choose Assesium?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-montserrat font-bold text-assesium-accent">500+</div>
                    <div className="text-sm font-opensans">Schools Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-montserrat font-bold text-assesium-accent">50K+</div>
                    <div className="text-sm font-opensans">Students Helped</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-montserrat font-bold text-assesium-accent">99.5%</div>
                    <div className="text-sm font-opensans">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-montserrat font-bold text-assesium-accent">24/7</div>
                    <div className="text-sm font-opensans">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-assesium-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-montserrat font-bold text-assesium-primary mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg font-opensans text-assesium-neutral-dark">
              Located in the heart of Nairobi, we're easily accessible and always ready to welcome you.
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="bg-assesium-neutral-light h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-assesium-accent mx-auto mb-4" size={48} />
                <h3 className="font-montserrat font-bold text-assesium-primary mb-2">
                  Assesium Office
                </h3>
                <p className="font-opensans text-assesium-neutral-dark">
                  Westlands, Nairobi, Kenya
                </p>
                <p className="font-opensans text-sm text-gray-600 mt-2">
                  Interactive map coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage


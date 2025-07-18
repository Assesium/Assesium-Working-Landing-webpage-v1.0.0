import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Calendar, 
  User, 
  ArrowRight, 
  BookOpen, 
  TrendingUp,
  Lightbulb,
  Users,
  Clock,
  Tag
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const BlogPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  // Placeholder blog posts
  const featuredPost = {
    title: "The Future of AI in Kenyan Education: Transforming Learning Through Technology",
    excerpt: "Explore how artificial intelligence is revolutionizing education in Kenya, from automated marking to personalized learning experiences that adapt to each student's unique needs.",
    author: "Dr. Sarah Kimani",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "AI in Education",
    image: "/api/placeholder/800/400"
  }

  const blogPosts = [
    {
      title: "Best Practices for Implementing Digital Assessment Tools in Schools",
      excerpt: "A comprehensive guide for school administrators on successfully integrating digital assessment platforms into their existing educational framework.",
      author: "Michael Ochieng",
      date: "January 10, 2024",
      readTime: "6 min read",
      category: "EdTech Implementation",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Understanding OCR Technology: How Machines Read Handwritten Text",
      excerpt: "Dive deep into the technology behind optical character recognition and how it's making automated marking possible for handwritten exams.",
      author: "Grace Wanjiru",
      date: "January 5, 2024",
      readTime: "5 min read",
      category: "Technology",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Data-Driven Teaching: Using Analytics to Improve Student Outcomes",
      excerpt: "Learn how teachers can leverage student performance data to identify learning gaps and create more effective teaching strategies.",
      author: "James Kiprotich",
      date: "December 28, 2023",
      readTime: "7 min read",
      category: "Teaching Strategies",
      image: "/api/placeholder/400/250"
    },
    {
      title: "The Psychology of Feedback: Why Immediate Response Matters",
      excerpt: "Explore the research behind effective feedback and why immediate, personalized responses can dramatically improve student learning outcomes.",
      author: "Dr. Mary Wanjiku",
      date: "December 20, 2023",
      readTime: "4 min read",
      category: "Educational Psychology",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Scaling Educational Innovation: Lessons from Kenyan Schools",
      excerpt: "Case studies from schools across Kenya that have successfully implemented AI-powered assessment tools and the lessons learned along the way.",
      author: "David Mwangi",
      date: "December 15, 2023",
      readTime: "9 min read",
      category: "Case Studies",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Preparing Students for the Digital Age: Essential Skills for Tomorrow",
      excerpt: "Discover the key competencies students need to develop to thrive in an increasingly digital world and how schools can foster these skills.",
      author: "Grace Wanjiru",
      date: "December 10, 2023",
      readTime: "6 min read",
      category: "Future Skills",
      image: "/api/placeholder/400/250"
    }
  ]

  const categories = [
    { name: "AI in Education", count: 12, icon: Lightbulb },
    { name: "EdTech Implementation", count: 8, icon: TrendingUp },
    { name: "Teaching Strategies", count: 15, icon: Users },
    { name: "Technology", count: 10, icon: BookOpen },
    { name: "Case Studies", count: 6, icon: User },
    { name: "Educational Psychology", count: 9, icon: BookOpen }
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
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl md:text-2xl font-opensans max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest trends in educational technology, AI innovations, 
              and best practices for modern teaching and assessment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-montserrat font-bold text-assesium-primary mb-12 text-center">
              Featured Article
            </h2>
            
            <div className="bg-assesium-neutral-light rounded-2xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-assesium-primary/10 to-assesium-accent/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="text-assesium-accent mx-auto mb-4" size={64} />
                    <div className="text-sm font-opensans text-assesium-neutral-dark">
                      Featured Article Image
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-assesium-accent text-white px-3 py-1 rounded-full text-sm font-opensans font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-sm text-assesium-neutral-dark font-opensans">
                      <Clock size={16} className="mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-montserrat font-bold text-assesium-primary mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-lg font-opensans text-assesium-neutral-dark mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-assesium-primary rounded-full flex items-center justify-center">
                        <User className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-opensans font-medium text-assesium-primary">
                          {featuredPost.author}
                        </div>
                        <div className="text-sm text-assesium-neutral-dark font-opensans">
                          {featuredPost.date}
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      className="bg-assesium-accent hover:bg-assesium-accent/90 text-white font-montserrat font-semibold"
                      asChild
                    >
                      <Link to="/contact">
                        Read More
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-assesium-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-montserrat font-bold text-assesium-primary mb-12"
              >
                Latest Articles
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="bg-gradient-to-br from-assesium-primary/10 to-assesium-accent/10 h-48 flex items-center justify-center">
                      <BookOpen className="text-assesium-accent" size={48} />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-assesium-primary/10 text-assesium-primary px-2 py-1 rounded text-xs font-opensans font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-xs text-assesium-neutral-dark font-opensans">
                          <Clock size={12} className="mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-montserrat font-bold text-assesium-primary mb-3 leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm font-opensans text-assesium-neutral-dark mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-assesium-primary rounded-full flex items-center justify-center">
                            <User className="text-white" size={12} />
                          </div>
                          <div>
                            <div className="text-xs font-opensans font-medium text-assesium-primary">
                              {post.author}
                            </div>
                            <div className="text-xs text-assesium-neutral-dark font-opensans">
                              {post.date}
                            </div>
                          </div>
                        </div>
                        
                        <Button 
                          size="sm"
                          variant="outline"
                          className="border-assesium-accent text-assesium-accent hover:bg-assesium-accent hover:text-white"
                          asChild
                        >
                          <Link to="/contact">Read</Link>
                        </Button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Categories */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-montserrat font-bold text-assesium-primary mb-6">
                    Categories
                  </h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-assesium-neutral-light transition-colors duration-200 cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <category.icon className="text-assesium-accent" size={16} />
                          <span className="font-opensans text-assesium-neutral-dark">
                            {category.name}
                          </span>
                        </div>
                        <span className="bg-assesium-accent/10 text-assesium-accent px-2 py-1 rounded-full text-xs font-medium">
                          {category.count}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-assesium-primary text-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-montserrat font-bold mb-4">
                    Stay Updated
                  </h3>
                  <p className="font-opensans mb-6 text-sm">
                    Subscribe to our newsletter for the latest insights on educational technology and AI innovations.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 text-sm bg-white text-assesium-neutral-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-assesium-accent"
                    />
                    <Button 
                      className="w-full bg-assesium-accent hover:bg-assesium-accent/90 text-white font-montserrat font-semibold py-2 text-sm"
                      asChild
                    >
                      <Link to="/contact">Subscribe</Link>
                    </Button>
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-montserrat font-bold text-assesium-primary mb-6">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['AI', 'EdTech', 'Assessment', 'Teaching', 'Innovation', 'Kenya', 'Digital Learning', 'Analytics'].map((tag) => (
                      <span
                        key={tag}
                        className="bg-assesium-neutral-light text-assesium-neutral-dark px-3 py-1 rounded-full text-xs font-opensans hover:bg-assesium-accent hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-assesium-accent to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Ready to Transform Your School?
            </h2>
            <p className="text-xl font-opensans mb-8 leading-relaxed">
              Join the educational revolution. Experience firsthand how Assesium can transform 
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
                <Link to="/features">Explore Features</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage


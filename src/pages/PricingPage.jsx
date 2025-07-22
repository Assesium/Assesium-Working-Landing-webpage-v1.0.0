import ChooseYourPlatformToggle from '@/components/ChooseYourPlatformToggle'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Check, 
  X, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Clock,
  ChevronDown,
  ChevronUp,
  Calculator,
  CreditCard,
  Calendar
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [openFaq, setOpenFaq] = useState(null)

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const creditPackages = [
    {
      name: "Starter Pack",
      credits: 500,
      price: 2500,
      pricePerCredit: 5,
      description: "Perfect for small schools or trial periods",
      popular: false,
      features: [
        "500 exam papers",
        "Basic analytics",
        "Email support",
        "30-day validity"
      ]
    },
    {
      name: "School Pack",
      credits: 2000,
      price: 8000,
      pricePerCredit: 4,
      description: "Ideal for medium-sized schools",
      popular: true,
      features: [
        "2,000 exam papers",
        "Advanced analytics",
        "Priority support",
        "90-day validity",
        "Teacher training included"
      ]
    },
    {
      name: "Institution Pack",
      credits: 5000,
      price: 17500,
      pricePerCredit: 3.5,
      description: "Best value for large institutions",
      popular: false,
      features: [
        "5,000 exam papers",
        "Premium analytics",
        "24/7 phone support",
        "180-day validity",
        "Custom integrations",
        "Dedicated account manager"
      ]
    }
  ]

  const subscriptionPlans = [
    {
      name: "Basic",
      monthlyPrice: 15000,
      yearlyPrice: 150000,
      description: "Essential features for small schools",
      maxStudents: 200,
      monthlyCredits: 1000,
      features: [
        "Up to 200 students",
        "1,000 monthly credits",
        "Basic analytics dashboard",
        "Email support",
        "Mobile app access",
        "Standard integrations"
      ],
      notIncluded: [
        "Advanced analytics",
        "Custom reports",
        "Priority support"
      ]
    },
    {
      name: "Professional",
      monthlyPrice: 35000,
      yearlyPrice: 350000,
      description: "Advanced features for growing schools",
      maxStudents: 500,
      monthlyCredits: 2500,
      popular: true,
      features: [
        "Up to 500 students",
        "2,500 monthly credits",
        "Advanced analytics",
        "Custom reports",
        "Priority email support",
        "Mobile app access",
        "All integrations",
        "Teacher training"
      ],
      notIncluded: [
        "24/7 phone support",
        "Dedicated account manager"
      ]
    },
    {
      name: "Enterprise",
      monthlyPrice: 75000,
      yearlyPrice: 750000,
      description: "Complete solution for large institutions",
      maxStudents: "Unlimited",
      monthlyCredits: 6000,
      features: [
        "Unlimited students",
        "6,000 monthly credits",
        "Premium analytics",
        "Custom reports",
        "24/7 phone support",
        "Mobile app access",
        "All integrations",
        "Dedicated account manager",
        "Custom development",
        "On-site training"
      ],
      notIncluded: []
    }
  ]

  const usageExamples = [
    {
      schoolType: "Primary School",
      students: 150,
      examsPerTerm: 3,
      papersPerExam: 4,
      totalPapers: 1800,
      recommendedPlan: "Basic Subscription",
      monthlyCost: 15000
    },
    {
      schoolType: "Secondary School",
      students: 400,
      examsPerTerm: 3,
      papersPerExam: 8,
      totalPapers: 9600,
      recommendedPlan: "Professional Subscription",
      monthlyCost: 35000
    },
    {
      schoolType: "Large Institution",
      students: 800,
      examsPerTerm: 4,
      papersPerExam: 10,
      totalPapers: 32000,
      recommendedPlan: "Enterprise Subscription",
      monthlyCost: 75000
    }
  ]

  const faqs = [
    {
      question: "How do credits work?",
      answer: "Each credit allows you to mark one exam paper. For example, if you have 100 students taking a 5-subject exam, you'll need 500 credits. Credits don't expire as long as your subscription is active."
    },
    {
      question: "What's the difference between credit packs and subscriptions?",
      answer: "Credit packs are one-time purchases perfect for occasional use or trials. Subscriptions provide monthly credits plus additional features like advanced analytics, priority support, and integrations."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the change takes effect at your next billing cycle."
    },
    {
      question: "What happens if I exceed my monthly credit limit?",
      answer: "You can purchase additional credit packs at any time. Alternatively, you can upgrade to a higher plan to get more monthly credits."
    },
    {
      question: "Do you offer discounts for annual payments?",
      answer: "Yes! Annual subscriptions save you 2 months' worth of fees. You'll pay for 10 months and get 12 months of service."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial with 100 credits included. No credit card required to start your trial."
    },
    {
      question: "What support is included?",
      answer: "All plans include email support. Professional plans get priority email support, while Enterprise plans include 24/7 phone support and a dedicated account manager."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your service will continue until the end of your current billing period."
    }
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-assesium-primary to-assesium-secondary text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 dark:text-white light: text-black">
              Simple, Transparent
              <span className="block text-assesium-accent">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl font-opensans max-w-4xl mx-auto leading-relaxed dark:text-white light: text-black">
              Choose the perfect plan for your institution. Start with credits or subscribe 
              for additional features and better value.
            </p>
          </motion.div>
          
        </div>
        <ChooseYourPlatformToggle/>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-assesium-neutral-light p-1 rounded-lg">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md font-montserrat font-medium transition-all duration-200 ${
                  billingCycle === 'monthly'
                    ? 'bg-assesium-primary text-white'
                    : 'text-assesium-neutral-dark hover:text-assesium-primary'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md font-montserrat font-medium transition-all duration-200 ${
                  billingCycle === 'yearly'
                    ? 'bg-assesium-primary text-white'
                    : 'text-assesium-neutral-dark hover:text-assesium-primary'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-assesium-accent text-white px-2 py-1 rounded-full">
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Packages */}
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
              Credit Packages
            </h2>
            <p className="text-xl font-opensans text-assesium-neutral-dark max-w-3xl mx-auto">
              Perfect for schools that prefer pay-as-you-go pricing. Purchase credits and use them when you need them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creditPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  pkg.popular ? 'ring-2 ring-assesium-accent' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-assesium-accent text-white px-4 py-2 rounded-full text-sm font-montserrat font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-montserrat font-bold text-assesium-primary mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-assesium-neutral-dark font-opensans mb-4">
                    {pkg.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-montserrat font-bold text-assesium-primary">
                      KSh {pkg.price.toLocaleString()}
                    </span>
                    <div className="text-sm text-assesium-neutral-dark">
                      {pkg.credits} credits • KSh {pkg.pricePerCredit}/credit
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                      <span className="font-opensans text-assesium-neutral-dark">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 font-montserrat font-semibold rounded-lg transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-assesium-accent hover:bg-assesium-accent/90 text-white'
                      : 'bg-assesium-primary hover:bg-assesium-primary/90 text-white'
                  }`}
                  asChild
                >
                  <Link to="/contact">Purchase Credits</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
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
              Subscription Plans
            </h2>
            <p className="text-xl font-opensans text-assesium-neutral-dark max-w-3xl mx-auto">
              Get the best value with monthly subscriptions that include credits plus advanced features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-assesium-accent scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-assesium-accent text-white px-4 py-2 rounded-full text-sm font-montserrat font-semibold">
                      Recommended
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-montserrat font-bold text-assesium-primary mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-assesium-neutral-dark font-opensans mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-montserrat font-bold text-assesium-primary">
                      KSh {(billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice / 12).toLocaleString()}
                    </span>
                    <span className="text-assesium-neutral-dark">/month</span>
                    {billingCycle === 'yearly' && (
                      <div className="text-sm text-green-600 font-medium">
                        Billed annually • Save KSh {(plan.monthlyPrice * 2).toLocaleString()}
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-assesium-neutral-dark">
                    Up to {plan.maxStudents} students • {plan.monthlyCredits} monthly credits
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                      <span className="font-opensans text-assesium-neutral-dark">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center opacity-50">
                      <X className="text-red-500 mr-3 flex-shrink-0" size={20} />
                      <span className="font-opensans text-assesium-neutral-dark">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full py-3 font-montserrat font-semibold rounded-lg transition-all duration-200 ${
                    plan.popular
                      ? 'bg-assesium-accent hover:bg-assesium-accent/90 text-white'
                      : 'bg-assesium-primary hover:bg-assesium-primary/90 text-white'
                  }`}
                  asChild
                >
                  <Link to="/contact">Start Free Trial</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Examples */}
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
              Usage Examples
            </h2>
            <p className="text-xl font-opensans text-assesium-neutral-dark max-w-3xl mx-auto">
              See how different types of schools use Assesium and find the plan that's right for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {usageExamples.map((example, index) => (
              <motion.div
                key={example.schoolType}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-montserrat font-bold text-assesium-primary mb-4">
                  {example.schoolType}
                </h3>
                <div className="space-y-3 text-sm font-opensans text-assesium-neutral-dark mb-6">
                  <div className="flex justify-between">
                    <span>Students:</span>
                    <span className="font-semibold">{example.students}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Exams per term:</span>
                    <span className="font-semibold">{example.examsPerTerm}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Papers per exam:</span>
                    <span className="font-semibold">{example.papersPerExam}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>Total papers/term:</span>
                    <span className="font-semibold">{example.totalPapers.toLocaleString()}</span>
                  </div>
                </div>
                <div className="bg-assesium-accent/10 p-4 rounded-lg">
                  <div className="text-sm font-opensans text-assesium-neutral-dark mb-2">
                    Recommended Plan:
                  </div>
                  <div className="font-montserrat font-bold text-assesium-primary">
                    {example.recommendedPlan}
                  </div>
                  <div className="text-lg font-montserrat font-bold text-assesium-accent">
                    KSh {example.monthlyCost.toLocaleString()}/month
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-assesium-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl font-opensans text-assesium-neutral-dark">
              Got questions? We've got answers.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-assesium-neutral-light rounded-lg"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-montserrat font-semibold text-assesium-primary">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="text-assesium-accent" size={20} />
                  ) : (
                    <ChevronDown className="text-assesium-accent" size={20} />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="font-opensans text-assesium-neutral-dark leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-assesium-primary to-assesium-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 dark:text-white light: text-black">
              Ready to Get Started?
            </h2>
            <p className="text-xl font-opensans mb-8 leading-relaxed dark:text-white light: text-black">
              Start your free trial today and see how Assesium can transform your institution's 
              approach to examinations and student assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-assesium-accent hover:bg-assesium-accent/90 text-white font-montserrat font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 transform hover:scale-105"
                asChild
              >
                <Link to="/contact">Start Free Trial</Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[var(--assesium-dark)] font-montserrat font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200"
                asChild
              >
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PricingPage


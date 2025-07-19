

// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import { Eye, EyeOff, Mail, Lock, User, ArrowRight, School } from 'lucide-react'

// const RegisterPage = () => {
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     schoolName: '',
//     role: '',
//     password: '',
//     confirmPassword: ''
//   })
//   const [validationErrors, setValidationErrors] = useState({})
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState('')

//   const navigate = useNavigate()

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
    
//     // Clear validation errors for this field
//     if (validationErrors[name]) {
//       setValidationErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }))
//     }
    
//     if (error) setError('')
//   }

//   const handleSelectChange = (e) => {
//     const value = e.target.value
//     setFormData(prev => ({
//       ...prev,
//       role: value
//     }))
//   }

//   const validateForm = () => {
//     const errors = {}

//     if (!formData.firstName.trim()) {
//       errors.firstName = 'First name is required'
//     }

//     if (!formData.lastName.trim()) {
//       errors.lastName = 'Last name is required'
//     }

//     if (!formData.email.trim()) {
//       errors.email = 'Email is required'
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = 'Email is invalid'
//     }

//     if (!formData.password) {
//       errors.password = 'Password is required'
//     } else if (formData.password.length < 8) {
//       errors.password = 'Password must be at least 8 characters'
//     }

//     if (!formData.confirmPassword) {
//       errors.confirmPassword = 'Please confirm your password'
//     } else if (formData.password !== formData.confirmPassword) {
//       errors.confirmPassword = 'Passwords do not match'
//     }

//     if (!formData.role) {
//       errors.role = 'Please select your role'
//     }

//     setValidationErrors(errors)
//     return Object.keys(errors).length === 0
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
    
//     if (!validateForm()) {
//       return
//     }

//     setIsLoading(true)
//     setError('')

//     try {
//       // Remove confirmPassword from the data sent to backend
//       const { confirmPassword, ...registrationData } = formData
      
//       const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(registrationData),
//       })

//       const data = await response.json()

//       if (response.ok) {
//         // Store token and user data
//         localStorage.setItem('authToken', data.data.token)
//         localStorage.setItem('user', JSON.stringify(data.data.user))
        
//         // Redirect to login or dashboard
//         navigate('/login')
//       } else {
//         setError(data.message || 'Registration failed')
//       }
//     } catch (err) {
//       setError('Network error. Please try again.')
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="bg-white shadow-2xl rounded-xl border-0 backdrop-blur-sm p-8">
//             <div className="space-y-1 text-center mb-8">
//               <Link to="/" className="inline-block">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="text-3xl font-bold text-blue-600 mb-4"
//                 >
//                   Assesium
//                 </motion.div>
//               </Link>
//               <h2 className="text-2xl font-bold text-gray-900">
//                 Create your account
//               </h2>
//               <p className="text-gray-600">
//                 Join thousands of educators transforming assessment
//               </p>
//             </div>

//             {error && (
//               <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
//                 <p className="text-red-600 text-sm">{error}</p>
//               </div>
//             )}
            
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
//                     First name
//                   </label>
//                   <div className="relative">
//                     <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                     <input
//                       id="firstName"
//                       name="firstName"
//                       type="text"
//                       required
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
//                         validationErrors.firstName ? 'border-red-300' : 'border-gray-300'
//                       }`}
//                       placeholder="First name"
//                     />
//                   </div>
//                   {validationErrors.firstName && (
//                     <p className="text-sm text-red-600">{validationErrors.firstName}</p>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
//                     Last name
//                   </label>
//                   <div className="relative">
//                     <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                     <input
//                       id="lastName"
//                       name="lastName"
//                       type="text"
//                       required
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
//                         validationErrors.lastName ? 'border-red-300' : 'border-gray-300'
//                       }`}
//                       placeholder="Last name"
//                     />
//                   </div>
//                   {validationErrors.lastName && (
//                     <p className="text-sm text-red-600">{validationErrors.lastName}</p>
//                   )}
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="email" className="text-sm font-medium text-gray-700">
//                   Email address
//                 </label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
//                       validationErrors.email ? 'border-red-300' : 'border-gray-300'
//                     }`}
//                     placeholder="Enter your email"
//                   />
//                 </div>
//                 {validationErrors.email && (
//                   <p className="text-sm text-red-600">{validationErrors.email}</p>
//                 )}
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="schoolName" className="text-sm font-medium text-gray-700">
//                   School name
//                 </label>
//                 <div className="relative">
//                   <School className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                   <input
//                     id="schoolName"
//                     name="schoolName"
//                     type="text"
//                     required
//                     value={formData.schoolName}
//                     onChange={handleInputChange}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
//                     placeholder="Enter your school name"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="role" className="text-sm font-medium text-gray-700">
//                   Your role
//                 </label>
//                 <select
//                   id="role"
//                   name="role"
//                   value={formData.role}
//                   onChange={handleSelectChange}
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
//                     validationErrors.role ? 'border-red-300' : 'border-gray-300'
//                   }`}
//                 >
//                   <option value="">Select your role</option>
//                   <option value="teacher">Teacher</option>
//                   <option value="head-teacher">Head Teacher</option>
//                   <option value="administrator">School Administrator</option>
//                   <option value="principal">Principal</option>
//                   <option value="other">Other</option>
//                 </select>
//                 {validationErrors.role && (
//                   <p className="text-sm text-red-600">{validationErrors.role}</p>
//                 )}
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="password" className="text-sm font-medium text-gray-700">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                   <input
//                     id="password"
//                     name="password"
//                     type={showPassword ? 'text' : 'password'}
//                     autoComplete="new-password"
//                     required
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
//                       validationErrors.password ? 'border-red-300' : 'border-gray-300'
//                     }`}
//                     placeholder="Create a password"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
//                   >
//                     {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                   </button>
//                 </div>
//                 {validationErrors.password && (
//                   <p className="text-sm text-red-600">{validationErrors.password}</p>
//                 )}
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
//                   Confirm password
//                 </label>
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                   <input
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type={showConfirmPassword ? 'text' : 'password'}
//                     autoComplete="new-password"
//                     required
//                     value={formData.confirmPassword}
//                     onChange={handleInputChange}
//                     className={`w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
//                       validationErrors.confirmPassword ? 'border-red-300' : 'border-gray-300'
//                     }`}
//                     placeholder="Confirm your password"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                     className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
//                   >
//                     {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                   </button>
//                 </div>
//                 {validationErrors.confirmPassword && (
//                   <p className="text-sm text-red-600">{validationErrors.confirmPassword}</p>
//                 )}
//               </div>

//               <div className="flex items-center">
//                 <input
//                   id="terms"
//                   name="terms"
//                   type="checkbox"
//                   required
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                 />
//                 <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
//                   I agree to the{' '}
//                   <a href="#" className="text-blue-600 hover:text-blue-500">
//                     Terms of Service
//                   </a>{' '}
//                   and{' '}
//                   <a href="#" className="text-blue-600 hover:text-blue-500">
//                     Privacy Policy
//                   </a>
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//               >
//                 {isLoading ? 'Creating account...' : 'Create account'}
//                 {!isLoading && (
//                   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 )}
//               </button>

//               <div className="text-center">
//                 <span className="text-sm text-gray-600">
//                   Already have an account?{' '}
//                   <Link
//                     to="/login"
//                     className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
//                   >
//                     Sign in
//                   </Link>
//                 </span>
//               </div>
//             </form>

//             <div className="mt-6">
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-300" />
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-2 bg-white text-gray-500">Or continue with</span>
//                 </div>
//               </div>

//               <div className="mt-6 grid grid-cols-2 gap-3">
//                 <button className="w-full border border-gray-300 hover:bg-gray-50 py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
//                   <svg className="h-5 w-5" viewBox="0 0 24 24">
//                     <path
//                       fill="currentColor"
//                       d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                     />
//                     <path
//                       fill="currentColor"
//                       d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                     />
//                     <path
//                       fill="currentColor"
//                       d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                     />
//                     <path
//                       fill="currentColor"
//                       d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                     />
//                   </svg>
//                   <span className="ml-2">Google</span>
//                 </button>

//                 <button className="w-full border border-gray-300 hover:bg-gray-50 py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
//                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                   </svg>
//                   <span className="ml-2">Facebook</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// export default RegisterPage


import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, School } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { authAPI } from '@/lib/api'

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    schoolName: '',
    role: '',
    password: '',
    confirmPassword: ''
  })
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      role: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate password confirmation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }

    // Prepare data for API call (exclude confirmPassword)
    const { confirmPassword, ...registrationData } = formData

    try {
      const response = await authAPI.register(registrationData)
      console.log('Registration successful:', response)
      // Redirect to login page or dashboard
      navigate('/login')
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message)
      if (error.response?.data?.errors) {
        // Display validation errors
        const errorMessages = error.response.data.errors.map(err => err.msg).join('\n')
        alert(`Registration failed:\n${errorMessages}`)
      } else {
        alert(error.response?.data?.message || 'Registration failed. Please try again.')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-2xl border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="space-y-1 text-center">
              <Link to="/" className="inline-block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-3xl font-montserrat font-bold text-assesium-primary dark:text-assesium-accent mb-4"
                >
                  Assesium
                </motion.div>
              </Link>
              <CardTitle className="text-2xl font-montserrat font-bold text-foreground">
                Create your account
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Join thousands of educators transforming assessment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="pl-10 bg-background border-border focus:border-assesium-accent"
                        placeholder="First name"
                        minLength={2}
                        maxLength={50}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="pl-10 bg-background border-border focus:border-assesium-accent"
                        placeholder="Last name"
                        minLength={2}
                        maxLength={50}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 bg-background border-border focus:border-assesium-accent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schoolName" className="text-sm font-medium text-foreground">
                    School name
                  </Label>
                  <div className="relative">
                    <School className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="schoolName"
                      name="schoolName"
                      type="text"
                      value={formData.schoolName}
                      onChange={handleInputChange}
                      className="pl-10 bg-background border-border focus:border-assesium-accent"
                      placeholder="Enter your school name"
                      maxLength={100}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-sm font-medium text-foreground">
                    Your role
                  </Label>
                  <Select onValueChange={handleSelectChange}>
                    <SelectTrigger className="bg-background border-border focus:border-assesium-accent">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="teacher">Teacher</SelectItem>
                      <SelectItem value="head-teacher">Head Teacher</SelectItem>
                      <SelectItem value="administrator">School Administrator</SelectItem>
                      <SelectItem value="principal">Principal</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-foreground">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10 pr-10 bg-background border-border focus:border-assesium-accent"
                      placeholder="Create a password"
                      minLength={8}
                      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
                      title="Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                    Confirm password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="pl-10 pr-10 bg-background border-border focus:border-assesium-accent"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-assesium-accent focus:ring-assesium-accent border-border rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
                    I agree to the{' '}
                    <a href="#" className="text-assesium-accent hover:text-assesium-accent/80">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-assesium-accent hover:text-assesium-accent/80">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-assesium-accent hover:bg-assesium-accent/90 text-white font-montserrat font-semibold py-3 rounded-lg transition-all duration-200 group"
                >
                  Create account
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="text-center">
                  <span className="text-sm text-muted-foreground">
                    Already have an account?{' '}
                    <Link
                      to="/login"
                      className="font-medium text-assesium-accent hover:text-assesium-accent/80 transition-colors"
                    >
                      Sign in
                    </Link>
                  </span>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-card text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="w-full border-border hover:bg-muted"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="ml-2">Google</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-border hover:bg-muted"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="ml-2">Facebook</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default RegisterPage
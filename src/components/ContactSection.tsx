"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import Container from "./Container"

export default function ContactSection() {
 const ref = useRef(null)
 const isInView = useInView(ref, { once: true, amount: 0.1 })

 const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
 })

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target
  setFormData((prev) => ({ ...prev, [name]: value }))
 }

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  console.log("Form submitted:", formData)
  // Here you would typically send the data to your backend
  alert("Form submitted successfully!")
  setFormData({
   name: "",
   email: "",
   phone: "",
   subject: "",
   message: "",
  })
 }

 const contactInfo = [
  {
   icon: <MapPin className="h-6 w-6 text-white" />,
   title: "Location",
   details: "20 Bordeshi, London, Usa",
  },
  {
   icon: <Phone className="h-6 w-6 text-white" />,
   title: "Phone",
   details: "+123 456 7890",
  },
  {
   icon: <Mail className="h-6 w-6 text-white" />,
   title: "Email",
   details: "hello@thames.com",
  },
 ]

 return (
  <section ref={ref} className=" py-20" id="contact">
   <Container>
    <motion.div
     className="text-center mb-16"
     initial={{ opacity: 0, y: 20 }}
     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
     transition={{ duration: 0.6 }}
    >
     <h3 className="text-green-500 text-lg font-medium tracking-widest mb-2">CONTACT ME</h3>
     <h2 className="text-4xl md:text-5xl font-bold text-white">Let&apos;s Start A New Project</h2>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
     {/* Contact Information */}
     <motion.div
      className="space-y-8"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
     >
      {contactInfo.map((item, index) => (
       <motion.div
        key={index}
        className="flex items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
       >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
         {item.icon}
        </div>
        <div>
         <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
         <p className="text-gray-400">{item.details}</p>
        </div>
       </motion.div>
      ))}
     </motion.div>

     {/* Contact Form */}
     <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
     >
      <form onSubmit={handleSubmit} className="space-y-4">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
         type="text"
         name="name"
         placeholder="Your Name"
         value={formData.name}
         onChange={handleChange}
         required
         className="bg-[#222222] border-none text-white p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
         type="email"
         name="email"
         placeholder="Your Email"
         value={formData.email}
         onChange={handleChange}
         required
         className="bg-[#222222] border-none text-white p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
         type="tel"
         name="phone"
         placeholder="Your Phone"
         value={formData.phone}
         onChange={handleChange}
         className="bg-[#222222] border-none text-white p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
         type="text"
         name="subject"
         placeholder="Your Subject"
         value={formData.subject}
         onChange={handleChange}
         required
         className="bg-[#222222] border-none text-white p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
       </div>
       <textarea
        name="message"
        placeholder="Start writing message here"
        value={formData.message}
        onChange={handleChange}
        required
        rows={6}
        className="w-full bg-[#222222] border-none text-white p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
       ></textarea>
       <motion.button
        type="submit"
        className="bg-green-500 text-white font-medium py-3 px-8 rounded-md hover:bg-green-600 transition-colors duration-300"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
       >
        SUBMIT NOW
       </motion.button>
      </form>
     </motion.div>
    </div>
   </Container>
  </section>
 )
}

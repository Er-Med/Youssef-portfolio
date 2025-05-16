"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowDown } from "lucide-react"
import me from "@/public/images/about-img-1.jpg"
import Container from "./Container"
export default function AboutMe() {
 const ref = useRef(null)
 const isInView = useInView(ref, {
  once: true,
  amount: 0.3, // Only needs 30% of the section to be visible
  margin: "0px 0px -100px 0px", // Negative bottom margin to trigger earlier
 })
 const controls = useAnimation()

 useEffect(() => {
  if (isInView) {
   controls.start("visible")
  }
 }, [isInView, controls])

 return (
  <section ref={ref} className="py-20 overflow-hidden">
   <Container>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
     {/* Left Column - Image and Decorative Elements */}
     <div className="relative">
      {/* Green Square - Top Left */}
      <motion.div
       className="absolute -top-8 -left-8 w-16 h-16 bg-green-500 z-10"
       initial={{ opacity: 0, scale: 0 }}
       animate={controls}
       variants={{
        visible: {
         opacity: 1,
         scale: 1,
         transition: { delay: 0.6, duration: 0.5 },
        },
       }}
       whileHover={{ rotate: 10 }}
      />

      {/* Green Border - Top Right */}
      <motion.div
       className="absolute -top-4 right-4 w-32 h-32 border-2 border-green-500 z-10"
       initial={{ opacity: 0, scale: 0 }}
       animate={controls}
       variants={{
        visible: {
         opacity: 1,
         scale: 1,
         transition: { delay: 0.8, duration: 0.5 },
        },
       }}
       whileHover={{ rotate: -5 }}
      />

      {/* Main Image */}
      <motion.div
       className="relative z-20"
       initial={{ x: -100, opacity: 0 }}
       animate={controls}
       variants={{
        visible: {
         x: 0,
         opacity: 1,
         transition: { duration: 0.8 },
        },
       }}
      >
       <Image
        src={me}
        alt="Professional portrait"
        width={500}
        height={600}
        className="w-full h-auto grayscale object-cover rounded-md shadow-lg"
       />
      </motion.div>

      {/* Green Rectangle - Bottom Right */}
      <motion.div
       className="absolute -bottom-4 right-8 w-16 h-24 bg-green-500 z-10"
       initial={{ opacity: 0, scale: 0 }}
       animate={controls}
       variants={{
        visible: {
         opacity: 1,
         scale: 1,
         transition: { delay: 1, duration: 0.5 },
        },
       }}
       whileHover={{ rotate: -10 }}
      />

      {/* Download CV Button */}
      <motion.div
       className="absolute -bottom-12 left-12 z-30"
       initial={{ opacity: 0 }}
       animate={controls}
       variants={{
        visible: {
         opacity: 1,
         transition: { delay: 1.2, duration: 0.5 },
        },
       }}
      >
       <div className="relative">
        <div className="w-32 h-32 rounded-full bg-white text-[#1a1a1a] flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow duration-300 animate-slow-spin">
         <ArrowDown className="h-6 w-6 mb-1 text-green-500" />
         <div className="text-xs font-medium">DOWNLOAD MY CV</div>
        </div>
       </div>
      </motion.div>
     </div>

     {/* Right Column - Text Content */}
     <motion.div
      className="text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      variants={{
       visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: 0.4 },
       },
      }}
     >
      <h3 className="text-green-500 text-lg font-medium tracking-widest mb-2">ABOUT ME</h3>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">I Develop System that Works</h2>

      <p className="text-gray-400 mb-6">
       With over 10 years of experience in software architecture and system design, I specialize in creating
       robust, scalable solutions that solve complex business problems. My approach combines technical excellence
       with a deep understanding of user needs.
      </p>

      <p className="text-gray-400 mb-8">
       I believe in building systems that not only work flawlessly but are also maintainable and adaptable to
       changing requirements.
      </p>

      <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10">
       <div>
        <h4 className="text-gray-400 mb-1">Name</h4>
        <p>Bruce Wayne</p>
       </div>
       <div>
        <h4 className="text-gray-400 mb-1">Phone</h4>
        <p>+123 456 7890</p>
       </div>
       <div>
        <h4 className="text-gray-400 mb-1">Age</h4>
        <p>35 Years</p>
       </div>
       <div>
        <h4 className="text-gray-400 mb-1">Email</h4>
        <p>bruce@wayne.com</p>
       </div>
       <div>
        <h4 className="text-gray-400 mb-1">Occupation</h4>
        <p>Software Architect</p>
       </div>
       <div>
        <h4 className="text-gray-400 mb-1">Nationality</h4>
        <p>American</p>
       </div>
      </div>

      <div className="h-px bg-gray-700 mb-8" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
       <div className="mb-4 md:mb-0">
        <motion.div
         className="text-green-500 font-signature text-3xl"
         initial={{ opacity: 0 }}
         animate={controls}
         variants={{
          visible: {
           opacity: 1,
           transition: { delay: 1.4, duration: 0.5 },
          },
         }}
        >
         Bruce Wayne
        </motion.div>
       </div>
       <div className="text-gray-400">
        <span className="font-bold text-white">BRUCE WAYNE</span> Software Architect, Google Inc.
       </div>
      </div>
     </motion.div>
    </div>
   </Container>
  </section>
 )
}

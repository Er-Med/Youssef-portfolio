"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface SkillProps {
 name: string
 percentage: number
}

const skills: SkillProps[] = [
 { name: "Web Development", percentage: 80 },
 { name: "Hardware Development", percentage: 95 },
 { name: "Software Development", percentage: 90 },
 { name: "System Application", percentage: 75 },
 { name: "Project management", percentage: 60 },
 { name: "Data Administration", percentage: 85 },
]

const CircularProgress = ({ skill }: { skill: SkillProps }) => {
 const { name, percentage } = skill

 // SVG parameters
 const circleSize = 160
 const radius = 70
 const strokeWidth = 4
 const center = circleSize / 2
 const circumference = 2 * Math.PI * radius

 // Calculate the stroke-dashoffset based on the percentage
 const offset = circumference - (percentage / 100) * circumference

 return (
  <div className="flex flex-col items-center">
   <div className="relative w-40 h-40">
    <svg width={circleSize} height={circleSize} viewBox={`0 0 ${circleSize} ${circleSize}`}>
     {/* Background circle */}
     <circle cx={center} cy={center} r={radius} fill="transparent" stroke="#333333" strokeWidth={strokeWidth} />

     {/* Progress circle */}
     <motion.circle
      cx={center}
      cy={center}
      r={radius}
      fill="transparent"
      stroke="#4ade80"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeDasharray={circumference}
      initial={{ strokeDashoffset: circumference }}
      animate={{ strokeDashoffset: offset }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      style={{
       transformOrigin: "center",
       rotate: "-90deg",
      }}
     />
    </svg>

    {/* Percentage text */}
    <div className="absolute inset-0 flex items-center justify-center">
     <span className="text-3xl font-bold text-white">{percentage}%</span>
    </div>
   </div>

   <h3 className="mt-4 text-center text-white font-medium">{name}</h3>
  </div>
 )
}

export default function SkillsSection() {
 const ref = useRef(null)
 const isInView = useInView(ref, { once: true, amount: 0.3 })
 const controls = useAnimation()

 useEffect(() => {
  if (isInView) {
   controls.start("visible")
  }
 }, [isInView, controls])

 return (
  <section ref={ref} className=" py-20" id="skills">
   <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
     {/* Left column - Text content */}
     <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      variants={{
       visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
       },
      }}
     >
      <h3 className="text-green-500 text-lg font-medium tracking-widest mb-2">MY SKILL</h3>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
       Growing Over
       <br />
       Times
      </h2>
      <p className="text-gray-400">
       Sed ut perspiciatis unde omnis iste natus Sed ut perspiciatis unde omnis iste natus kobita tumi sopno
       charini hoye khbor nio na sit voluptatem accusantium dolore.
      </p>
     </motion.div>

     {/* Right column - Circular progress */}
     <div>
      <motion.div
       className="grid grid-cols-2 md:grid-cols-3 gap-8"
       initial="hidden"
       animate={controls}
       variants={{
        hidden: { opacity: 0 },
        visible: {
         opacity: 1,
         transition: {
          staggerChildren: 0.2,
         },
        },
       }}
      >
       {skills.map((skill, index) => (
        <motion.div
         key={index}
         variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
           opacity: 1,
           y: 0,
           transition: { duration: 0.5 },
          },
         }}
        >
         <CircularProgress skill={skill} />
        </motion.div>
       ))}
      </motion.div>
     </div>
    </div>
   </div>
  </section>
 )
}

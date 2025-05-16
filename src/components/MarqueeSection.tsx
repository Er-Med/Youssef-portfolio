"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useAnimation } from "framer-motion"

export default function MarqueeSection() {
 const containerRef = useRef<HTMLDivElement>(null)
 const controls = useAnimation()

 // For scroll-based animation
 const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start end", "end start"],
 })

 const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
 const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })

 // Text content
 const topLineText = "SENIOR WEBSITE DEVELOPER FROM NEW YORK * SENIOR WEBSITE DEVELOPER FROM NEW YORK * "
 const bottomLineText =
  "LET'S WORK TOGETHER * I'M OPEN FOR NEW PROJECTS * LET'S WORK TOGETHER * I'M OPEN FOR NEW PROJECTS * "

 // Duplicate text to ensure continuous scrolling
 const repeatedTopLine = topLineText.repeat(3)
 const repeatedBottomLine = bottomLineText.repeat(3)

 useEffect(() => {
  controls.start("visible")
 }, [controls])

 return (
  <div ref={containerRef} className="relative">
   <motion.div style={{ opacity: springOpacity }} className="flex flex-col ">
    {/* Top line - scrolling right */}
    <div className="relative overflow-hidden h-20 md:h-24">
     <motion.div
      className="absolute whitespace-nowrap text-4xl md:text-6xl font-semibold text-[#ddddddb5] tracking-wide"
      initial={{ x: "0%" }}
      animate={{ x: "-33.33%" }}
      transition={{
       repeat: Number.POSITIVE_INFINITY,
       ease: "linear",
       duration: 30,
      }}
     >
      {repeatedTopLine}
     </motion.div>
    </div>

    {/* Bottom line - scrolling left */}
    <div className="relative overflow-hidden h-20 md:h-24 ">
     <motion.div
      className="absolute whitespace-nowrap text-4xl md:text-6xl font-semibold text-gray-800 tracking-wide marque-second-line-style"
      initial={{ x: "-33.33%" }}
      animate={{ x: "0%" }}
      transition={{
       repeat: Number.POSITIVE_INFINITY,
       ease: "linear",
       duration: 30,
      }}
     >
      {repeatedBottomLine}
     </motion.div>
    </div>
   </motion.div>
  </div>
 )
}

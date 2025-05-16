"use client"

import { motion } from "framer-motion"
// import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"
import personImg from "../public/images/person.png"
import TypingAnimation from "./TypingAnimation"
import Container from "./Container"

export default function Hero() {
  // const [text, setText] = useState("")
  // const fullText = "Software Eng"
  // const [showCursor, setShowCursor] = useState(true)

  // useEffect(() => {
  //   if (text.length < fullText.length) {
  //     const timeout = setTimeout(() => {
  //       setText(fullText.slice(0, text.length + 1))
  //     }, 150)

  //     return () => clearTimeout(timeout)
  //   }
  // }, [text, fullText])

  // Blinking cursor effect
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setShowCursor((prev) => !prev)
  //   }, 500)

  //   return () => clearInterval(interval)
  // }, [])
  // C:\Youssef\youssef-portfolio\src\public\images\slider-bg.jpg
  return (
    <div className="bg-[url('../public/images/slider_bg.jpg')] relative overflow-hidden min-h-screen bg-cover bg-center bg-no-repeat">
      {/* <div className="absolute inset-0 "> */}
      <div className="relative z-50">
        <Navbar />
      </div>

      <Container className="flex justify-center lg:justify-between items-center transition-all duration-500 ease-in-out h-screen ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
          <div className="space-y-6 pt-20 md:pt-0">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-primary tracking-widest  text-2xl"
              >
                HELLO I&apos;M
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-9xl font-meduim word-spacing:-20px word-spacing-normal"
              >
                Youssef
                <span className="inline-block  lg:hidden w-4" />
                <br className="hidden lg:block" />
                Benkhali
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-2 flex-col lg:flex-row"
              >
                <span className="text-white  font-semibold lg:font-medium text-xl traking- lg:text-lg ">A Passionate</span>
                <span className="text-green-500">
                  {/* {text} */}
                  <TypingAnimation />
                  {/* {showCursor && <span className="text-green-500">_</span>} */}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {/* <Button className="bg-primary hover:bg-green-600 px-8 py-6">Contact Me</Button> */}
                <div className="buttons">
                  <button className="btn"><span></span><p data-start="CONTACT ME" data-text="START!" data-title="CONTACT ME"></p></button>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative flex h-full items-center justify-end">
            <motion.div
              initial={{ opacity: 0.5, scale: 0.9 }}
              animate={{ opacity: 0.5, scale: [1, 1.07, 1] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="border-1 relative top-16  w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden bg-[#3b3c46] "
            >

            </motion.div>

            <div className="absolute bottom-0 xl:w-[95%]   ">
              <Image
                src={personImg}
                alt="James Smith"
                className="w-full h-full object-cover"
                height={800}
                width={900}
              />
            </div>
            {/* Social media icons */}
            <div className="hidden md:flex flex-col gap-4 absolute end-0 top-1/2 -translate-y-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="w-10 h-10 border border-white/20 rounded-md flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Facebook size={18} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="w-10 h-10 border border-white/20 rounded-md flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Twitter size={18} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="w-10 h-10 border border-white/20 rounded-md flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Linkedin size={18} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
                className="w-10 h-10 border border-white/20 rounded-md flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Youtube size={18} />
              </motion.div>
            </div>
          </div>

        </div>

        {/* Social media icons */}
        {/* <div className="hidden md:flex flex-col gap-4 absolute right-10 top-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="w-10 h-10 border border-white/20 rounded-md flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Facebook size={18} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="w-10 h-10 border border-white/20 rounded-md flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Twitter size={18} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="w-10 h-10 border border-white/20 rounded-md flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Linkedin size={18} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            className="w-10 h-10 border border-white/20 rounded-md flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Youtube size={18} />
          </motion.div>
        </div> */}
      </Container>
      {/* </div> */}
    </div>
  )
}

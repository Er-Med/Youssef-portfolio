"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Cloud, Database, Lock, Settings } from "lucide-react"
import Container from "./Container"

interface ServiceProps {
  icon: React.ReactNode
  title: string
  description: string
}

const services: ServiceProps[] = [
  {
    icon: <Settings className="w-10 h-10 text-green-400" />,
    title: "Web Development",
    description:
      "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-green-400" />,
    title: "Software Development",
    description:
      "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <Database className="w-10 h-10 text-green-400" />,
    title: "System Development",
    description:
      "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <Lock className="w-10 h-10 text-green-400" />,
    title: "Security Analysis",
    description:
      "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.",
  },
]

const ServiceCard = ({ service, index }: { service: ServiceProps; index: number }) => {
  return (
    <motion.div
      className="bg-[#2d2e36] p-8 rounded-lg hover:bg-[#2d2e36] transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
        },
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="flex-shrink-0">{service.icon}</div>
        <div>
          <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
          <p className="text-gray-400">{service.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className=" py-20" id="services">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-green-500 text-lg font-medium tracking-widest mb-2">SERVICE</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">What I offer</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

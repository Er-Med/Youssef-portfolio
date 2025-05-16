"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import portImg1 from "@/public/images/port-img1.jpg"
import portImg2 from "@/public/images/port-img2.jpg"
import portImg3 from "@/public/images/port-img3.jpg"
import portImg4 from "@/public/images/port-img4.jpg"
// Project data
const projects = [
 {
  id: 1,
  category: "WEB DESIGN",
  title: "Software Design for eThemeStudio",
  image: portImg1,
  description:
   "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  projectType: "Graphic Design",
  client: "Juwel Khan",
  duration: "2 Weeks",
  task: "UI/UX, Frontend",
  budget: "$2000",
 },
 {
  id: 2,
  category: "DEVELOPMENT",
  title: "Website Development for ABC Corporation",
  image: portImg2,
  description:
   "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  projectType: "Web Development",
  client: "ABC Corp",
  duration: "4 Weeks",
  task: "Full-stack Development",
  budget: "$5000",
 },
 {
  id: 3,
  category: "BRANDING",
  title: "Branding for Easy Computers",
  image: portImg3,
  description:
   "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  projectType: "Brand Identity",
  client: "Easy Computers",
  duration: "3 Weeks",
  task: "Logo Design, Brand Guidelines",
  budget: "$3500",
 },
 {
  id: 4,
  category: "SECURITY",
  title: "Security Analysis for eTechStudio",
  image: portImg4,
  description:
   "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  projectType: "Security Audit",
  client: "eTechStudio",
  duration: "2 Weeks",
  task: "Penetration Testing, Security Report",
  budget: "$4000",
 },
]

export default function PortfolioSection() {
 const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
 const [isOpen, setIsOpen] = useState(false)
 const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null)

 const openProjectModal = (project: (typeof projects)[0]) => {
  setSelectedProject(project)
  setIsOpen(true)
 }

 return (
  <section className="py-20" id="portfolio">
   <div className="container mx-auto px-4">
    <div className="text-center mb-16">
     <h3 className="text-green-500 text-lg font-medium tracking-widest mb-2">PORTFOLIO</h3>
     <h2 className="text-4xl md:text-5xl font-bold text-white">My Recent Works</h2>
    </div>

    <div className="space-y-8">
     {projects.map((project) => (
      <div
       key={project.id}
       className="relative"
       onMouseEnter={() => setHoveredProjectId(project.id)}
       onMouseLeave={() => setHoveredProjectId(null)}
      >
       <div className="border-t border-gray-700"></div>
       <div className="py-8 grid grid-cols-12 items-center">
        <div className="col-span-2 text-gray-400 text-sm">{project.category}</div>
        <div className="col-span-7 md:col-span-8 relative">
         {/* Project title */}
         <h3 className="text-2xl md:text-3xl font-bold text-white cursor-pointer hover:text-green-500 transition-colors duration-300">
          {project.title}
         </h3>

         {/* Absolutely positioned image that appears on hover */}
         <AnimatePresence>
          {hoveredProjectId === project.id && (
           <motion.div
            className="absolute top-0 -right-20 hidden md:block z-10"
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 6 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 0 }}
            transition={{ duration: 0.3 }}
           >
            <Image
             src={project.image || "/placeholder.svg"}
             alt={project.title}
             width={220}
             height={220}
             className="rounded-md shadow-lg"
            />
           </motion.div>
          )}
         </AnimatePresence>
        </div>
        <div className="col-span-3 md:col-span-2 flex justify-end">
         <motion.button
          onClick={() => openProjectModal(project)}
          className={`w-12 h-12 rounded-full flex items-center justify-center ${hoveredProjectId === project.id
           ? "bg-green-500 text-white"
           : "border border-gray-700 text-green-500 hover:border-green-500"
           } transition-all duration-300`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
         >
          <Plus className="w-5 h-5" />
         </motion.button>
        </div>
       </div>
      </div>
     ))}
     <div className="border-t border-gray-800"></div>
    </div>
   </div>

   {/* Project Modal Dialog */}
   <Dialog open={isOpen} onOpenChange={setIsOpen}>
    <DialogContent className="bg-[#2a2a2a] text-white border-none max-w-4xl p-0 overflow-hidden">
     <div className="relative">
      <button
       onClick={() => setIsOpen(false)}
       className="absolute top-4 right-4 z-10 bg-[#1a1a1a] text-white rounded-full p-1 hover:bg-green-500 transition-colors duration-300"
      >
       <X className="w-5 h-5" />
      </button>

      {selectedProject && (
       <div>
        <div className="w-full h-[400px] relative overflow-hidden">
         <Image
          src={selectedProject.image || "/placeholder.svg"}
          alt={selectedProject.title}
          fill
          className="object-cover"
         />
        </div>

        <div className="p-8">
         <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
         <p className="text-gray-300 mb-8">{selectedProject.description}</p>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#222222] p-6 rounded-lg">
          <div>
           <div className="mb-4">
            <span className="text-gray-400 block mb-1">Project Type :</span>
            <span>{selectedProject.projectType}</span>
           </div>
           <div className="mb-4">
            <span className="text-gray-400 block mb-1">Client :</span>
            <span>{selectedProject.client}</span>
           </div>
          </div>
          <div>
           <div className="mb-4">
            <span className="text-gray-400 block mb-1">Duration :</span>
            <span>{selectedProject.duration}</span>
           </div>
           <div className="mb-4">
            <span className="text-gray-400 block mb-1">Task :</span>
            <span>{selectedProject.task}</span>
           </div>
           <div>
            <span className="text-gray-400 block mb-1">Budget :</span>
            <span>{selectedProject.budget}</span>
           </div>
          </div>
         </div>
        </div>
       </div>
      )}
     </div>
    </DialogContent>
   </Dialog>
  </section>
 )
}

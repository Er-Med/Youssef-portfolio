// // components/Navbar.jsx
// "use client";
// import { useState, useEffect } from 'react';

// export default function Navbar() {
//  const [activeSection, setActiveSection] = useState('home');
//  const [isScrolled, setIsScrolled] = useState(false);

//  const navItems = [
//   { name: 'Home', id: 'home' },
//   { name: 'About', id: 'about' },
//   { name: 'Works', id: 'works' },
//   { name: 'Contact', id: 'contact' }
//  ];

//  // Handle scroll and update active section
//  useEffect(() => {
//   const handleScroll = () => {
//    const scrollPosition = window.scrollY;

//    // Check if page is scrolled past threshold (e.g., 50px)
//    setIsScrolled(scrollPosition > 50);

//    // Find the current section
//    const sections = navItems.map(item => document.getElementById(item.id));
//    const currentScrollPosition = scrollPosition + 100; // Offset for better detection

//    sections.forEach(section => {
//     if (!section) return;

//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.offsetHeight;

//     if (currentScrollPosition >= sectionTop && currentScrollPosition < sectionTop + sectionHeight) {
//      setActiveSection(section.id);
//     }
//    });
//   };

//   // Add scroll event listener
//   window.addEventListener('scroll', handleScroll);

//   // Initial check
//   handleScroll();

//   // Cleanup
//   return () => window.removeEventListener('scroll', handleScroll);
//  }, []);

//  // Smooth scroll to section
//  const scrollToSection = (id: string) => {
//   const element = document.getElementById(id);
//   if (element) {
//    element.scrollIntoView({ behavior: 'smooth' });
//    setActiveSection(id);
//   }
//  };

//  return (
//   <nav
//    className={`
//          px-8 py-5 w-full z-50
//         transition-all duration-500 ease-in-out 
//         ${isScrolled
//      ? 'fixed top-0 left-0 shadow-lg bg-[#25262f] py-3'
//      : 'absolute'
//     }
//       `}
//   >
//    <div className={`container mx-auto px-20 lg:px-52 flex justify-between transition-all duration-500 ease-in-out
//        ${isScrolled
//      ? ''
//      : ''
//     }`}>

//     <div className="flex items-center gap-2">
//      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
//       <span className="bold text-white">T</span>
//      </div>
//      <span className="text-xl semibold">Youssef</span>
//     </div>
//     <div className="flex items-center">
//      {navItems.map((item, index) => (
//       <button
//        key={item.id}
//        onClick={() => scrollToSection(item.id)}
//        className={`
//               ${index < navItems.length - 1 ? 'mr-8' : ''}
//               medium transition-colors cursor-pointer
//               ${activeSection === item.id
//          ? 'text-green-500'
//          : 'text-white hover:text-green-500'
//         }
//             `}
//       >
//        {item.name}
//       </button>
//      ))}
//     </div>
//    </div>
//   </nav>
//  );
// }

"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export default function Navbar() {
 const [activeSection, setActiveSection] = useState("home")
 const [isScrolled, setIsScrolled] = useState(false)
 const [isOpen, setIsOpen] = useState(false)

 const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Works", id: "works" },
  { name: "Contact", id: "contact" },
 ]

 // Handle scroll and update active section
 useEffect(() => {
  const handleScroll = () => {
   const scrollPosition = window.scrollY

   // Check if page is scrolled past threshold (e.g., 50px)
   setIsScrolled(scrollPosition > 50)

   // Find the current section
   const sections = navItems.map((item) => document.getElementById(item.id))
   const currentScrollPosition = scrollPosition + 100 // Offset for better detection

   sections.forEach((section) => {
    if (!section) return

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    if (currentScrollPosition >= sectionTop && currentScrollPosition < sectionTop + sectionHeight) {
     setActiveSection(section.id)
    }
   })
  }

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll)

  // Initial check
  handleScroll()

  // Cleanup
  return () => window.removeEventListener("scroll", handleScroll)
 }, [])

 // Smooth scroll to section
 const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
   element.scrollIntoView({ behavior: "smooth" })
   setActiveSection(id)
   setIsOpen(false) // Close mobile menu after clicking
  }
 }

 return (
  <nav
   className={cn(
    "px-4 sm:px-8 py-5 w-full z-50 transition-all duration-500 ease-in-out",
    isScrolled ? "fixed top-0 left-0 shadow-lg bg-[#25262f] py-3" : "absolute",
   )}
  >
   <div
    className={cn(
     "container mx-auto px-4 sm:px-6 lg:px-8 xl:px-52 flex justify-between items-center transition-all duration-500 ease-in-out",
     isScrolled ? "" : "",
    )}
   >
    <motion.div
     className="flex items-center gap-2"
     initial={{ opacity: 0, y: -10 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.3 }}
    >
     <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
      <span className="bold text-white">T</span>
     </div>
     <span className="text-xl semibold">Youssef</span>
    </motion.div>

    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center">
     {navItems.map((item, index) => (
      <motion.button
       key={item.id}
       onClick={() => scrollToSection(item.id)}
       className={cn(
        "medium transition-colors cursor-pointer",
        index < navItems.length - 1 ? "mr-8" : "",
        activeSection === item.id ? "text-green-500" : "text-white hover:text-green-500",
       )}
       whileHover={{ scale: 1.05 }}
       whileTap={{ scale: 0.95 }}
      >
       {item.name}
      </motion.button>
     ))}
    </div>

    {/* Mobile Navigation */}
    <div className="md:hidden">
     <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
       <motion.button className="text-white p-2 focus:outline-none" whileTap={{ scale: 0.9 }}>
        <Menu className="h-6 w-6" />
       </motion.button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-[#25262f] border-l border-gray-800 p-0 w-[250px]">
       <div className="flex flex-col h-full py-8 px-4">
        <div className="flex justify-end mb-8">
         <button onClick={() => setIsOpen(false)} className="text-white">
          <X className="h-6 w-6" />
         </button>
        </div>
        <div className="flex flex-col space-y-6">
         {navItems.map((item) => (
          <motion.button
           key={item.id}
           onClick={() => scrollToSection(item.id)}
           className={cn(
            "medium text-left text-lg py-2 transition-colors cursor-pointer",
            activeSection === item.id ? "text-green-500" : "text-white hover:text-green-500",
           )}
           whileHover={{ x: 5 }}
           whileTap={{ scale: 0.95 }}
          >
           {item.name}
          </motion.button>
         ))}
        </div>
       </div>
      </SheetContent>
     </Sheet>
    </div>
   </div>
  </nav>
 )
}

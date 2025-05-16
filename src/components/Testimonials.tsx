"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
 {
  id: 1,
  content:
   "Working with James was an absolute pleasure. His technical expertise and attention to detail resulted in a website that exceeded our expectations.",
  author: "John Doe",
  position: "CEO, TechCorp",
  avatar: "/placeholder.svg?height=80&width=80",
 },
 {
  id: 2,
  content:
   "James delivered our project on time and on budget. His communication throughout the process was excellent, and he was always willing to go the extra mile.",
  author: "Jane Smith",
  position: "Marketing Director, CreativeAgency",
  avatar: "/placeholder.svg?height=80&width=80",
 },
 {
  id: 3,
  content:
   "The website James built for us has significantly increased our online presence and conversion rates. I highly recommend his services.",
  author: "Michael Johnson",
  position: "Founder, StartupX",
  avatar: "/placeholder.svg?height=80&width=80",
 },
]

export function Testimonials() {
 const [activeIndex, setActiveIndex] = useState(0)

 const nextTestimonial = () => {
  setActiveIndex((prev) => (prev + 1) % testimonials.length)
 }

 const prevTestimonial = () => {
  setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
 }

 return (
  <section className="container mx-auto py-16 px-4">
   <h2 className="text-3xl font-bold mb-12 text-center">What People Say</h2>
   <div className="relative max-w-4xl mx-auto">
    <Card className="bg-[#1e1e1e] border-none">
     <CardContent className="p-8">
      <div className="flex flex-col items-center text-center">
       <div className="h-16 w-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
        <Quote className="h-8 w-8 text-green-500" />
       </div>
       <p className="text-xl mb-8">{testimonials[activeIndex].content}</p>
       <div className="flex items-center gap-4">
        <Image
         src={testimonials[activeIndex].avatar || "/placeholder.svg"}
         alt={testimonials[activeIndex].author}
         width={60}
         height={60}
         className="rounded-full"
        />
        <div className="text-left">
         <h4 className="font-bold">{testimonials[activeIndex].author}</h4>
         <p className="text-gray-400">{testimonials[activeIndex].position}</p>
        </div>
       </div>
      </div>
     </CardContent>
    </Card>
    <div className="flex justify-center mt-8 gap-2">
     <Button
      variant="outline"
      size="icon"
      className="rounded-full border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
      onClick={prevTestimonial}
     >
      <ChevronLeft className="h-5 w-5" />
     </Button>
     <Button
      variant="outline"
      size="icon"
      className="rounded-full border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
      onClick={nextTestimonial}
     >
      <ChevronRight className="h-5 w-5" />
     </Button>
    </div>
   </div>
  </section>
 )
}

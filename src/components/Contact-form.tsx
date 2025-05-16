"use client"

import type React from "react"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
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
   subject: "",
   message: "",
  })
 }

 return (
  <form onSubmit={handleSubmit} className="space-y-6 bg-[#1e1e1e] p-6 rounded-lg">
   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="space-y-2">
     <Label htmlFor="name">Your Name</Label>
     <Input
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      className="bg-[#252525] border-none focus-visible:ring-green-500"
     />
    </div>
    <div className="space-y-2">
     <Label htmlFor="email">Your Email</Label>
     <Input
      id="email"
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      required
      className="bg-[#252525] border-none focus-visible:ring-green-500"
     />
    </div>
   </div>
   <div className="space-y-2">
    <Label htmlFor="subject">Subject</Label>
    <Input
     id="subject"
     name="subject"
     value={formData.subject}
     onChange={handleChange}
     required
     className="bg-[#252525] border-none focus-visible:ring-green-500"
    />
   </div>
   <div className="space-y-2">
    <Label htmlFor="message">Your Message</Label>
    <Textarea
     id="message"
     name="message"
     value={formData.message}
     onChange={handleChange}
     required
     className="min-h-32 bg-[#252525] border-none focus-visible:ring-green-500"
    />
   </div>
   <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
    Send Message
   </Button>
  </form>
 )
}

"use client"

import { useEffect, useState } from "react"

interface CircularProgressProps {
 value: number
 label: string
}

export function CircularProgress({ value, label }: CircularProgressProps) {
 const [progress, setProgress] = useState(0)

 useEffect(() => {
  const timer = setTimeout(() => {
   setProgress(value)
  }, 100)

  return () => clearTimeout(timer)
 }, [value])

 const radius = 50
 const circumference = 2 * Math.PI * radius
 const offset = circumference - (progress / 100) * circumference

 return (
  <div className="flex flex-col items-center justify-center">
   <div className="relative w-32 h-32">
    <svg className="w-full h-full" viewBox="0 0 120 120">
     <circle
      className="text-[#252525]"
      strokeWidth="10"
      stroke="currentColor"
      fill="transparent"
      r={radius}
      cx="60"
      cy="60"
     />
     <circle
      className="text-green-500"
      strokeWidth="10"
      strokeDasharray={circumference}
      strokeDashoffset={offset}
      strokeLinecap="round"
      stroke="currentColor"
      fill="transparent"
      r={radius}
      cx="60"
      cy="60"
      style={{
       transition: "stroke-dashoffset 1s ease-in-out",
      }}
     />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
     <span className="text-2xl font-bold">{progress}%</span>
    </div>
   </div>
   <p className="mt-4 text-lg font-medium">{label}</p>
  </div>
 )
}

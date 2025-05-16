"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypingAnimation() {
 // State for the text typing animation
 const [displayText, setDisplayText] = useState("");
 const [isDeleting, setIsDeleting] = useState(false);
 const [loopNum, setLoopNum] = useState(0);
 const [typingSpeed, setTypingSpeed] = useState(150);

 // The texts to rotate through
 const rotateTexts = ["Freelance", "Digital Marketer"];
 const currentText = rotateTexts[loopNum % rotateTexts.length];

 // Typing effect
 useEffect(() => {
  const timer = setTimeout(() => {
   if (!isDeleting) {
    setDisplayText(currentText.substring(0, displayText.length + 1));
    // If we've typed the full text, start deleting after a pause
    if (displayText === currentText) {
     setIsDeleting(true);
     setTypingSpeed(1000); // 3 second pause before deleting
    }
   } else {
    setDisplayText(currentText.substring(0, displayText.length - 1));

    // If we've deleted everything, move to the next text
    if (displayText === '') {
     setIsDeleting(false);
     setLoopNum(loopNum + 1);
     setTypingSpeed(100); // Normal typing speed
    } else {
     setTypingSpeed(100); // Slower deletion speed - 2 seconds per character
    }
   }
  }, typingSpeed);

  return () => clearTimeout(timer);
 }, [displayText, isDeleting, loopNum, currentText, typingSpeed]);

 return (
  <div className="text-primary text-2xl font-medium">
   <span className="inline-block">{displayText}</span>
   <motion.span
    animate={{ opacity: [1, 1, 1] }}
    transition={{ repeat: Infinity, duration: 0.3 }}
    className="inline-block h-0.5 w-4 bg-primary ml-1 align-bottom"
   />
  </div>
 );
}
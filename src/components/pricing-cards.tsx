import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingCards() {
 return (
  <section className="container mx-auto py-16 px-4">
   <h2 className="text-3xl font-bold mb-12 text-center">Pricing Plans</h2>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <Card className="bg-[#1e1e1e] border-none">
     <CardHeader className="text-center pb-8 pt-8">
      <CardTitle className="text-2xl">Basic</CardTitle>
      <div className="mt-4 text-4xl font-bold">$49</div>
      <p className="text-gray-400 mt-2">Per Project</p>
     </CardHeader>
     <CardContent className="space-y-4">
      <div className="flex items-center gap-2">
       <Check className="h-5 w-5 text-green-500" />
       <span>1 Page Website</span>
      </div>
      <div className="flex items-center gap-2">
       <Check className="h-5 w-5 text-green-500" />
       <span>UI/UX Design</span>
      </div>
      <div className="flex items-center gap-2">
       <Check className="h-5 w-5 text-green-500" />
       <span>Responsive Design</span>
      </div>
      <div className="flex items-center gap-2">
       <Check className="h-5 w-5 text-green-500" />
       <span>Source Code</span>
      </div>
      <div className="flex items-center gap-2 text-gray-500">
       <Check className="h-5 w-5" />
       <span>10 Days Delivery</span>
      </div>
      <div className="flex items-center gap-2 text-gray-500">
       <Check className="h-5 w-5" />
       <span>24/7 Support</span>
      </div>
     </CardContent>
     <CardFooter>
      <Button className="w-full bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
       Choose Plan
      </Button>
     </CardFooter>
    </Card>
    <Card className="bg-[#1e1e1e] border-green-500 relative">
     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
      Popular
     </div>
     <CardHeader className="text-center pb-8 pt-8">
      <CardTitle className="text-2xl">Standard</CardTitle>
      <div className="mt-4 text-4xl font-bold">$99</div>
      <p className="text-gray-400 mt-2">Per Project</p>
     </CardHeader>
     <CardContent className="space-y-4">
      <div className="flex items-center gap-2">
       <Check className="h-5 w-5 text-green-500" />
       <span>5 Page Website</span>
      </div>
      <div className="flex items-center gap-2">
       <Check className="h-5 w-5 text-green-500" />
       <span>UI/UX Design</span>
      </div>
      <div className="flex items-center gap-2">
       <Check className="h-5 w-5 text-green-500" />
       <span>Responsive Design</span>
      </div>
      <div className="flex items-center gap-2">
       <Check className="h-5 w-5 text-green-500" />
       <span>Source Code</span>
      </div>
      <div className="flex items-center gap-2">
       <Check className="h-5 w-5 text-green-500" />
       <span>7 Days Delivery</span>
      </div>
      <div className="flex items-center gap-2 text-gray-500">
       <Check className="h-5 w-5" />
       <span>24/7 Support</span>
      </div>
     </CardContent>
     <CardFooter>
      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Choose Plan</Button>
     </CardFooter>
    </Card>
    <Card className="bg-[#1e1e1e] border-none">
     <CardHeader className="text-center pb-8 pt-8">
      <CardTitle className="text-2xl">Premium</CardTitle>
      <div className="mt-4 text-4xl font-bold">$149</div>
      <p className="text-gray-400 mt-2">Per Project</p>
     </CardHeader>
     <CardContent className="space-y-4">
      <div className="flex items-center gap-2">
       <Check className="h-5 w-5 text-green-500" />
       <span>10 Page Website</span>
      </div>
      <div className="flex items-center gap-2">
       <Check className="h-5 w-5 text-green-500" />
       <span>UI/UX Design</span>
      </div>
      <div className="flex items-center gap-2">
       <Check className="h-5 w-5 text-green-500" />
       <span>Responsive Design</span>
      </div>
      <div className="flex items-center gap-2">
       <Check className="h-5 w-5 text-green-500" />
       <span>Source Code</span>
      </div>
      <div className="flex items-center gap-2">
       <Check className="h-5 w-5 text-green-500" />
       <span>5 Days Delivery</span>
      </div>
      <div className="flex items-center gap-2">
       <Check className="h-5 w-5 text-green-500" />
       <span>24/7 Support</span>
      </div>
     </CardContent>
     <CardFooter>
      <Button className="w-full bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
       Choose Plan
      </Button>
     </CardFooter>
    </Card>
   </div>
  </section>
 )
}

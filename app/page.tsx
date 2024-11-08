import { Button } from "@/components/ui/button";
import { ArrowRight, Trees, Recycle, Users, Coins, MapPin,ChevronRight } from "lucide-react";
import Link from "next/link";

function AnimatedGlobe() {
  return(
    <div className="relative w-32 h-32 mx-auto mb-8">
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-pulse"></div>
      <div className="absolute inset-2 rounded-full bg-green-400 opacity-40 animate-ping"></div>
      <div className="absolute inset-4 rounded-full bg-green-300 opacity-60 animate-spin"></div>
      <div className="absolute inset-6 rounded-full bg-green-200 opacity-80 animate-bounce"></div>
      <Trees className="absolute inset-0 m-auto w-16 h-16 text-green-600 animate-pulse" />
    </div>
  )
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16  ">
      <section className="text-center mb-20 ">
        <AnimatedGlobe />
        <h1 className="text-6xl font-bold mb-6 text-gray-800 dark:text-slate-100 tracking-tight">
          Waste Manager <span className="text-green-600">By Tarush</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 ">Join Our Community To Make Earth A Cleaner Place To Live In </p>
        <Button className="bg-green-500 hover:bg-green-700 text-white text-lg py-6 px-10 rounded-full">Report Waste</Button>
      </section>
    </div>
  )
}
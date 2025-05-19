"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import CountdownTimer from "@/components/countdown-timer"
import LogoWithFallback from "./logo-fallback"

export default function ComingSoon() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this email to your backend
    console.log("Email submitted:", email)
    setSubmitted(true)
    setEmail("")
  }

  // Set launch date to 30 days from now
  const launchDate = new Date()
  launchDate.setDate(launchDate.getDate() + 30)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-orange-50 to-orange-100 px-4 py-12 text-center dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="flex flex-col items-center justify-center">
          <div className="p-6 rounded-lg mb-6">
            <LogoWithFallback
              src="/images/cloudwave-logo-white.png"
              fallbackSrc="/cloudwave-icon.png"
              alt="CloudWave Logo"
              width={200}
              height={120}
            />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">CloudWave is Coming Soon</h1>
          <p className="mx-auto max-w-[700px] text-slate-500 dark:text-slate-400 md:text-xl">
            We're working hard to bring you our new cloud services. Stay tuned for something special!
          </p>
        </div>

        <CountdownTimer targetDate={launchDate} />

        <div className="mx-auto max-w-md space-y-4">
          <h2 className="text-xl font-semibold">Get Notified When We Launch</h2>
          {submitted ? (
            <div className="rounded-lg bg-green-50 p-4 text-green-700 dark:bg-green-900/30 dark:text-green-300">
              Thanks for subscribing! We'll notify you when we launch.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                Notify Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
        </div>

        <div className="flex justify-center space-x-4 pt-4">
          <a href="#" className="text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-slate-100">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-slate-100">
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-slate-100">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-slate-100">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  )
}

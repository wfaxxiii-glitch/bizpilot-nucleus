import React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  gradient?: boolean
}

export function GlassCard({ children, className, gradient, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/20 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-md transition-all hover:shadow-lg hover:border-white/40 dark:hover:border-white/20",
        gradient && "bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-transparent",
        className
      )}
      {...props}
    >
      {/* Decorative Light Effect */}
      <div className="absolute -top-24 -right-24 h-48 w-48 bg-primary/10 blur-[60px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-48 w-48 bg-blue-500/10 blur-[60px] pointer-events-none" />
      
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  )
}
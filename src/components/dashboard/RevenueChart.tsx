import React, { useState, useEffect } from "react"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { GlassCard } from "@/components/ui/glass-card"

const data = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 2100 },
  { name: "Mar", total: 1800 },
  { name: "Apr", total: 2400 },
  { name: "May", total: 3200 },
  { name: "Jun", total: 2800 },
  { name: "Jul", total: 3600 },
]

export function RevenueChart() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <GlassCard className="h-[400px]">
        <div className="flex flex-col gap-2 mb-8">
          <h3 className="font-semibold text-lg">Revenue Overview</h3>
          <p className="text-sm text-muted-foreground">Monthly recurring revenue trends for this year.</p>
        </div>
        <div className="h-[280px] w-full animate-pulse bg-muted/20 rounded-lg" />
      </GlassCard>
    )
  }

  return (
    <GlassCard className="h-[400px]">
      <div className="flex flex-col gap-2 mb-8">
        <h3 className="font-semibold text-lg">Revenue Overview</h3>
        <p className="text-sm text-muted-foreground">Monthly recurring revenue trends for this year.</p>
      </div>
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgb(37, 99, 235)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="rgb(37, 99, 235)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="opacity-10" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "currentColor", fontSize: 10, opacity: 0.5 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "currentColor", fontSize: 10, opacity: 0.5 }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "var(--background)", 
                borderColor: "var(--border)",
                borderRadius: "8px",
                fontSize: "12px"
              }}
            />
            <Area
              type="monotone"
              dataKey="total"
              stroke="rgb(37, 99, 235)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorTotal)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  )
}
import { TrendingUp, Users, CreditCard, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { cn } from "@/lib/utils"

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: CreditCard,
    color: "text-green-500"
  },
  {
    title: "Active Users",
    value: "2,350",
    change: "+180.1%",
    trend: "up",
    icon: Users,
    color: "text-blue-500"
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "-2.1%",
    trend: "down",
    icon: Activity,
    color: "text-orange-500"
  },
  {
    title: "Session Duration",
    value: "4m 32s",
    change: "+12.5%",
    trend: "up",
    icon: TrendingUp,
    color: "text-purple-500"
  },
]

export function StatsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <GlassCard key={i} className="group cursor-default">
          <div className="flex items-center justify-between">
            <div className={cn("p-2 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors", stat.color)}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div className={cn(
              "flex items-center text-xs font-medium px-2 py-1 rounded-full",
              stat.trend === "up" ? "bg-green-500/10 text-green-600 dark:text-green-400" : "bg-red-500/10 text-red-600 dark:text-red-400"
            )}>
              {stat.trend === "up" ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
              {stat.change}
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
            <h3 className="text-2xl font-bold tracking-tight mt-1">{stat.value}</h3>
          </div>
        </GlassCard>
      ))}
    </div>
  )
}
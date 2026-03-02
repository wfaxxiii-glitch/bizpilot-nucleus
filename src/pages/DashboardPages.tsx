import React, { useState, Suspense, lazy } from "react"
import { Sparkles, ArrowRight, Zap, Target, MessageSquare, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GlassCard } from "@/components/ui/glass-card"
import { toast } from "sonner"

// Lazy load components that might be heavier or more prone to issues
const StatsGrid = lazy(() => import("@/components/dashboard/StatsGrid").then(m => ({ default: m.StatsGrid })));
const RevenueChart = lazy(() => import("@/components/dashboard/RevenueChart").then(m => ({ default: m.RevenueChart })));
const AIChatPanel = lazy(() => import("@/components/dashboard/AIChatPanel").then(m => ({ default: m.AIChatPanel })));

const ComponentSkeleton = ({ height }: { height: string }) => (
  <div className={`w-full ${height} bg-muted/20 animate-pulse rounded-xl border border-border/50`} />
);

export const Dashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back, here is what is happening with BizPilot AI.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden sm:flex" onClick={() => toast.success("Report generated and downloading...")}>Download Report</Button>
          <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Ask BizPilot
          </Button>
        </div>
      </div>

      <Suspense fallback={<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map(i => <ComponentSkeleton key={i} height="h-32" />)}
      </div>}>
        <StatsGrid />
      </Suspense>

      <div className="grid gap-6 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <Suspense fallback={<ComponentSkeleton height="h-[400px]" />}>
            <RevenueChart />
          </Suspense>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <GlassCard className="h-full bg-primary/5 dark:bg-primary/10 border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-primary/20 rounded-lg">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">AI Insights</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-colors group cursor-pointer" onClick={() => toast.info("Analyzing mobile checkout flow...")}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-medium">Growth Opportunity</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Your conversion rate on mobile is 15% lower than desktop. Optimize the checkout flow.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-colors group cursor-pointer" onClick={() => toast.info("Opening customer retention tools...")}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Target className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium">Customer Retention</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  3 users are at high risk of churn based on activity patterns. View recommendations.
                </p>
              </div>
            </div>

            <div className="mt-8 relative group overflow-hidden rounded-xl border border-white/10 shadow-2xl h-40">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e647b5b0-de25-4114-9198-9e94a5a2e183/ai-assistant-avatar-52e79c5b-1772035684894.webp" 
                alt="AI Assistant"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white text-xs font-medium">Your dedicated AI growth partner</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
      
      <Suspense fallback={null}>
        <AIChatPanel />
      </Suspense>
    </div>
  )
}

export const ContentGenerator = () => {
  const [topic, setTopic] = useState("")
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState("")

  const handleGenerate = () => {
    if (!topic) return
    setLoading(true)
    setTimeout(() => {
      const result = "Here is some AI-generated content about " + topic + ". In the ever-evolving landscape of modern business, leveraging AI is no longer a luxury but a necessity. BizPilot AI simplifies this transition by providing actionable insights and automated content generation."
      setContent(result)
      setLoading(false)
      toast.success("Content generated successfully!")
    }, 1500)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Content Generator</h1>
          <p className="text-muted-foreground mt-1">Generate high-quality blog posts, social media captions, and more.</p>
        </div>
      </div>

      <GlassCard>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Topic or Keywords</label>
            <Input 
              placeholder="e.g., The future of SaaS in 2024" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          <Button 
            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:opacity-90"
            disabled={loading || !topic}
            onClick={handleGenerate}
          >
            {loading ? "Generating..." : "Generate Content"}
          </Button>
        </div>
      </GlassCard>

      {content && (
        <GlassCard className="animate-in fade-in duration-1000">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Generated Content
            </h3>
            <Button variant="ghost" size="sm" onClick={() => { navigator.clipboard.writeText(content); toast.success("Copied to clipboard!"); }}>
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
          </div>
          <div className="prose prose-sm dark:prose-invert max-w-none bg-muted/30 p-4 rounded-lg border text-sm leading-relaxed">
            {content}
          </div>
        </GlassCard>
      )}
    </div>
  )
}

export const CustomerReply = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Customer Reply</h1>
        <p className="text-muted-foreground mt-1">Quickly draft professional responses to customer inquiries.</p>
      </div>
      <GlassCard>
        <p className="text-muted-foreground italic">Coming soon: Smart integration with your support tickets.</p>
      </GlassCard>
    </div>
  )
}

const DashboardPages = () => <Dashboard />
export default DashboardPages